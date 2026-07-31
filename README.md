# 预设控制台 (ST-Preset-Console)

SillyTavern 扩展。把预设里的开关做成可视化面板：预设自带一份 manifest 声明有哪些变量，扩展据此渲染分组标签页与控件，点一下即改写 ST 全局变量；预设的提示词再用 `{{if}}` 按变量决定注入哪些块。

扩展不内置任何预设，只读预设自带的 manifest。

## 功能

- **分组标签页**：manifest 的每个 group 一个标签页，末尾固定一个「通用」页显示当前预设与版本
- **四种控件**：单选按钮组、开关、单行输入、长文本弹窗编辑
- **条件联动**：选项之间可互相隐藏或强制锁定关闭
- **默认值回填**：全局变量缺失时按 manifest 的 `default` 自动写入
- **合法性校验**：读到的值不在 `options` 内（或 toggle 不是 `true`/`false`）时回落默认值
- **跟随预设切换**：监听 `PRESET_CHANGED` 自动重载，切到无 manifest 的预设显示空态

## 安装

### 通过 ST 扩展管理器（推荐）

1. SillyTavern → 扩展 → 安装扩展
2. 填入仓库地址：
   ```
   https://github.com/vvb7456/ST-Preset-Console
   ```
3. 安装后按提示刷新页面

### 手动安装

```bash
cd SillyTavern/data/default-user/extensions
git clone https://github.com/vvb7456/ST-Preset-Console.git
```

刷新 SillyTavern 即可。面板出现在「扩展」抽屉里的「预设控制台」。

## 预设适配

三步：写 manifest → 在提示词里用变量 → 切换预设生效。

### 1. 在预设 JSON 里加 manifest

放在顶层 `extensions["ST-Preset-Console"].manifest`。`extensions` 是 ST 预设的原生字段，ST 保存预设时不会丢。

```json
{
    "extensions": {
        "ST-Preset-Console": {
            "manifest": {
                "groups": [
                    {
                        "title": "叙事文风",
                        "icon": "fa-solid fa-clapperboard",
                        "defs": [
                            {
                                "name": "y_writing_style",
                                "label": "写作风格",
                                "subtitle": "选择整体写作风格",
                                "default": "none",
                                "options": ["none", "prose", "camera"],
                                "optionLabels": { "none": "无", "prose": "散文", "camera": "运镜" }
                            },
                            {
                                "name": "y_memory",
                                "label": "记忆强化",
                                "subtitle": "回顾并融入历史剧情",
                                "type": "toggle",
                                "default": "false"
                            }
                        ]
                    }
                ]
            }
        }
    },
    "prompts": []
}
```

也兼容旧版的顶层 `variable_manifest` 字段，新预设请用 `extensions`。

### 2. 在提示词里用变量

面板写的是 **ST 全局变量**，变量名就是 `def.name`。用 ST 内置的变量简写读取和比较，不需要任何自定义宏。

条件注入：

```
{{if {{$y_memory == true}}}}
这段只在「记忆强化」打开时注入。
{{/if}}
```

分支：

```
{{if {{$y_summary == detailed}}}}详细提要{{else}}简短提要{{/if}}
```

取值（`||` 提供缺省）：

```
将回复长度控制在 {{$y_word_count_custom || 2000字}} 左右。
```

**`==` 必须写在内层花括号里。** 这是最容易踩的坑：

| 写法 | 结果 |
|---|---|
| `{{if {{$var == full}}}}` | ✅ 内层先求值成 `true`/`false`，再交给 `if` |
| `{{if {{$var}} == full}}` | ❌ `if` 拿到字符串 `compact == full`，非空即真 |
| `{{if $var == full}}` | ❌ 同上 |

`{{if}}` 只做字符串真假判断（空串、`false`、`off`、`0` 为假），不解析表达式。

同理**不要为比较另写自定义宏**。宏一旦没注册成功，ST 宏引擎会原样返回 `{{宏名::...}}` 且**不产生任何日志**，`{{if}}` 拿到的条件非空即真——所有开关块会静默全开，而且因为条件文本被 `if` 消费掉、不进输出，提示词里查不到任何残留痕迹。

### 3. 让改动生效

改完预设文件（`data/<user>/OpenAI Settings/*.json`）必须在 ST 里**切走再切回该预设**。刷新页面、重启进程都没用：当前生效的提示词与 manifest 存在 `settings.json` 的 `oai_settings` 里，只有切换预设才会从预设文件重新载入。

## manifest 字段

### group

| 字段 | 类型 | 说明 |
|---|---|---|
| `title` | string | 标签页名称 |
| `icon` | string | Font Awesome 类名，如 `fa-solid fa-sliders` |
| `defs` | VarDef[] | 变量定义 |

### def

| 字段 | 类型 | 说明 |
|---|---|---|
| `name` | string | 变量名，即 ST 全局变量名 |
| `label` | string | 行标题 |
| `default` | string | 默认值，变量缺失时自动写入 |
| `subtitle` | string | 标题下方小字 |
| `help` | string | 悬停提示；`text` 类型下同时作为输入框 placeholder |
| `options` | string[] | 给出即渲染为单选按钮组，此时忽略 `type` |
| `optionLabels` | Record<string, string> | 选项值 → 显示名，缺省直接显示值 |
| `type` | `toggle` \| `text` \| `textarea` | 无 `options` 时的控件类型，缺省 `text` |
| `vif` | VarIf \| VarIf[] | 条件联动，见下 |

所有值都是**字符串**。`toggle` 存 `'true'` / `'false'`；`textarea` 点按钮弹窗编辑；`text` 行尾带重置按钮。

### vif

单个条件对象，或数组（数组即 AND）。

| 字段 | 说明 |
|---|---|
| `var` | 依赖的变量名 |
| `equals` | 该变量等于此值时条件成立 |
| `not` | 该变量不等于此值时条件成立 |
| `mode` | `'flip'` 或缺省 |

两种模式：

- **缺省（从属子选项）**：条件不成立时整行**隐藏**，值回落 `default`，并删除该全局变量
- **`flip`（互斥开关）**：条件不成立时行仍显示但控件**锁定禁用**，值强制 `'false'`，并删除该全局变量

两种情况都会删除全局变量，所以提示词里 `{{$var == true}}` 得到 `false`，对应的块自然不注入。

```json
{
    "name": "y_writing_style_custom", "label": "自定义文风",
    "type": "textarea", "default": "",
    "vif": { "var": "y_writing_style", "equals": "custom" }
}
```

写作风格不是「自定义」时这一行不显示。

```json
{
    "name": "y_jailbreak_claude", "label": "格式化攻击",
    "type": "toggle", "default": "true",
    "vif": [
        { "var": "y_jailbreak", "equals": "true" },
        { "var": "y_skip_thinking", "not": "true", "mode": "flip" }
    ]
}
```

「强力越狱」关闭时隐藏；「跳过内置思维」打开时行仍在，但被锁死为关。

## 数据与存储

| 数据 | 位置 | 作用域 |
|---|---|---|
| manifest | 预设 JSON 的 `extensions["ST-Preset-Console"].manifest` | 随预设走 |
| 变量值 | ST 全局变量 `extension_settings.variables.global` | 全局，不随预设或聊天切换 |

扩展不写自己的设置项，卸载后不留残留配置。

## 开发

```bash
npm ci
npm run dev        # vite build --watch
npm run build      # 产出 dist/
npm run typecheck  # vue-tsc --noEmit
```

`manifest.json` 的 `version` 由 `package.json` 通过 `prebuild` 脚本自动同步，改版本只改 `package.json`。

`dist/` 随仓库提交，安装后无需构建。改完源码需重新 `npm run build` 并**硬刷新**页面（扩展 JS 在页面加载时一次性引入，重建不会热更新）。

## 许可证

[AGPLv3](./LICENSE)

## 仓库

[github.com/vvb7456/ST-Preset-Console](https://github.com/vvb7456/ST-Preset-Console)

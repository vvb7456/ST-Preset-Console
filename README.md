# 预设控制台 (ST-Preset-Console)

SillyTavern 扩展。把预设里的开关做成可视化面板：预设自带一份 manifest 声明有哪些变量，扩展据此渲染控件；点一下改写 ST 全局变量，预设的提示词再按变量决定注入哪些内容。

扩展不内置预设，只读预设自带的 manifest。

## 功能

- 按 manifest 分组渲染标签页，末尾固定一个「通用」页显示当前预设与版本
- 四种控件：单选按钮组、开关、单行输入、长文本弹窗编辑
- 条件联动：选项之间可互相隐藏或锁定
- 变量缺失时自动写入默认值，读到非法值时回落默认值
- 跟随预设切换自动重载；预设没有 manifest 时显示空态

## 安装

### 通过 ST 扩展管理器（推荐）

SillyTavern → 扩展 → 安装扩展，填入：

```
https://github.com/vvb7456/ST-Preset-Console
```

安装后按提示刷新页面。

### 手动安装

```bash
cd SillyTavern/data/default-user/extensions
git clone https://github.com/vvb7456/ST-Preset-Console.git
```

刷新页面。面板在「扩展」抽屉里的「预设控制台」。

## 预设适配

### 1. 加 manifest

放在预设 JSON 顶层的 `extensions["ST-Preset-Console"].manifest`：

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

`extensions` 是 ST 预设的原生字段，保存预设时会一并留存。旧版的顶层 `variable_manifest` 仍兼容。

### 2. 在提示词里用变量

面板写的是 ST 全局变量，变量名就是 `def.name`。

按开关注入：

```
{{if {{$y_memory == true}}}}
这段只在「记忆强化」打开时注入。
{{/if}}
```

分支：

```
{{if {{$y_summary == detailed}}}}详细提要{{else}}简短提要{{/if}}
```

取值，`||` 后面是缺省值：

```
将回复长度控制在 {{$y_word_count_custom || 2000字}} 左右。
```

比较写在**内层**花括号里，先求值成 `true` / `false`，再交给外层 `{{if}}`。

### 3. 生效

改完预设文件后，在 ST 里切走再切回该预设。

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
| `default` | string | 默认值 |
| `subtitle` | string | 标题下方小字 |
| `help` | string | 悬停提示；`text` 类型下同时作为输入框占位符 |
| `options` | string[] | 给出即渲染为单选按钮组，此时忽略 `type` |
| `optionLabels` | Record<string, string> | 选项值 → 显示名，缺省直接显示值 |
| `type` | `toggle` \| `text` \| `textarea` | 无 `options` 时的控件类型，缺省 `text` |
| `vif` | VarIf \| VarIf[] | 条件联动 |

所有值都是字符串，`toggle` 存 `'true'` / `'false'`。

### vif

单个条件对象，或数组（数组即 AND）。

| 字段 | 说明 |
|---|---|
| `var` | 依赖的变量名 |
| `equals` | 该变量等于此值时条件成立 |
| `not` | 该变量不等于此值时条件成立 |
| `mode` | `flip` 或缺省 |

缺省是从属子选项，条件不成立时整行隐藏；`flip` 是互斥开关，条件不成立时行仍在但锁定为关。两种情况下该变量都会被清空，提示词里的对应块不会注入。

```json
{
    "name": "y_writing_style_custom", "label": "自定义文风",
    "type": "textarea", "default": "",
    "vif": { "var": "y_writing_style", "equals": "custom" }
}
```

写作风格选到「自定义」时，这一行才出现。

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

「强力越狱」打开时这一行才出现；「跳过内置思维」打开时它被锁定为关。

## 数据与存储

| 数据 | 位置 | 作用域 |
|---|---|---|
| manifest | 预设 JSON 的 `extensions["ST-Preset-Console"]` | 随预设走 |
| 变量值 | ST 全局变量 | 全局，不随预设或聊天切换 |

扩展不写自己的设置项，卸载后不留残留配置。

## 开发

```bash
npm ci
npm run dev        # vite build --watch
npm run build      # 产出 dist/
npm run typecheck  # vue-tsc --noEmit
```

`manifest.json` 的 `version` 由 `package.json` 通过 `prebuild` 自动同步，改版本只改 `package.json`。`dist/` 随仓库提交，安装后无需构建；改完源码重新 `npm run build` 并硬刷新页面。

## 许可证

[AGPLv3](./LICENSE)

## 仓库

[github.com/vvb7456/ST-Preset-Console](https://github.com/vvb7456/ST-Preset-Console)

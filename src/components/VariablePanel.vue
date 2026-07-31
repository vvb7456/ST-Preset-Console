<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useVariableStore } from '@/stores/variables';
import { fetchPresetAsset, fetchPresetList, type PresetEntry, type VarDef, type VarManifest } from '@/manifest';
import { logger } from '@/utils/logger';
import ToggleSwitch from './ToggleSwitch.vue';

const variableStore = useVariableStore();

const GENERAL_TAB = { id: '通用', label: '通用', icon: 'fa-solid fa-sliders' };
const EXT_VERSION = __APP_VERSION__;

const activeTab = ref<string>('');
const presets = ref<PresetEntry[]>([]);
const importing = ref<string | null>(null);

const tabs = ref<{ id: string; label: string; icon: string }[]>([]);

watch(
    () => variableStore.manifest,
    (manifest) => {
        const groupTabs = manifest && manifest.groups.length > 0
            ? manifest.groups.map(group => ({
                id: group.title,
                label: group.title,
                icon: group.icon,
            }))
            : [];
        tabs.value = [...groupTabs, GENERAL_TAB];
        if (!tabs.value.some(tab => tab.id === activeTab.value)) {
            activeTab.value = groupTabs.length > 0 ? groupTabs[0].id : GENERAL_TAB.id;
        }
    },
    { immediate: true },
);

function onRefresh(): void {
    variableStore.refresh();
}

function onTextChange(def: VarDef, event: Event): void {
    const target = event.target as HTMLInputElement;
    variableStore.set(def.name, target.value);
}

function onChipClick(def: VarDef, value: string): void {
    variableStore.set(def.name, value);
}

function onToggle(def: VarDef, enabled: boolean): void {
    variableStore.set(def.name, enabled ? '开' : '关');
}

function onReset(def: VarDef): void {
    variableStore.reset(def.name);
    if (typeof toastr !== 'undefined') {
        toastr.info(`${def.label} 已重置`, '预设控制台');
    }
}

async function onImportPreset(entry: PresetEntry): Promise<void> {
    if (importing.value) return;
    importing.value = entry.name;
    try {
        const preset = await fetchPresetAsset(entry);
        if (!preset) throw new Error('预设资源加载失败');

        await new Promise<void>((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: '/api/presets/save',
                data: JSON.stringify({ name: entry.name, preset, apiId: 'openai' }),
                contentType: 'application/json',
                success: () => resolve(),
                error: (xhr: { status: number }) => reject(new Error(`HTTP ${xhr.status}`)),
            });
        });

        const manifest = preset.variable_manifest as VarManifest | undefined;
        if (manifest && Array.isArray(manifest.groups)) {
            variableStore.cacheManifest(manifest, entry.name);
        }

        if (typeof toastr !== 'undefined') {
            toastr.success(`预设 ${entry.name} 已写入磁盘，即将刷新页面加载`, '预设控制台');
        }
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    } catch (err) {
        if (typeof toastr !== 'undefined') {
            toastr.error(`导入失败：${err instanceof Error ? err.message : String(err)}`, '预设控制台');
        }
    } finally {
        importing.value = null;
    }
}

onMounted(() => {
    variableStore.init();
    fetchPresetList().then(list => {
        presets.value = list;
    });
    const ctx = (() => {
        try {
            return SillyTavern.getContext();
        } catch {
            return null;
        }
    })();
    ctx?.eventSource.on(ctx.event_types.APP_READY, variableStore.init);
    logger.info('panel mounted');
});

onBeforeUnmount(() => {
    const ctx = (() => {
        try {
            return SillyTavern.getContext();
        } catch {
            return null;
        }
    })();
    ctx?.eventSource.removeListener(ctx.event_types.APP_READY, variableStore.init);
});
</script>

<template>
    <div class="stmp-settings">
        <div class="stmp-tab-bar">
            <div
                v-for="tab in tabs"
                :key="tab.id"
                class="stmp-tab"
                :class="{ active: activeTab === tab.id }"
                @click="activeTab = tab.id"
            >
                <i :class="tab.icon" />
                <span>{{ tab.label }}</span>
            </div>
        </div>

        <div class="stmp-tab-content">
            <div
                v-for="group in variableStore.manifest?.groups"
                :key="group.title"
                v-show="activeTab === group.title"
                class="stmp-tab-panel"
            >
                <div v-if="variableStore.manifest?.groups[0] && group.title === variableStore.manifest.groups[0].title" class="stmp-row">
                    <div class="stmp-row-info">
                        <div class="stmp-row-title">变量状态</div>
                    </div>
                    <div class="menu_button menu_button_icon stmp-action-btn" title="刷新" @click="onRefresh">
                        <i class="fa-solid fa-rotate" />
                    </div>
                </div>

                <div v-for="def in group.defs" :key="def.name" class="stmp-row">
                    <div class="stmp-row-info">
                        <div class="stmp-row-title">
                            {{ def.label }}
                            <i
                                v-if="def.help"
                                class="fa-solid fa-circle-info stmp-help-tip"
                                :title="def.help"
                            />
                        </div>
                    </div>

                    <template v-if="def.options">
                        <div class="stmp-chips">
                            <div
                                v-for="option in def.options"
                                :key="option"
                                class="stmp-chip"
                                :class="{ active: variableStore.values[def.name] === option }"
                                @click="onChipClick(def, option)"
                            >
                                <span>{{ option }}</span>
                            </div>
                        </div>
                    </template>

                    <template v-else-if="def.type === 'toggle'">
                        <ToggleSwitch
                            :model-value="variableStore.values[def.name] === '开'"
                            @update:model-value="onToggle(def, $event)"
                        />
                    </template>

                    <template v-else>
                        <div class="stmp-model-wrap">
                            <input
                                v-if="def.type === 'text'"
                                class="text_pole stmp-text-input"
                                :value="variableStore.values[def.name]"
                                :placeholder="def.help || ''"
                                @change="onTextChange(def, $event)"
                            />
                            <textarea
                                v-else
                                class="text_pole stmp-text-input vp-textarea"
                                :value="variableStore.values[def.name]"
                                :placeholder="def.help || ''"
                                @change="onTextChange(def, $event)"
                            />
                            <div
                                class="menu_button menu_button_icon stmp-action-btn"
                                title="重置"
                                @click="onReset(def)"
                            >
                                <i class="fa-solid fa-rotate-left" />
                            </div>
                        </div>
                    </template>
                </div>
            </div>

            <div v-show="activeTab === GENERAL_TAB.id" class="stmp-tab-panel">
                <div v-if="!variableStore.hasManifest" class="stmp-row">
                    <div class="stmp-row-info">
                        <div class="stmp-row-title">未检测到变量面板</div>
                        <div class="stmp-row-desc">当前预设未声明 variable_manifest，请先导入支持的预设</div>
                    </div>
                </div>

                <div class="stmp-section-header">
                    <div class="stmp-section-title">
                        <i class="fa-solid fa-file-import" />
                        <span>预设导入</span>
                    </div>
                </div>

                <div v-for="preset in presets" :key="preset.name" class="stmp-row">
                    <div class="stmp-row-info">
                        <div class="stmp-row-title">{{ preset.name }}</div>
                    </div>
                    <div
                        class="menu_button menu_button_icon stmp-action-btn"
                        :class="{ 'stmp-spin': importing === preset.name }"
                        title="导入"
                        @click="onImportPreset(preset)"
                    >
                        <i class="fa-solid fa-file-import" />
                    </div>
                </div>

                <div class="stmp-separator" />

                <div class="stmp-about">
                    <div class="stmp-about-icon"><i class="fa-solid fa-sliders" /></div>
                    <div class="stmp-about-name">预设控制台</div>
                    <div class="stmp-about-version">Version {{ EXT_VERSION }}</div>
                    <div class="stmp-about-desc">SillyTavern 预设变量控制面板</div>
                    <a href="https://github.com/vvb7456/ST-Preset-Console" target="_blank" rel="noopener" class="stmp-about-link">
                        <i class="fa-brands fa-github" />
                        <span>GitHub</span>
                    </a>
                    <div class="stmp-about-copyright"><a href="https://www.erocraft.com" target="_blank" rel="noopener">艾萝工坊</a> © 2015 - 2026</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.stmp-settings {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 5px 0;
}

.stmp-tab-bar {
    display: flex;
    gap: 2px;
    border: 1px solid var(--SmartThemeBorderColor, rgba(0, 0, 0, 0.5));
    border-radius: 7px;
    padding: 2px;
    overflow-x: auto;
}

.stmp-tab {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 4px 6px;
    cursor: pointer;
    border-radius: 5px;
    font-size: var(--mainFontSize, 14px);
    color: var(--SmartThemeEmColor, rgb(145, 145, 145));
    white-space: nowrap;
    transition: all var(--animation-duration, 0.2s);
}

.stmp-tab:hover {
    filter: brightness(150%);
}

.stmp-tab.active {
    color: var(--SmartThemeBodyColor, #ccc);
    background: color-mix(in srgb, var(--SmartThemeQuoteColor, rgb(225, 138, 36)) 20%, transparent);
}

.stmp-tab i {
    font-size: calc(var(--mainFontSize, 14px) * 0.9);
}

.stmp-tab-content {
    min-height: 60px;
}

.stmp-tab-panel {
    display: flex;
    flex-direction: column;
    padding: 4px 2px;
}

.stmp-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 8px 0;
    border-bottom: 1px solid color-mix(in srgb, var(--SmartThemeBorderColor, rgba(0, 0, 0, 0.3)) 50%, transparent);
}

.stmp-row:last-child {
    border-bottom: none;
}

.stmp-row-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    flex: 1;
}

.stmp-row-title {
    font-size: var(--mainFontSize, 14px);
    font-weight: bold;
    color: var(--SmartThemeBodyColor, #ccc);
}

.stmp-row-desc {
    font-size: calc(var(--mainFontSize, 14px) * 0.85);
    color: var(--SmartThemeEmColor, rgb(145, 145, 145));
    line-height: 1.3;
}

.stmp-chips {
    display: inline-flex;
    flex-shrink: 0;
    flex-wrap: nowrap;
    gap: 0;
}

.stmp-chip {
    padding: 3px 7px;
    border: 1px solid var(--SmartThemeBorderColor, rgba(0, 0, 0, 0.5));
    border-radius: 0;
    margin-left: -1px;
    cursor: pointer;
    font-size: calc(var(--mainFontSize, 14px) * 0.85);
    color: var(--SmartThemeEmColor, rgb(145, 145, 145));
    display: flex;
    align-items: center;
    gap: 3px;
    white-space: nowrap;
    transition: all var(--animation-duration, 0.2s);
}

.stmp-chip:first-child {
    border-radius: 5px 0 0 5px;
    margin-left: 0;
}

.stmp-chip:last-child {
    border-radius: 0 5px 5px 0;
}

.stmp-chip:only-child {
    border-radius: 5px;
}

.stmp-chip:hover {
    filter: brightness(130%);
}

.stmp-chip.active {
    background: color-mix(in srgb, var(--SmartThemeQuoteColor, rgb(225, 138, 36)) 80%, transparent);
    color: var(--SmartThemeBodyColor, #ccc);
    border-color: var(--SmartThemeQuoteColor, rgb(225, 138, 36));
    z-index: 1;
}

.stmp-chip i {
    font-size: calc(var(--mainFontSize, 14px) * 0.8);
}

.stmp-slider-wrap {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
}

.stmp-slider {
    -webkit-appearance: none;
    appearance: none;
    width: 90px;
    height: 4px;
    border-radius: 7px;
    background: color-mix(in srgb, var(--SmartThemeBodyColor, #ccc) 30%, transparent);
    outline: none;
    margin: 0;
}

.stmp-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--SmartThemeQuoteColor, rgb(225, 138, 36));
    border: 2px solid var(--SmartThemeBodyColor, #ccc);
    cursor: pointer;
}

.stmp-slider::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--SmartThemeQuoteColor, rgb(225, 138, 36));
    border: none;
    cursor: pointer;
}

.stmp-slider-val {
    font-size: calc(var(--mainFontSize, 14px) * 0.9);
    color: var(--SmartThemeBodyColor, #ccc);
    min-width: 28px;
    text-align: right;
}

.stmp-separator {
    height: 1px;
    background: var(--stmp-border);
    margin: 8px 0;
}

.stmp-section-header {
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding: 8px 0 4px;
}

.stmp-section-title {
    font-size: calc(var(--mainFontSize, 14px) * 0.8);
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--SmartThemeQuoteColor, rgb(225, 138, 36));
    display: flex;
    align-items: center;
    gap: 6px;
}

.stmp-section-sub {
    font-size: calc(var(--mainFontSize, 14px) * 0.75);
    color: var(--SmartThemeEmColor, rgb(145, 145, 145));
    line-height: 1.3;
}

.stmp-action-btn {
    margin: 0 !important;
    padding: 4px 8px !important;
    flex-shrink: 0;
}

.stmp-text-input {
    flex: 0 0 240px;
    max-width: 240px;
    font-size: var(--mainFontSize, 14px);
}

.vp-textarea {
    min-height: 48px;
    resize: vertical;
}

.stmp-verify-ok {
    color: #4caf50 !important;
}

.stmp-verify-ok i {
    color: #4caf50;
}

.stmp-verify-warn {
    color: #ff9800 !important;
}

.stmp-verify-warn i {
    color: #ff9800;
}

.stmp-help-tip {
    font-size: calc(var(--mainFontSize, 14px) * 0.75);
    opacity: 0.5;
    cursor: help;
    margin-left: 4px;
    transition: opacity 0.2s;
}

.stmp-help-tip:hover {
    opacity: 1;
}

.stmp-model-wrap {
    display: flex;
    align-items: center;
    gap: 5px;
    flex: 0 0 240px;
    max-width: 240px;
}

.stmp-spin {
    pointer-events: none;
    opacity: 0.6;
}

.stmp-spin i {
    animation: stmp-spin 0.8s linear infinite;
}

@keyframes stmp-spin {
    to {
        transform: rotate(360deg);
    }
}

.stmp-about {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    padding: 20px 0 4px;
    text-align: center;
}

.stmp-about-icon {
    font-size: calc(var(--mainFontSize, 14px) * 2);
    color: var(--SmartThemeQuoteColor, rgb(225, 138, 36));
    margin-bottom: 4px;
}

.stmp-about-name {
    font-size: calc(var(--mainFontSize, 14px) * 1.1);
    font-weight: bold;
    color: var(--SmartThemeBodyColor, #ccc);
}

.stmp-about-version {
    font-size: calc(var(--mainFontSize, 14px) * 0.9);
    color: var(--SmartThemeEmColor, rgb(145, 145, 145));
}

.stmp-about-desc {
    font-size: calc(var(--mainFontSize, 14px) * 0.9);
    color: var(--SmartThemeEmColor, rgb(145, 145, 145));
    margin-top: 4px;
    max-width: 240px;
    line-height: 1.4;
}

.stmp-about-link {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 8px;
    padding: 4px 10px;
    border: 1px solid var(--SmartThemeBorderColor, rgba(0, 0, 0, 0.5));
    border-radius: 5px;
    font-size: var(--mainFontSize, 14px);
    color: var(--SmartThemeBodyColor, #ccc);
    text-decoration: none;
    transition: all var(--animation-duration, 0.2s);
}

.stmp-about-link:hover {
    filter: brightness(150%);
    border-color: var(--SmartThemeQuoteColor, rgb(225, 138, 36));
}

.stmp-about-copyright {
    font-size: calc(var(--mainFontSize, 14px) * 0.8);
    color: var(--SmartThemeEmColor, rgb(145, 145, 145));
    margin-top: 6px;
}

.stmp-macro-hint {
    display: inline-block;
    padding: 1px 4px;
    margin: 1px;
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.3);
    color: var(--SmartThemeQuoteColor, rgb(225, 138, 36));
    font-size: 0.9em;
}
</style>

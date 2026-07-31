<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useVariableStore } from '@/stores/variables';
import type { VarDef } from '@/manifest';
import { logger } from '@/utils/logger';
import ToggleSwitch from './ToggleSwitch.vue';

const variableStore = useVariableStore();

const GENERAL_TAB = { id: '通用', label: '通用', icon: 'fa-solid fa-sliders' };
const EXT_VERSION = __APP_VERSION__;

const activeTab = ref<string>('');

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

function onTextChange(def: VarDef, event: Event): void {
    const target = event.target as HTMLInputElement;
    variableStore.set(def.name, target.value);
}

function onChipClick(def: VarDef, value: string): void {
    variableStore.set(def.name, value);
}

function onToggle(def: VarDef, enabled: boolean): void {
    variableStore.set(def.name, enabled ? 'true' : 'false');
}

function onReset(def: VarDef): void {
    variableStore.reset(def.name);
    if (typeof toastr !== 'undefined') {
        toastr.info(`${def.label} 已重置`, '预设控制台');
    }
}

function showDef(def: VarDef): boolean {
    if (!def.vif) return true;
    const list = Array.isArray(def.vif) ? def.vif : [def.vif];
    for (const cond of list) {
        if (cond.mode === 'flip') continue;
        const current = variableStore.values[cond.var] ?? '';
        if (cond.equals !== undefined && current !== cond.equals) return false;
        if (cond.not !== undefined && current === cond.not) return false;
    }
    return true;
}

function isFlipLocked(def: VarDef): boolean {
    if (!def.vif) return false;
    const list = Array.isArray(def.vif) ? def.vif : [def.vif];
    return list.some(cond => cond.mode === 'flip' && !vifCondMet(cond));
}

function vifCondMet(cond: { var: string; equals?: string; not?: string }): boolean {
    const current = variableStore.values[cond.var] ?? '';
    if (cond.equals !== undefined) return current === cond.equals;
    if (cond.not !== undefined) return current !== cond.not;
    return true;
}

async function onEditLong(def: VarDef): Promise<void> {
    const ctx = (() => {
        try {
            return SillyTavern.getContext();
        } catch {
            return null;
        }
    })();
    if (!ctx) return;

    const current = variableStore.values[def.name] ?? def.default;
    const desc = `<h3 style="margin:0 0 8px 0">${def.label}</h3>${def.help ? `<div style="margin-bottom:8px;font-size:0.85em;opacity:0.8">${def.help}</div>` : ''}`;
    const result = await ctx.callPopup(desc, 'input', current, { wide: true, rows: 20, okButton: '保存' });
    if (result !== false && typeof result === 'string') {
        variableStore.set(def.name, result.trim());
        if (typeof toastr !== 'undefined') {
            toastr.success(`${def.label} 已保存`, '预设控制台');
        }
    }
}

onMounted(() => {
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
        <div v-if="variableStore.hasManifest" class="stmp-tab-bar">
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

        <div v-if="variableStore.hasManifest" class="stmp-tab-content">
            <div
                v-for="group in variableStore.manifest?.groups"
                :key="group.title"
                v-show="activeTab === group.title"
                class="stmp-tab-panel"
            >
                <template v-for="def in group.defs" :key="def.name">
                <div v-if="showDef(def)" class="stmp-row">
                    <div class="stmp-row-info">
                        <div class="stmp-row-title">
                            {{ def.label }}
                            <i
                                v-if="def.help"
                                class="fa-solid fa-circle-info stmp-help-tip"
                                :title="def.help"
                            />
                        </div>
                        <div v-if="def.subtitle" class="stmp-row-subtitle">{{ def.subtitle }}</div>
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
                                <span>{{ def.optionLabels?.[option] ?? option }}</span>
                            </div>
                        </div>
                    </template>

                    <template v-else-if="def.type === 'toggle'">
                        <ToggleSwitch
                            :model-value="variableStore.values[def.name] === 'true'"
                            :disabled="isFlipLocked(def)"
                            @update:model-value="onToggle(def, $event)"
                        />
                    </template>

                    <template v-else-if="def.type === 'textarea'">
                        <div
                            class="menu_button menu_button_icon stmp-action-btn"
                            title="编辑"
                            @click="onEditLong(def)"
                        >
                            <i class="fa-solid fa-pen-to-square" />
                        </div>
                    </template>

                    <template v-else>
                        <div class="stmp-model-wrap">
                            <input
                                class="text_pole stmp-text-input"
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
                </template>
            </div>

            <div v-show="activeTab === GENERAL_TAB.id" class="stmp-tab-panel">
                <div class="stmp-row">
                    <div class="stmp-row-info">
                        <div class="stmp-row-title">当前预设</div>
                        <div class="stmp-row-desc">{{ variableStore.currentPresetName ?? '未选择' }}</div>
                    </div>
                    <i
                        v-if="variableStore.hasManifest"
                        class="fa-solid fa-circle-check stmp-preset-ok"
                        title="该预设已启用变量控制"
                    />
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

        <div v-else class="stmp-unsupported">
            <i class="fa-solid fa-circle-exclamation stmp-unsupported-icon" />
            <div class="stmp-unsupported-title">不支持的预设</div>
            <div class="stmp-unsupported-desc">当前预设未携带 manifest，无法显示变量面板。<br />请导入带有 ST-Preset-Console manifest 的预设，或切换到支持的预设。</div>
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

.stmp-row-subtitle {
    font-size: calc(var(--mainFontSize, 14px) * 0.82);
    color: var(--SmartThemeEmColor, rgb(145, 145, 145));
    opacity: 0.75;
    line-height: 1.3;
}

.stmp-preset-ok {
    flex-shrink: 0;
    color: var(--SmartThemeQuoteColor, #4caf50);
    opacity: 0.9;
}



.stmp-unsupported {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    min-height: 260px;
    padding: 24px 16px;
    box-sizing: border-box;
    width: 100%;
}

.stmp-unsupported-icon {
    font-size: 34px;
    color: var(--SmartThemeQuoteColor, #e18a24);
    opacity: 0.85;
}

.stmp-unsupported-title {
    font-size: calc(var(--mainFontSize, 14px) * 1.2);
    font-weight: bold;
    color: var(--SmartThemeBodyColor, #ccc);
}

.stmp-unsupported-desc {
    font-size: calc(var(--mainFontSize, 14px) * 0.85);
    color: var(--SmartThemeEmColor, rgb(145, 145, 145));
    line-height: 1.5;
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



.stmp-separator {
    height: 1px;
    background: var(--stmp-border);
    margin: 8px 0;
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


</style>

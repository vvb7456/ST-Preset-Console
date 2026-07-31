import { createApp } from 'vue';
import type { App } from 'vue';
import { createPinia } from 'pinia';
import VariablePanel from './components/VariablePanel.vue';
import { useVariableStore } from './stores/variables';
import { logger } from '@/utils/logger';

const DRAWER_HTML = `
<div class="inline-drawer">
    <div class="inline-drawer-toggle inline-drawer-header">
        <b data-i18n="预设控制台">预设控制台</b>
        <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
    </div>
    <div class="inline-drawer-content stmp-ext-settings-content">
        <div id="vp-mount"></div>
    </div>
</div>
`;

let app: App<Element> | null = null;
let drawer: HTMLElement | null = null;

// 预设调度器的开关判断走 ST 内置的变量简写比较：{{if {{$变量 == 值}}}} ... {{/if}}
// 不要为此注册自定义宏：{{if}} 遇到无法解析的宏会拿到宏原文当条件，
// 原文非空且不是 'false'，条件恒真 —— 扩展一旦没加载，所有开关块会静默全开。

function addDrawer(): boolean {
    const $container = $('#extensions_settings2');
    if (!$container || !$container.length) {
        logger.warn('extensions_settings2 not found');
        return false;
    }

    $container.append(DRAWER_HTML);
    drawer = $container.children('.inline-drawer').last()[0] ?? null;
    if (!drawer) return false;

    const mount = drawer.querySelector('#vp-mount');
    if (!mount) return false;

    const pinia = createPinia();
    app = createApp(VariablePanel);
    app.use(pinia);
    app.mount(mount);

    const variableStore = useVariableStore(pinia);
    variableStore.init();

    const ctx = SillyTavern.getContext();
    const onPresetChanged = () => {
        variableStore.reloadForPreset();
    };
    ctx.eventSource?.on(ctx.event_types?.PRESET_CHANGED, onPresetChanged);
    listenerCleanup = () => {
        ctx.eventSource?.off(ctx.event_types?.PRESET_CHANGED, onPresetChanged);
    };
    return true;
}

function removeDrawer(): void {
    listenerCleanup?.();
    listenerCleanup = null;
    if (app) {
        app.unmount();
        app = null;
    }
    drawer?.remove();
    drawer = null;
}

let listenerCleanup: (() => void) | null = null;

export function init(): void {
    try {
        if (addDrawer()) {
            logger.info('loaded');
        } else {
            logger.error('drawer mount failed');
        }
    } catch (err) {
        logger.error('init failed', err);
    }
}

export function destroy(): void {
    removeDrawer();
    logger.info('destroyed');
}

export function disable(): void {
    destroy();
}

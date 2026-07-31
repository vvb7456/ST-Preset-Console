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
    return true;
}

function removeDrawer(): void {
    if (app) {
        app.unmount();
        app = null;
    }
    drawer?.remove();
    drawer = null;
}

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

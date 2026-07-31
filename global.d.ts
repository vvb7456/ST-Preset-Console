export {};

declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare global {
    interface JQueryLike {
        length: number;
        [index: number]: HTMLElement;
        append(content: string): JQueryLike;
        children(selector?: string): JQueryLike;
        last(): JQueryLike;
        on(events: string, handler: (e: Event) => void): JQueryLike;
        [key: string]: any;
    }

    const $: ((selector: string, context?: Node) => JQueryLike) & {
        ajax(options: Record<string, unknown>): any;
    };

    const toastr: {
        success(message: string, title?: string): void;
        error(message: string, title?: string): void;
        warning(message: string, title?: string): void;
        info(message: string, title?: string): void;
    };

    const SillyTavern: {
        getContext(): any;
        libs: Record<string, any>;
    };

    const __APP_VERSION__: string;
}

import { defineStore } from 'pinia';
import type { VarManifest } from '@/manifest';

const SETTINGS_KEY = 'preset-console';

function getCtx(): any {
    try {
        return SillyTavern.getContext();
    } catch {
        return null;
    }
}

function readVar(name: string, fallback: string): string {
    const ctx = getCtx();
    if (!ctx) return fallback;
    const raw = ctx.variables.global.get(name);
    return raw === undefined || raw === null || raw === '' ? fallback : String(raw);
}

function writeVar(name: string, value: string): void {
    const ctx = getCtx();
    if (!ctx) return;
    ctx.variables.global.set(name, value);
}

function getCachedManifests(): Record<string, VarManifest> {
    const ctx = getCtx();
    if (!ctx) return {};
    const stored = ctx.extensionSettings[SETTINGS_KEY];
    return stored && typeof stored.manifests === 'object' ? stored.manifests : {};
}

export const useVariableStore = defineStore('vp-variables', {
    state: () => ({
        manifest: null as VarManifest | null,
        presetName: null as string | null,
        values: {} as Record<string, string>,
    }),

    getters: {
        hasManifest(state): boolean {
            return state.manifest !== null && state.manifest.groups.length > 0;
        },
    },

    actions: {
        readAll(): void {
            if (!this.manifest) return;
            const next: Record<string, string> = {};
            for (const group of this.manifest.groups) {
                for (const def of group.defs) {
                    next[def.name] = readVar(def.name, def.default);
                }
            }
            this.values = next;
        },

        activateManifest(manifest: VarManifest, presetName: string | null): void {
            this.manifest = manifest;
            this.presetName = presetName;
            this.readAll();
        },

        cacheManifest(manifest: VarManifest, presetName: string): void {
            const ctx = getCtx();
            if (!ctx) return;
            const stored = ctx.extensionSettings[SETTINGS_KEY] ?? {};
            stored.manifests = { ...(stored.manifests ?? {}), [presetName]: manifest };
            ctx.extensionSettings[SETTINGS_KEY] = stored;
            ctx.saveSettingsDebounced();
            this.activateManifest(manifest, presetName);
        },

        init(): void {
            const ctx = getCtx();
            if (!ctx) return;

            const currentSettings = ctx.chatCompletionSettings;
            const currentManifest: VarManifest | undefined = currentSettings?.variable_manifest;
            if (currentManifest && Array.isArray(currentManifest.groups)) {
                this.activateManifest(currentManifest, currentSettings.preset_settings_openai ?? null);
                return;
            }

            const cached = getCachedManifests();
            const names = Object.keys(cached);
            if (names.length > 0) {
                this.activateManifest(cached[names[0]], names[0]);
                return;
            }

            this.manifest = null;
            this.presetName = null;
            this.values = {};
        },

        set(name: string, value: string): void {
            this.values[name] = value;
            writeVar(name, value);
        },

        reset(name: string): void {
            if (!this.manifest) return;
            for (const group of this.manifest.groups) {
                const def = group.defs.find(d => d.name === name);
                if (def) {
                    this.set(name, def.default);
                    return;
                }
            }
        },

        refresh(): void {
            this.readAll();
        },
    },
});

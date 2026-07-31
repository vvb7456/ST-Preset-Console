import { defineStore } from 'pinia';
import type { VarIf, VarIfList, VarManifest } from '@/manifest';

function getVifList(vif?: VarIfList): VarIf[] {
    if (!vif) return [];
    return Array.isArray(vif) ? vif : [vif];
}

function vifCondSatisfied(cond: VarIf, values: Record<string, string>): boolean {
    const current = values[cond.var] ?? '';
    if (cond.equals !== undefined) return current === cond.equals;
    if (cond.not !== undefined) return current !== cond.not;
    return true;
}

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

function deleteVar(name: string): void {
    const ctx = getCtx();
    if (!ctx) return;
    try {
        if (typeof ctx.variables.global.del === 'function') {
            ctx.variables.global.del(name);
        } else {
            delete ctx.extensionSettings.variables.global[name];
        }
    } catch {
        /* noop */
    }
}

function isValidValue(def: { options?: string[]; type?: string }, value: string): boolean {
    if (def.type === 'toggle') return value === 'true' || value === 'false';
    if (Array.isArray(def.options)) return def.options.includes(value);
    return true;
}

export const useVariableStore = defineStore('vp-variables', {
    state: () => ({
        manifest: null as VarManifest | null,
        currentPresetName: null as string | null,
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
                    const raw = readVar(def.name, def.default);
                    next[def.name] = isValidValue(def, raw) ? raw : def.default;
                }
            }
            this.values = next;
            this.applyVif();
        },

        activateManifest(manifest: VarManifest): void {
            this.manifest = manifest;
            this.readAll();
        },

        async init(): Promise<void> {
            const ctx = getCtx();
            if (!ctx) return;
            await this.reloadForPreset();
        },

        async reloadForPreset(): Promise<void> {
            const ctx = getCtx();
            const current = ctx?.chatCompletionSettings;
            if (!current) {
                this.manifest = null;
                this.currentPresetName = null;
                this.values = {};
                return;
            }

            this.currentPresetName = current.preset_settings_openai ?? null;

            // 优先：预设 extensions 中的 manifest（原生字段，ST 原生保存不丢）
            const extManifest = current.extensions?.['ST-Preset-Console']?.manifest as VarManifest | undefined;
            if (extManifest && Array.isArray(extManifest.groups)) {
                this.activateManifest(extManifest);
                return;
            }

            // 兼容：旧版预设顶层 variable_manifest
            const legacy = current.variable_manifest as VarManifest | undefined;
            if (legacy && Array.isArray(legacy.groups)) {
                this.activateManifest(legacy);
                return;
            }

            this.manifest = null;
            this.values = {};
        },

        set(name: string, value: string): void {
            this.values[name] = value;
            this.applyVif();
            // applyVif 可能修正/删除该变量（vif 联动），以修正后的值为准写回
            if (this.values[name] === value) {
                writeVar(name, value);
            }
        },

        applyVif(): void {
            if (!this.manifest) return;
            // 多轮迭代直至稳定：容忍 vif 前向依赖（def B 依赖更靠后的 def A）
            for (let round = 0; round < 3; round++) {
                let changed = false;
                for (const group of this.manifest.groups) {
                    for (const def of group.defs) {
                        const list = getVifList(def.vif);
                        const flipBroken = list.some(cond => cond.mode === 'flip' && !vifCondSatisfied(cond, this.values));
                        const depBroken = list.some(cond => cond.mode !== 'flip' && !vifCondSatisfied(cond, this.values));

                        if (flipBroken) {
                            if (this.values[def.name] !== 'false') { this.values[def.name] = 'false'; changed = true; }
                            deleteVar(def.name);
                        } else if (depBroken) {
                            if (this.values[def.name] !== def.default) { this.values[def.name] = def.default; changed = true; }
                            deleteVar(def.name);
                        } else if (readVar(def.name, '') === '' && def.default !== '') {
                            if (this.values[def.name] !== def.default) { this.values[def.name] = def.default; changed = true; }
                            writeVar(def.name, def.default);
                        }
                    }
                }
                if (!changed) break;
            }
        },

        reset(name: string): void {
            const def = this.findDef(name);
            if (!def) return;
            this.set(name, def.default);
        },

        findDef(name: string): { default: string } | undefined {
            if (!this.manifest) return undefined;
            for (const group of this.manifest.groups) {
                const def = group.defs.find(d => d.name === name);
                if (def) return def;
            }
            return undefined;
        },
    },
});

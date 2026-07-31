export interface VarDef {
    name: string;
    label: string;
    help?: string;
    default: string;
    options?: string[];
    type?: 'text' | 'textarea' | 'toggle';
}

export interface VarGroup {
    title: string;
    icon: string;
    defs: VarDef[];
}

export interface VarManifest {
    groups: VarGroup[];
}

export interface PresetEntry {
    file: string;
    name: string;
}

const EXT_BASE = '/scripts/extensions/third-party/ST-Preset-Console';

export async function fetchPresetList(): Promise<PresetEntry[]> {
    try {
        const res = await fetch(`${EXT_BASE}/presets.json`);
        if (!res.ok) return [];
        const data = await res.json();
        return Array.isArray(data.presets) ? data.presets : [];
    } catch {
        return [];
    }
}

export async function fetchPresetAsset(entry: PresetEntry): Promise<Record<string, unknown> | null> {
    try {
        const res = await fetch(`${EXT_BASE}/${entry.file}`);
        if (!res.ok) return null;
        return await res.json();
    } catch {
        return null;
    }
}

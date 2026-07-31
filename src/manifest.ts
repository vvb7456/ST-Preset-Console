export interface VarIf {
    var: string;
    equals?: string;
    not?: string;
    /** 'flip' = 互斥开关（行常显，条件不满足时强制翻转）; 默认 = 从属子选项（条件不满足时隐藏） */
    mode?: 'flip';
}

/** 支持多条件（数组 = AND）；不同 mode 的条件可混用 */
export type VarIfList = VarIf | VarIf[];

export interface VarDef {
    name: string;
    label: string;
    subtitle?: string;
    help?: string;
    default: string;
    options?: string[];
    optionLabels?: Record<string, string>;
    type?: 'text' | 'textarea' | 'toggle';
    vif?: VarIfList;
}

export interface VarGroup {
    title: string;
    icon: string;
    defs: VarDef[];
}

export interface VarManifest {
    groups: VarGroup[];
}

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

let debugEnabled = false;

export function setDebugEnabled(enabled: boolean): void {
    debugEnabled = enabled;
}

function emit(level: LogLevel, msg: string, args: unknown[]): void {
    if (level === 'debug' && !debugEnabled) return;
    const prefix = '[预设控制台]';
    // eslint-disable-next-line no-console
    console[level](`${prefix} ${msg}`, ...args);
}

export const logger = {
    debug: (msg: string, ...args: unknown[]) => emit('debug', msg, args),
    info: (msg: string, ...args: unknown[]) => emit('info', msg, args),
    warn: (msg: string, ...args: unknown[]) => emit('warn', msg, args),
    error: (msg: string, ...args: unknown[]) => emit('error', msg, args),
};

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf-8'));

export default defineConfig({
    plugins: [vue()],
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env': JSON.stringify({ NODE_ENV: 'production' }),
        '__APP_VERSION__': JSON.stringify(pkg.version),
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
            fileName: () => 'index.js',
        },
        target: 'es2020',
        minify: 'esbuild',
        sourcemap: false,
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
});

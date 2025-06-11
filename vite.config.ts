// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'copyCodeSnippet',
            fileName: () => 'copy-code-snippet.umd.js',
            formats: ['umd'],
        },
        rollupOptions: {
            external: [],
        },
    },
});

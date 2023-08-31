import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import {VitePWA} from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [react(),
        VitePWA({
        // strategies: 'injectManifest',
        srcDir: 'src',
        filename: 'sw.js',
        devOptions: {
            enabled: true,
            type: 'module',
        }
    })
    ],
    server: {
        port: 3001,
    },
});

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import {VitePWA} from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [react(),
        VitePWA({
        srcDir: 'src',
        filename: 'sw.js',
    })
    ],
    server: {
        port: 3001,
    },
});

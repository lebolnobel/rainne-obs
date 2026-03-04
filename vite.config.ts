import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const pwaOpt: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate', // important
  workbox: {
    cleanupOutdatedCaches: true,
    skipWaiting: true,
    clientsClaim: true,
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(pwaOpt)],
  server: {
    port: 5002,
  },
});

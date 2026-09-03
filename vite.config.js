import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
  },
  server: {
    port: 8900,
    strictPort: false,
    host: true,
    allowedHosts: ['.sslip.io', '.nip.io', '.teslalab.tech', '.uminers.com', 'localhost']
  },
  preview: { port: 8900, strictPort: false },
  build: { outDir: 'dist', assetsInlineLimit: 2048 }
})

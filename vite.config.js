import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import vue from '@vitejs/plugin-vue'
import dsv from '@rollup/plugin-dsv'

export default defineConfig({
  plugins: [
    vue(),
    // dsv should skip empty lines
    dsv({ skipEmptyLines: true })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5180,   // 👈 set dev server port
    strictPort: true // optional: fail if port is taken instead of picking a new one
  }
})
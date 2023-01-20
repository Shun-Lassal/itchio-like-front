import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue(), WindiCSS()],
})

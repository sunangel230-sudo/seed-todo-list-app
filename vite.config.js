import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { cloudflare } from "@cloudflare/vite-plugin"

export default defineConfig({
  plugins: [vue(), cloudflare()],

  server: {
    port: 5173
  },

  base: process.env.GITHUB_ACTIONS ? '/seed-todo-list-app/' : '/'
})
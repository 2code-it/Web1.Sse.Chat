import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': {}
  },
  build: {
    lib: {
      entry: './index.html',
      name: 'web1-sse-chat-app',
      fileName: 'web1-sse-chat-app',
      formats: ['es']
    },
    outDir: './../Web1.Sse.ChatApi/wwwroot',
    sourcemap: true,
    target: 'esnext'
  }
})

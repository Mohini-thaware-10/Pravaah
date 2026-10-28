import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  root: '.',
  publicDir: './',
  server: {
    port: 5173,
    host: true,
    open: true
  },
  resolve: {
    alias: {
      '@': '.'
    }
  },
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        app: 'app.html'
      }
    },
    outDir: 'dist'
  }
})
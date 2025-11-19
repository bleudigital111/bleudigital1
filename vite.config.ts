// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/bleudigital/', // 👈 nombre EXACTO de tu repositorio en GitHub
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'), // para importar desde src con '@'
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build', // 👈 carpeta que gh-pages usará
  },
  server: {
    port: 3000,
    open: true, // abre el navegador automáticamente
  },
})

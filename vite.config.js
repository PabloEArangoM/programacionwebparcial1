import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// IMPORTANTE: cambia "nombre-del-repo" por el nombre real de tu repositorio en GitHub
export default defineConfig({
  base: '/nombre-del-repo/',
  plugins: [react()],
})

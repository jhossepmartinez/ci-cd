import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/ci-cd",
  plugins: [react()],
    server: {
        port: 5173,
        host: true,
        strictPort: true,
    },
    preview: {
        port: 4173,
        strictPort: true
    },
})

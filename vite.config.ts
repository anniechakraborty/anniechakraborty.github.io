import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Output to build/ (not Vite's default dist/) so the existing Netlify publish directory keeps working.
  build: { outDir: 'build' },
})

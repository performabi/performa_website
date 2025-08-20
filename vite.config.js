import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // This explicitly sets the base path to match your repository name,
  // which is required for GitHub Pages to find the assets correctly.
  base: '/performa_website/', 
  plugins: [react()],
})

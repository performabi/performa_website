import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Using an empty string for the base path ensures all asset links are relative.
  // This is the most reliable method for GitHub Pages.
  base: '', 
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // This base path MUST match your repository name
  base: '/performa_website/', 
  plugins: [react()],
})

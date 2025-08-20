import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // IMPORTANT: Replace 'YOUR_REPOSITORY_NAME' with the actual name of your GitHub repository
  base: '/https://github.com/performabi/performa_website/', 
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // This is the key change: using './' makes all paths relative to the index.html file.
  base: './', 
  plugins: [react()],
})

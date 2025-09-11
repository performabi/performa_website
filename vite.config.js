   import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    
    // https://vitejs.dev/config/
    export default defineConfig(({ command }) => {
      if (command === 'serve') {
        // This is the configuration for the dev server (npm run dev)
        return {
          plugins: [react()],
        }
      } else {
        // This is the configuration for the production build (npm run build)
        return {
          plugins: [react()],
          base: '/performa_website/',
        }
      }
    })
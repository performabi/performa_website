    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      // This setting is NOT conditional. It will be applied every time,
      // which is what the GitHub Actions build needs.
      base: '/performa_website/',
    })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import staticBase from 'vite-plugin-static-base';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: ''
  // base: '/final-portfolio/'
})

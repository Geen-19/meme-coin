import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/meme-coin/', // Add this line for GitHub Pages
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'] // Add this to handle different file extensions
  }
})
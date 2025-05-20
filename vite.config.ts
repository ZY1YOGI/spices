import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about-us.html'),
        contact: resolve(__dirname, 'src/contact-us.html'),
      },
    }
  },
  plugins: [
    tailwindcss(),
  ]
})
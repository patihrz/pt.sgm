import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path" // <--- Tambahkan import ini

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { // <--- Tambahkan object resolve ini
    alias: {
      "@": path.resolve(__dirname, "./src"), // Mapping alias "@" ke folder src
    },
  },
})
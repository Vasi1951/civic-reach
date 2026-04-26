import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {}
    }
  },
  resolve: {
    alias: {
      '@babel/runtime/helpers/esm/extends': '@babel/runtime/helpers/extends'
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  }
})

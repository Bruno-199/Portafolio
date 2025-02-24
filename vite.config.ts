import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [
    react(),
    imagetools()
  ],
  base: '/',
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: false
  },
  css: {
    modules: {
      scopeBehaviour: 'local'
    },
    devSourcemap: false
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['lucide-react']
  }
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // Other Vite configuration options...
  build: {
    rollupOptions: {
      external: ['react-animated-cursor', 'framer-motion', 'react-intersection-observer']
    }
  }
});
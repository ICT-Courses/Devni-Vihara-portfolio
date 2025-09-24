
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // The 'base' option is crucial for GitHub Pages deployment.
  // It should be the same as your repository name.
  base: '/Devni-Vihara-portfolio/',
  plugins: [react()],
});
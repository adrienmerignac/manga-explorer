import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  root: '.', // Définit la racine du projet
  server: {
    port: 4300, // Assure-toi que le port est bien défini
    open: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});

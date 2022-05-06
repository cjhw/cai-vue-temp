import * as Path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteJsx({})],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': Path.join(__dirname, 'src'),
    },
  },
});

import deno from '@deno/vite-plugin';
import { defineConfig } from 'vite';
import vitePluginString from 'vite-plugin-string';

// https://vite.dev/config/
export default defineConfig({
  plugins: [deno(), vitePluginString()],
});

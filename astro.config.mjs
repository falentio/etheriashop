// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        ...(import.meta.env.PROD ? { "react-dom/server": "react-dom/server.edge" } : {}),
      }
    }
  },

  output: "server",
  adapter: cloudflare({
    imageService: "passthrough"
  }),
  integrations: [react()]
});
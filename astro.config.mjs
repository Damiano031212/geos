import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// TODO(geos): `site` (dominio) e adapter (Vercel o Cloudflare Pages) non sono ancora decisi.
export default defineConfig({
  output: 'static',
  // Solo per `astro dev` e `astro preview`: permette di aprirli da host esterni (es. tunnel ngrok).
  // Non influisce sul sito pubblicato.
  server: { allowedHosts: true },
  vite: {
    plugins: [tailwindcss()],
  },
});

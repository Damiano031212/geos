import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://Damiano031212.github.io',
  // GitHub Pages serves this project from /geos; local development stays at /.
  base: isGitHubActions ? '/geos' : '/',
  output: 'static',
  // Solo per `astro dev` e `astro preview`: permette di aprirli da host esterni (es. tunnel ngrok).
  server: { allowedHosts: true },
  vite: {
    plugins: [tailwindcss()],
  },
});

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://ramareid.github.io/portfolio-ramiro',
  base: '/portfolio-ramiro',
});

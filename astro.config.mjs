import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';


// https://astro.build/config
export default defineConfig({
    site: 'https://www.buschfranco.com',
    integrations: [sitemap()],

    output: 'server',
    adapter: vercel({
    webAnalytics: { enabled: true }
  })
});

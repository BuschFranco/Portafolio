import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import partytown from "@astrojs/partytown";
import react from '@astrojs/react';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.buschfranco.com',
  integrations: [sitemap(), react(), partytown(), mdx()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
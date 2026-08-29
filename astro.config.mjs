import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://hustlezoneyeg.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin') && !page.includes('/api'),
      customPages: ['https://hustlezoneyeg.com/sitemap.xml'],
    }),
  ],
  adapter: node({
    mode: 'standalone',
  }),
  build: {
    format: 'directory',
  },
  vite: {
    ssr: {
      noExternal: ['@astrojs/sitemap'],
    },
  },
});
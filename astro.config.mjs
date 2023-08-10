import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/functions';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify({}),
  integrations: [tailwind(), partytown({
    config: { forward: ['dataLayer.push'] },
  })]
});
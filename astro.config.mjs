import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-demo1-dun.vercel.app/",
  integrations: [preact()]
});
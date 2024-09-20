import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-simple-starter.netlify.app/",
  integrations: [tailwind(), sitemap()],
  output: "static",
  adapter: netlify(),
});

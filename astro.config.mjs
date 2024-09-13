import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://pow-site-astro.netlify.app/",
  integrations: [tailwind(), sitemap()],
  output: "hybrid",
  adapter: netlify(),
});
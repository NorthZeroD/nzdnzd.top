// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  experimental: {
    contentIntellisense: true,
  },

  site: "https://nzdnzd.top",
  trailingSlash: "ignore",
  output: "static",
  srcDir: "./src",
  publicDir: "./public",
  outDir: "./dist",
});

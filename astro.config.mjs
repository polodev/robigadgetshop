import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://polodev.github.io",
  base: "/robigadgetshop",
  integrations: [sitemap()],
});

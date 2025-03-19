import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: process.env.SITE_URL, 
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false,
    },
  },
});

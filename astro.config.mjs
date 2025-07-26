// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import { template } from "./src/settings";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    integrations: [react(), tailwind(), sitemap()],
    site: 'https://rossisarah.github.io',
    base: '/', // se il repo si chiama rossisarah.github.io
    // Mantieni le altre configurazioni dal template se necessarie
});
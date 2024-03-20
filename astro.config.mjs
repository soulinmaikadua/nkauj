import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: 'nkaujhmoob.netlify.app',
	output: "server",
	adapter: netlify(),
	// base: "nkauj",
	integrations: [mdx(), sitemap(), tailwind()]
});
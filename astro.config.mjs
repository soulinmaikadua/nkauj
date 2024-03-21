import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import tailwind from "@astrojs/tailwind";
import partytown from '@astrojs/partytown';


// https://astro.build/config
export default defineConfig({
	site: 'https://nkauj.netlify.app/',
	output: "server",
	adapter: netlify(),
	integrations: [
		mdx(),
		sitemap(),
		tailwind(),
		partytown({
			config: {
				forward: ['dataLayer.push']
			}
		}),
	]
});
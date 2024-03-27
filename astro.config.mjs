import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import partytown from '@astrojs/partytown';
// import vercel from '@astrojs/vercel/serverless';
import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
	site: 'https://nkauj.com/',
	output: "server",
	adapter: netlify(),
	// adapter: vercel(),
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
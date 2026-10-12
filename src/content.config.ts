import { readdirSync } from 'node:fs';
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const contentDirectory = new URL('./content/', import.meta.url);

export const collections = Object.fromEntries(
	readdirSync(contentDirectory, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((entry) => [
			entry.name,
			defineCollection({
				loader: glob({
					base: `./src/content/${entry.name}`,
					pattern: '**/*.{md,mdx}',
				}),
			}),
		]),
);

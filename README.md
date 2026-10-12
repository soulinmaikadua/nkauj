# Nkauj.com — Hmong Music Archive

Nkauj.com is a content-focused Hmong music website for discovering song
lyrics, guitar chords, poetry, and traditional wedding writing. It is built
with Astro 7 and deployed to Netlify with server-side rendering.

## Technology

- Astro 7
- TypeScript
- Tailwind CSS
- Astro Content Collections
- Netlify SSR adapter
- Partytown

## Requirements

- Node.js 22 or newer
- npm

## Local development

```bash
npm install
npm run dev
```

The development server is available at the URL printed by Astro, normally
`http://localhost:4321`.

## Production build

```bash
npm run build
```

The build command runs Astro's type and content checks before creating the
production output in `dist/`.

To inspect the production build locally:

```bash
npm run preview
```

## Netlify deployment

The project uses `@astrojs/netlify` with server output. Netlify should use:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | 22 or newer |

The build generates the Netlify SSR function, redirects, prerendered content
pages, and the sitemap automatically.

## Project structure

```text
src/
├── components/        Shared navigation, footer, lists, and metadata
├── content/           Hmong lyrics, chords, poems, and wedding content
├── content.config.ts  Astro 7 content collection registration
├── layouts/           Shared reading and content layouts
├── pages/             Routes and artist collection pages
└── styles/            Global design system
```

## Content collections

Each directory under `src/content/` is registered as an Astro collection.
Markdown and MDX entries use their Astro 7 `id` as the page slug.

When adding content:

1. Add the Markdown or MDX file to the correct collection directory.
2. Include the same frontmatter fields used by the existing entries.
3. Run `npm run build` to validate the content and generated route.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Astro development server |
| `npm run build` | Type-check and create the Netlify production build |
| `npm run preview` | Preview the production build |
| `npm run astro` | Run Astro CLI commands |

## Existing project notes and references

The original README content is preserved below.

---

# Nkauj

Nkauj.com zoo siab tos txais

[Chrords](https://www.chords.vip/)

https://hopamnhanh.com/category/45193/nkauj-hmoob/4

https://pubhtml5.com/wjop/kwrd/basic/

https://www.zemanta.com/

https://txojkevhlub.forumotion.com/t34-paj-huam-sib-hlub

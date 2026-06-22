# Masjid Benawf Website

Static Astro website for Masjid Benawf with reusable components, content data, responsive pages, and a client-side current-prayer highlight.

## Requirements

- Node.js 18.17 or newer
- npm

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Production Build

```bash
npm run build
npm run preview
```

The static build is generated in `dist/`.

## Project Structure

```text
src/
  components/   Reusable Astro components
  data/         Site content and mosque details
  layouts/      Shared page layout
  pages/        Website routes
  styles/       Global CSS
  utils/        Prayer time helpers
public/
  assets/       Public images
```

## Content

Main content lives in `src/data/site.ts`.
Prayer logic lives in `src/utils/prayer.ts`.

This structure is ready for future replacement with a CMS, JSON feed, or API.

## Deploying To GitHub Pages

1. Push this repository to GitHub.
2. In GitHub, open **Settings -> Pages**.
3. Set the source to **GitHub Actions**.
4. Add a GitHub Actions workflow for Astro, or deploy the `dist/` folder using your preferred static hosting provider.

Before publishing publicly, update `site` in `astro.config.mjs` to the final website URL.

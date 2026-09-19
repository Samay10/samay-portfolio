# Samay Ashar — Portfolio

Simple personal portfolio built with [Astro](https://astro.build) and Tailwind CSS. Designed for GitHub Pages.

## Local development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Content

Edit `src/data/site.ts` to update name, experience, projects, skills, and links.

## GitHub Pages

1. Push this repo to GitHub (`samayashar/samay-portfolio` or similar).
2. In repo **Settings → Pages**, set Source to **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically.

If this is a **project** site, keep `base: '/samay-portfolio'` in `astro.config.mjs`.  
If you use `username.github.io` as the repo name, set `base: '/'`.

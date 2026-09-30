# Samay Ashar — Portfolio

Simple personal portfolio built with [Astro](https://astro.build) and Tailwind CSS. Designed for GitHub Pages.

This repo is **portfolio only**. The Prodigy blog lives in the sibling folder `../blog` (GitHub: `Samay10/awesam`).

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

1. Push this repo to GitHub (`Samay10/samay-portfolio`).
2. In repo **Settings → Pages**, set Source to **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically.

Live: https://samay10.github.io/samay-portfolio/

If this is a **project** site, keep `base: '/samay-portfolio/'` in `astro.config.mjs`.  
If you use `username.github.io` as the repo name, set `base: '/'`.

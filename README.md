# Ronik Kumbhar — Portfolio

Interactive portfolio for a Java Backend Developer. Built with **Vite**, **React**, **TypeScript**, and **Tailwind CSS v4**.

**Live site:** [ronik62.github.io/ronik-portfolio](https://ronik62.github.io/ronik-portfolio/)

## Develop locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173/`.

## Customize

Edit **`src/data/profile.ts`** for contact info, skills, projects, and experience.

Place your PDF at **`public/resume.pdf`** (the site links to this filename).

## Build

```bash
npm run build
npm run preview
```

Production builds use base path `/ronik-portfolio/` for GitHub Pages.

## Deploy (GitHub Pages)

Pushes to **`main`** run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) automatically.

In the repo on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

After the first successful workflow run, the site is available at the URL above.

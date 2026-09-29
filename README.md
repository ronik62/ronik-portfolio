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

Every push to **`main`** runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes **`dist/`** to the **`gh-pages`** branch.

### One-time GitHub setting (required)

The live site breaks if Pages serves the **`main`** branch root (you get a blank page — it tries to load `/src/main.tsx`).

1. Open **https://github.com/ronik62/ronik-portfolio/settings/pages**
2. Under **Build and deployment → Branch**:
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
3. Click **Save**
4. Wait 1–2 minutes, then open **https://ronik62.github.io/ronik-portfolio/**

After the workflow finishes, confirm the **`gh-pages`** branch exists under **Code → branches**.

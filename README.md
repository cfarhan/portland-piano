# Hayhurst Piano Studio

A piano tutoring landing page built with React + Tailwind CSS, deployable to GitHub Pages.

## Tech stack

- [React 19](https://react.dev/) — UI components
- [Vite 7](https://vite.dev/) — dev server and bundler
- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first styling
- [gh-pages](https://github.com/tschaub/gh-pages) — GitHub Pages deployment

---

## Local development

> **Prerequisite**: Node.js 20.19+ or 22.12+. You can check with `node -v`.

```bash
# 1. Install dependencies (only needed once)
npm install

# 2. Start the dev server
npm run dev
```

Open the URL printed in the terminal (usually `http://localhost:5173`).

> **Do not** open `index.html` directly in the browser or serve it with Live Server.
> The browser will reject `.jsx` files with a MIME type error.
> Always use `npm run dev`.

---

## Building for production

```bash
npm run build
```

Output lands in `dist/`. You can preview it locally with:

```bash
npm run preview
```

---

## Deploying to GitHub Pages

### One-time setup

1. **Create the GitHub repo** (if not already done).

2. **Push your code** to the repo's `main` branch:

   ```bash
   git init          # (skip if already a git repo)
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/<your-username>/pianowebsite.git
   git push -u origin main
   ```

3. **Match the `base` in `vite.config.js`** to your repo name.
   If your repo is `pianowebsite`, no change is needed. If it differs, edit the file:

   ```js
   // vite.config.js
   base: "/<your-repo-name>/",
   ```

4. **Enable GitHub Pages** in your repo settings:
   - Go to **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **`gh-pages`** / **`/ (root)`**
   - Click **Save**

### Every deploy

```bash
npm run deploy
```

This runs `npm run build` first (via the `predeploy` script), then pushes the `dist/` folder to the `gh-pages` branch automatically.

Your site will be live at:

```
https://hayhurstpianostudio.com
```

---

## Project structure

```
pianowebsite/
├── public/
│   └── favicon.svg       # Piano keys favicon
├── src/
│   ├── App.jsx           # Main landing page component
│   ├── main.jsx          # React entry point
│   └── index.css         # Tailwind import + base styles
├── index.html            # HTML shell
├── vite.config.js        # Vite + Tailwind + base path config
└── package.json
```

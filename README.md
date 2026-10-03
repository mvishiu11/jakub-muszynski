# jakub-muszynski

Personal site of Jakub Muszyński. One page, fully static, three runtime dependencies (Next.js, React, React DOM).

## Edit content

- Home page: `src/data/site.ts` (roles, work, research, projects, recognition, links).
- Posts: one MDX file per post in `src/content/posts/`, starting with `export const meta = {...}`. Register it with one line in `src/content/index.ts`.
- Drafts: `draft: true` in `meta` keeps a post out of search engines, the sitemap and RSS while it stays reachable by link. Set it to `false` to publish.
- In posts you can use `<Quote source={...}>`, `<Open>` (open questions) and `<Notes>` (references) without importing anything.
- Colours and type are tokens at the top of `src/app/globals.css`; the favicon is `src/app/icon.svg`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Deploy

`next build` produces plain HTML/CSS/JS in `out/`, so any static host works.

**Vercel** (current): import the repo, framework preset Next.js, no settings needed. Every push to `main` redeploys.

**GitHub Pages**: Settings → Pages → Source: **GitHub Actions**. `.github/workflows/pages.yml` builds and deploys on every push to `main`. The site appears at `https://mvishiu11.github.io/jakub-muszynski/`; the workflow sets the sub-path automatically, and drops it if you add a custom domain.

**Cloudflare**: create a Workers/Pages project from the repo, build command `npm run build`, output directory `out`.

Once you pick a host, set `site.url` in `src/data/site.ts` so canonical URLs and the sitemap point at it.

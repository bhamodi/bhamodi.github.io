# baraa.ca — Personal Website

The source for my personal website: https://baraa.ca

Built with [Vite](https://vitejs.dev), [React](https://react.dev), and Meta's
[Astryx design system](https://github.com/facebook/astryx) (`@astryxdesign/core`
+ the `neutral` theme), with a light/dark mode toggle.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Editing content

All copy lives in [`src/data/site.ts`](src/data/site.ts) — name, role, tagline,
about, focus areas, email, and social links. Update that one file to change the
site; the sections render from it.

## Astryx CLI (optional)

The Astryx CLI (component docs, templates, codemods) isn't installed by default
because it declares an unpublished peer package. Add it on demand when needed:

```bash
npm install -D @astryxdesign/cli --legacy-peer-deps
npx astryx component --list   # browse available components
npx astryx docs tokens        # design token reference
```

## Deployment

Pushes to `main` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes `dist/` to GitHub Pages. The custom domain
(`baraa.ca`) is configured via [`public/CNAME`](public/CNAME).

> One-time setup: in the repo's **Settings → Pages**, set **Source** to
> **GitHub Actions**.

## Structure

```
index.html            # Vite entry
public/               # static assets (CNAME, robots, sitemap, favicons, images)
src/
  data/site.ts        # all site content (edit here)
  theme/              # Astryx theme provider + light/dark toggle
  components/         # header, footer, nav, shared UI
  sections/           # Hero, About, Focus, Contact
  globals.css         # Astryx CSS imports + a little custom styling
```

## License

BSD-3-Clause. See [LICENSE](LICENSE).

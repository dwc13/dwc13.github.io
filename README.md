# dwc13.github.io

Personal site for [Dominic Carrillo](https://dwc13.github.io/), built with [Hugo](https://gohugo.io/) and deployed to GitHub Pages.

## Local development

Install [Hugo](https://gohugo.io/installation/) (extended edition not required), then:

```bash
hugo server -D
```

Open http://localhost:1313/

Production build:

```bash
hugo --minify
```

Output is written to `public/`.

## Project structure

- `content/` — homepage (`_index.md`) and `projects/` leaf bundles
- `content/projects/<slug>/` — `index.md` (metadata), `body.md` (prose), optional `assets/` (gallery images)
- `data/` — `work.yaml`, `papers.yaml` for homepage sections
- `layouts/` — `index.html` (home), `projects/single.html` (project pages), partials
- `static/` — `css/site.css`, `js/theme.js` (light/dark toggle, accent `#48a4ce`)
- `hugo.toml` — site configuration and params

## Deployment

Pushes to `main` and `refactor` trigger [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds with Hugo and publishes to GitHub Pages.

**One-time repo setup:** GitHub → **Settings** → **Pages** → **Build and deployment** → Source: **GitHub Actions**.

## Adding a project

```bash
hugo new projects/my-project --kind projects
```

Or create `content/projects/my-project/` with:

- `index.md` — front matter (`title`, `summary`, `image`, `weight`, optional `github` or `gittree`)
- `body.md` — markdown content (rendered on the project page)
- `assets/` — images included in the gallery (optional `gallery` param in front matter for explicit ordering)

Lower `weight` values appear earlier on the homepage.

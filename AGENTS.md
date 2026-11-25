# AGENTS.md

Personal academic website built on the al-folio Jekyll theme. GitHub Actions deploys it on push to `main`.

## Build / verify

- Local build: `LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8 bundle exec jekyll build --destination /tmp/site-build`
  - The UTF-8 locale is required: `assets/img/` contains a macOS screenshot whose filename has a non-ASCII space, and the build crashes with
    `Encoding::UndefinedConversionError` under the default US-ASCII locale.
- CI runs `npx prettier . --check` (`.github/workflows/prettier.yml`).

## Content conventions

- Publications live in `_bibliography/papers.bib` as `@misc` entries: `abbr` is the venue badge (e.g. `MLSys'26`), `note` holds the acceptance rate,
  and `preview` points to an image in `assets/img/publication_preview/`.
  - Bib keys follow `<first-author-lastname><venue-year><name>`, e.g. `kim2026agenticcache`.
  - Papers under review stay hidden inside `@comment{ ... }` blocks; unwrap them and set the venue once accepted.
  - Only first-author papers get `selected = {true}` (shown on the homepage).
- News: one file per item in `_news/` (`layout: post`, `inline: true`, `date:`). Acceptances are announced there.
- CV: `assets/pdf/Hojoon_Leo_Kim_CV.pdf` is a compiled LaTeX PDF whose source is not in this repo; update the source elsewhere and replace the PDF.

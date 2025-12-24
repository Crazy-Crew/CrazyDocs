# Atlas Docs
Documentation deployed via Vercel @ https://docs.crazycrew.us

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

# Contributing
Contributing is easy! We use markdown files for the wiki so anyone can contribute with a little reading.<br>
All `.mdx` files are located under `content/docs`, Each directory translates to a directory on the website. ( https://docs.crazycrew.us )

## Editing Pages
* Simply edit the `.mdx` files.
* use the command `pnpm run start`.
* Go to http://localhost:3000
* Make changes until it looks right.
* Make a pull request once it looks right.

## Requirements
* You must know TypeScript and React if you plan to add things outside of `md` files.

## Commands
All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
|:-----------------------|:-------------------------------------------------|
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
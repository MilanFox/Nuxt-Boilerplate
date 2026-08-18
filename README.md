# Nuxt 4 Starter

Nuxt 4.5.2

Pinia • VueUse • Nuxt Icon • ESLint • Stylelint • Vitest • TS • SCSS

## Scripts

| Script                | Does                                    |
|-----------------------|-----------------------------------------|
| `npm run dev`         | Dev server                              |
| `npm run build`       | Production build                        |
| `npm run lint`        | ESLint and Stylelint                    |
| `npm run typecheck`   | `vue-tsc --noEmit`                      |
| `npm test`            | Vitest, once                            |

Husky runs `lint-staged` (`eslint --fix`, `stylelint --fix`) on every commit.

## Scaffolding

Files marked `Scaffolding:` in a leading comment exist to show the intended pattern, not because the
project needs them. Delete or replace them. Aliases in `nuxt.config.ts` intentionally point at
directories that do not exist yet (`@molecules`, `@stores`, `@composables`, …) — create the directory
and the alias works.

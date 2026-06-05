# AGENTS.md

This file provides guidance to coding agents when working with code in this repository.

## Project Overview

Bod is a pnpm + Lerna monorepo containing a CLI scaffolding tool (`bod create <appName>`) and shared linting configs. Node >=18 required, pnpm, TypeScript ES modules.

## Commands

```bash
# Build all packages
pnpm build

# Lint
pnpm lint          # lint all packages
pnpm lint:fix      # auto-fix

# Test
pnpm test          # vitest (watch mode, packages/bod only)
pnpm test:all      # all packages + coverage

# Run a single test file
pnpm vitest run packages/bod/src/commands/__tests__/CreateCommand.test.ts

# Run a specific test by name
pnpm vitest run -t "should extends"

# Dev (run CLI locally)
cd packages/bod && pnpm dev

# Release
pnpm release       # tsx scripts/release.ts --push (Lerna conventional commits)
```

## Architecture

**Packages:**

- `packages/bod` — The CLI tool (`bod` command). Entry: `bin/bod.js` → `src/bod.ts` (commander setup) → `src/index.ts` (CommandFactory registry)
- `packages/eslint-config` — Shared ESLint flat config (`@dg-scripts/eslint-config`), extends `@antfu/eslint-config`
- `packages/stylelint-config` — Shared Stylelint config (`@dg-scripts/stylelint-config`)
- `website` — Docusaurus docs site

**CLI boot flow:**

1. `bin/bod.js` → `src/bod.ts` creates a commander program, registers all commands from `CommandFactory` (a `Map<string, BaseCommand>`)
2. Each command extends `BaseCommand` (abstract class with `name`, `description`, `usage`, `alias`, `run()`)
3. `CreateCommand` — prompts template selection via `@inquirer/prompts`, then spawns the corresponding scaffolding tool (`create-vite`, `create-next-app`, `create-vue`). Auto-detects package manager from `npm_config_user_agent`.
4. `InfoCommand` — prints env info via `envinfo`

**Key utilities** (`packages/bod/src/utils/`):

- `console.ts` — re-exports chalk (`color`) and consola (`printer`)
- `core.ts` — commander `program` singleton + inquirer `select`
- `os.ts` — `cross-spawn` (`spawn`) and `envinfo`
- `index.ts` — barrel export + `findPackageManager()`

**Build scripts** (`scripts/`): `release.ts`, `canary.ts`, `badge.ts` — used in CI for publishing, canary releases, and coverage badges.

## Conventions

- **Module system:** `"type": "module"` in all packages. Imports use `.js` extensions in TypeScript source.
- **Linting:** Root `eslint.config.ts` re-exports from `@dg-scripts/eslint-config`. Single quotes, no semicolons, 2-space indent, 80 char width (see `.prettierrc.json`).
- **Testing:** Vitest with node environment. Tests live in `__tests__/` directories next to source. Tests mock `spawn.sync` and `select` — real scaffold tests only run in CI (`isCI` guard).
- **Versioning:** Lerna fixed mode — all packages share the same version in `lerna.json`. Conventional commits with angular preset.
- **Dependencies:** `bod` is standalone (no dependency on the config packages). Config packages are devDependencies at the monorepo root.

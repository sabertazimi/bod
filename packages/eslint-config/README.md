# @dg-scripts/eslint-config

[![Author](https://img.shields.io/badge/author-sabertaz-lightgrey?style=for-the-badge)](https://github.com/sabertazimi)
[![LICENSE](https://img.shields.io/github/license/sabertazimi/bod?style=for-the-badge)](https://raw.githubusercontent.com/sabertazimi/bod/main/LICENSE)

[![Node Version](https://img.shields.io/node/v/@dg-scripts/eslint-config?logo=node.js&style=for-the-badge)](https://www.npmjs.com/package/@dg-scripts/eslint-config)
[![NPM Version](https://img.shields.io/npm/v/@dg-scripts/eslint-config?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@dg-scripts/eslint-config)
[![CDN](https://img.shields.io/npm/v/@dg-scripts/eslint-config?label=CDN&logo=cloudflare&style=for-the-badge)](https://cdn.jsdelivr.net/npm/@dg-scripts/eslint-config@latest/)

[![CI](https://img.shields.io/github/actions/workflow/status/sabertazimi/bod/ci.yml?branch=main&style=for-the-badge&logo=github)](https://github.com/sabertazimi/bod/actions/workflows/ci.yml)
[![Vitest Coverage](https://img.shields.io/codecov/c/github/sabertazimi/bod?logo=codecov&style=for-the-badge)](https://codecov.io/gh/sabertazimi/bod)
[![Vitest Coverage](http://raw.githubusercontent.com/sabertazimi/bod/refs/heads/gh-pages/coverage-lines.svg)](https://github.com/sabertazimi/bod/actions/workflows/ci.yml)

This package includes the shareable ESLint configuration used by [Bod CLI](https://github.com/sabertazimi/bod).

## Installation

```bash
npm install -D @dg-scripts/eslint-config
```

## Usage

### Basic Usage

Create a file named `eslint.config.js`
with following contents in the root folder of your project:

```js
export { default } from '@dg-scripts/eslint-config'
```

### With Custom Options

Use `defineConfig` to customize the configuration:

```js
import { defineConfig } from '@dg-scripts/eslint-config'

export default defineConfig({
  // Customize TypeScript options
  typescript: {
    tsconfigPath: './path/to/tsconfig.json', // Custom tsconfig path
  },
  // Disable some opinionated rules
  lessOpinionated: true,
  // Other options from @antfu/eslint-config
})
```

### With Additional Rules

You can override or add rules by chaining methods:

```js
import eslintConfig from '@dg-scripts/eslint-config'

export default eslintConfig
  .append({
    ignores: ['cypress', 'cypress.config.ts'],
  })
  .append({
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  })
```

Or use `defineConfig` with additional configs:

```js
import { defineConfig } from '@dg-scripts/eslint-config'

export default defineConfig(
  {
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
  },
  {
    ignores: ['cypress', 'cypress.config.ts'],
  },
  {
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
)
```

## Type-Aware Rules

By default, type-aware [rules](https://typescript-eslint.io/getting-started/typed-linting) are **enabled** with `tsconfigPath: 'tsconfig.json'`.

The configuration will automatically look for `tsconfig.json` in your project root.
If your `tsconfig.json` is in a different location, you can customize it:

```js
import { defineConfig } from '@dg-scripts/eslint-config'

export default defineConfig({
  typescript: {
    tsconfigPath: './path/to/tsconfig.json',
  },
})
```

To disable type-aware rules:

```js
import { defineConfig } from '@dg-scripts/eslint-config'

export default defineConfig({
  typescript: true, // Enable TypeScript support without type-aware rules
})
```

## Next.js

When package `next` and `@next/eslint-plugin-next` are installed in your project,
the Next.js configuration will be enabled automatically.
No additional configuration is required.

## Contact

[![Email](https://img.shields.io/badge/-Gmail-ea4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sabertazimi@gmail.com)
[![X](https://img.shields.io/badge/-X.com-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/sabertazimi)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sabertazimi)

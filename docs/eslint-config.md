---
author: Sabertazimi
authorTitle: Web Developer
authorURL: https://github.com/sabertazimi
authorImageURL: https://github.com/sabertazimi.png
sidebar_label: 'ESLint Configuration'
sidebar_position: 6
tags: [ESLint]
---

# @dg-scripts/eslint-config

[![Author](https://img.shields.io/badge/author-sabertaz-lightgrey?style=for-the-badge)](https://github.com/sabertazimi)
[![LICENSE](https://img.shields.io/github/license/sabertazimi/bod?style=for-the-badge)](https://raw.githubusercontent.com/sabertazimi/bod/main/LICENSE)

[![Node Version](https://img.shields.io/node/v/@dg-scripts/eslint-config?logo=node.js&style=for-the-badge)](https://www.npmjs.com/package/@dg-scripts/eslint-config)
[![NPM Version](https://img.shields.io/npm/v/@dg-scripts/eslint-config?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@dg-scripts/eslint-config)
[![CDN](https://img.shields.io/npm/v/@dg-scripts/eslint-config?label=CDN&logo=cloudflare&style=for-the-badge)](https://cdn.jsdelivr.net/npm/@dg-scripts/eslint-config@latest/)

[![CI](https://img.shields.io/github/actions/workflow/status/sabertazimi/bod/ci.yml?branch=main&style=for-the-badge&logo=github)](https://github.com/sabertazimi/bod/actions/workflows/ci.yml)
[![Jest Coverage](https://img.shields.io/codecov/c/github/sabertazimi/bod?logo=codecov&style=for-the-badge)](https://codecov.io/gh/sabertazimi/bod)
[![Jest Coverage](https://raw.githubusercontents.com/sabertazimi/bod/gh-pages/coverage-lines.svg)](https://github.com/sabertazimi/bod/actions/workflows/ci.yml)

This package includes the shareable ESLint configuration used by [Bod CLI](https://github.com/sabertazimi/bod).

## Installation

```bash
npm install -D @dg-scripts/eslint-config
```

## Usage

Create a file named `eslint.config.js`
with following contents in the root folder of your project:

```js
export { default } from '@dg-scripts/eslint-config'
```

You can override the settings from `@dg-scripts/eslint-config`
by editing the `eslint.config.js` file:

```js
import eslintConfig from '@dg-scripts/eslint-config'

export default eslintConfig.append(
  {
    ignores: ['cypress', 'cypress.config.ts'],
  },
).append({
  rules: {
    'react-refresh/only-export-components': 'off',
  },
})
```

## Next.js

When package `next` and `eslint-config-next` installed in project,
eslint configuration will enable automatically,
no need for any additional configuration.

## Disable Type Aware Rules

Type aware [rules](https://typescript-eslint.io/getting-started/typed-linting)
can opt-out by:

```js
export { disableTypeAware as default } from '@dg-scripts/eslint-config'
```

## Contact

[![Email](https://img.shields.io/badge/-Gmail-ea4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sabertazimi@gmail.com)
[![X](https://img.shields.io/badge/-X.com-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/sabertazimi)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sabertazimi)

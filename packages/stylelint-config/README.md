# @dg-scripts/stylelint-config

[![Author](https://img.shields.io/badge/author-sabertaz-lightgrey?style=for-the-badge)](https://github.com/sabertazimi)
[![LICENSE](https://img.shields.io/github/license/sabertazimi/bod?style=for-the-badge)](https://raw.githubusercontent.com/sabertazimi/bod/main/LICENSE)

[![Node Version](https://img.shields.io/node/v/@dg-scripts/stylelint-config?logo=node.js&style=for-the-badge)](https://www.npmjs.com/package/@dg-scripts/stylelint-config)
[![NPM Version](https://img.shields.io/npm/v/@dg-scripts/stylelint-config?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@dg-scripts/stylelint-config)
[![CDN](https://img.shields.io/npm/v/@dg-scripts/stylelint-config?label=CDN&logo=cloudflare&style=for-the-badge)](https://cdn.jsdelivr.net/npm/@dg-scripts/stylelint-config@latest/)

[![CI](https://img.shields.io/github/actions/workflow/status/sabertazimi/bod/ci.yml?branch=main&style=for-the-badge&logo=github)](https://github.com/sabertazimi/bod/actions/workflows/ci.yml)
[![Vitest Coverage](https://img.shields.io/codecov/c/github/sabertazimi/bod?logo=codecov&style=for-the-badge)](https://codecov.io/gh/sabertazimi/bod)
[![Vitest Coverage](http://raw.githubusercontent.com/sabertazimi/bod/refs/heads/gh-pages/coverage-lines.svg)](https://github.com/sabertazimi/bod/actions/workflows/ci.yml)

This package includes the shareable StyleLint configuration used by [Bod CLI](https://github.com/sabertazimi/bod).

## Installation

```bash
npm install -D @dg-scripts/stylelint-config
```

## Usage

Set `.stylelintrc.json` to:

```json
{
  "extends": "@dg-scripts/stylelint-config"
}
```

### Extending the config

Simply add a "rules" key to your config and add your overrides there.

For example,
to change the indentation to tabs and turn off the number-leading-zero rule:

```json
{
  "extends": "@dg-scripts/stylelint-config",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

## Features

- CSS Standard with [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard).
- CSS Property Order with [stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order).
- HTML/Vue Support with [stylelint-config-html](https://github.com/ota-meshi/stylelint-config-html).
- SCSS Support with [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss).
- Markdown Support with [postcss-markdown](https://github.com/ota-meshi/postcss-markdown).
- Tailwind CSS Support (ignores Tailwind at-rules).
- Prettier Integration with [stylelint-prettier](https://github.com/prettier/stylelint-prettier).

## Reference

- [CSS Standard](https://github.com/stylelint/stylelint-config-standard)
- [CSS Order](https://github.com/stormwarning/stylelint-config-recess-order)

## Contact

[![Email](https://img.shields.io/badge/-Gmail-ea4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sabertazimi@gmail.com)
[![X](https://img.shields.io/badge/-X.com-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/sabertazimi)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sabertazimi)

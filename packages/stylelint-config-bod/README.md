# stylelint-config-bod

[![Author](https://img.shields.io/badge/author-sabertaz-lightgrey?style=for-the-badge)](https://github.com/sabertazimi)
[![LICENSE](https://img.shields.io/github/license/sabertazimi/bod?style=for-the-badge)](https://raw.githubusercontent.com/sabertazimi/bod/main/LICENSE)

[![Node Version](https://img.shields.io/node/v/stylelint-config-bod?logo=node.js&style=for-the-badge)](https://www.npmjs.com/package/stylelint-config-bod)
[![NPM Version](https://img.shields.io/npm/v/stylelint-config-bod?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/stylelint-config-bod)
[![CDN](https://img.shields.io/npm/v/stylelint-config-bod?label=CDN&logo=cloudflare&style=for-the-badge)](https://cdn.jsdelivr.net/npm/stylelint-config-bod@latest/)

[![CI](https://img.shields.io/github/actions/workflow/status/sabertazimi/bod/ci.yml?branch=main&style=for-the-badge&logo=github)](https://github.com/sabertazimi/bod/actions/workflows/ci.yml)
[![Jest Coverage](https://img.shields.io/codecov/c/github/sabertazimi/bod?logo=codecov&style=for-the-badge)](https://codecov.io/gh/sabertazimi/bod)
[![Jest Coverage](https://raw.githubusercontents.com/sabertazimi/bod/gh-pages/coverage-lines.svg)](https://github.com/sabertazimi/bod/actions/workflows/ci.yml)

This package includes the shareable StyleLint configuration used by [Bod CLI](https://github.com/sabertazimi/bod).

## Installation

```bash
npm install -D stylelint-config-bod
```

## Usage

set `.stylelintrc.json` to:

```json
{
  "extends": "stylelint-config-bod"
}
```

### Extending the config

Simply add a "rules" key to your config and add your overrides there.

For example,
to change the indentation to tabs and turn off the number-leading-zero rule:

```json
{
  "extends": "stylelint-config-bod",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

## Features

- Based on `stylelint-config-standard`.
- Idiomatic order.

## Reference

- [CSS Standard](https://github.com/stylelint/stylelint-config-standard)
- [CSS Order](https://github.com/stormwarning/stylelint-config-recess-order)

## Contact

[![Email](https://img.shields.io/badge/-Gmail-ea4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sabertazimi@gmail.com)
[![Twitter](https://img.shields.io/badge/-Twitter-1da1f2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/sabertazimi)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sabertazimi)

---
sidebar_label: 'Bod'
sidebar_position: 1
---

# Bod

[![Author](https://img.shields.io/badge/author-sabertaz-lightgrey?style=for-the-badge)](https://github.com/sabertazimi)
[![LICENSE](https://img.shields.io/github/license/sabertazimi/bod?style=for-the-badge)](https://raw.githubusercontent.com/sabertazimi/bod/main/LICENSE)

[![Node Version](https://img.shields.io/node/v/bod?logo=node.js&style=for-the-badge)](https://github.com/sabertazimi/bod)
[![Code Lines](https://img.shields.io/tokei/lines/github/sabertazimi/bod?style=for-the-badge&logo=visualstudiocode)](https://github.com/sabertazimi/bod)

[![CI](https://img.shields.io/github/workflow/status/sabertazimi/bod/CI/main?style=for-the-badge&logo=github)](https://github.com/sabertazimi/bod/actions/workflows/ci.yml)
[![Jest Coverage](https://img.shields.io/coveralls/github/sabertazimi/bod?logo=coveralls&style=for-the-badge)](https://coveralls.io/github/sabertazimi/bod)
[![Jest Coverage](https://raw.githubusercontents.com/sabertazimi/bod/gh-pages/coverage-lines.svg)](https://github.com/sabertazimi/bod/actions/workflows/ci.yml)

[![Lerna](https://img.shields.io/github/lerna-json/v/sabertazimi/bod?logo=npm&style=for-the-badge)](https://github.com/lerna/lerna)
[![NPM Version](https://img.shields.io/npm/v/bod?label=Bod%20CLI&logo=npm&style=for-the-badge)](https://www.npmjs.com/package/bod)
[![NPM Version](https://img.shields.io/npm/v/@sabertazimi/react-scripts?label=CRA%20Scripts&logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@sabertazimi/react-scripts)

[![NPM Version](https://img.shields.io/npm/v/eslint-config-bod?label=ESLint&logo=eslint&style=for-the-badge)](https://www.npmjs.com/package/eslint-config-bod)
[![NPM Version](https://img.shields.io/npm/v/stylelint-config-bod?label=StyleLint&logo=stylelint&style=for-the-badge)](https://www.npmjs.com/package/stylelint-config-bod)
[![NPM Version](https://img.shields.io/npm/v/stylelint-config-mass?label=StyleLint&logo=sass&style=for-the-badge)](https://www.npmjs.com/package/stylelint-config-mass)

[![NPM Version](https://img.shields.io/npm/v/cra-template-bod?label=Bod%20Template&logo=react&style=for-the-badge)](https://www.npmjs.com/package/cra-template-bod)
[![NPM Version](https://img.shields.io/npm/v/@sabertazimi/cra-template?label=JSX%20Template&logo=react&style=for-the-badge)](https://www.npmjs.com/package/@sabertazimi/cra-template)
[![NPM Version](https://img.shields.io/npm/v/@sabertazimi/cra-template-typescript?label=TSX%20Template&logo=react&style=for-the-badge)](https://www.npmjs.com/package/@sabertazimi/cra-template-typescript)

Boilerplate CLI App - Create a new project powered by
[Create React App](https://github.com/facebook/create-react-app),
[@sabertazimi/react-scripts](https://github.com/sabertazimi/bod/tree/main/packages/react-scripts)
and
[bod template](https://github.com/sabertazimi/bod/tree/main/packages/cra-template-bod).

[**Documentation**](https://sabertazimi.github.io/bod) |
[**Bod Template**](https://sabertazimi.github.io/bod/bod) |
[JSX Template](https://sabertazimi.github.io/bod/@sabertazimi) |
[TSX Template](https://sabertazimi.github.io/bod/@sabertazimi/typescript)

## Bod CLI

### Installation

```bash
# Global installation
npm i -g bod

# Local installation
npm i -D bod
```

### Usage

```bash
npx bod create <appName>
npx bod info
```

```bash
Usage: bod <command> [options]

Options:
  -v, --version     output the version number
  -h, --help        display help for command

Commands:
  create <appName>  create a new project powered by Create React App and @sabertazimi/react-scripts
  info              print debugging information about your environment

ℹ   Run bod <command> --help for detailed usage of given command.
```

More details on package
[bod](https://github.com/sabertazimi/bod/tree/main/packages/bod).

## Bod Template

The official React template for [**Bod CLI**](https://github.com/sabertazimi/bod).

### Live Demo

- Bod Template [Demo](https://sabertazimi.github.io/bod/bod).
- JSX Template [Demo](https://sabertazimi.github.io/bod/@sabertazimi).
- TSX Template [Demo](https://sabertazimi.github.io/bod/@sabertazimi/typescript).

### Start with Template

This template is shipped with
[**Bod CLI**](https://github.com/sabertazimi/bod/tree/main/packages/bod) out of box:

```bash
# Select option `React Framework`
npx bod create my-app
```

Or use with Create React App:

```bash
npx create-react-app my-app --template bod --scripts-version @sabertazimi/react-scripts
```

More available scripts on package
[cra-template-bod](https://github.com/sabertazimi/bod/tree/main/packages/cra-template-bod).

### Custom Template

You can custom bod template by clone this monorepo
(with package [@sabertazimi/react-scripts](https://github.com/sabertazimi/bod/tree/main/packages/react-scripts)).

```bash
git clone --depth=1 https://github.com/sabertazimi/bod
cd bod
npm i
npm run start:template
```

`@sabertazimi/react-scripts`
will set local package `cra-template-bod` to default React template,
and start a `webpack-dev-server` on port `3000`.

## Contact

[![Email](https://img.shields.io/badge/-Gmail-ea4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sabertazimi@gmail.com)
[![Twitter](https://img.shields.io/badge/-Twitter-1da1f2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/sabertazimi)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sabertazimi)

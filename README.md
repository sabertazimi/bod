# Bod

[![Author](https://img.shields.io/badge/author-sabertaz-lightgrey?style=for-the-badge)](https://github.com/sabertazimi)
[![LICENSE](https://img.shields.io/github/license/sabertazimi/bod?style=for-the-badge)](https://raw.githubusercontent.com/sabertazimi/bod/main/LICENSE)
[![Node Version](https://img.shields.io/node/v/bod?logo=node.js&style=for-the-badge)](https://github.com/sabertazimi/bod)

[![CI](https://img.shields.io/github/actions/workflow/status/sabertazimi/bod/ci.yml?branch=main&style=for-the-badge&logo=github)](https://github.com/sabertazimi/bod/actions/workflows/ci.yml)
[![Jest Coverage](https://img.shields.io/codecov/c/github/sabertazimi/bod?logo=codecov&style=for-the-badge)](https://codecov.io/gh/sabertazimi/bod)

[![NPM Version](https://img.shields.io/npm/v/bod?label=Bod%20CLI&logo=npm&style=for-the-badge)](https://www.npmjs.com/package/bod)
[![NPM Version](https://img.shields.io/npm/v/@dg-scripts/eslint-config?label=ESLint&logo=eslint&style=for-the-badge)](https://www.npmjs.com/package/@dg-scripts/eslint-config)
[![NPM Version](https://img.shields.io/npm/v/@dg-scripts/stylelint-config?label=StyleLint&logo=stylelint&style=for-the-badge)](https://www.npmjs.com/package/@dg-scripts/stylelint-config)

Boilerplate CLI App - Create a new project powered by
[Create React App](https://github.com/facebook/create-react-app),
[@sabertazimi/react-scripts](https://github.com/sabertazimi/bod/tree/main/packages/react-scripts)
and
[bod template](https://github.com/sabertazimi/bod/tree/main/packages/cra-template-bod).

[**Documentation**](https://sabertazimi.github.io/bod) |
[**Bod Template**](https://sabertazimi.github.io/bod/bod) |
[Webpack Template](https://sabertazimi.github.io/bod/webpack)

## Bod CLI

### Installation

```bash
# Global installation
npm install -g bod

# Local installation
npm install -D bod
```

### Usage

```bash
bod create <appName>
bod info
```

```bash
Usage: bod <command> [options]

Options:
  -v, --version     output the version number
  -h, --help        display help for command

Commands:
  create|c <appName>  Create a new project powered by @sabertazimi/react-scripts
  info|i              Print debugging information about your environment
  help [command]      display help for command

ℹ   Run bod <command> --help for detailed usage of given command.
```

More details on package
[bod](https://github.com/sabertazimi/bod/tree/main/packages/bod).

## Bod Template

The official React template for [**Bod CLI**](https://github.com/sabertazimi/bod).

### Live Demo

- Bod Template [Demo](https://sabertazimi.github.io/bod/bod).
- Webpack Template [Demo](https://sabertazimi.github.io/bod/webpack).

### Start with Template

This template is shipped with
[**Bod CLI**](https://github.com/sabertazimi/bod/tree/main/packages/bod) out of box:

```bash
# Select option `React Framework`
bod create my-app
```

Or use with Create React App:

```bash
npm create react-app my-app --template bod --scripts-version @sabertazimi/react-scripts
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

## Contributing

Contributions are greatly appreciated.
Please fork this repository and open a pull request.

## Credits

- [create-react-app](https://github.com/facebook/create-react-app).
- [@antfu/eslint-config](https://github.com/antfu/eslint-config).

## Contact

[![Email](https://img.shields.io/badge/-Gmail-ea4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sabertazimi@gmail.com)
[![X](https://img.shields.io/badge/-X.com-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/sabertazimi)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sabertazimi)

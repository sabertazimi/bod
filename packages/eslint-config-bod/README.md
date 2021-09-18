# eslint-config-bod

[![Author](https://img.shields.io/badge/author-sabertaz-lightgrey?style=for-the-badge)](https://github.com/sabertazimi)
[![LICENSE](https://img.shields.io/github/license/sabertazimi/bod?style=for-the-badge)](https://raw.githubusercontent.com/sabertazimi/bod/main/LICENSE)

[![Node Version](https://img.shields.io/node/v/eslint-config-bod?logo=node.js&style=for-the-badge)](https://www.npmjs.com/package/eslint-config-bod)
[![NPM Version](https://img.shields.io/npm/v/eslint-config-bod?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/eslint-config-bod)
[![CDN](https://img.shields.io/npm/v/eslint-config-bod?label=CDN&logo=cloudflare&style=for-the-badge)](https://unpkg.com/browse/eslint-config-bod@latest/)

[![CI](https://img.shields.io/github/workflow/status/sabertazimi/bod/CI/main?style=for-the-badge&logo=github)](https://github.com/sabertazimi/bod/actions/workflows/ci.yml)
[![Jest Coverage](https://img.shields.io/codecov/c/github/sabertazimi/bod?logo=codecov&style=for-the-badge)](https://codecov.io/gh/sabertazimi/bod)
[![Jest Coverage](https://raw.githubusercontents.com/sabertazimi/bod/gh-pages/coverage-lines.svg)](https://github.com/sabertazimi/bod/actions/workflows/ci.yml)

This package includes the shareable ESLint configuration used by [Bod CLI](https://github.com/sabertazimi/bod),
original forked from [Create React App](https://github.com/facebook/create-react-app).

Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started):
  How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app):
  How to develop apps bootstrapped with Create React App.

## Usage in Create React App Projects

The easiest way to use this configuration is with
[Create React App](https://github.com/facebook/create-react-app),
which includes it by default.

**You don’t need to install it separately in Create React App projects.**

## Usage Outside of Create React App

If you want to use this ESLint configuration in a project,
you can install it with the following steps.

First, install this package, ESLint and the necessary plugins.
Note that when using npm 7 (or greater) this step is not required,
as npm will automatically install peer dependencies.

```bash
npm i -D eslint-config-bod \
@babel/eslint-parser@^7.14.7 \
@typescript-eslint/eslint-plugin@^4.0.0 \
@typescript-eslint/parser@^4.0.0 \
babel-preset-react-app@^10.0.0 \
eslint@^7.5.0 \
eslint-plugin-flowtype@^5.2.0 \
eslint-plugin-import@^2.22.0 \
eslint-plugin-jsx-a11y@^6.3.1 \
eslint-plugin-react@^7.20.3 \
eslint-plugin-react-hooks@^4.0.8
```

Then create a file named `.eslintrc.json`
with following contents in the root folder of your project:

```json
{
  "extends": "bod"
}
```

That's it!
You can override the settings from `eslint-config-bod`
by editing the `.eslintrc.json` file.
Learn more about
[configuring ESLint](https://eslint.org/docs/user-guide/configuring)
on the ESLint website.

## Jest rules

This config also ships with optional Jest rules for ESLint
(based on [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest)).

You'll first need to add the ESLint plugin for Jest
(if you don't already have it installed).

```sh
npm install --save-dev eslint-plugin-jest@^24.0.0 eslint-plugin-testing-library@^3.9.0
```

You can then enable these rules by adding the Jest config
to the `extends` array in your ESLint config.

```json
{
  "extends": ["bod", "bod/jest"]
}
```

## Accessibility Checks

The following rules from the
[eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
plugin are activated:

- [alt-text](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md)
- [anchor-has-content](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md)
- [aria-activedescendant-has-tabindex](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md)
- [aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md)
- [aria-proptypes](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md)
- [aria-role](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md)
- [aria-unsupported-elements](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md)
- [heading-has-content](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md)
- [href-no-hash](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/v5.1.1/docs/rules/href-no-hash.md)
- [iframe-has-title](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md)
- [img-redundant-alt](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)
- [no-access-key](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)
- [no-distracting-elements](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md)
- [no-redundant-roles](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md)
- [role-has-required-aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md)
- [role-supports-aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md)
- [scope](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md)

If you want to enable even more accessibility rules,
you can create an `.eslintrc.json` file in the root of your project with this content:

```json
{
  "extends": ["bod", "plugin:jsx-a11y/recommended"],
  "plugins": ["jsx-a11y"]
}
```

However,
if you are using
[Create React App](https://github.com/facebook/create-react-app)
and have not ejected,
any additional rules will only be displayed in the
[IDE integrations](https://facebook.github.io/create-react-app/docs/setting-up-your-editor#displaying-lint-output-in-the-editor),
but not in the browser or the terminal.

## Contact

[![Email](https://img.shields.io/badge/-Gmail-ea4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sabertazimi@gmail.com)
[![Twitter](https://img.shields.io/badge/-Twitter-1da1f2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/sabertazimi)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sabertazimi)

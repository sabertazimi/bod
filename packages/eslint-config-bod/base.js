/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This file contains the minimum ESLint configuration required for Create
// React App support, and is used as the `baseConfig` for `eslint-loader`
// to ensure that user-provided configs don't need this boilerplate.

const globals = require('globals')
const eslintConfigESLint = require('eslint-config-eslint')
const eslintPluginReact = require('eslint-plugin-react')
const eslintPluginStylistic = require('@stylistic/eslint-plugin')
const babelParser = require('@babel/eslint-parser')

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
module.exports = [
  {
    ignores: [
      '**/node_modules',
      '**/dist',
      '**/package-lock.json',
      '**/yarn.lock',
      '**/pnpm-lock.yaml',
      '**/bun.lockb',
      '**/output',
      '**/coverage',
      '**/temp',
      '**/.temp',
      '**/tmp',
      '**/.tmp',
      '**/.history',
      '**/.vitepress/cache',
      '**/.nuxt',
      '**/.next',
      '**/.vercel',
      '**/.changeset',
      '**/.idea',
      '**/.cache',
      '**/.output',
      '**/.vite-inspect',
      '**/.yarn',
      '**/CHANGELOG*.md',
      '**/*.min.*',
      '**/LICENSE*',
      '**/__snapshots__',
      '**/auto-import?(s).d.ts',
      '**/components.d.ts',
    ],
  },
  ...eslintConfigESLint,
  eslintPluginStylistic.configs['disable-legacy'],
  eslintPluginStylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: true,
  }),
  {
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.es6,
        ...globals.jest,
        ...globals.node,
      },
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: [require.resolve('babel-preset-react-app/prod')],
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      'react/jsx-uses-vars': 'warn',
      'react/jsx-uses-react': 'warn',
    },
  },
]

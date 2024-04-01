// @ts-check
// We use eslint-loader so even warnings are very visible.
// This is why we prefer to use "WARNING" level for potential errors,
// and we try not to use "ERROR" level at all.

const globals = require('globals')
const eslintPluginJest = require('eslint-plugin-jest')
const eslintPluginTestingLibrary = require('eslint-plugin-testing-library')

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = {
  files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
  plugins: {
    'jest': eslintPluginJest,
    'testing-library': eslintPluginTestingLibrary,
  },
  languageOptions: {
    globals: {
      ...globals.jest,
    },
  },
  // A subset of the recommended rules:
  rules: {
    // https://github.com/jest-community/eslint-plugin-jest
    'jest/no-conditional-expect': 'error',
    'jest/no-identical-title': 'error',
    'jest/no-interpolation-in-snapshots': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-mocks-import': 'error',
    'jest/valid-describe-callback': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-title': 'warn',

    // https://github.com/testing-library/eslint-plugin-testing-library
    'testing-library/await-async-queries': 'error',
    'testing-library/await-async-utils': 'error',
    'testing-library/no-await-sync-queries': 'error',
    'testing-library/no-container': 'error',
    'testing-library/no-debugging-utils': 'error',
    'testing-library/no-dom-import': ['error', 'react'],
    'testing-library/no-node-access': 'error',
    'testing-library/no-promise-in-fire-event': 'error',
    'testing-library/no-render-in-lifecycle': 'error',
    'testing-library/no-unnecessary-act': 'error',
    'testing-library/no-wait-for-multiple-assertions': 'error',
    'testing-library/no-wait-for-side-effects': 'error',
    'testing-library/no-wait-for-snapshot': 'error',
    'testing-library/prefer-find-by': 'error',
    'testing-library/prefer-presence-queries': 'error',
    'testing-library/prefer-query-by-disappearance': 'error',
    'testing-library/prefer-screen-queries': 'error',
    'testing-library/render-result-naming-convention': 'error',
  },
}

// @ts-check
// We use eslint-loader so even warnings are very visible.
// This is why we prefer to use "WARNING" level for potential errors,
// and we try not to use "ERROR" level at all.

// In the future, we might create a separate list of rules for production.
// It would probably be more strict.

// The ESLint browser environment defines all browser globals as valid,
// even though most people don't know some of them exist (e.g. `name` or `status`).
// This is dangerous as it hides accidentally undefined variables.
// We blacklist the globals that we deem potentially confusing.
// To use them, explicitly reference them, e.g. `window.name` or `window.status`.
const tseslint = require('typescript-eslint')
const basicConfig = require('./basic')
const advancedConfig = require('./advanced')
const typescriptConfig = require('./typescript')
const jestConfig = require('./jest')

module.exports = tseslint.config(
  ...basicConfig,
  advancedConfig,
  typescriptConfig,
  jestConfig,
)

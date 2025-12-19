// @ts-check
import antfu, { GLOB_MARKDOWN, GLOB_MARKDOWN_CODE, GLOB_TESTS } from '@antfu/eslint-config'
import eslintPluginTestingLibrary from 'eslint-plugin-testing-library'
import { isPackageExists } from 'local-pkg'

/** @type {import('@antfu/eslint-config').TypedFlatConfigItem} */
const eslintConfigMarkdown = {
  name: '@dg-scripts/markdown/rules',
  files: [GLOB_MARKDOWN_CODE, `${GLOB_MARKDOWN}/**/*.vue`],
  languageOptions: { parserOptions: { project: false, program: null } },
  rules: {
    'react/no-leaked-conditional-rendering': 'off',
  },
}

/** @type {import('@antfu/eslint-config').TypedFlatConfigItem} */
const eslintConfigTestingLibrary = {
  name: '@dg-scripts/testing-library/rules',
  files: [...GLOB_TESTS],
  plugins: {
    'testing-library': eslintPluginTestingLibrary,
  },
  rules: {
    'test/no-interpolation-in-snapshots': 'error',
    'test/no-mocks-import': 'error',
    'test/prefer-lowercase-title': [
      'error',
      {
        ignoreTopLevelDescribe: true,
      },
    ],
    'test/valid-describe-callback': 'error',
    'test/valid-expect': 'error',
    'test/valid-title': 'warn',
    'testing-library/await-async-events': [
      'error',
      { eventModule: 'userEvent' },
    ],
    'testing-library/await-async-queries': 'error',
    'testing-library/await-async-utils': 'error',
    'testing-library/no-await-sync-events': [
      'error',
      { eventModules: ['fire-event'] },
    ],
    'testing-library/no-await-sync-queries': 'error',
    'testing-library/no-container': 'error',
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': 'error',
    'testing-library/no-global-regexp-flag-in-query': 'error',
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

/** @type {import('@antfu/eslint-config').TypedFlatConfigItem} */
const eslintConfigRules = {
  name: '@dg-scripts/defaults/rules',
  rules: {
    'eslint-comments/require-description': 'error',
    'pnpm/json-enforce-catalog': 'off',
    'react/jsx-uses-vars': 'error',
    'style/brace-style': ['error', '1tbs'],
    'ts/prefer-literal-enum-member': [
      'error',
      {
        allowBitwiseExpressions: true,
      },
    ],
  },
}

/** @type {import('@antfu/eslint-config').TypedFlatConfigItem[]} */
const eslintConfig = [
  eslintConfigMarkdown,
  eslintConfigTestingLibrary,
  eslintConfigRules,
]

const eslintConfigNext
  = isPackageExists('next') && isPackageExists('@next/eslint-plugin-next')
    ? { nextjs: true }
    : { nextjs: false }

/** @type {import('@antfu/eslint-config').OptionsConfig} */
const eslintConfigAntfu = {
  react: true,
  stylistic: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  ...eslintConfigNext,
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
}

/**
 * Define ESLint config with default settings.
 *
 * Default configuration includes:
 * - TypeScript support with type-aware rules (tsconfigPath: 'tsconfig.json')
 * - React support
 * - Stylistic formatting rules
 * - Next.js support (auto-detected)
 * - CSS, HTML, and Markdown formatters
 *
 * @param {import('@antfu/eslint-config').OptionsConfig} [options] - ESLint configuration options
 * @param {...import('@antfu/eslint-config').TypedFlatConfigItem} userConfigs - Additional user-defined flat config items
 * @returns {ReturnType<typeof antfu>} ESLint flat config composer
 *
 * @example
 * Use default configuration (type-aware rules enabled)
 * ```js
 * export { default } from '@dg-scripts/eslint-config'
 * ```
 *
 * @example
 * Customize TypeScript options
 * ```js
 * import { defineConfig } from '@dg-scripts/eslint-config'
 *
 * export default defineConfig({
 *   typescript: {
 *     tsconfigPath: './path/to/tsconfig.json',
 *   },
 * })
 * ```
 *
 * @example
 * Disable type-aware rules
 * ```js
 * import { defineConfig } from '@dg-scripts/eslint-config'
 *
 * export default defineConfig({
 *   typescript: true,
 * })
 * ```
 */
export function defineConfig(options = {}, ...userConfigs) {
  return antfu(
    {
      ...eslintConfigAntfu,
      ...options,
    },
    ...eslintConfig,
    ...userConfigs,
  )
}

/**
 * Default ESLint config with type-aware rules enabled.
 *
 * This is equivalent to calling `defineConfig()` without any arguments.
 * Type-aware rules are enabled by default with `tsconfigPath: 'tsconfig.json'`.
 *
 * @example
 * ```js
 * export { default } from '@dg-scripts/eslint-config'
 * ```
 */
export default defineConfig()

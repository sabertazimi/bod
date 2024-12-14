// @ts-check
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import antfu, { GLOB_MARKDOWN, GLOB_MARKDOWN_CODE, GLOB_SRC, GLOB_TESTS, GLOB_TS, GLOB_TSX } from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginPromise from 'eslint-plugin-promise'
import eslintPluginSecurity from 'eslint-plugin-security'
import eslintPluginTestingLibrary from 'eslint-plugin-testing-library'
import { isPackageExists } from 'local-pkg'

const baseDirectory = path.dirname(fileURLToPath(import.meta.url))

const compat = new FlatCompat({
  baseDirectory,
  resolvePluginsRelativeTo: baseDirectory,
})

const eslintConfigNext
  = isPackageExists('next') && isPackageExists('eslint-config-next')
    ? compat.config({
        overrides: [
          {
            files: [GLOB_TS, GLOB_TSX],
            extends: 'next/core-web-vitals',
          },
        ],
      })
    : []

/** @type {import('@antfu/eslint-config').TypedFlatConfigItem} */
const eslintConfigMarkdown = {
  files: [GLOB_MARKDOWN_CODE, `${GLOB_MARKDOWN}/**/*.vue`],
  languageOptions: { parserOptions: { project: false, program: null } },
  rules: {
    'react/no-leaked-conditional-rendering': 'off',
  },
}

/** @type {import('@antfu/eslint-config').TypedFlatConfigItem} */
const eslintConfigTestingLibrary = {
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
const eslintConfigSecurity = {
  files: [GLOB_SRC],
  ignores: [GLOB_MARKDOWN_CODE, `${GLOB_MARKDOWN}/**/*.vue`],
  ...eslintPluginSecurity.configs.recommended,
}

/** @type {import('@antfu/eslint-config').TypedFlatConfigItem} */
const eslintConfigPromise = {
  files: [GLOB_SRC],
  ignores: [GLOB_MARKDOWN_CODE, `${GLOB_MARKDOWN}/**/*.vue`],
  plugins: {
    promise: eslintPluginPromise,
  },
  rules: {
    ...eslintPluginPromise.configs.recommended.rules,
    'promise/always-return': [
      'error',
      {
        ignoreLastCallback: true,
      },
    ],
  },
}

/** @type {import('@antfu/eslint-config').TypedFlatConfigItem} */
const eslintConfigRules = {
  rules: {
    'eslint-comments/require-description': 'error',
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
  ...eslintConfigNext,
  eslintConfigMarkdown,
  eslintConfigTestingLibrary,
  eslintConfigSecurity,
  eslintConfigPromise,
  eslintConfigRules,
]

/** @type {import('@antfu/eslint-config').OptionsConfig} */
const eslintConfigAntfu = {
  react: true,
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
}

export default antfu(
  {
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
    ...eslintConfigAntfu,
  },
  ...eslintConfig,
)

export const disableTypeAware = antfu(eslintConfigAntfu, ...eslintConfig)

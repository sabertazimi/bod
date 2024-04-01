import path from 'node:path'
import { fileURLToPath } from 'node:url'
import antfu, { GLOB_MARKDOWN, GLOB_MARKDOWN_CODE, GLOB_TS, GLOB_TSX } from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
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
    : {}

/** @type {import('@antfu/eslint-config').TypedFlatConfigItem} */
const eslintConfigMarkdown = {
  files: [GLOB_MARKDOWN_CODE, `${GLOB_MARKDOWN}/**/*.vue`],
  languageOptions: { parserOptions: { project: false, program: null } },
}

/** @type {import('@antfu/eslint-config').TypedFlatConfigItem} */
const eslintConfigRules = {
  rules: {
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
const eslintConfig = [eslintConfigNext, eslintConfigMarkdown, eslintConfigRules]

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
      tsconfigPath: ['tsconfig.json', 'packages/*/tsconfig.json'],
    },
    ...eslintConfigAntfu,
  },
  ...eslintConfig,
)

export const disableTypeAware = antfu(eslintConfigAntfu, ...eslintConfig)

import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { isPackageExists } from 'local-pkg'
import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const baseDirectory = path.dirname(fileURLToPath(import.meta.url))

const compat = new FlatCompat({
  baseDirectory,
  resolvePluginsRelativeTo: baseDirectory,
})

export default antfu(
  {
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
    react: true,
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
  },
  isPackageExists('next') && isPackageExists('eslint-config-next')
    ? compat.config({
      overrides: [
        {
          files: '**/*.{ts,tsx}',
          extends: 'next/core-web-vitals',
        },
      ],
    })
    : {},
  {
    rules: {
      'ts/prefer-literal-enum-member': [
        'error',
        {
          allowBitwiseExpressions: true,
        },
      ],
    },
  },
)

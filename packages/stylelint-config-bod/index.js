module.exports = {
  extends: [
    'stylelint-config-html',
    'stylelint-config-standard',
    'stylelint-config-recess-order',
  ],
  rules: {
    'at-rule-no-deprecated': [
      true,
      {
        ignoreAtRules: [
          'apply',
        ],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'import',
          'theme',
          'source',
          'utility',
          'variant',
          'custom-variant',
          'apply',
          'reference',
          'config',
          'plugin',
          'layer',
          'container',
          'responsive',
          'screen',
          'use',
          'forward',
          'mixin',
          'include',
          'function',
          'extend',
          'error',
          'warn',
          'debug',
          'at-root',
          'if',
          'else',
          'each',
          'for',
          'while',
          'return',
        ],
      },
    ],
    'import-notation': [
      'string',
    ],
  },
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      extends: ['stylelint-config-standard-scss'],
    },
    {
      files: ['*.md', '**/*.md'],
      customSyntax: 'postcss-markdown',
    },
  ],
}

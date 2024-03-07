module.exports = {
  extends: [
    'stylelint-config-html',
    'stylelint-config-standard',
    'stylelint-config-recess-order',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'layer',
          'container',
          'variants',
          'responsive',
          'screen',
          'use',
          'forward',
          'import',
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

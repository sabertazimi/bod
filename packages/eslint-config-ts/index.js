const basic = require('@dg-scripts/eslint-config-basic');

module.exports = {
  extends: [
    '@dg-scripts/eslint-config-basic',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
    },
  },
  overrides: basic.overrides,
  rules: {
    'import/named': 'off',

    // TS
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-ignore': 'allow-with-description' },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      { multiline: { delimiter: 'none' } },
    ],
    '@typescript-eslint/type-annotation-spacing': ['error', {}],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', disallowTypeAnnotations: false },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    // Override JS
    'no-useless-constructor': 'off',
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'warn',
      { functions: false, classes: false, variables: true },
    ],
    'brace-style': 'off',
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: true },
    ],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    quotes: 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': ['error', 'always'],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'error',
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': [
      'error',
      { before: true, after: true },
    ],
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': [
      'error',
      { before: false, after: true },
    ],
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error', 'functions'],
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],

    // off
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/parameter-properties': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-namespace': 'off',
  },
};

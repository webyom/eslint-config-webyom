module.exports = {
  plugins: ['react', 'import', 'flowtype'],

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:flowtype/recommended'
  ],

  rules: {
    'no-console': 2,
    // Variables
    'no-unused-vars': 0,
    // Stylistic Issues
    'arrow-spacing': [2, {before: true, after: true}],
    'block-spacing': [2, 'never'],
    'brace-style': [2, '1tbs', {allowSingleLine: true}],
    'comma-spacing': [2, {before: false, after: true}],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'consistent-this': [2, 'self'],
    'eol-last': 0,
    'func-call-spacing': [2, 'never'],
    'func-names': 0,
    indent: [2, 2],
    'key-spacing': [2, {beforeColon: false, afterColon: true}],
    'keyword-spacing': 2,
    'linebreak-style': [2, 'unix'],
    'lines-between-class-members': [2, 'always', {exceptAfterSingleLine: true}],
    'max-depth': [2, 7],
    'max-nested-callbacks': [2, 4],
    'max-params': [2, 6],
    'new-cap': 0,
    'new-parens': 2,
    'no-cond-assign': 0,
    'no-constant-condition': 0,
    'no-control-regex': 0,
    'no-duplicate-imports': 0,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, {max: 2, maxEOF: 1}],
    'no-trailing-spaces': 2,
    'no-unexpected-multiline': 0,
    'no-unneeded-ternary': 2,
    'object-curly-spacing': [2, 'never'],
    'operator-linebreak': [
      2,
      'before',
      {overrides: {'?': 'ignore', ':': 'ignore'}}
    ],
    'padded-blocks': [2, 'never'],
    'padding-line-between-statements': [
      2,
      {
        blankLine: 'always',
        prev: ['export', 'class', 'block-like'],
        next: ['export', 'class', 'block-like']
      },
      {
        blankLine: 'any',
        prev: ['for', 'if', 'try', 'while'],
        next: ['for', 'if', 'try', 'while']
      },
      {blankLine: 'always', prev: ['import', 'cjs-import'], next: '*'},
      {
        blankLine: 'never',
        prev: ['import', 'cjs-import'],
        next: ['import', 'cjs-import']
      },
      {blankLine: 'always', prev: '*', next: ['export', 'cjs-export']},
      {
        blankLine: 'any',
        prev: ['export', 'cjs-export'],
        next: ['export', 'cjs-export']
      }
    ],
    'prefer-const': [
      2,
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    quotes: [2, 'single'],
    'quote-props': [0, 'consistent', {keywords: true}],
    'semi-spacing': [2, {before: false, after: true}],
    semi: [2, 'always'],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, {anonymous: 'always', named: 'never'}],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {words: true, nonwords: false}],
    'spaced-comment': [2, 'always', {exceptions: ['-+']}],
    'wrap-regex': 2,
    // Import
    'import/no-duplicates': 2,
    'import/no-unresolved': 0,
    // React
    'react/display-name': 0
  }
};

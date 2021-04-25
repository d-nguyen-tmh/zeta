module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    indent: [
      2
    ],
    quotes: [
      2,
      'single'
    ],
    'react/prop-types': 0,
    'linebreak-style': [
      2,
      'unix'
    ],
    'no-use-before-define': [0],
    '@typescript-eslint/no-use-before-define': [1]
  }
}

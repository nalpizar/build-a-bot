module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'comma-dangle': ['error', 'always-multiline'],
    'vue/no-multiple-template-root': 'off',
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
};

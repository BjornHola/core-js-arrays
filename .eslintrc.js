module.exports = {
  root: true,
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  overrides: [
    {
      files: ['src/arrays-tasks.js'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
  plugins: ['prettier'],
  noInlineConfig: false,
};

/* eslint-disable no-undef */

   module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:playwright/recommended',
      'prettier'
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'playwright'
    ],
    rules: {
      // Add any custom rules here
    },
  };
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    'plugin:vitest-globars/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  env: {
    'vitest-globars/env': true,
    'eslint-env node': true
  }
}

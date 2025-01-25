// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  files: ['**/*.vue', '**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.md'],
  ignores: ['**/*.css'],
  language: 'markdown/commonmark',
  rules: {
    quotes: ['error', 'single'],
    'max-len': ['error', { code: 120 }],
    'jsx-quotes': ['error', 'prefer-single'],
    'object-curly-spacing': ['error', 'always'],
    'vue/html-indent': ['error', 2],
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 1,
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: 1,
      },
    ],
    'markdown/no-html': 'error',
    'nuxt/prefer-import-meta': 'error',
  },
});

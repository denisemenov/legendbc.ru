// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import eslintPlugin from 'vite-plugin-eslint';
import json from '@eslint/json';
import markdown from '@eslint/markdown';

export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/i18n', '@nuxt/fonts', '@nuxt/image', '@nuxt/eslint'],

  content: {
    renderer: {
      anchorLinks: false,
    },
  },

  fonts: {
    experimental: {
      processCSSVariables: true,
    },
    families: [
      {
        name: 'Noto Sans',
        provider: 'google',
      },
      {
        name: 'Noto Serif',
        provider: 'google',
      },
      {
        name: 'Noto Sans Display',
        provider: 'google',
      },
      {
        name: 'Noto Sans Mono',
        provider: 'google',
      },
      {
        name: 'Noto Serif Display',
        provider: 'google',
      },
    ],
  },
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-01-18',
  i18n: {
    locales: [
      { code: 'en', name: 'English', language: 'en-US' },
      { code: 'ru', name: 'Russian', language: 'ru-RU' },
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
  },
  vite: {
    plugins: [tailwindcss(), eslintPlugin()],
  },
  css: ['~/assets/css/main.css'],
});

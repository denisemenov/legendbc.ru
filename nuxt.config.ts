// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/i18n', '@nuxt/fonts', '@nuxt/image'],

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
      { code: 'ru', name: 'Русский', language: 'ru-RU' },
    ],
    strategy: 'prefix_and_default',
    defaultLocale: 'ru',
    detectBrowserLanguage: {
      redirectOn: 'root',
      alwaysRedirect: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ['~/assets/css/main.css'],
});

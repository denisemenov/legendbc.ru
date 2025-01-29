// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/content', '@nuxthq/studio', '@nuxt/fonts', 'nuxt-swiper', '@nuxtjs/i18n', '@nuxt/ui'],

  fonts: {
    families: [{ name: 'Noto Sans', provider: 'google' }],
  },

  compatibilityDate: '2025-01-12',

  i18n: {
    locales: [
      { code: 'en', name: 'English', language: 'en-US' },
      { code: 'ru', name: 'Russian', language: 'ru-RU' },
    ],
    defaultLocale: 'ru',
    strategy: 'prefix_except_default',
  },

  future: {
    compatibilityVersion: 4,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ['~/assets/css/main.css'],
});

// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/i18n', '@nuxt/fonts', '@nuxt/image'],

  content: {
    renderer: {
      anchorLinks: false,
    },
    preview: {
      api: 'https://api.nuxt.studio',
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
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-01-18',
  i18n: {
    langDir: 'locales',
    locales: [
      { code: 'en', name: 'En', iso: 'en-US', file: 'en.json' },
      { code: 'ru', name: 'Ру', iso: 'ru-RU', file: 'ru.json' },
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'ru',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    vueI18n: './i18n.config.ts',
    experimental: {
      autoImportTranslationFunctions: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ['~/assets/css/main.css'],
});

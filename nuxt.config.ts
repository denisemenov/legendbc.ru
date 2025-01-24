// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content','@nuxtjs/i18n', '@nuxt/fonts'],
  fonts: {
    families: [{ name: 'Noto Sans', provider: 'google' }],
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
});

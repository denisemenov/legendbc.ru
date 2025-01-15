// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxthq/studio',
    '@nuxtjs/seo',
    '@nuxt/fonts',
    'nuxt-swiper',
  ],
  fonts: {
    families: [{ name: 'Noto Sans', provider: 'google' }],
  },

  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2025-01-12',

  content: {
    contentHead: true,
    markdown: {
      anchorLinks: false,
      mdc: true,
    },
  },
});

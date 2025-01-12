// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxthq/studio',
    '@nuxtjs/seo'
  ],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-12'
})

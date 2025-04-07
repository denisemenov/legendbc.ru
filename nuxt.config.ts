// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/seo',
    '@nuxtjs/i18n',
    '@nuxt/fonts',
    '@nuxt/image',
    'nuxt-yandex-metrika',
    '@nuxt/content',
    '@nuxt/scripts',
  ],

  // Загружаем GTM только в production (рекомендуется для повышения производительности)
  $production: {
    scripts: {
      registry: {
        googleTagManager: {
          id: 'GTM-T46RLBQV',
        }
      }
    }
  },

  yandexMetrika: {
    id: 41876814,
    webvisor: true,
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
  },

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
      { name: 'Noto Sans', provider: 'google' },
      { name: 'Noto Serif', provider: 'google' },
      { name: 'Noto Sans Display', provider: 'google' },
      { name: 'Noto Sans Mono', provider: 'google' },
      { name: 'Noto Serif Display', provider: 'google' },
    ],
  },

  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#bea066' },
        { name: 'msapplication-TileColor', content: '#bea066' },
        { name: 'msapplication-config', content: '/browserconfig.xml' },
        { name: 'application-name', content: 'Бильярдный клуб Легенда' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: '#bea066' },
      ],
      link: [
        // Main Icons
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/images/chrome-touch-icon-192x192.png' },

        // Apple Touch Icons
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/images/apple-touch-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/images/apple-touch-icon-152x152.png' },

        // Safari Pinned Tab
        { rel: 'mask-icon', href: '/images/placeholder.svg', color: '#bea066' },

        // Manifest
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-02-05',

  i18n: {
    locales: [
      { code: 'en', name: 'En', file: 'en.json', iso: 'en-US' },
      { code: 'ru', name: 'Ру', file: 'ru.json', iso: 'ru-RU' },
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'ru',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  seo: {
    siteName: 'Бильярдный клуб Легенда',
    siteUrl: 'https://legendbc.ru',
    automaticSitemap: true,
    automaticRobotsTxt: true,
    defaultOgImage: {
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
    },
    i18n: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  css: ['./assets/css/main.css'],
});
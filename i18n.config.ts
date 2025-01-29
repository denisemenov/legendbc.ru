import en from './i18n/locales/en.json'
import ru from './i18n/locales/ru.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  defaultLocale: 'ru',
  messages: {
    en,
    ru
  },
  fallbackLocale: 'ru',
  datetimeFormats: {
    en: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
    },
    ru: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
    }
  }
}))

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import en from './locales/en.json'
import ja from './locales/ja.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, ja: { translation: ja } },
    lng: 'ja',
    fallbackLng: 'ja',
    interpolation: { escapeValue: false },
    supportedLngs: ['ja', 'en'],
    debug: true
  })

export default i18n

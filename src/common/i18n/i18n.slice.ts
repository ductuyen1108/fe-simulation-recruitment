import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import jaTranslations from '@/common/i18n/locales/ja.json'
import enTranslations from '@/common/i18n/locales/en.json'

export type Language = 'ja' | 'en'

const translations = {
  ja: jaTranslations,
  en: enTranslations
} as const

interface I18nState {
  language: Language
}

const initialState: I18nState = {
  language: 'ja'
}

const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload
    }
  }
})

export const { setLanguage } = i18nSlice.actions
export default i18nSlice.reducer

export function getTranslations(lang: Language) {
  return translations[lang]
}

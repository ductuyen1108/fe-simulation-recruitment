// src/i18n/i18n.utils.ts
import { store } from '../redux/store'
import { getTranslations } from '../i18n/i18n.slice'
import type { TranslationKeys } from '../types/i18n'

export function tGlobal(key: TranslationKeys, params?: Record<string, string | number>) {
  const state = store.getState()
  const language = state.i18n.language
  const translations = getTranslations(language)

  const keys = key.split('.')
  let value = keys.reduce<any>((obj, k) => (obj && typeof obj === 'object' ? obj[k] : undefined), translations)

  if (typeof value !== 'string') return key

  if (params) {
    Object.entries(params).forEach(([param, replacement]) => {
      value = value.replace(new RegExp(`{${param}}`, 'g'), String(replacement))
    })
  }

  return value
}

// src/common/i18n.tsx
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { type RootState } from '../redux/store'
import { getTranslations, setLanguage, type Language } from '../i18n/i18n.slice'
import type { TranslationKeys } from '../types/i18n'

interface I18nProviderProps {
  children: React.ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  const language = useSelector((state: RootState) => state.i18n.language)
  const dispatch = useDispatch()

  React.useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const translations = React.useMemo(() => getTranslations(language), [language])

  const t = (key: TranslationKeys, params?: Record<string, string | number>): string => {
    try {
      const keys = key.split('.')
      let value = keys.reduce<any>((obj, k) => {
        if (obj && typeof obj === 'object' && k in obj) {
          return obj[k]
        }
        return undefined
      }, translations)

      if (typeof value !== 'string') return key

      if (params) {
        Object.entries(params).forEach(([param, replacement]) => {
          value = value.replace(new RegExp(`{${param}}`, 'g'), String(replacement))
        })
      }

      return value
    } catch {
      return key
    }
  }

  const setLang = (lang: Language) => {
    dispatch(setLanguage(lang))
  }

  return (
    <I18nContext.Provider
      value={{
        language,
        setLanguage: setLang,
        t
      }}
    >
      {children}
    </I18nContext.Provider>
  )
}

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKeys, params?: Record<string, string | number>) => string
}

const I18nContext = React.createContext<I18nContextType | null>(null)

export function useI18n() {
  const context = React.useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}

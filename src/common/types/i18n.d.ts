import en from '../i18n/locales/en.json'

type Join<K, P> = K extends string | number ? (P extends string | number ? `${K}.${P}` : never) : never

type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ...0[]]

type Leaves<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T & (string | number)]: T[K] extends object ? Join<K, Leaves<T[K], Prev[D]>> : K
    }[keyof T & (string | number)]
  : never

// Tất cả key hợp lệ trong en.json
export type TranslationKeys = Leaves<typeof en>

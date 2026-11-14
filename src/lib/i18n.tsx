import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Lang } from '@/types'
import { dict } from '@/data/dict'
import { safeGet, safeSet } from './storage'

const LANGS: Lang[] = ['ru', 'en', 'uz']
interface I18n { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string; price: (n: number | null) => string }
const Ctx = createContext<I18n | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const s = safeGet('aljabr-lang') as Lang | null
    return s && LANGS.includes(s) ? s : 'ru' // asosiy til: rus
  })
  useEffect(() => { document.documentElement.lang = lang }, [lang])
  const setLang = useCallback((l: Lang) => { setLangState(l); safeSet('aljabr-lang', l) }, [])
  const t = useCallback((k: string) => dict[lang][k] ?? dict.ru[k] ?? k, [lang])
  const price = useCallback(
    (n: number | null) => (n === null ? t('price.contract') : `${new Intl.NumberFormat('ru-RU').format(n)} ${t('currency')}`),
    [t],
  )
  const value = useMemo(() => ({ lang, setLang, t, price }), [lang, setLang, t, price])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const useI18n = () => {
  const c = useContext(Ctx)
  if (!c) throw new Error('I18nProvider yo‘q')
  return c
}
export { LANGS }

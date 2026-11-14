import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useI18n, LANGS } from '@/lib/i18n'
import { useTheme } from '@/lib/theme'
import { Button } from '@/components/ui/Button'
import { site } from '@/config/site'

const nav = [
  { to: '/products', k: 'nav.products' }, { to: '/solutions', k: 'nav.solutions' },
  { to: '/about', k: 'nav.about' }, { to: '/contact', k: 'nav.contact' },
]

export function Header() {
  const { t, lang, setLang } = useI18n()
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const link = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-secondary-700 dark:hover:text-secondary ${isActive ? 'text-secondary-700 dark:text-secondary' : ''}`

  return (
    <header className="sticky top-0 z-40 border-b border-sky-line/70 bg-white/85 backdrop-blur dark:border-night-line dark:bg-night/85">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5" aria-label={site.name}>
          <img src="/logo.png" alt="" width={36} height={36} className="h-9 w-9 rounded-lg" />
          <span className="text-sm font-semibold tracking-[0.2em] text-primary dark:text-white">{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="main">
          {nav.map((n) => <NavLink key={n.to} to={n.to} className={link}>{t(n.k)}</NavLink>)}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-1 text-xs font-semibold sm:flex" role="group" aria-label="language">
            {LANGS.map((l) => (
              <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l}
                className={`rounded px-1.5 py-1 uppercase ${lang === l ? 'text-primary dark:text-secondary' : 'text-slate-500 hover:text-primary dark:hover:text-white'}`}>{l}</button>
            ))}
          </div>
          <button onClick={toggle} aria-label={theme === 'dark' ? t('theme.toLight') : t('theme.toDark')}
            className="grid h-9 w-9 place-items-center rounded-full border border-sky-line text-primary hover:border-primary dark:border-night-line dark:text-slate-100">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Button to="/apply" className="hidden !py-2 sm:inline-flex">{t('cta.apply')}</Button>
          <button className="grid h-9 w-9 place-items-center md:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={t('menu.open')}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-sky-line bg-white px-4 py-4 dark:border-night-line dark:bg-night md:hidden">
          <nav className="flex flex-col gap-3" aria-label="mobile">
            {nav.map((n) => <NavLink key={n.to} to={n.to} className={link} onClick={() => setOpen(false)}>{t(n.k)}</NavLink>)}
          </nav>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-2 text-xs font-semibold uppercase">
              {LANGS.map((l) => <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l} className={lang === l ? 'text-secondary-700' : 'text-slate-500'}>{l}</button>)}
            </div>
            <Button to="/apply" className="!py-2">{t('cta.apply')}</Button>
          </div>
        </div>
      )}
    </header>
  )
}

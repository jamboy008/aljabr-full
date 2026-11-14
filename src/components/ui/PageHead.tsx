import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useI18n } from '@/lib/i18n'

export function PageHead({ crumb, title, sub, children }: { crumb: string; title: string; sub?: string; children?: ReactNode }) {
  const { t } = useI18n()
  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6">
      <nav className="text-xs text-slate-500" aria-label="breadcrumb">
        <Link to="/" className="hover:text-primary dark:hover:text-secondary">{t('crumb.home')}</Link>
        <span className="mx-2">/</span><span className="font-semibold text-primary dark:text-white">{crumb}</span>
      </nav>
      <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-primary-950 dark:text-white sm:text-5xl">{title}</h1>
      {sub && <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">{sub}</p>}
      {children}
    </section>
  )
}

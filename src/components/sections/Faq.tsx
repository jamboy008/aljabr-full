import { ChevronDown } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

export function Faq() {
  const { t } = useI18n()
  return (
    <section className="bg-white dark:bg-night-card">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-primary-950 dark:text-white sm:text-4xl">{t('faq.title')}</h2>
        <div className="mt-10 space-y-3">
          {[1, 2, 3, 4].map((n) => (
            <details key={n} className="group rounded-xl border border-sky-line bg-white open:border-primary dark:border-night-line dark:bg-night dark:open:border-secondary">
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-sm font-semibold">
                {t(`faq.q${n}`)}<ChevronDown size={16} className="shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-400">{t(`faq.a${n}`)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

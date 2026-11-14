import { Clock, Send, Phone } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { site } from '@/config/site'
import { PageHead } from '@/components/ui/PageHead'
import { ApplyForm } from '@/components/forms/ApplyForm'

export default function ApplyPage() {
  const { t } = useI18n()
  return (
    <>
      <PageHead crumb={t('cta.apply')} title={t('ap.title')} sub={t('ap.sub')} />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-20 sm:px-6 lg:grid-cols-[1.5fr_1fr]">
        <ApplyForm />
        <aside className="space-y-5">
          <div className="rounded-2xl bg-primary p-6 text-white dark:bg-night-card dark:ring-1 dark:ring-night-line">
            <h2 className="text-lg font-bold">{t('ap.direct')}</h2>
            <a href={site.telegramUrl} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-sm hover:bg-white/15"><Send size={16} />{site.telegram}</a>
            <a href={site.phoneHref} className="mt-2 flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-sm hover:bg-white/15"><Phone size={16} />{site.phone}</a>
            <p className="mt-4 flex items-center gap-2 text-xs text-slate-300"><Clock size={14} />{t('ap.hours')}</p>
          </div>
          <div className="rounded-2xl border border-sky-line bg-white p-6 dark:border-night-line dark:bg-night-card">
            <h2 className="text-lg font-bold text-primary-950 dark:text-white">{t('ap.how')}</h2>
            <ol className="mt-4 space-y-3">
              {[1, 2, 3, 4, 5].map((n) => (
                <li key={n} className="flex items-center gap-3 text-sm">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky-surface text-xs font-bold dark:bg-night">{n}</span>{t(`ap.s${n}`)}
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </>
  )
}

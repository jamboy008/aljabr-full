import { useI18n } from '@/lib/i18n'
import { Button } from '@/components/ui/Button'
import { site } from '@/config/site'

export function CtaBand() {
  const { t } = useI18n()
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl rounded-2xl bg-primary px-6 py-16 text-center text-white dark:bg-night-card dark:ring-1 dark:ring-night-line">
        <p className="text-sm font-medium text-secondary-300">{t('band.eyebrow')}</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">{t('band.title')}</h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">{t('band.text')}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/apply" variant="sun">{t('cta.apply')}</Button>
          <Button href={site.telegramUrl} variant="ghost">{t('cta.telegram')} ({site.telegram})</Button>
        </div>
      </div>
    </section>
  )
}

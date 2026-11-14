import { useI18n } from '@/lib/i18n'
export function Stats() {
  const { t } = useI18n()
  return (
    <section className="bg-white dark:bg-night">
      <dl className="mx-auto grid max-w-7xl gap-px px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="border-l-2 border-sky-line px-5 py-2 dark:border-night-line">
            <dd className="text-4xl font-bold text-primary-950 dark:text-white">{t(`stats.${n}`)}</dd>
            <dt className="mt-1 text-sm font-semibold">{t(`stats.${n}l`)}</dt>
            <p className="text-xs text-slate-500">{t(`stats.${n}d`)}</p>
          </div>
        ))}
      </dl>
    </section>
  )
}

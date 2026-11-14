import { useI18n } from '@/lib/i18n'
export function Marquee() {
  const { t } = useI18n()
  return (
    <div className="border-y border-sky-line bg-[#E6F1FA] dark:border-night-line dark:bg-night-card">
      <ul className="mx-auto flex max-w-7xl flex-wrap justify-between gap-x-8 gap-y-2 px-4 py-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 dark:text-slate-300 sm:px-6">
        {[1, 2, 3, 4, 5].map((n) => <li key={n}>{t(`marquee.${n}`)}</li>)}
      </ul>
    </div>
  )
}

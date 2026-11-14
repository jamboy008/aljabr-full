import { useI18n } from '@/lib/i18n'
import { PageHead } from '@/components/ui/PageHead'
import { Button } from '@/components/ui/Button'

const years = ['2023', '2024', '2025', '2026']

export default function AboutPage() {
  const { t } = useI18n()
  return (
    <>
      <PageHead crumb={t('nav.about')} title={t('ab.title')} sub={t('ab.text')} />
      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="rounded-xl border border-sky-line bg-white p-6 dark:border-night-line dark:bg-night-card">
            <p className={`text-4xl font-bold ${n === 2 ? 'text-secondary-700 dark:text-secondary' : 'text-primary-950 dark:text-white'}`}>{t(`ab.m${n}`)}</p>
            <p className="mt-2 text-sm font-semibold">{t(`ab.m${n}l`)}</p>
          </div>
        ))}
      </section>

      <section className="bg-[#E6F1FA] dark:bg-night-card">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold text-primary-950 dark:text-white">{t('ab.pil')}</h2>
          <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400">{t('ab.pild')}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <article key={n} className="rounded-xl bg-white p-6 dark:bg-night">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-sky-surface text-sm font-bold dark:bg-night-card">0{n}</span>
                <h3 className="mt-4 font-semibold">{t(`ab.p${n}`)}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{t(`ab.p${n}d`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold text-primary-950 dark:text-white">{t('ab.tl')}</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {years.map((y, i) => (
            <li key={y} className={`rounded-xl border p-5 ${i === 3 ? 'border-dashed border-slate-300 opacity-80 dark:border-night-line' : 'border-sky-line bg-white dark:border-night-line dark:bg-night-card'}`}>
              <p className="text-2xl font-bold text-primary-950 dark:text-white">{y}</p>
              <p className="mt-2 text-sm font-semibold">{t(`ab.t${i + 1}`)}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-2xl bg-primary-950 p-10 text-white dark:bg-night-card dark:ring-1 dark:ring-night-line">
          <h2 className="max-w-2xl text-3xl font-bold">{t('ab.cta')}</h2>
          <div className="mt-6 flex flex-wrap gap-3"><Button to="/apply" variant="sun">{t('cta.apply')}</Button><Button to="/contact" variant="ghost">{t('nav.contact')}</Button></div>
        </div>
      </section>
    </>
  )
}

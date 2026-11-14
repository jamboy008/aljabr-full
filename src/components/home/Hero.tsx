import { LayoutGrid, Users, Wallet, Briefcase } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { Button } from '@/components/ui/Button'

const bars = [38, 52, 44, 66, 60, 78, 94]
const months: Record<string, string[]> = {
  ru: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  uz: ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun', 'Iyul'],
}

export function Hero() {
  const { t, lang } = useI18n()
  const side = [
    { i: LayoutGrid, k: 'demo.dash', on: true }, { i: Users, k: 'demo.clients' },
    { i: Wallet, k: 'demo.finance' }, { i: Briefcase, k: 'demo.staff' },
  ]
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:py-24">
      <div>
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-primary-950 dark:text-white sm:text-5xl lg:text-6xl">
          {t('hero.title1')}{' '}
          <span className="inline-block rounded-lg bg-primary px-3 text-secondary-300 dark:bg-secondary dark:text-primary-950">{t('hero.title2')}</span>{' '}
          {t('hero.title3')}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-400">{t('hero.text')}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/apply">{t('cta.start')}</Button>
          <Button to="/products" variant="outline">{t('cta.services')}</Button>
        </div>
        <p className="mt-8 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <span className="h-2 w-2 rounded-full bg-secondary-700" aria-hidden />{t('hero.note')}
        </p>
      </div>

      <div className="rounded-2xl border border-sky-line bg-white p-4 shadow-sm dark:border-night-line dark:bg-night-card" aria-hidden="true">
        <div className="flex items-center gap-2 border-b border-sky-line pb-3 dark:border-night-line">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" /><span className="h-2.5 w-2.5 rounded-full bg-slate-300" /><span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="ml-2 text-xs text-slate-500">aljabr-core // dashboard.v2</span>
          <span className="ml-auto rounded bg-sky-surface px-2 py-0.5 text-[10px] text-slate-500 dark:bg-night">{t('demo.badge')}</span>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-[150px_1fr]">
          <ul className="hidden space-y-1 sm:block">
            {side.map(({ i: Icon, k, on }) => (
              <li key={k} className={`flex items-center gap-2 rounded-md px-2.5 py-2 text-xs ${on ? 'bg-sky-surface font-semibold text-primary dark:bg-night dark:text-white' : 'text-slate-500'}`}>
                <Icon size={14} />{t(k)}
              </li>
            ))}
          </ul>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              {[['demo.m1', '1,420', '+12.4%'], ['demo.m2', '184.5M', t('demo.stable')], ['demo.m3', '94.8%', t('demo.sla')]].map(([k, v, s]) => (
                <div key={k} className="rounded-lg border border-sky-line p-2.5 dark:border-night-line">
                  <p className="truncate text-[10px] text-slate-500">{t(k)}</p>
                  <p className="text-lg font-bold text-primary-950 dark:text-white">{v}</p>
                  <p className="text-[10px] font-medium text-secondary-700">{s}</p>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-sky-line p-3 dark:border-night-line">
              <div className="flex justify-between text-xs font-semibold"><span>{t('demo.chart')}</span><span className="font-normal text-slate-500">{t('demo.period')}</span></div>
              <div className="mt-4 flex h-32 items-end gap-2">
                {bars.map((h, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1">
                    <div style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }}
                      className={`w-full origin-bottom animate-grow rounded-t ${i === bars.length - 1 ? 'bg-primary dark:bg-secondary' : 'bg-sky-surface dark:bg-night-line'}`} />
                  </div>
                ))}
              </div>
              <div className="mt-1 flex gap-2 text-[10px] text-slate-500">{months[lang].map((m) => <span key={m} className="flex-1 text-center">{m}</span>)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

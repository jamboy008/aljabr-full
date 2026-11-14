import { AtSign, CheckCircle2, Clock, MapPin, Phone, Send, UserRound } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { site } from '@/config/site'
import { PageHead } from '@/components/ui/PageHead'
import { ApplyForm } from '@/components/forms/ApplyForm'

const card = 'rounded-xl border border-sky-line bg-white p-5 dark:border-night-line dark:bg-night-card'

export default function ContactPage() {
  const { t } = useI18n()
  const info = [[CheckCircle2, 1], [UserRound, 2], [Clock, 3]] as const
  const rows: [string, string][] = [[t('ct.legal'), site.legalName], [t('ct.inn'), site.inn], [t('ct.bank'), site.bank]]
  return (
    <>
      <PageHead crumb={t('nav.contact')} title={t('ct.title')} sub={t('ct.text')}>
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {info.map(([Icon, n]) => (
            <li key={n} className={`${card} flex items-center gap-3`}>
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-sky-surface text-secondary-700 dark:bg-night"><Icon size={18} /></span>
              <div><p className="text-sm font-semibold">{t(`ct.i${n}`)}</p><p className="text-xs text-slate-600 dark:text-slate-400">{t(`ct.i${n}d`)}</p></div>
            </li>
          ))}
        </ul>
      </PageHead>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[1.5fr_1fr]">
        <ApplyForm quick />
        <aside className="space-y-4">
          <a href={site.telegramUrl} target="_blank" rel="noopener noreferrer" className="block rounded-2xl bg-primary p-6 text-white transition-transform hover:-translate-y-0.5 dark:bg-night-card dark:ring-1 dark:ring-night-line">
            <Send size={20} /><h2 className="mt-3 text-lg font-bold">{t('ct.tg')}</h2>
            <p className="mt-1 text-sm text-slate-300">{t('ct.tgd')}</p>
            <p className="mt-4 rounded-lg bg-white/10 px-3 py-2 text-sm">{site.telegram}</p>
          </a>
          <a href={site.phoneHref} className={`${card} flex items-center gap-4`}><Phone size={20} className="text-secondary-700" /><div><p className="text-[10px] uppercase tracking-wide text-slate-500">{t('ct.phone')}</p><p className="text-lg font-bold">{site.phone}</p></div></a>
          <a href={`mailto:${site.email}`} className={`${card} flex items-center gap-4`}><AtSign size={20} className="text-secondary-700" /><div><p className="text-[10px] uppercase tracking-wide text-slate-500">{t('ct.email')}</p><p className="font-bold">{site.email}</p></div></a>
          <div className={`${card} flex items-start gap-4`}><MapPin size={20} className="mt-0.5 text-secondary-700" /><div><p className="text-[10px] uppercase tracking-wide text-slate-500">{t('ct.office')}</p><p className="text-sm font-semibold">{t('ct.addr')}</p></div></div>
        </aside>
      </div>
      <section className="bg-[#E6F1FA] dark:bg-night-card">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-primary-950 dark:text-white">{t('ct.req')}</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">{t('ct.reqd')}</p>
          <dl className="mt-6 grid gap-4 sm:grid-cols-3">
            {rows.map(([k, v]) => <div key={k} className="rounded-xl bg-white p-5 dark:bg-night"><dt className="text-[10px] uppercase tracking-wide text-slate-500">{k}</dt><dd className="mt-1 font-bold">{v}</dd></div>)}
          </dl>
        </div>
      </section>
    </>
  )
}

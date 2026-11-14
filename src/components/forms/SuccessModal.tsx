import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BadgeCheck, Copy, Send, X } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { site } from '@/config/site'

interface Props { id: string; product: string; plan: string; phone: string; onClose: () => void }

export function SuccessModal({ id, product, plan, phone, onClose }: Props) {
  const { t } = useI18n()
  const btn = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    btn.current?.focus()
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    addEventListener('keydown', esc)
    return () => removeEventListener('keydown', esc)
  }, [onClose])
  const copy = () => { try { void navigator.clipboard.writeText(id) } catch { /* clipboard yopiq */ } }
  const rows: [string, string][] = [[t('ok.product'), product], [t('ok.plan'), plan], [t('ok.contact'), phone]]

  return (
    <div className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-primary-950/70 p-4 backdrop-blur-sm" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby="ok-title" onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg animate-pop rounded-2xl bg-white p-6 shadow-2xl dark:bg-night-card sm:p-8">
        <button ref={btn} onClick={onClose} aria-label={t('ok.close')} className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-sky-surface dark:bg-night"><X size={16} /></button>
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary/15 text-secondary-700 dark:text-secondary"><BadgeCheck size={30} /></div>
        <h2 id="ok-title" className="mt-4 text-center text-2xl font-bold text-primary-950 dark:text-white">{t('ok.title')}</h2>
        <p className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">{t('ok.text')}</p>

        <div className="mt-6 rounded-xl bg-sky-surface p-4 text-sm dark:bg-night">
          <div className="flex items-center justify-between border-b border-sky-line pb-3 dark:border-night-line">
            <span className="font-semibold">{t('ok.id')}: <span className="font-mono">{id}</span></span>
            <button onClick={copy} className="flex items-center gap-1 text-xs font-medium text-secondary-700"><Copy size={12} />{t('ok.copy')}</button>
          </div>
          <dl className="mt-3 grid gap-2 sm:grid-cols-2">
            {rows.map(([k, v]) => (<div key={k}><dt className="text-[10px] uppercase tracking-wide text-slate-500">{k}</dt><dd className="font-medium">{v}</dd></div>))}
          </dl>
        </div>

        <h3 className="mb-2 mt-6 text-xs font-semibold uppercase tracking-wide text-slate-500">{t('ok.next')}</h3>
        <ol className="space-y-2">
          {[1, 2, 3].map((n) => (
            <li key={n} className="flex gap-3 rounded-lg border border-sky-line p-3 dark:border-night-line">
              <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-bold ${n === 1 ? 'bg-primary text-white dark:bg-secondary dark:text-primary-950' : 'bg-sky-surface dark:bg-night'}`}>{n}</span>
              <div><p className="text-sm font-semibold">{t(`ok.s${n}`)}</p><p className="text-xs text-slate-600 dark:text-slate-400">{t(`ok.s${n}d`)}</p></div>
            </li>
          ))}
        </ol>
        <Link to="/" onClick={onClose} className="mt-6 flex w-full items-center justify-center rounded-full bg-primary py-3 text-sm font-semibold text-white dark:bg-secondary dark:text-primary-950">{t('ok.home')}</Link>
        <a href={site.telegramUrl} target="_blank" rel="noopener noreferrer" className="mt-2 flex w-full items-center justify-center gap-2 rounded-full border border-sky-line py-3 text-sm font-semibold dark:border-night-line"><Send size={14} />{t('ok.tg')} ({site.telegram})</a>
      </div>
    </div>
  )
}

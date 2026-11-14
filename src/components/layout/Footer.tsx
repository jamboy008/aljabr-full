import { Link } from 'react-router-dom'
import { useI18n } from '@/lib/i18n'
import { site } from '@/config/site'
import { products } from '@/data/products'

export function Footer() {
  const { t, lang } = useI18n()
  const col = 'mb-3 text-sm font-semibold text-primary dark:text-white'
  const lnk = 'block py-1 text-sm text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-secondary'
  return (
    <footer className="border-t border-sky-line bg-white dark:border-night-line dark:bg-night-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="" width={32} height={32} className="h-8 w-8 rounded-lg" />
            <span className="text-sm font-semibold tracking-[0.2em] text-primary dark:text-white">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-slate-600 dark:text-slate-400">{t('footer.tagline')}</p>
          <ul className="mt-5 space-y-1 text-sm">
            <li>Telegram: <a className="font-medium hover:text-secondary-700" href={site.telegramUrl} target="_blank" rel="noopener noreferrer">{site.telegram}</a></li>
            <li>Tel: <a className="font-medium hover:text-secondary-700" href={site.phoneHref}>{site.phone}</a></li>
            <li>Email: <a className="font-medium hover:text-secondary-700" href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>
        </div>
        <div>
          <h3 className={col}>{t('footer.products')}</h3>
          {products.slice(0, 6).map((p) => <Link key={p.id} className={lnk} to="/products">{p.name[lang]}</Link>)}
        </div>
        <div>
          <h3 className={col}>{t('footer.company')}</h3>
          <Link className={lnk} to="/about">{t('nav.about')}</Link>
          <Link className={lnk} to="/solutions">{t('nav.solutions')}</Link>
          <Link className={lnk} to="/contact">{t('nav.contact')}</Link>
        </div>
        <div>
          <h3 className={col}>{t('footer.legal')}</h3>
          <Link className={lnk} to="/terms">{t('footer.terms')}</Link>
          <Link className={lnk} to="/privacy">{t('footer.privacy')}</Link>
          <Link className={lnk} to="/contract">{t('footer.contract')}</Link>
        </div>
      </div>
      <div className="border-t border-sky-line dark:border-night-line">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-4 py-4 text-xs text-slate-500 sm:px-6">
          <span>{t('footer.rights')}</span><span>{site.city[lang]}</span>
        </div>
      </div>
    </footer>
  )
}

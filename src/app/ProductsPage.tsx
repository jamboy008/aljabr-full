import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '@/lib/i18n'
import { groups, products, proPrice } from '@/data/products'
import { PageHead } from '@/components/ui/PageHead'
import { ProductCard } from '@/components/products/ProductCard'
import { Button } from '@/components/ui/Button'

const tabs = ['all', 'sys', 'web', 'mob', 'ai'] as const

export default function ProductsPage() {
  const { t, lang, price } = useI18n()
  const [tab, setTab] = useState<(typeof tabs)[number]>('all')
  const list = tab === 'all' ? products : products.filter((p) => groups[tab].includes(p.id))
  const count = (k: (typeof tabs)[number]) => (k === 'all' ? products.length : groups[k].length)

  return (
    <>
      <PageHead crumb={t('nav.products')} title={t('pp.title')} sub={t('pp.sub')}>
        <div className="mt-8 flex flex-wrap gap-2" role="tablist">
          {tabs.map((k) => (
            <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${tab === k ? 'border-primary bg-primary text-white dark:border-secondary dark:bg-secondary dark:text-primary-950' : 'border-sky-line bg-white hover:border-primary dark:border-night-line dark:bg-night-card'}`}>
              {t(`pp.f.${k}`)} <span className="opacity-60">{count(k)}</span>
            </button>
          ))}
        </div>
      </PageHead>
      <div className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {list.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <h2 className="text-2xl font-bold text-primary-950 dark:text-white">{t('pp.table')}</h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{t('pp.tablesub')}</p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-sky-line bg-white dark:border-night-line dark:bg-night-card">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-[#E6F1FA] text-xs font-semibold dark:bg-night">
              <tr>{['name', 'std', 'pro', 'act'].map((c) => <th key={c} scope="col" className="px-5 py-3">{t(`pp.col.${c}`)}</th>)}</tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-t border-sky-line align-top dark:border-night-line">
                  <th scope="row" className="px-5 py-4 font-semibold">{p.name[lang]}</th>
                  <td className="px-5 py-4"><p className="font-semibold">{price(p.price)}</p><p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{t(`f.${p.id}.s`)}</p></td>
                  <td className="px-5 py-4"><p className="font-semibold">{price(proPrice[p.id])} <span className="ml-1 rounded bg-tertiary px-1.5 py-0.5 text-[10px] text-primary-950">PRO</span></p><p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{t(`f.${p.id}.p`)}</p></td>
                  <td className="px-5 py-4"><Link to="/apply" className="text-xs font-semibold text-secondary-700 hover:underline dark:text-secondary">{t('pp.order')}</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">{t('pp.note')}</p>
      </section>

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 rounded-2xl bg-primary p-8 text-white dark:bg-night-card dark:ring-1 dark:ring-night-line sm:p-10">
          <div className="max-w-xl"><h2 className="text-2xl font-bold">{t('pp.help.title')}</h2><p className="mt-2 text-sm text-slate-300">{t('pp.help.text')}</p></div>
          <Button to="/contact" variant="sun">{t('pp.help.cta')}</Button>
        </div>
      </section>
    </>
  )
}

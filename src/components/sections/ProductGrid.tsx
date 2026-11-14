import { useI18n } from '@/lib/i18n'
import { products } from '@/data/products'
import { ProductCard } from '@/components/products/ProductCard'

export function ProductGrid() {
  const { t } = useI18n()
  return (
    <section className="bg-sky-surface dark:bg-night">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-primary-950 dark:text-white sm:text-4xl">{t('products.title')}</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400">{t('products.sub')}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  )
}

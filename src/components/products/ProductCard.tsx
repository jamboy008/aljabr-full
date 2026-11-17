import { Link } from 'react-router-dom'
import { ArrowRight, Bot, Building2, Globe, LayoutGrid, Network, ShoppingBag, Smartphone, Sparkles } from 'lucide-react'
import type { Product, ProductStatus } from '@/types'
import { useI18n } from '@/lib/i18n'

const icons = { crm: Network, erp: Building2, shop: ShoppingBag, web: Globe, mobile: Smartphone, bot: Bot, mini: LayoutGrid, ai: Sparkles }
const badge: Record<ProductStatus, string> = {
  active: 'bg-secondary/15 text-secondary-700 dark:text-secondary',
  wip: 'bg-tertiary-100 text-amber-800',
  soon: 'bg-slate-200 text-slate-700 dark:bg-night-line dark:text-slate-300',
  new: 'bg-primary text-white dark:bg-secondary dark:text-primary-950',
}

export function ProductCard({ p }: { p: Product }) {
  const { t, lang, price } = useI18n()
  const Icon = icons[p.icon]
  return (
		<Link
			to={`/products/${p.id}`}
			className='group flex flex-col rounded-xl border border-sky-line bg-white p-5 transition-colors hover:border-primary dark:border-night-line dark:bg-night-card dark:hover:border-secondary'
		>
			<div className='flex items-start justify-between'>
				<span className='grid h-9 w-9 place-items-center rounded-lg bg-sky-surface text-primary dark:bg-night dark:text-secondary'>
					<Icon size={18} />
				</span>
				<span
					className={`rounded px-2 py-0.5 text-[10px] font-semibold ${badge[p.status]}`}
				>
					{t(`status.${p.status}`)}
				</span>
			</div>
			<h3 className='mt-4 font-semibold text-primary-950 dark:text-white'>
				{p.name[lang]}
			</h3>
			<p className='mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400'>
				{p.desc[lang]}
			</p>
			<div className='mt-5 flex items-center justify-between border-t border-sky-line pt-3 text-xs font-semibold dark:border-night-line'>
				<span>
					{p.price
						? lang === 'uz'
							? `${price(p.price)} ${t('from')}`
							: `${t('from')} ${price(p.price)}`
						: price(null)}
				</span>
				<ArrowRight
					size={14}
					className='transition-transform group-hover:translate-x-1'
				/>
			</div>
		</Link>
	)
}

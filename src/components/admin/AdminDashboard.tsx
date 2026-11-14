import { useCallback, useEffect, useMemo, useState } from 'react'
import {
	ChevronLeft,
	ChevronRight,
	LogOut,
	Moon,
	RefreshCw,
	Search,
	Sun,
} from 'lucide-react'
import { useTheme } from '@/lib/theme'
import {
	STATUSES,
	describeError,
	getStats,
	isUnauthorized,
	listApplications,
	listProducts,
	type AdminApplication,
	type AppStats,
	type AppStatus,
	type ApplicationPage,
	type ProductInfo,
} from '@/lib/adminApi'
import { inputCls } from '@/components/forms/Field'
import { ApplicationPanel } from './ApplicationPanel'
import { formatDate, planLabel, statusMeta } from './meta'

const SIZE = 20

interface Props {
	onLogout: () => void
	onExpired: () => void
}

export function AdminDashboard({ onLogout, onExpired }: Props) {
	const { theme, toggle } = useTheme()
	const [status, setStatus] = useState<AppStatus | ''>('')
	const [product, setProduct] = useState(0)
	const [searchInput, setSearchInput] = useState('')
	const [search, setSearch] = useState('')
	const [page, setPage] = useState(1)
	const [tick, setTick] = useState(0)
	const [data, setData] = useState<ApplicationPage | null>(null)
	const [stats, setStats] = useState<AppStats | null>(null)
	const [products, setProducts] = useState<ProductInfo[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')
	const [selected, setSelected] = useState<AdminApplication | null>(null)

	const productNames = useMemo(
		() => new Map(products.map(p => [p.id, p.name])),
		[products],
	)
	const pages = data ? Math.max(1, Math.ceil(data.total / SIZE)) : 1

	useEffect(() => {
		const id = setTimeout(() => {
			setSearch(searchInput.trim())
			setPage(1)
		}, 400)
		return () => clearTimeout(id)
	}, [searchInput])

	useEffect(() => {
		let alive = true
		listProducts()
			.then(p => {
				if (alive) setProducts(p)
			})
			.catch(e => {
				if (alive && isUnauthorized(e)) onExpired()
			})
		return () => {
			alive = false
		}
	}, [onExpired])

	useEffect(() => {
		let alive = true
		setLoading(true)
		Promise.all([
			listApplications({ page, size: SIZE, status, product, search }),
			getStats(),
		])
			.then(([list, st]) => {
				if (!alive) return
				setData(list)
				setStats(st)
				setError('')
				if (list.items.length === 0 && page > 1) setPage(page - 1)
			})
			.catch(e => {
				if (!alive) return
				if (isUnauthorized(e)) onExpired()
				else setError(describeError(e))
			})
			.finally(() => {
				if (alive) setLoading(false)
			})
		return () => {
			alive = false
		}
	}, [page, status, product, search, tick, onExpired])

	const reload = useCallback(() => setTick(t => t + 1), [])
	const closePanel = useCallback(() => setSelected(null), [])

	function pickStatus(s: AppStatus | '') {
		setStatus(s)
		setPage(1)
	}

	function handleSaved(updated: AdminApplication) {
		setSelected(updated)
		setData(d =>
			d
				? { ...d, items: d.items.map(i => (i.id === updated.id ? updated : i)) }
				: d,
		)
		reload()
	}

	function handleDeleted() {
		setSelected(null)
		reload()
	}

	const cards: { key: AppStatus | ''; label: string; value: number }[] = [
		{ key: '', label: 'Jami', value: stats?.total ?? 0 },
		...STATUSES.map(s => ({
			key: s,
			label: statusMeta[s].label,
			value: stats?.by_status[s] ?? 0,
		})),
	]

	return (
		<div className='min-h-screen'>
			<header className='sticky top-0 z-40 border-b border-sky-line/70 bg-white/85 backdrop-blur dark:border-night-line dark:bg-night/85'>
				<div className='mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6'>
					<div className='flex items-center gap-2.5'>
						<img
							src='/logo.png'
							alt=''
							width={36}
							height={36}
							className='h-9 w-9 rounded-lg'
						/>
						<span className='text-sm font-semibold tracking-[0.2em] text-primary dark:text-white'>
							ALJABR{' '}
							<span className='text-secondary-700 dark:text-secondary'>
								ADMIN
							</span>
						</span>
					</div>
					<div className='flex items-center gap-2'>
						<button
							onClick={reload}
							aria-label='Yangilash'
							className='grid h-9 w-9 place-items-center rounded-full border border-sky-line text-primary hover:border-primary dark:border-night-line dark:text-slate-100'
						>
							<RefreshCw size={15} className={loading ? 'animate-spin' : ''} />
						</button>
						<button
							onClick={toggle}
							aria-label='Temani almashtirish'
							className='grid h-9 w-9 place-items-center rounded-full border border-sky-line text-primary hover:border-primary dark:border-night-line dark:text-slate-100'
						>
							{theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
						</button>
						<button
							onClick={onLogout}
							className='flex h-9 items-center gap-1.5 rounded-full border border-sky-line px-4 text-sm font-semibold text-primary hover:border-primary dark:border-night-line dark:text-slate-100'
						>
							<LogOut size={14} />
							<span className='hidden sm:inline'>Chiqish</span>
						</button>
					</div>
				</div>
			</header>

			<main className='mx-auto max-w-7xl space-y-5 px-4 py-6 sm:px-6'>
				<div className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6'>
					{cards.map(c => (
						<button
							key={c.key || 'all'}
							onClick={() => pickStatus(c.key)}
							aria-pressed={status === c.key}
							className={`rounded-2xl border p-4 text-left transition-colors ${status === c.key ? 'border-secondary bg-white dark:bg-night-card' : 'border-sky-line bg-white hover:border-primary dark:border-night-line dark:bg-night-card'}`}
						>
							<span className='block text-xs font-medium text-slate-600 dark:text-slate-400'>
								{c.label}
							</span>
							<span className='mt-1 block text-2xl font-bold text-primary-950 dark:text-white'>
								{c.value}
							</span>
						</button>
					))}
				</div>

				<div className='grid gap-3 sm:grid-cols-[1fr_auto_auto]'>
					<div className='relative'>
						<Search
							size={15}
							className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400'
						/>
						<input
							value={searchInput}
							onChange={e => setSearchInput(e.target.value)}
							maxLength={100}
							placeholder="Ism yoki telefon bo'yicha qidirish"
							aria-label='Qidirish'
							className={`${inputCls} !pl-9`}
						/>
					</div>
					<select
						value={product}
						onChange={e => {
							setProduct(Number(e.target.value))
							setPage(1)
						}}
						aria-label='Mahsulot'
						className={inputCls}
					>
						<option value={0}>Barcha mahsulotlar</option>
						{products.map(p => (
							<option key={p.id} value={p.id}>
								{p.name}
							</option>
						))}
					</select>
					<select
						value={status}
						onChange={e => pickStatus(e.target.value as AppStatus | '')}
						aria-label='Holat'
						className={inputCls}
					>
						<option value=''>Barcha holatlar</option>
						{STATUSES.map(s => (
							<option key={s} value={s}>
								{statusMeta[s].label}
							</option>
						))}
					</select>
				</div>

				{error && (
					<p
						role='alert'
						className='rounded-lg bg-red-50 p-3 text-sm text-red-700'
					>
						{error}
					</p>
				)}

				<div
					className={`overflow-hidden rounded-2xl border border-sky-line bg-white transition-opacity dark:border-night-line dark:bg-night-card ${loading ? 'opacity-60' : ''}`}
				>
					<div className='overflow-x-auto'>
						<table className='w-full min-w-[640px] text-left text-sm'>
							<thead className='border-b border-sky-line text-xs uppercase tracking-wide text-slate-500 dark:border-night-line'>
								<tr>
									<th className='px-4 py-3 font-semibold'>#</th>
									<th className='px-4 py-3 font-semibold'>Mijoz</th>
									<th className='px-4 py-3 font-semibold'>Mahsulot</th>
									<th className='hidden px-4 py-3 font-semibold md:table-cell'>
										Tarif
									</th>
									<th className='hidden px-4 py-3 font-semibold lg:table-cell'>
										Sana
									</th>
									<th className='px-4 py-3 font-semibold'>Holat</th>
								</tr>
							</thead>
							<tbody>
								{data?.items.map(a => (
									<tr
										key={a.id}
										tabIndex={0}
										onClick={() => setSelected(a)}
										onKeyDown={e => e.key === 'Enter' && setSelected(a)}
										className='cursor-pointer border-b border-sky-line/60 last:border-0 hover:bg-sky-surface dark:border-night-line dark:hover:bg-night'
									>
										<td className='px-4 py-3 text-slate-500'>{a.id}</td>
										<td className='px-4 py-3'>
											<span className='block font-semibold'>{a.name}</span>
											<span className='block text-xs text-slate-500'>
												{a.phone}
											</span>
										</td>
										<td className='px-4 py-3'>
											{productNames.get(a.product_id) ?? `#${a.product_id}`}
										</td>
										<td className='hidden px-4 py-3 md:table-cell'>
											{planLabel(a.plan)}
										</td>
										<td className='hidden whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-400 lg:table-cell'>
											{formatDate(a.created_at)}
										</td>
										<td className='px-4 py-3'>
											<span
												className={`inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${statusMeta[a.status].cls}`}
											>
												{statusMeta[a.status].label}
											</span>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					{data && data.items.length === 0 && !loading && (
						<p className='px-4 py-12 text-center text-sm text-slate-500'>
							Arizalar topilmadi
						</p>
					)}
				</div>

				<div className='flex items-center justify-between text-sm'>
					<span className='text-slate-600 dark:text-slate-400'>
						Jami: {data?.total ?? 0}
					</span>
					<div className='flex items-center gap-2'>
						<button
							onClick={() => setPage(p => Math.max(1, p - 1))}
							disabled={page <= 1}
							aria-label='Oldingi'
							className='grid h-9 w-9 place-items-center rounded-full border border-sky-line disabled:opacity-40 dark:border-night-line'
						>
							<ChevronLeft size={16} />
						</button>
						<span className='min-w-[4.5rem] text-center font-medium'>
							{page} / {pages}
						</span>
						<button
							onClick={() => setPage(p => Math.min(pages, p + 1))}
							disabled={page >= pages}
							aria-label='Keyingi'
							className='grid h-9 w-9 place-items-center rounded-full border border-sky-line disabled:opacity-40 dark:border-night-line'
						>
							<ChevronRight size={16} />
						</button>
					</div>
				</div>
			</main>

			{selected && (
				<ApplicationPanel
					key={selected.id}
					app={selected}
					productName={
						productNames.get(selected.product_id) ?? `#${selected.product_id}`
					}
					onClose={closePanel}
					onSaved={handleSaved}
					onDeleted={handleDeleted}
					onExpired={onExpired}
				/>
			)}
		</div>
	)
}

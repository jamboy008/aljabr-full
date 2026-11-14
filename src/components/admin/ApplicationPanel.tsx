import { useEffect, useState } from 'react'
import { Phone, Trash2, X } from 'lucide-react'
import {
	STATUSES,
	deleteApplication,
	describeError,
	isUnauthorized,
	updateApplication,
	type AdminApplication,
	type AppStatus,
} from '@/lib/adminApi'
import { inputCls } from '@/components/forms/Field'
import { formatDate, planLabel, statusMeta } from './meta'

interface Props {
	app: AdminApplication
	productName: string
	onClose: () => void
	onSaved: (a: AdminApplication) => void
	onDeleted: () => void
	onExpired: () => void
}

export function ApplicationPanel({
	app,
	productName,
	onClose,
	onSaved,
	onDeleted,
	onExpired,
}: Props) {
	const [status, setStatus] = useState<AppStatus>(app.status)
	const [notes, setNotes] = useState(app.notes)
	const [busy, setBusy] = useState(false)
	const [error, setError] = useState('')
	const [saved, setSaved] = useState(false)
	const [confirm, setConfirm] = useState(false)
	const dirty = status !== app.status || notes !== app.notes

	useEffect(() => {
		const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
		addEventListener('keydown', esc)
		return () => removeEventListener('keydown', esc)
	}, [onClose])

	async function save() {
		setBusy(true)
		setError('')
		setSaved(false)
		try {
			const updated = await updateApplication(app.id, { status, notes })
			onSaved(updated)
			setSaved(true)
		} catch (e) {
			if (isUnauthorized(e)) onExpired()
			else setError(describeError(e))
		} finally {
			setBusy(false)
		}
	}

	async function remove() {
		setBusy(true)
		setError('')
		try {
			await deleteApplication(app.id)
			onDeleted()
		} catch (e) {
			if (isUnauthorized(e)) onExpired()
			else {
				setError(describeError(e))
				setBusy(false)
			}
		}
	}

	const rows: [string, string][] = [
		['Mahsulot', productName],
		['Tarif', planLabel(app.plan)],
		['Kelgan vaqt', formatDate(app.created_at)],
		['Yangilangan', formatDate(app.updated_at)],
	]

	return (
		<div
			className='fixed inset-0 z-50 flex justify-end bg-primary-950/60 backdrop-blur-sm'
			onClick={onClose}
		>
			<aside
				role='dialog'
				aria-modal='true'
				aria-labelledby='app-title'
				onClick={e => e.stopPropagation()}
				className='h-full w-full max-w-lg animate-pop overflow-y-auto bg-white p-5 shadow-2xl dark:bg-night-card sm:p-7'
			>
				<div className='flex items-start justify-between gap-3'>
					<div>
						<p className='text-xs uppercase tracking-wide text-slate-500'>
							Ariza #{app.id}
						</p>
						<h2
							id='app-title'
							className='mt-1 text-xl font-bold text-primary-950 dark:text-white'
						>
							{app.name}
						</h2>
					</div>
					<button
						onClick={onClose}
						aria-label='Yopish'
						className='grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky-surface dark:bg-night'
					>
						<X size={16} />
					</button>
				</div>

				<a
					href={`tel:${app.phone}`}
					className='mt-4 flex items-center gap-2 rounded-xl bg-sky-surface px-4 py-3 text-sm font-semibold dark:bg-night'
				>
					<Phone size={16} />
					{app.phone}
				</a>

				<dl className='mt-5 grid gap-3 sm:grid-cols-2'>
					{rows.map(([k, v]) => (
						<div key={k}>
							<dt className='text-[10px] uppercase tracking-wide text-slate-500'>
								{k}
							</dt>
							<dd className='text-sm font-medium'>{v}</dd>
						</div>
					))}
					<div className='sm:col-span-2'>
						<dt className='text-[10px] uppercase tracking-wide text-slate-500'>
							Ariza ID
						</dt>
						<dd className='break-all font-mono text-xs'>{app.reference}</dd>
					</div>
				</dl>

				<h3 className='mb-1.5 mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500'>
					Mijoz xabari
				</h3>
				<p className='whitespace-pre-wrap break-words rounded-xl bg-sky-surface p-4 text-sm dark:bg-night'>
					{app.description}
				</p>

				<h3 className='mb-1.5 mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500'>
					Holat
				</h3>
				<div className='flex flex-wrap gap-2'>
					{STATUSES.map(s => (
						<button
							key={s}
							type='button'
							onClick={() => setStatus(s)}
							aria-pressed={status === s}
							className={`rounded-full px-3 py-1.5 text-xs font-semibold ring-1 transition-colors ${status === s ? `${statusMeta[s].cls} ring-current` : 'ring-sky-line hover:ring-primary dark:ring-night-line'}`}
						>
							{statusMeta[s].label}
						</button>
					))}
				</div>

				<label
					htmlFor='notes'
					className='mb-1.5 mt-5 block text-xs font-semibold uppercase tracking-wide text-slate-500'
				>
					Ichki izoh
				</label>
				<textarea
					id='notes'
					rows={4}
					maxLength={5000}
					value={notes}
					onChange={e => setNotes(e.target.value)}
					className={inputCls}
				/>

				{error && (
					<p
						role='alert'
						className='mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700'
					>
						{error}
					</p>
				)}
				{saved && !dirty && (
					<p
						role='status'
						className='mt-4 text-sm font-medium text-secondary-700 dark:text-secondary'
					>
						Saqlandi
					</p>
				)}

				<div className='mt-5 flex flex-wrap items-center gap-3'>
					<button
						onClick={save}
						disabled={busy || !dirty}
						className='rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-950 disabled:opacity-50 dark:bg-secondary dark:text-primary-950'
					>
						{busy ? 'Saqlanmoqda...' : 'Saqlash'}
					</button>
					{!confirm ? (
						<button
							onClick={() => setConfirm(true)}
							disabled={busy}
							className='ml-auto flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10'
						>
							<Trash2 size={14} />
							O'chirish
						</button>
					) : (
						<div className='ml-auto flex items-center gap-2 text-sm'>
							<span className='text-slate-600 dark:text-slate-400'>
								Rostdan o'chirilsinmi?
							</span>
							<button
								onClick={remove}
								disabled={busy}
								className='rounded-full bg-red-600 px-4 py-2 font-semibold text-white disabled:opacity-50'
							>
								Ha
							</button>
							<button
								onClick={() => setConfirm(false)}
								disabled={busy}
								className='rounded-full px-3 py-2 font-semibold'
							>
								Yo'q
							</button>
						</div>
					)}
				</div>
			</aside>
		</div>
	)
}

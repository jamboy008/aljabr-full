import { products } from '@/data/products'
import { ApiError, submitLead, type Lead } from '@/lib/api'
import { useI18n } from '@/lib/i18n'
import { createThrottle, isValidPhone, sanitizeText } from '@/lib/security'
import { ArrowRight, Lock } from 'lucide-react'
import { useMemo, useRef, useState, type FormEvent } from 'react'
import { Field, inputCls } from './Field'
import { SuccessModal } from './SuccessModal'
import { useSearchParams } from 'react-router-dom'

type Errors = Partial<
	Record<'name' | 'phone' | 'product' | 'consent' | 'form', string>
>
const throttle = createThrottle(3, 60_000)

export function ApplyForm({ quick = false }: { quick?: boolean }) {
		const { t, lang } = useI18n()
		const [params] = useSearchParams()
		const initial = params.get('product') ?? ''
		const [product, setProduct] = useState(
			products.some(p => p.id === initial) ? initial : '',
		)
		const [plan, setPlan] = useState<'std' | 'pro'>(
			params.get('plan') === 'pro' ? 'pro' : 'std',
		)
	const [payment, setPayment] = useState<'once' | 'rent'>('once')
	const [errors, setErrors] = useState<Errors>({})
	const [busy, setBusy] = useState(false)
	const [done, setDone] = useState<{
		id: string
		phone: string
		product: string
	} | null>(null)
	const form = useRef<HTMLFormElement>(null)
	const productName = useMemo(
		() => products.find(p => p.id === product)?.name[lang] ?? '',
		[product, lang],
	)

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const fd = new FormData(e.currentTarget)
		if (fd.get('website')) {
			setDone({ id: 'ALJ-0000', phone: '', product: '' })
			return
		}
		const name = sanitizeText(String(fd.get('name') ?? ''), 80)
		const phone = sanitizeText(String(fd.get('phone') ?? ''), 24)
		const err: Errors = {}
		if (name.length < 2) err.name = t('err.name')
		if (!isValidPhone(phone)) err.phone = t('err.phone')
		if (!product) err.product = t('err.product')
		if (!fd.get('consent')) err.consent = t('err.consent')
		if (Object.keys(err).length) {
			setErrors(err)
			return
		}
		if (!throttle()) {
			setErrors({ form: t('err.throttle') })
			return
		}
		setErrors({})
		setBusy(true)
		const lead: Lead = {
			product,
			plan,
			payment,
			name,
			phone,
			lang,
			company: sanitizeText(String(fd.get('company') ?? ''), 120),
			message: sanitizeText(String(fd.get('message') ?? ''), 1500),
		}
		try {
			const { id } = await submitLead(lead)
			setDone({ id, phone, product: productName })
			form.current?.reset()
			setProduct('')
		} catch (e) {
			setErrors({
				form:
					e instanceof ApiError && e.status === 429
						? t('err.throttle')
						: t('err.send'),
			})
		} finally {
			setBusy(false)
		}
	}

	const radio = (v: 'std' | 'pro', title: string, desc: string) => (
		<label
			className={`cursor-pointer rounded-xl border p-3 text-sm transition-colors ${plan === v ? 'border-primary bg-sky-surface dark:border-secondary dark:bg-night' : 'border-sky-line dark:border-night-line'}`}
		>
			<input
				type='radio'
				name='plan'
				className='sr-only'
				checked={plan === v}
				onChange={() => setPlan(v)}
			/>
			<span className='block font-semibold'>{title}</span>
			<span className='mt-1 block text-xs text-slate-600 dark:text-slate-400'>
				{desc}
			</span>
		</label>
	)

	return (
		<>
			<form
				ref={form}
				onSubmit={onSubmit}
				noValidate
				className='space-y-5 rounded-2xl border border-sky-line bg-white p-5 shadow-sm dark:border-night-line dark:bg-night-card sm:p-8'
			>
				<div>
					<h2 className='text-xl font-bold text-primary-950 dark:text-white'>
						{quick ? t('ct.quick') : t('ap.form')}
					</h2>
					<p className='text-sm text-slate-600 dark:text-slate-400'>
						{quick ? t('ct.quicksub') : t('ap.formsub')}
					</p>
				</div>
				<Field
					id='product'
					label={quick ? t('ct.topic') : t('ap.product')}
					error={errors.product}
				>
					<select
						id='product'
						value={product}
						onChange={e => setProduct(e.target.value)}
						aria-invalid={!!errors.product}
						className={inputCls}
					>
						<option value=''>{t('ap.productph')}</option>
						{products.map(p => (
							<option key={p.id} value={p.id}>
								{p.name[lang]}
							</option>
						))}
					</select>
				</Field>
				{!quick && (
					<>
						<fieldset>
							<legend className='mb-1.5 text-xs font-semibold'>
								{t('ap.plan')}
							</legend>
							<div className='grid gap-3 sm:grid-cols-2'>
								{radio('std', t('ap.std'), t('ap.stdd'))}
								{radio('pro', t('ap.pro'), t('ap.prod'))}
							</div>
						</fieldset>
						<fieldset>
							<legend className='mb-1.5 text-xs font-semibold'>
								{t('ap.pay')}
							</legend>
							<div className='inline-flex rounded-full bg-sky-surface p-1 dark:bg-night'>
								{(['once', 'rent'] as const).map(v => (
									<button
										type='button'
										key={v}
										onClick={() => setPayment(v)}
										aria-pressed={payment === v}
										className={`rounded-full px-4 py-1.5 text-xs font-semibold ${payment === v ? 'bg-primary text-white dark:bg-secondary dark:text-primary-950' : ''}`}
									>
										{t(`ap.${v}`)}
									</button>
								))}
							</div>
						</fieldset>
					</>
				)}
				<div className='grid gap-4 sm:grid-cols-2'>
					<Field id='name' label={t('ap.name')} error={errors.name}>
						<input
							id='name'
							name='name'
							autoComplete='name'
							maxLength={80}
							aria-invalid={!!errors.name}
							className={inputCls}
						/>
					</Field>
					<Field id='phone' label={t('ap.phone')} error={errors.phone}>
						<input
							id='phone'
							name='phone'
							type='tel'
							autoComplete='tel'
							placeholder='+998 90 123 45 67'
							maxLength={24}
							aria-invalid={!!errors.phone}
							className={inputCls}
						/>
					</Field>
				</div>
				{!quick && (
					<Field id='company' label={t('ap.company')}>
						<input
							id='company'
							name='company'
							maxLength={120}
							className={inputCls}
						/>
					</Field>
				)}
				<Field id='message' label={t('ap.msg')} hint={t('ap.optional')}>
					<textarea
						id='message'
						name='message'
						rows={4}
						maxLength={1500}
						className={inputCls}
					/>
				</Field>
				<input
					name='website'
					tabIndex={-1}
					autoComplete='off'
					aria-hidden='true'
					className='absolute -left-[9999px] h-0 w-0 opacity-0'
				/>
				<div>
					<label className='flex items-start gap-2 text-xs'>
						<input
							type='checkbox'
							name='consent'
							className='mt-0.5 accent-primary'
						/>
						{t('ap.consent')}
					</label>
					{errors.consent && (
						<p role='alert' className='mt-1 text-xs text-red-600'>
							{errors.consent}
						</p>
					)}
				</div>
				{errors.form && (
					<p
						role='alert'
						className='rounded-lg bg-red-50 p-3 text-sm text-red-700'
					>
						{errors.form}
					</p>
				)}
				<button
					disabled={busy}
					className='flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-950 disabled:opacity-60 dark:bg-secondary dark:text-primary-950'
				>
					{busy ? t('ap.sending') : quick ? t('ap.send') : t('ap.submit')}
					{!busy && <ArrowRight size={16} />}
				</button>
				<p className='flex items-center justify-center gap-1.5 text-xs text-slate-500'>
					<Lock size={12} />
					{t('ap.privacy')}
				</p>
			</form>
			{done && (
				<SuccessModal
					id={done.id}
					product={done.product || '—'}
					plan={plan === 'pro' ? t('ap.pro') : t('ap.std')}
					phone={done.phone || '—'}
					onClose={() => setDone(null)}
				/>
			)}
		</>
	)
}

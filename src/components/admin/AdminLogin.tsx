import { useState, type FormEvent } from 'react'
import { Lock } from 'lucide-react'
import { AdminError, apiConfigured, login } from '@/lib/adminApi'
import { inputCls } from '@/components/forms/Field'

export function AdminLogin({ onSuccess }: { onSuccess: () => void }) {
	const [busy, setBusy] = useState(false)
	const [error, setError] = useState('')

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const fd = new FormData(e.currentTarget)
		const username = String(fd.get('username') ?? '').trim()
		const password = String(fd.get('password') ?? '')
		if (!username || !password) {
			setError('Login va parolni kiriting.')
			return
		}
		setBusy(true)
		setError('')
		try {
			await login(username, password)
			onSuccess()
		} catch (err) {
			const s = err instanceof AdminError ? err.status : -1
			setError(
				s === 401
					? "Login yoki parol noto'g'ri."
					: s === 429
						? "Urinishlar juda ko'p. Bir daqiqadan so'ng qayta urining."
						: s === 0
							? "Serverga ulanib bo'lmadi. Backend ishlayotganini tekshiring."
							: 'Xatolik yuz berdi.',
			)
		} finally {
			setBusy(false)
		}
	}

	return (
		<div className='grid min-h-screen place-items-center px-4'>
			<form
				onSubmit={onSubmit}
				noValidate
				className='w-full max-w-sm space-y-5 rounded-2xl border border-sky-line bg-white p-6 shadow-sm dark:border-night-line dark:bg-night-card sm:p-8'
			>
				<div className='flex flex-col items-center gap-3 text-center'>
					<img
						src='/logo.png'
						alt=''
						width={48}
						height={48}
						className='h-12 w-12 rounded-xl'
					/>
					<div>
						<h1 className='text-xl font-bold text-primary-950 dark:text-white'>
							ALJABR Admin
						</h1>
						<p className='text-sm text-slate-600 dark:text-slate-400'>
							Arizalarni boshqarish paneli
						</p>
					</div>
				</div>
				{!apiConfigured && (
					<p
						role='alert'
						className='rounded-lg bg-red-50 p-3 text-sm text-red-700'
					>
						.env faylida VITE_API_BASE_URL ko'rsatilmagan.
					</p>
				)}
				<div>
					<label
						htmlFor='username'
						className='mb-1.5 block text-xs font-semibold'
					>
						Login
					</label>
					<input
						id='username'
						name='username'
						autoComplete='username'
						maxLength={60}
						className={inputCls}
					/>
				</div>
				<div>
					<label
						htmlFor='password'
						className='mb-1.5 block text-xs font-semibold'
					>
						Parol
					</label>
					<input
						id='password'
						name='password'
						type='password'
						autoComplete='current-password'
						maxLength={128}
						className={inputCls}
					/>
				</div>
				{error && (
					<p
						role='alert'
						className='rounded-lg bg-red-50 p-3 text-sm text-red-700'
					>
						{error}
					</p>
				)}
				<button
					disabled={busy || !apiConfigured}
					className='flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-950 disabled:opacity-60 dark:bg-secondary dark:text-primary-950'
				>
					<Lock size={14} />
					{busy ? 'Kirilmoqda...' : 'Kirish'}
				</button>
			</form>
		</div>
	)
}

import type { AppStatus } from '@/lib/adminApi'

export const statusMeta: Record<AppStatus, { label: string; cls: string }> = {
	new: {
		label: 'Yangi',
		cls: 'bg-secondary/15 text-secondary-700 dark:text-secondary',
	},
	contacted: {
		label: "Bog'lanildi",
		cls: 'bg-sky-200 text-sky-900 dark:bg-sky-400/15 dark:text-sky-300',
	},
	in_progress: {
		label: 'Jarayonda',
		cls: 'bg-tertiary/30 text-amber-800 dark:bg-tertiary/15 dark:text-tertiary',
	},
	completed: {
		label: 'Yakunlandi',
		cls: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-300',
	},
	rejected: {
		label: 'Rad etildi',
		cls: 'bg-red-100 text-red-700 dark:bg-red-400/15 dark:text-red-300',
	},
}

export const planLabel = (plan: string): string =>
	plan === 'pro' ? 'Professional' : 'Standart'

const fmt = new Intl.DateTimeFormat('uz-UZ', {
	dateStyle: 'medium',
	timeStyle: 'short',
	timeZone: 'Asia/Tashkent',
})

export function formatDate(iso: string): string {
	const hasZone = /[zZ]|[+-]\d\d:?\d\d$/.test(iso)
	const d = new Date(hasZone ? iso : `${iso}Z`)
	return Number.isNaN(d.getTime()) ? iso : fmt.format(d)
}

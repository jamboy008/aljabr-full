export type AppStatus =
	| 'new'
	| 'contacted'
	| 'in_progress'
	| 'completed'
	| 'rejected'

export const STATUSES: AppStatus[] = [
	'new',
	'contacted',
	'in_progress',
	'completed',
	'rejected',
]

export interface AdminApplication {
	id: number
	reference: string
	product_id: number
	plan: string
	name: string
	phone: string
	description: string
	consent: boolean
	status: AppStatus
	notes: string
	created_at: string
	updated_at: string
}

export interface ApplicationPage {
	items: AdminApplication[]
	total: number
	page: number
	size: number
}

export interface AppStats {
	total: number
	by_status: Record<AppStatus, number>
}

export interface ProductInfo {
	id: number
	slug: string
	name: string
	description: string
	is_active: boolean
}

export interface ListQuery {
	page: number
	size: number
	status: AppStatus | ''
	product: number
	search: string
}

export class AdminError extends Error {
	status: number
	constructor(status: number) {
		super(`admin_${status}`)
		this.status = status
	}
}

interface Tokens {
	access: string
	refresh: string
}
interface TokenReply {
	access_token: string
	refresh_token: string
}

const KEY = 'aljabr-admin-session'
const base =
	(import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(
		/\/$/,
		'',
	) ?? ''

export const apiConfigured = base !== ''

function readTokens(): Tokens | null {
	try {
		const raw = sessionStorage.getItem(KEY)
		if (!raw) return null
		const v = JSON.parse(raw) as Partial<Tokens>
		return typeof v.access === 'string' && typeof v.refresh === 'string'
			? { access: v.access, refresh: v.refresh }
			: null
	} catch {
		return null
	}
}

function writeTokens(t: Tokens | null): void {
	try {
		if (t) sessionStorage.setItem(KEY, JSON.stringify(t))
		else sessionStorage.removeItem(KEY)
	} catch {
		return
	}
}

export const hasSession = (): boolean => readTokens() !== null
export const clearSession = (): void => writeTokens(null)

let refreshing: Promise<boolean> | null = null

function refreshTokens(): Promise<boolean> {
	if (refreshing) return refreshing
	const current = readTokens()
	if (!current) return Promise.resolve(false)
	refreshing = (async () => {
		try {
			const res = await fetch(`${base}/auth/refresh`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ refresh_token: current.refresh }),
				credentials: 'omit',
				signal: AbortSignal.timeout(15_000),
			})
			if (!res.ok) {
				writeTokens(null)
				return false
			}
			const d = (await res.json()) as TokenReply
			writeTokens({ access: d.access_token, refresh: d.refresh_token })
			return true
		} catch {
			return false
		} finally {
			refreshing = null
		}
	})()
	return refreshing
}

async function request<T>(
	path: string,
	init: RequestInit = {},
	retry = true,
): Promise<T> {
	if (!base) throw new AdminError(0)
	const used = readTokens()
	const headers = new Headers(init.headers)
	if (used) headers.set('Authorization', `Bearer ${used.access}`)
	let res: Response
	try {
		res = await fetch(`${base}${path}`, {
			...init,
			headers,
			credentials: 'omit',
			signal: AbortSignal.timeout(15_000),
		})
	} catch {
		throw new AdminError(0)
	}
	if (res.status === 401 && retry && used) {
		const now = readTokens()
		const renewed =
			now !== null && now.access !== used.access ? true : await refreshTokens()
		if (renewed) return request<T>(path, init, false)
	}
	if (!res.ok) throw new AdminError(res.status)
	if (res.status === 204) return undefined as T
	return (await res.json()) as T
}

export async function login(username: string, password: string): Promise<void> {
	if (!base) throw new AdminError(0)
	let res: Response
	try {
		res = await fetch(`${base}/auth/login`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams({ username, password }),
			credentials: 'omit',
			signal: AbortSignal.timeout(15_000),
		})
	} catch {
		throw new AdminError(0)
	}
	if (!res.ok) throw new AdminError(res.status)
	const d = (await res.json()) as TokenReply
	writeTokens({ access: d.access_token, refresh: d.refresh_token })
}

export async function logout(): Promise<void> {
	try {
		await request<void>('/auth/logout', { method: 'POST' }, false)
	} catch {
		return
	} finally {
		writeTokens(null)
	}
}

export function listApplications(q: ListQuery): Promise<ApplicationPage> {
	const p = new URLSearchParams({ page: String(q.page), size: String(q.size) })
	if (q.status) p.set('status', q.status)
	if (q.product) p.set('product_id', String(q.product))
	if (q.search) p.set('search', q.search)
	return request<ApplicationPage>(`/applications/?${p.toString()}`)
}

export const getStats = (): Promise<AppStats> =>
	request<AppStats>('/applications/stats')

export const listProducts = (): Promise<ProductInfo[]> =>
	request<ProductInfo[]>('/products/manage?size=100')

export function updateApplication(
	id: number,
	data: { status: AppStatus; notes: string },
): Promise<AdminApplication> {
	return request<AdminApplication>(`/applications/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	})
}

export const deleteApplication = (id: number): Promise<void> =>
	request<void>(`/applications/${id}`, { method: 'DELETE' })

export const isUnauthorized = (e: unknown): boolean =>
	e instanceof AdminError && e.status === 401

export function describeError(e: unknown): string {
	const s = e instanceof AdminError ? e.status : -1
	if (s === 0)
		return "Serverga ulanib bo'lmadi. Backend ishlayotganini tekshiring."
	if (s === 429)
		return "So'rovlar juda ko'p. Bir daqiqadan so'ng qayta urining."
	if (s === 401) return 'Sessiya tugagan. Qayta kiring.'
	return "Xatolik yuz berdi. Qayta urinib ko'ring."
}

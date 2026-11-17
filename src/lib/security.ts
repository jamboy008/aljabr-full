export const isValidPhone = (v: string): boolean => {
	if (!/^\+?[0-9\s()-]+$/.test(v.trim())) return false
	const digits = v.replace(/\D/g, '').length
	return digits >= 9 && digits <= 15
}

/** Matnni tozalaydi: boshqaruv belgilari va <> olib tashlanadi, uzunlik cheklanadi. */
export const sanitizeText = (v: string, max: number): string =>
	v
		// eslint-disable-next-line no-control-regex
		.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F<>]/g, '')
		.replace(/[ \t]+/g, ' ')
		.trim()
		.slice(0, max)

/** Brauzer tomonida oddiy cheklov: `limit` marta / `windowMs` ichida. */
export const createThrottle = (limit: number, windowMs: number) => {
	let hits: number[] = []
	return (): boolean => {
		const now = Date.now()
		hits = hits.filter(t => now - t < windowMs)
		if (hits.length >= limit) return false
		hits.push(now)
		return true
	}
}

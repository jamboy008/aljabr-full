// Brauzer tomonidagi himoya faqat UX/gigiyena uchun. HAQIQIY rate-limit va autentifikatsiya serverda bo'lishi shart.
const CONTROL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g

export const sanitizeText = (v: string, max = 1000): string =>
  v.replace(CONTROL, '').replace(/[<>]/g, '').trim().slice(0, max)

export const isValidPhone = (v: string): boolean => /^\+?[0-9\s()-]{9,18}$/.test(v.trim())

export const isSafeExternalUrl = (u: string): boolean => {
  try { return ['https:', 'tel:', 'mailto:'].includes(new URL(u).protocol) } catch { return false }
}

/** Takroriy yuborishni sekinlatuvchi mijoz tomonidagi throttle (xavfsizlik chegarasi EMAS). */
export function createThrottle(max: number, windowMs: number) {
  const hits: number[] = []
  return (): boolean => {
    const now = Date.now()
    while (hits.length && now - hits[0] > windowMs) hits.shift()
    if (hits.length >= max) return false
    hits.push(now)
    return true
  }
}

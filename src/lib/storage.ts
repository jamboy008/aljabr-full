export const safeGet = (k: string): string | null => { try { return localStorage.getItem(k) } catch { return null } }
export const safeSet = (k: string, v: string): void => { try { localStorage.setItem(k, v) } catch { /* storage yopiq */ } }

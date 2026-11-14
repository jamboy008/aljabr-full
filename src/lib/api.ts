export interface Lead {
  product: string; plan: 'std' | 'pro'; payment: 'once' | 'rent'
  name: string; phone: string; company: string; message: string; lang: string
}

export class ApiError extends Error {
  status: number
  constructor(status: number) { super(`api_${status}`); this.status = status }
}

const base = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, '')

const productSlugs: Record<string, string> = {
  crm: 'crm', erp: 'erp', shop: 'ecommerce', web: 'websites',
  mobile: 'mobile', bot: 'telegram', mini: 'telegram-mini-app', ai: 'ai',
}

const paymentLabels: Record<Lead['payment'], string> = { once: 'Bir martalik xarid', rent: 'Ijara' }

const makeId = (): string => {
  const n = crypto.getRandomValues(new Uint32Array(1))[0] % 10000
  return `ALJ-${new Date().getFullYear()}-${String(n).padStart(4, '0')}`
}

function buildDescription(lead: Lead): string {
  const lines = [`To'lov turi: ${paymentLabels[lead.payment]}`, `Til: ${lead.lang}`]
  if (lead.company) lines.push(`Kompaniya: ${lead.company}`)
  if (lead.message) lines.push('', lead.message)
  return lines.join('\n').slice(0, 3000)
}

export async function submitLead(lead: Lead): Promise<{ id: string }> {
  if (!base) { await new Promise((r) => setTimeout(r, 700)); return { id: makeId() } }
  const payload = {
    product: productSlugs[lead.product] ?? lead.product,
    plan: lead.plan === 'pro' ? 'pro' : 'standard',
    name: lead.name,
    phone: lead.phone,
    description: buildDescription(lead),
    consent: true,
  }
  const res = await fetch(`${base}/applications/`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload), credentials: 'omit',
  })
  if (!res.ok) throw new ApiError(res.status)
  const data = (await res.json()) as { reference?: unknown }
  return { id: typeof data.reference === 'string' ? data.reference.slice(0, 40) : makeId() }
}

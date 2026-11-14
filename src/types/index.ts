export type Lang = 'ru' | 'en' | 'uz'
export type Theme = 'light' | 'dark'
export type ProductStatus = 'active' | 'wip' | 'soon' | 'new'
export type L10n = Record<Lang, string>
export interface Product {
  id: string
  icon: 'crm' | 'erp' | 'shop' | 'web' | 'mobile' | 'bot' | 'mini' | 'ai'
  status: ProductStatus
  price: number | null
  name: L10n
  desc: L10n
}

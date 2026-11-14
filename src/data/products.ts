import type { Product } from '@/types'

export const products: Product[] = [
  { id: 'crm', icon: 'crm', status: 'wip', price: 10_000_000,
    name: { ru: 'ALJABR CRM', en: 'ALJABR CRM', uz: 'ALJABR CRM' },
    desc: { ru: 'Клиентская база, воронка продаж и контроль эффективности сотрудников.', en: 'Customer base, sales funnel and staff performance control.', uz: 'Mijozlar bazasi, savdo voronkasi va xodimlar samaradorligini nazorat qilish tizimi.' } },
  { id: 'erp', icon: 'erp', status: 'active', price: 30_000_000,
    name: { ru: 'ALJABR ERP', en: 'ALJABR ERP', uz: 'ALJABR ERP' },
    desc: { ru: 'Склад, закупки, производство и финансовый учёт в одной системе.', en: 'Warehouse, purchasing, production and financial accounting in one system.', uz: 'Ombor, xaridlar, ishlab chiqarish va moliyaviy oqimlarni birlashtiruvchi kompleks korxona boshqaruvi.' } },
  { id: 'shop', icon: 'shop', status: 'active', price: 6_000_000,
    name: { ru: 'Интернет-магазин', en: 'Online store', uz: 'Internet-do‘kon' },
    desc: { ru: 'Каталог, онлайн-оплата (Payme, Click, Uzum) и интеграция курьеров.', en: 'Catalog, online payments (Payme, Click, Uzum) and courier integration.', uz: 'Mahsulot katalogi, onlayn to‘lov tizimlari (Payme, Click, Uzum) va kuryer integratsiyasi.' } },
  { id: 'web', icon: 'web', status: 'active', price: null,
    name: { ru: 'Корпоративные сайты', en: 'Corporate websites', uz: 'Korporativ saytlar' },
    desc: { ru: 'Веб-ресурсы, отражающие имидж компании, по техническим и SEO-стандартам.', en: 'Web resources that reflect the company image, built to technical and SEO standards.', uz: 'Kompaniya obro‘sini aks ettiruvchi, tezkor va xalqaro SEO standartlariga to‘liq mos veb-resurslar.' } },
  { id: 'mobile', icon: 'mobile', status: 'active', price: 15_000_000,
    name: { ru: 'Мобильные приложения', en: 'Mobile apps', uz: 'Mobil ilovalar' },
    desc: { ru: 'Решения для iOS и Android на Flutter с единой кодовой базой.', en: 'iOS and Android solutions on Flutter with a single codebase.', uz: 'iOS va Android operatsion tizimlari uchun Flutter texnologiyasida yagona kod bazali yechimlar.' } },
  { id: 'bot', icon: 'bot', status: 'active', price: 2_000_000,
    name: { ru: 'Telegram-боты', en: 'Telegram bots', uz: 'Telegram botlar' },
    desc: { ru: 'Автоматический сервис клиентов, приём заказов и рассылки.', en: 'Automated customer service, order intake and notifications.', uz: 'Mijozlarga avtomatik xizmat ko‘rsatish, buyurtma qabul qilish va bildirishnomalar yuborish.' } },
  { id: 'mini', icon: 'mini', status: 'active', price: 12_000_000,
    name: { ru: 'Telegram Mini App', en: 'Telegram Mini App', uz: 'Telegram Mini App' },
    desc: { ru: 'Веб-приложения и витрины прямо внутри мессенджера.', en: 'Web apps and storefronts right inside the messenger.', uz: 'Messenjer ichida chiqmasdan ishlovchi to‘laqonli veb-ilova va savdo interfeyslari.' } },
  { id: 'ai', icon: 'ai', status: 'new', price: 5_000_000,
    name: { ru: 'AI-агент и чат-бот', en: 'AI agent & chatbot', uz: 'AI agent va Chatbot' },
    desc: { ru: 'Консультации 24/7 на основе вашей базы знаний.', en: '24/7 consultations based on your knowledge base.', uz: 'Kompaniya bilimlar bazasi asosida o‘qitilgan 24/7 aqlli maslahatchilar.' } },
]

export const proPrice: Record<string, number | null> = {
  crm: 25_000_000, erp: 65_000_000, shop: 15_000_000, web: null,
  mobile: 35_000_000, bot: 6_000_000, mini: 25_000_000, ai: 15_000_000,
}
export const groups: Record<string, string[]> = {
  sys: ['crm', 'erp'], web: ['shop', 'web'], mob: ['mobile', 'bot', 'mini'], ai: ['ai'],
}

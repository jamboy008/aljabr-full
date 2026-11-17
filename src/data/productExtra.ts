import type { Lang } from '@/types'

export interface Extra {
	std: string[]
	pro: string[]
	factors: string
}

export const extra: Record<string, Record<Lang, Extra>> = {
	crm: {
		ru: {
			std: [
				'Один филиал и до 500 групп',
				'Клиентская база и воронка продаж',
				'Роли: директор, администратор, сотрудник',
				'Базовые отчёты и учёт оплат',
			],
			pro: [
				'Неограниченное число филиалов',
				'Финансовый модуль: касса, долги, расчёты',
				'API-интеграции с вашими сервисами',
				'Расширенные показатели эффективности сотрудников',
			],
			factors:
				'Итоговая цена зависит от числа филиалов, ролей, объёма отчётов и интеграций. Точную сумму фиксируем в договоре после технического задания.',
		},
		en: {
			std: [
				'One branch and up to 500 groups',
				'Customer base and sales funnel',
				'Roles: director, administrator, staff',
				'Basic reports and payment tracking',
			],
			pro: [
				'Unlimited branches',
				'Finance module: cash, debts, settlements',
				'API integrations with your services',
				'Extended staff performance indicators',
			],
			factors:
				'The final price depends on the number of branches, roles, volume of reports and integrations. The exact amount is fixed in the contract after the technical specification.',
		},
		uz: {
			std: [
				'Bitta filial va 500 tagacha guruh',
				'Mijozlar bazasi va savdo voronkasi',
				'Rollar: direktor, administrator, xodim',
				'Asosiy hisobotlar va to‘lovlar hisobi',
			],
			pro: [
				'Cheksiz filiallar',
				'Moliya moduli: kassa, qarzdorlik, hisob-kitoblar',
				'Xizmatlaringiz bilan API integratsiya',
				'Xodimlar samaradorligining kengaytirilgan ko‘rsatkichlari',
			],
			factors:
				'Yakuniy narx filiallar soni, rollar, hisobotlar hajmi va integratsiyalarga bog‘liq. Aniq summa texnik topshiriqdan keyin shartnomada belgilanadi.',
		},
	},
	erp: {
		ru: {
			std: [
				'Складской учёт и касса',
				'До 5 пользователей',
				'Приход, расход, перемещения, остатки',
				'Базовые отчёты',
			],
			pro: [
				'Полный цикл производства и себестоимость',
				'Безлимитное число пользователей',
				'Закупки, поставщики, взаиморасчёты',
				'Аналитика по всей компании',
			],
			factors:
				'Цена зависит от числа складов и пользователей, наличия производства и объёма интеграций. Точную сумму фиксируем в договоре после технического задания.',
		},
		en: {
			std: [
				'Warehouse accounting and POS',
				'Up to 5 users',
				'Receipts, issues, transfers, stock levels',
				'Basic reports',
			],
			pro: [
				'Full production cycle and product cost',
				'Unlimited users',
				'Purchasing, suppliers, settlements',
				'Analytics across the whole company',
			],
			factors:
				'The price depends on the number of warehouses and users, whether production is included and the volume of integrations. The exact amount is fixed in the contract after the technical specification.',
		},
		uz: {
			std: [
				'Ombor hisobi va kassa',
				'5 tagacha foydalanuvchi',
				'Kirim, chiqim, ko‘chirish, qoldiqlar',
				'Asosiy hisobotlar',
			],
			pro: [
				'To‘liq ishlab chiqarish va tannarx',
				'Cheksiz foydalanuvchilar',
				'Xaridlar, yetkazib beruvchilar, o‘zaro hisob-kitob',
				'Butun kompaniya bo‘yicha analitika',
			],
			factors:
				'Narx omborlar va foydalanuvchilar soni, ishlab chiqarish mavjudligi va integratsiyalar hajmiga bog‘liq. Aniq summa texnik topshiriqdan keyin shartnomada belgilanadi.',
		},
	},
	shop: {
		ru: {
			std: [
				'Каталог товаров и корзина',
				'Онлайн-оплата Payme, Click, Uzum',
				'Админ-панель: заказы и остатки',
				'Базовая SEO-настройка',
			],
			pro: [
				'Синхронизация с 1С',
				'Скидки, промокоды и программа лояльности',
				'Расширенная интеграция с курьерами',
				'Индивидуальная архитектура под ваш бизнес',
			],
			factors:
				'Цена зависит от числа товарных категорий, способов оплаты и доставки, а также от интеграции с учётными системами.',
		},
		en: {
			std: [
				'Product catalog and cart',
				'Online payments: Payme, Click, Uzum',
				'Admin panel: orders and stock',
				'Basic SEO setup',
			],
			pro: [
				'1C synchronization',
				'Discounts, promo codes and loyalty program',
				'Extended courier integration',
				'Custom architecture for your business',
			],
			factors:
				'The price depends on the number of product categories, payment and delivery methods, and integration with accounting systems.',
		},
		uz: {
			std: [
				'Mahsulot katalogi va savat',
				'Onlayn to‘lov: Payme, Click, Uzum',
				'Admin panel: buyurtmalar va qoldiq',
				'Asosiy SEO sozlamalari',
			],
			pro: [
				'1C bilan sinxronizatsiya',
				'Chegirmalar, promokodlar va sodiqlik tizimi',
				'Kuryerlar bilan kengaytirilgan integratsiya',
				'Biznesingizga mos maxsus arxitektura',
			],
			factors:
				'Narx mahsulot toifalari soni, to‘lov va yetkazib berish usullari hamda hisob tizimlari bilan integratsiyaga bog‘liq.',
		},
	},
	web: {
		ru: {
			std: [
				'Брендинг и индивидуальный дизайн',
				'5–7 страниц',
				'Адаптивная вёрстка и SEO-оптимизация',
				'Формы заявок',
			],
			pro: [
				'Несколько языков',
				'Сложные анимации и интерактив',
				'Корпоративный портал и личные кабинеты',
				'Управление контентом без программиста',
			],
			factors:
				'Цена зависит от числа страниц, языков, сложности дизайна и функциональности портала. Для крупных порталов цена определяется по договорённости.',
		},
		en: {
			std: [
				'Branding and custom design',
				'5–7 pages',
				'Responsive layout and SEO optimization',
				'Request forms',
			],
			pro: [
				'Multiple languages',
				'Complex animations and interactivity',
				'Corporate portal and user accounts',
				'Content management without a developer',
			],
			factors:
				'The price depends on the number of pages, languages, design complexity and portal functionality. Large portals are priced by agreement.',
		},
		uz: {
			std: [
				'Brending va individual dizayn',
				'5–7 sahifa',
				'Moslashuvchan maket va SEO optimallash',
				'Ariza formalari',
			],
			pro: [
				'Bir nechta til',
				'Murakkab animatsiya va interaktivlik',
				'Korporativ portal va shaxsiy kabinetlar',
				'Dasturchisiz kontentni boshqarish',
			],
			factors:
				'Narx sahifalar va tillar soni, dizayn murakkabligi hamda portal funksionalligiga bog‘liq. Yirik portallar narxi kelishuv asosida belgilanadi.',
		},
	},
	mobile: {
		ru: {
			std: [
				'Клиентское приложение для iOS и Android',
				'Push-уведомления',
				'Авторизация и личный кабинет',
				'Единая кодовая база на Flutter',
			],
			pro: [
				'Отдельные приложения для клиента и курьера/админа',
				'Геолокация в реальном времени',
				'Онлайн-оплата и заказы',
				'Интеграция с вашей CRM/ERP',
			],
			factors:
				'Цена зависит от числа экранов, ролей (клиент, курьер, админ), онлайн-оплаты и интеграций с вашими системами.',
		},
		en: {
			std: [
				'Customer app for iOS and Android',
				'Push notifications',
				'Authentication and user account',
				'Single Flutter codebase',
			],
			pro: [
				'Separate customer and courier/admin apps',
				'Real-time geolocation',
				'Online payments and orders',
				'Integration with your CRM/ERP',
			],
			factors:
				'The price depends on the number of screens, roles (customer, courier, admin), online payments and integrations with your systems.',
		},
		uz: {
			std: [
				'iOS va Android uchun mijoz ilovasi',
				'Push-bildirishnomalar',
				'Avtorizatsiya va shaxsiy kabinet',
				'Flutter’da yagona kod bazasi',
			],
			pro: [
				'Mijoz va kuryer/admin uchun alohida ilovalar',
				'Real-time geolokatsiya',
				'Onlayn to‘lov va buyurtmalar',
				'CRM/ERP bilan integratsiya',
			],
			factors:
				'Narx ekranlar soni, rollar (mijoz, kuryer, admin), onlayn to‘lov va tizimlaringiz bilan integratsiyaga bog‘liq.',
		},
	},
	bot: {
		ru: {
			std: [
				'Меню продаж и каталог',
				'Приём заказов и заявок',
				'Автоответы на частые вопросы',
				'Уведомления администратору',
			],
			pro: [
				'Интеграция с CRM',
				'Онлайн-платежи',
				'Сложная логика и сценарии',
				'Рассылки и уведомления клиентам',
			],
			factors:
				'Цена зависит от числа сценариев, подключаемых платежей и интеграций с CRM или другими системами.',
		},
		en: {
			std: [
				'Sales menu and catalog',
				'Order and request intake',
				'Automatic answers to common questions',
				'Admin notifications',
			],
			pro: [
				'CRM integration',
				'Online payments',
				'Complex logic and scenarios',
				'Broadcasts and customer notifications',
			],
			factors:
				'The price depends on the number of scenarios, connected payments and integrations with a CRM or other systems.',
		},
		uz: {
			std: [
				'Savdo menyusi va katalog',
				'Buyurtma va arizalarni qabul qilish',
				'Ko‘p so‘raladigan savollarga avtomatik javob',
				'Adminga bildirishnomalar',
			],
			pro: [
				'CRM bilan integratsiya',
				'Onlayn to‘lovlar',
				'Murakkab logika va ssenariylar',
				'Mijozlarga xabarnoma va yangiliklar',
			],
			factors:
				'Narx ssenariylar soni, ulanadigan to‘lovlar va CRM yoki boshqa tizimlar bilan integratsiyaga bog‘liq.',
		},
	},
	mini: {
		ru: {
			std: [
				'Веб-каталог и корзина в Telegram',
				'Оплата Click/Payme',
				'Вход через Telegram без паролей',
				'Уведомления через бота',
			],
			pro: [
				'Личный кабинет клиента',
				'Бонусы и программа лояльности',
				'Анимированный интерфейс',
				'Интеграция с CRM или складом',
			],
			factors:
				'Цена зависит от числа экранов, способов оплаты и интеграций с вашей CRM или складской системой.',
		},
		en: {
			std: [
				'Web catalog and cart in Telegram',
				'Click/Payme payments',
				'Passwordless login through Telegram',
				'Notifications through the bot',
			],
			pro: [
				'Customer account',
				'Bonuses and loyalty program',
				'Animated interface',
				'Integration with a CRM or warehouse',
			],
			factors:
				'The price depends on the number of screens, payment methods and integrations with your CRM or warehouse system.',
		},
		uz: {
			std: [
				'Telegram ichida veb-katalog va savat',
				'Click/Payme orqali to‘lov',
				'Telegram orqali parolsiz kirish',
				'Bot orqali bildirishnomalar',
			],
			pro: [
				'Mijozning shaxsiy kabineti',
				'Bonuslar va sodiqlik tizimi',
				'Animatsion interfeys',
				'CRM yoki ombor bilan integratsiya',
			],
			factors:
				'Narx ekranlar soni, to‘lov usullari va CRM yoki ombor tizimi bilan integratsiyaga bog‘liq.',
		},
	},
	ai: {
		ru: {
			std: [
				'Обучение на вашей базе вопросов и ответов',
				'Один канал: Telegram или сайт',
				'Передача сложных вопросов оператору',
				'Ответы на узбекском, русском и английском',
			],
			pro: [
				'Интеграция с CRM',
				'Голосовые ответы',
				'Глубокая аналитика вопросов клиентов',
				'Несколько каналов одновременно',
			],
			factors:
				'Цена зависит от объёма базы знаний, числа каналов и интеграции с CRM. Качество ответов напрямую зависит от полноты ваших материалов.',
		},
		en: {
			std: [
				'Trained on your Q&A knowledge base',
				'One channel: Telegram or website',
				'Hands complex questions to an operator',
				'Answers in Uzbek, Russian and English',
			],
			pro: [
				'CRM integration',
				'Voice replies',
				'Deep analytics of customer questions',
				'Several channels at once',
			],
			factors:
				'The price depends on the size of the knowledge base, the number of channels and CRM integration. Answer quality depends directly on how complete your materials are.',
		},
		uz: {
			std: [
				'Sizning savol-javob bazangizda o‘qitiladi',
				'Bitta kanal: Telegram yoki sayt',
				'Murakkab savollarni operatorga uzatadi',
				'O‘zbek, rus va ingliz tillarida javob',
			],
			pro: [
				'CRM bilan integratsiya',
				'Ovozli javoblar',
				'Mijoz savollarining chuqur tahlili',
				'Bir vaqtda bir nechta kanal',
			],
			factors:
				'Narx bilimlar bazasi hajmi, kanallar soni va CRM integratsiyasiga bog‘liq. Javoblar sifati materiallaringiz to‘liqligiga bevosita bog‘liq.',
		},
	},
}

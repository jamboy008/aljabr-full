import type { Lang } from '@/types'

export interface Block {
	lead: string
	features: string[]
	benefits: string[]
	audience: string[]
	duration: string
}

export const details: Record<string, Record<Lang, Block>> = {
	crm: {
		ru: {
			lead: 'Единая система для учёта клиентов, продаж и сотрудников: от первого обращения до оплаты и повторной продажи.',
			features: [
				'Клиентская база с полной историей общения',
				'Воронка продаж с этапами и статусами',
				'Роли и права: директор, администратор, сотрудник',
				'Учёт оплат, долгов и ежемесячной кассы',
				'Отчёты и показатели эффективности сотрудников',
				'Уведомления и напоминания по клиентам',
			],
			benefits: [
				'Ни одна заявка не теряется и не забывается',
				'Руководитель видит работу каждого сотрудника в цифрах',
				'Меньше ручной работы и таблиц Excel',
				'Решения принимаются по данным, а не по догадкам',
			],
			audience: [
				'Учебные центры и школы',
				'Сервисные компании',
				'Отделы продаж',
			],
			duration: 'Ориентировочно 4–10 недель',
		},
		en: {
			lead: 'A single system for customers, sales and staff: from the first enquiry to payment and repeat sales.',
			features: [
				'Customer base with full communication history',
				'Sales funnel with stages and statuses',
				'Roles and permissions: director, administrator, staff',
				'Payments, debts and monthly cash tracking',
				'Reports and staff performance indicators',
				'Customer notifications and reminders',
			],
			benefits: [
				'No enquiry is lost or forgotten',
				'Managers see every employee’s work in numbers',
				'Less manual work and fewer Excel sheets',
				'Decisions based on data, not guesses',
			],
			audience: [
				'Education centers and schools',
				'Service companies',
				'Sales teams',
			],
			duration: 'Approximately 4–10 weeks',
		},
		uz: {
			lead: 'Mijozlar, savdo va xodimlarni bitta tizimda boshqarish: birinchi murojaatdan to‘lov va qayta savdogacha.',
			features: [
				'To‘liq muloqot tarixi bilan mijozlar bazasi',
				'Bosqich va holatlarga ega savdo voronkasi',
				'Rollar va ruxsatlar: direktor, administrator, xodim',
				'To‘lovlar, qarzdorliklar va oylik kassa hisobi',
				'Hisobotlar va xodimlar samaradorligi ko‘rsatkichlari',
				'Mijozlar bo‘yicha bildirishnoma va eslatmalar',
			],
			benefits: [
				'Birorta ariza yo‘qolmaydi va esdan chiqmaydi',
				'Rahbar har bir xodim ishini raqamlarda ko‘radi',
				'Qo‘lda ish va Excel jadvallari kamayadi',
				'Qarorlar taxminga emas, ma’lumotga asoslanadi',
			],
			audience: [
				'O‘quv markazlari va maktablar',
				'Xizmat ko‘rsatish kompaniyalari',
				'Savdo bo‘limlari',
			],
			duration: 'Taxminan 4–10 hafta',
		},
	},
	erp: {
		ru: {
			lead: 'Склад, закупки, производство и финансы в одной системе. Вся компания работает с едиными данными.',
			features: [
				'Складской учёт: остатки, приход, расход, перемещения',
				'Закупки и работа с поставщиками',
				'Производство и себестоимость продукции',
				'Финансы: касса, расчёты, задолженности',
				'Сотрудники, зарплата и роли доступа',
				'Аналитика и отчёты по всей компании',
			],
			benefits: [
				'Точные остатки и меньше потерь на складе',
				'Реальная себестоимость и прибыль по каждому товару',
				'Одна система вместо множества разрозненных программ',
				'Контроль бизнеса из любой точки',
			],
			audience: [
				'Производственные компании',
				'Оптовая и розничная торговля',
				'Дистрибьюторы',
			],
			duration: 'Ориентировочно 4–10 недель',
		},
		en: {
			lead: 'Warehouse, purchasing, production and finance in one system. The whole company works with the same data.',
			features: [
				'Warehouse accounting: stock, receipts, issues, transfers',
				'Purchasing and supplier management',
				'Production and product cost',
				'Finance: cash, settlements, receivables and payables',
				'Staff, payroll and access roles',
				'Analytics and reports across the company',
			],
			benefits: [
				'Accurate stock and fewer warehouse losses',
				'Real cost and profit for every product',
				'One system instead of many disconnected programs',
				'Control your business from anywhere',
			],
			audience: ['Manufacturers', 'Wholesale and retail', 'Distributors'],
			duration: 'Approximately 4–10 weeks',
		},
		uz: {
			lead: 'Ombor, xaridlar, ishlab chiqarish va moliya bitta tizimda. Butun kompaniya yagona ma’lumot bilan ishlaydi.',
			features: [
				'Ombor hisobi: qoldiq, kirim, chiqim, ko‘chirish',
				'Xaridlar va yetkazib beruvchilar bilan ishlash',
				'Ishlab chiqarish va mahsulot tannarxi',
				'Moliya: kassa, hisob-kitoblar, qarzdorliklar',
				'Xodimlar, ish haqi va kirish rollari',
				'Butun kompaniya bo‘yicha tahlil va hisobotlar',
			],
			benefits: [
				'Aniq qoldiq va ombordagi yo‘qotishlar kamayadi',
				'Har bir mahsulot bo‘yicha haqiqiy tannarx va foyda',
				'Tarqoq dasturlar o‘rniga bitta tizim',
				'Biznesni istalgan joydan nazorat qilish',
			],
			audience: [
				'Ishlab chiqarish korxonalari',
				'Ulgurji va chakana savdo',
				'Distribyutorlar',
			],
			duration: 'Taxminan 4–10 hafta',
		},
	},
	shop: {
		ru: {
			lead: 'Интернет-магазин с каталогом, онлайн-оплатой и доставкой. Продажи идут круглосуточно.',
			features: [
				'Каталог товаров с фильтрами и поиском',
				'Онлайн-оплата: Payme, Click, Uzum',
				'Интеграция с курьерскими службами',
				'Админ-панель: заказы, товары, остатки',
				'Быстрая загрузка и SEO-настройка',
				'Скидки, промокоды (в тарифе Pro: программа лояльности и синхронизация с 1С)',
			],
			benefits: [
				'Продажи 24/7 без участия менеджера',
				'Меньше заказов по телефону и ошибок в них',
				'Оплата подтверждается автоматически',
				'Магазин растёт вместе с ассортиментом',
			],
			audience: [
				'Розничные магазины',
				'Производители и бренды',
				'Рестораны и кафе',
			],
			duration: 'Ориентировочно 2–6 недель',
		},
		en: {
			lead: 'An online store with catalog, online payments and delivery. Sales run around the clock.',
			features: [
				'Product catalog with filters and search',
				'Online payments: Payme, Click, Uzum',
				'Courier service integration',
				'Admin panel: orders, products, stock',
				'Fast loading and SEO setup',
				'Discounts and promo codes (Pro: loyalty program and 1C sync)',
			],
			benefits: [
				'Sales 24/7 without a manager',
				'Fewer phone orders and fewer mistakes',
				'Payments are confirmed automatically',
				'The store grows with your range',
			],
			audience: [
				'Retail stores',
				'Manufacturers and brands',
				'Restaurants and cafes',
			],
			duration: 'Approximately 2–6 weeks',
		},
		uz: {
			lead: 'Katalog, onlayn to‘lov va yetkazib berishga ega internet-do‘kon. Savdo kechayu kunduz davom etadi.',
			features: [
				'Filtr va qidiruvli mahsulot katalogi',
				'Onlayn to‘lov: Payme, Click, Uzum',
				'Kuryer xizmatlari bilan integratsiya',
				'Admin panel: buyurtmalar, mahsulotlar, qoldiq',
				'Tez yuklanish va SEO sozlamalari',
				'Chegirmalar, promokodlar (Pro: sodiqlik tizimi va 1C sinxronizatsiya)',
			],
			benefits: [
				'Menejersiz 24/7 savdo',
				'Telefon orqali buyurtmalar va xatolar kamayadi',
				'To‘lov avtomatik tasdiqlanadi',
				'Do‘kon assortiment bilan birga o‘sadi',
			],
			audience: [
				'Chakana do‘konlar',
				'Ishlab chiqaruvchilar va brendlar',
				'Restoran va kafelar',
			],
			duration: 'Taxminan 2–6 hafta',
		},
	},
	web: {
		ru: {
			lead: 'Корпоративный сайт, который отражает имидж компании, быстро загружается и соответствует SEO-стандартам.',
			features: [
				'Индивидуальный дизайн в стиле бренда',
				'Адаптивность: телефон, планшет, компьютер',
				'SEO-оптимизация и высокая скорость',
				'Несколько языков (в тарифе Pro)',
				'Управление контентом без программиста',
				'Формы заявок и подключение аналитики',
			],
			benefits: [
				'Доверие клиентов и партнёров к компании',
				'Заявки из поиска и рекламы',
				'Лёгкое обновление информации',
				'Соответствие международным стандартам',
			],
			audience: [
				'Компании и заводы',
				'Агентства и студии',
				'Организации с несколькими филиалами',
			],
			duration: 'Простые сайты: 1–2 недели. Порталы: по договорённости',
		},
		en: {
			lead: 'A corporate website that reflects your company image, loads fast and meets SEO standards.',
			features: [
				'Custom design in your brand style',
				'Responsive: phone, tablet, desktop',
				'SEO optimization and high speed',
				'Multiple languages (Pro plan)',
				'Content management without a developer',
				'Request forms and analytics integration',
			],
			benefits: [
				'Customers and partners trust the company more',
				'Leads from search and advertising',
				'Easy information updates',
				'Compliance with international standards',
			],
			audience: [
				'Companies and factories',
				'Agencies and studios',
				'Organizations with several branches',
			],
			duration: 'Simple sites: 1–2 weeks. Portals: by agreement',
		},
		uz: {
			lead: 'Kompaniya obro‘sini aks ettiruvchi, tez yuklanadigan va SEO standartlariga mos korporativ sayt.',
			features: [
				'Brend uslubidagi individual dizayn',
				'Moslashuvchan: telefon, planshet, kompyuter',
				'SEO optimallash va yuqori tezlik',
				'Bir nechta til (Pro tarifda)',
				'Dasturchisiz kontentni boshqarish',
				'Ariza formalari va analitika ulanishi',
			],
			benefits: [
				'Mijoz va hamkorlarning kompaniyaga ishonchi ortadi',
				'Qidiruv va reklamadan arizalar keladi',
				'Ma’lumotni oson yangilash',
				'Xalqaro standartlarga muvofiqlik',
			],
			audience: [
				'Kompaniya va zavodlar',
				'Agentlik va studiyalar',
				'Bir necha filialli tashkilotlar',
			],
			duration: 'Oddiy saytlar: 1–2 hafta. Portallar: kelishuv asosida',
		},
	},
	mobile: {
		ru: {
			lead: 'Мобильное приложение для iOS и Android на Flutter с единой кодовой базой.',
			features: [
				'Одно приложение для iOS и Android',
				'Push-уведомления клиентам',
				'Безопасная авторизация и личный кабинет',
				'Онлайн-оплата и заказы',
				'Интеграция с вашей CRM/ERP и сайтом',
				'Pro: приложения для клиента и курьера/админа, геолокация в реальном времени',
			],
			benefits: [
				'Дешевле, чем две отдельные нативные разработки',
				'Постоянный контакт с клиентом через push',
				'Повышение лояльности и повторных покупок',
				'Быстрые обновления для обеих платформ',
			],
			audience: ['Службы доставки', 'Розничная торговля', 'Сервисные компании'],
			duration: 'Ориентировочно 6–12 недель',
		},
		en: {
			lead: 'A mobile app for iOS and Android built on Flutter with a single codebase.',
			features: [
				'One app for iOS and Android',
				'Push notifications to customers',
				'Secure authentication and user account',
				'Online payments and orders',
				'Integration with your CRM/ERP and website',
				'Pro: customer and courier/admin apps, real-time geolocation',
			],
			benefits: [
				'Cheaper than two separate native builds',
				'Constant customer contact through push',
				'Higher loyalty and repeat purchases',
				'Fast updates for both platforms',
			],
			audience: ['Delivery services', 'Retail', 'Service companies'],
			duration: 'Approximately 6–12 weeks',
		},
		uz: {
			lead: 'Flutter texnologiyasida, yagona kod bazali iOS va Android uchun mobil ilova.',
			features: [
				'iOS va Android uchun bitta ilova',
				'Mijozlarga push-bildirishnomalar',
				'Xavfsiz avtorizatsiya va shaxsiy kabinet',
				'Onlayn to‘lov va buyurtmalar',
				'CRM/ERP va sayt bilan integratsiya',
				'Pro: mijoz va kuryer/admin ilovalari, real-time geolokatsiya',
			],
			benefits: [
				'Ikkita alohida ishlab chiqishdan arzonroq',
				'Push orqali mijoz bilan doimiy aloqa',
				'Sodiqlik va qayta xaridlar ortadi',
				'Ikkala platforma uchun tez yangilash',
			],
			audience: [
				'Yetkazib berish xizmatlari',
				'Chakana savdo',
				'Xizmat ko‘rsatish kompaniyalari',
			],
			duration: 'Taxminan 6–12 hafta',
		},
	},
	bot: {
		ru: {
			lead: 'Telegram-бот, который обслуживает клиентов, принимает заказы и отправляет уведомления автоматически.',
			features: [
				'Меню продаж и каталог в чате',
				'Приём заказов и заявок',
				'Автоответы на частые вопросы',
				'Рассылки и уведомления клиентам',
				'Админ-уведомления о новых заказах',
				'Pro: интеграция с CRM, платежи, сложная логика',
			],
			benefits: [
				'Обслуживание клиентов 24/7',
				'Меньше нагрузки на операторов',
				'Мгновенный ответ вместо ожидания',
				'Заказы приходят туда, где клиенты уже сидят',
			],
			audience: [
				'Магазины и кафе',
				'Клиники и учебные центры',
				'Сервисные компании',
			],
			duration: 'Ориентировочно 1–2 недели',
		},
		en: {
			lead: 'A Telegram bot that serves customers, takes orders and sends notifications automatically.',
			features: [
				'Sales menu and catalog in chat',
				'Order and request intake',
				'Automatic answers to common questions',
				'Broadcasts and customer notifications',
				'Admin alerts about new orders',
				'Pro: CRM integration, payments, complex logic',
			],
			benefits: [
				'Customer service 24/7',
				'Less load on operators',
				'Instant reply instead of waiting',
				'Orders arrive where customers already are',
			],
			audience: [
				'Shops and cafes',
				'Clinics and education centers',
				'Service companies',
			],
			duration: 'Approximately 1–2 weeks',
		},
		uz: {
			lead: 'Mijozlarga xizmat ko‘rsatadigan, buyurtma qabul qiladigan va bildirishnoma yuboradigan Telegram bot.',
			features: [
				'Chat ichida savdo menyusi va katalog',
				'Buyurtma va arizalarni qabul qilish',
				'Ko‘p so‘raladigan savollarga avtomatik javob',
				'Mijozlarga xabarnoma va yangiliklar yuborish',
				'Yangi buyurtmalar haqida admin bildirishnomasi',
				'Pro: CRM integratsiya, to‘lovlar, murakkab logika',
			],
			benefits: [
				'Mijozlarga 24/7 xizmat',
				'Operatorlarga yuklama kamayadi',
				'Kutish o‘rniga zudlik bilan javob',
				'Buyurtmalar mijoz allaqachon turgan joyga keladi',
			],
			audience: [
				'Do‘kon va kafelar',
				'Klinika va o‘quv markazlari',
				'Xizmat ko‘rsatish kompaniyalari',
			],
			duration: 'Taxminan 1–2 hafta',
		},
	},
	mini: {
		ru: {
			lead: 'Полноценное веб-приложение и витрина прямо внутри Telegram: без установки и выхода из мессенджера.',
			features: [
				'Веб-каталог и корзина внутри Telegram',
				'Оплата Click/Payme',
				'Авторизация через Telegram без паролей',
				'Уведомления через бота',
				'Pro: личный кабинет, бонусы, анимированный интерфейс',
				'Интеграция с вашей CRM или складом',
			],
			benefits: [
				'Клиенту не нужно ничего устанавливать',
				'Выше конверсия: меньше шагов до заказа',
				'Привычная среда для клиента',
				'Быстрый запуск по сравнению с мобильным приложением',
			],
			audience: [
				'Магазины и доставка еды',
				'Сервисы с записью и бронированием',
				'Компании с аудиторией в Telegram',
			],
			duration: 'Ориентировочно 3–6 недель',
		},
		en: {
			lead: 'A full web app and storefront inside Telegram: no installation, no leaving the messenger.',
			features: [
				'Web catalog and cart inside Telegram',
				'Click/Payme payments',
				'Passwordless login through Telegram',
				'Notifications through the bot',
				'Pro: user account, bonuses, animated interface',
				'Integration with your CRM or warehouse',
			],
			benefits: [
				'Customers install nothing',
				'Higher conversion: fewer steps to order',
				'A familiar environment for customers',
				'Faster launch than a mobile app',
			],
			audience: [
				'Shops and food delivery',
				'Booking and appointment services',
				'Companies with a Telegram audience',
			],
			duration: 'Approximately 3–6 weeks',
		},
		uz: {
			lead: 'Telegram ichidagi to‘laqonli veb-ilova va vitrina: o‘rnatish va messenjerdan chiqish shart emas.',
			features: [
				'Telegram ichida veb-katalog va savat',
				'Click/Payme orqali to‘lov',
				'Telegram orqali parolsiz kirish',
				'Bot orqali bildirishnomalar',
				'Pro: shaxsiy kabinet, bonuslar, animatsion interfeys',
				'CRM yoki ombor bilan integratsiya',
			],
			benefits: [
				'Mijoz hech narsa o‘rnatmaydi',
				'Konversiya yuqori: buyurtmagacha qadamlar kam',
				'Mijoz uchun tanish muhit',
				'Mobil ilovaga nisbatan tezroq ishga tushadi',
			],
			audience: [
				'Do‘kon va ovqat yetkazib berish',
				'Navbat va bron xizmatlari',
				'Auditoriyasi Telegramda bo‘lgan kompaniyalar',
			],
			duration: 'Taxminan 3–6 hafta',
		},
	},
	ai: {
		ru: {
			lead: 'AI-консультант, обученный на базе знаний вашей компании. Отвечает клиентам 24/7 в Telegram и на сайте.',
			features: [
				'Обучение на вашей базе вопросов и ответов',
				'Работа в Telegram и на сайте',
				'Передача сложных вопросов оператору',
				'Pro: интеграция с CRM, голосовые ответы',
				'Pro: глубокая аналитика вопросов клиентов',
				'Ответы на узбекском, русском и английском',
			],
			benefits: [
				'Ни один клиент не остаётся без ответа ночью',
				'Единые и точные ответы всей компании',
				'Снижение затрат на поддержку',
				'Понимание, что на самом деле спрашивают клиенты',
			],
			audience: [
				'Службы поддержки',
				'Интернет-магазины',
				'Компании с большим потоком обращений',
			],
			duration: 'Ориентировочно 2–4 недели',
		},
		en: {
			lead: 'An AI assistant trained on your company’s knowledge base. It answers customers 24/7 in Telegram and on your site.',
			features: [
				'Trained on your Q&A knowledge base',
				'Works in Telegram and on the website',
				'Hands complex questions to an operator',
				'Pro: CRM integration, voice replies',
				'Pro: deep analytics of customer questions',
				'Answers in Uzbek, Russian and English',
			],
			benefits: [
				'No customer is left unanswered at night',
				'Consistent and accurate answers across the company',
				'Lower support costs',
				'Insight into what customers actually ask',
			],
			audience: [
				'Support teams',
				'Online stores',
				'Companies with high enquiry volume',
			],
			duration: 'Approximately 2–4 weeks',
		},
		uz: {
			lead: 'Kompaniya bilimlar bazasi asosida o‘qitilgan AI maslahatchi. Telegram va saytda mijozlarga 24/7 javob beradi.',
			features: [
				'Sizning savol-javob bazangizda o‘qitiladi',
				'Telegram va saytda ishlaydi',
				'Murakkab savollarni operatorga uzatadi',
				'Pro: CRM integratsiya, ovozli javoblar',
				'Pro: mijoz savollarining chuqur tahlili',
				'O‘zbek, rus va ingliz tillarida javob',
			],
			benefits: [
				'Kechasi ham birorta mijoz javobsiz qolmaydi',
				'Butun kompaniya bo‘yicha yagona va aniq javoblar',
				'Qo‘llab-quvvatlash xarajatlari kamayadi',
				'Mijozlar aslida nima so‘rashini tushunish',
			],
			audience: [
				'Qo‘llab-quvvatlash xizmatlari',
				'Internet-do‘konlar',
				'Murojaatlari ko‘p kompaniyalar',
			],
			duration: 'Taxminan 2–4 hafta',
		},
	},
}

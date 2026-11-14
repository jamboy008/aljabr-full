# Xavfsizlik auditi (1-bosqich, faqat frontend)

Loyihada backend, login va API yo'q, shuning uchun brute-force, credential stuffing, autentifikatsiya va avtorizatsiya
kabi xavflar hozircha tekshirib bo'lmaydi: ular serverda hal qilinadi.

## Topilgan va yopilgan
1. Maxfiy kalit/token frontendda yo'q. `.env.example` da faqat ommaviy `VITE_` qiymatlar. `.env` gitignore'da.
2. Brauzer kodiga tushadigan hamma narsa ommaviy. Kalitlar faqat serverda saqlanadi.
3. CSP (meta + vercel.json), HSTS, nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy qo'shildi.
4. Tashqi havolalar `rel="noopener noreferrer"`. `dangerouslySetInnerHTML` ishlatilmagan (XSS xavfi kamaytirilgan).
5. Production sourcemap o'chirilgan. localStorage faqat til/tema uchun, try/catch ichida.
6. `lib/security.ts`: kiritishni tozalash, telefon tekshiruvi, URL tekshiruvi, mijoz tomonidagi throttle.

## Serverda majburiy (backend qo'shilganda)
- Login va forma endpointlarida IP + akkaunt bo'yicha rate-limit, bloklash, CAPTCHA (Turnstile/hCaptcha).
- Parollar argon2/bcrypt, standart parollar yo'q, MFA, parol sizib chiqqanligini tekshirish (HIBP).
- Sessiya: HttpOnly + Secure + SameSite cookie, CSRF himoyasi, server tomonida validatsiya va avtorizatsiya.
- API javoblarida ortiqcha maydon qaytarmaslik, xatolarda stack trace chiqarmaslik.

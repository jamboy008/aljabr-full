import { useEffect } from 'react'
import { site } from '@/config/site'

export default function TelegramRedirect() {
	useEffect(() => {
		window.location.replace(site.telegramTarget)
	}, [])
	return (
		<div className='mx-auto max-w-3xl px-4 py-32 text-center text-sm text-slate-500'>
			Telegram…
		</div>
	)
}

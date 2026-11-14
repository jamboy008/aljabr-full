import { useCallback, useEffect, useState } from 'react'
import { clearSession, hasSession, logout } from '@/lib/adminApi'
import { AdminLogin } from '@/components/admin/AdminLogin'
import { AdminDashboard } from '@/components/admin/AdminDashboard'

export default function AdminPage() {
	const [authed, setAuthed] = useState(hasSession)

	useEffect(() => {
		const prev = document.title
		const robots = document.createElement('meta')
		robots.name = 'robots'
		robots.content = 'noindex,nofollow'
		document.head.appendChild(robots)
		document.title = 'ALJABR Admin'
		return () => {
			document.title = prev
			robots.remove()
		}
	}, [])

	const onExpired = useCallback(() => {
		clearSession()
		setAuthed(false)
	}, [])
	const onLogout = useCallback(() => {
		void logout().finally(() => setAuthed(false))
	}, [])

	return authed ? (
		<AdminDashboard onLogout={onLogout} onExpired={onExpired} />
	) : (
		<AdminLogin onSuccess={() => setAuthed(true)} />
	)
}

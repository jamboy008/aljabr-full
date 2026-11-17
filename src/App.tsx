import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import HomePage from '@/app/HomePage'
import ComingSoon from '@/app/ComingSoon'
import ProductsPage from '@/app/ProductsPage'
import ApplyPage from '@/app/ApplyPage'
import ContactPage from '@/app/ContactPage'
import AboutPage from '@/app/AboutPage'
import AdminPage from '@/app/AdminPage'
import TelegramRedirect from '@/app/TelegramRedirect'

const router = createBrowserRouter([
	{ path: '/admin', element: <AdminPage /> },
	{
		element: <Layout />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/products', element: <ProductsPage /> },
			{ path: '/solutions', element: <ProductsPage /> },
			{ path: '/apply', element: <ApplyPage /> },
			{ path: '/contact', element: <ContactPage /> },
			{ path: '/about', element: <AboutPage /> },
			{ path: '/tg', element: <TelegramRedirect /> },
			{ path: '*', element: <ComingSoon /> },
		],
	},
])

export default function App() {
	return <RouterProvider router={router} />
}

import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'sun' | 'ghost'
const styles: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-950 dark:bg-secondary dark:text-primary-950 dark:hover:bg-secondary-300',
  outline: 'border border-slate-300 bg-white text-primary hover:border-primary dark:border-night-line dark:bg-transparent dark:text-slate-100 dark:hover:border-secondary',
  sun: 'bg-tertiary text-primary-950 hover:bg-tertiary-100',
  ghost: 'border border-white/25 text-white hover:bg-white/10',
}
interface Props { to?: string; href?: string; variant?: Variant; children: ReactNode; className?: string }

export function Button({ to, href, variant = 'primary', children, className = '' }: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${styles[variant]} ${className}`
  if (href) return <a className={cls} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
  return <Link className={cls} to={to ?? '/'}>{children}</Link>
}

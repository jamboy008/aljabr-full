import type { ReactNode } from 'react'

export const inputCls =
  'w-full rounded-lg border border-sky-line bg-sky-surface px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-secondary dark:border-night-line dark:bg-night'

export function Field({ id, label, error, hint, children }: { id: string; label: string; error?: string; hint?: string; children: ReactNode }) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-xs font-semibold">
        <label htmlFor={id}>{label}</label>
        {hint && <span className="font-normal text-slate-500">{hint}</span>}
      </div>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  )
}

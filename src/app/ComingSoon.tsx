import { useI18n } from '@/lib/i18n'
export default function ComingSoon() {
  const { t } = useI18n()
  return <div className="mx-auto max-w-3xl px-4 py-32 text-center text-xl font-semibold text-primary dark:text-white">{t('soon')}</div>
}

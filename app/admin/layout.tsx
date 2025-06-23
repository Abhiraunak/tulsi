import { redirect } from 'next/navigation'
import { getUserFromCookie } from '@/lib/auth'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = getUserFromCookie()

  if (!user) {
    redirect('/signin?callbackUrl=/admin/dashboard')
  }

  return <>{children}</>
}

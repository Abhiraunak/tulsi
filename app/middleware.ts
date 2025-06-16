import { NextResponse, type NextRequest } from 'next/server'
import { verifyJwt } from '@/lib/jwt/jwt'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value ?? ''
  const pathname = request.nextUrl.pathname

  // Type-safe token check
  const isProtectedRoute = pathname.startsWith('/admin/dashboard')
  let isValidToken = false

  if (isProtectedRoute) {
    try {
      const decoded = verifyJwt(token)
      // You can optionally validate the shape of `decoded` here if needed
      isValidToken = !!decoded
    } catch (error) {
      isValidToken = false
    }

    if (!isValidToken) {
      const signInUrl = request.nextUrl.clone()
      signInUrl.pathname = '/admin/signin'
      signInUrl.searchParams.set('callbackUrl', pathname)

      return NextResponse.redirect(signInUrl)
    }
  }

  return NextResponse.next()
}

// Match only admin dashboard routes
export const config = {
  matcher: ['/admin/dashboard/:path*'],
}

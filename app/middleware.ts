import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'dev-secret';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      const decoded = jwt.verify(token, SECRET_KEY) as any;

      if (decoded.role !== 'admin') {
        return NextResponse.redirect(new URL('/login', request.url));
      }

      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};

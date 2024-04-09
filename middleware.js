import { NextResponse } from 'next/server'

export function middleware(req) {
  const { pathname } = req.nextUrl;

  console.log("===", {pathname});

  const res = NextResponse.next()
    res.headers.set('x-request-url', `${pathname}}`)

    return res
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
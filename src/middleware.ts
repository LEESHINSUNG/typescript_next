import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log("미들웨어가 실행되고 있음! 체크중!!")
  if (req.nextUrl.pathname.startsWith('/products/1004')) {
    console.log("미들웨어 - 경로를 리다이렉팅함")
    return NextResponse.redirect(new URL('/products', req.url))
  }
}

export const config = {
  matcher: ['/products/:path*']
}
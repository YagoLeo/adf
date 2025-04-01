import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // 这里可以添加中间件逻辑，例如身份验证、重定向等
  return NextResponse.next()
}

// 配置中间件应用的路径
export const config = {
  matcher: [
    // 排除静态资源和API路由
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}


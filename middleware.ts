import { type NextRequest, NextResponse } from "next/server";
import { getCookie ,removeCookie} from "@/lib/cookies";
export async function middleware(request: NextRequest) {
// == For testing==
//   await removeCookie("token")
  const token = await getCookie("token");
  const { pathname } = request.nextUrl;
  if (pathname==="/"){
    return NextResponse.redirect(new URL(token? "/dashboard" : "/login",request.url))
  }

  if (pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pathname.startsWith("/login") && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/login"],
};
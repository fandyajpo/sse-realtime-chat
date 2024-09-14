import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";
export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const cookie = cookies().get("me")?.value;

  const isPublic = path === "/login";

  if (isPublic && cookie) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (!isPublic && !cookie) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
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
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

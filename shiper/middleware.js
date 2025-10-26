import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;

  // Routes that require authentication
  const protectedRoutes = ["/Ex_pages/Booking", "/Ex_pages/Dashboard", "/Ex_pages/Profile"];

  // Check if the request path starts with any protected route
  const isProtected = protectedRoutes.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  if (isProtected && !token) {
    // Redirect to login page with redirect back to original URL
    const loginUrl = new URL("/auth/login", req.url);
    loginUrl.searchParams.set("redirect", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/Ex_pages/:path*"], // Matches all subpages under /Ex_pages
};

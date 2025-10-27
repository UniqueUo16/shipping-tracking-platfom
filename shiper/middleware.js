import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const protectedRoutes = ["/Ex_pages/Booking", "/Ex_pages/Dashboard", "/Ex_pages/Profile"];

  const isProtected = protectedRoutes.some(path => req.nextUrl.pathname.startsWith(path));

  if (isProtected) {
    if (!token) {
      const loginUrl = new URL("/auth/login", req.url);
      loginUrl.searchParams.set("redirect", req.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET); // validate token server-side
    } catch (err) {
      const loginUrl = new URL("/auth/login", req.url);
      loginUrl.searchParams.set("redirect", req.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

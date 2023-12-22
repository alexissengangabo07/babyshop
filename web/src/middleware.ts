import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ['/dashboard', '/dashboard/products'];

export default function auth(req: NextRequest) {
    if (req.cookies.get('token') === null && protectedRoutes.includes(req.nextUrl.pathname)) {
        const apsoluteURL = new URL('/auth/login', req.nextUrl.origin);
        return NextResponse.redirect(apsoluteURL.toString());
    }
}
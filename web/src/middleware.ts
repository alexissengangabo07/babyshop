import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = [
    '/dashboard',
    '/dashboard/products',
    '/dashboard/clients',
    '/dashboard/categories',
    '/dashboard/stock',
    '/dashboard/commandes',
    '/dashboard/rapports',
    '/dashboard/parametre'
];

export default function auth(req: NextRequest) {
    if(protectedRoutes.includes(req.nextUrl.pathname) && req.cookies.get('role')?.value === 'client') {
        req.cookies.clear()
    }
    if (req.cookies.get('token') === undefined && protectedRoutes.includes(req.nextUrl.pathname)) {
        const apsoluteURL = new URL('/auth/login', req.nextUrl.origin);
        return NextResponse.redirect(apsoluteURL.toString());
    }

    if (req.cookies.get('token') !== undefined && req.nextUrl.pathname === '/auth/login' && req.cookies.get('role')?.value !== 'client') {
        const dashboardURL = new URL('/dashboard', req.nextUrl.origin);
        return NextResponse.redirect(dashboardURL.toString());
    }
}
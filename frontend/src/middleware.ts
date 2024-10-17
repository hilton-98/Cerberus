import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('access_token')?.value;
  const loginUrl = new URL('/auth/login', req.url);
  const secret = process.env.SECRET_KEY;

  if (!token || !secret) {
    return NextResponse.redirect(loginUrl);
  }

  try {
    const secretKey = new TextEncoder().encode(secret);
    await jwtVerify(token, secretKey);
    return NextResponse.next();
  } catch (err) {
    console.error(err);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ['/', '/expenses'],
};

import { NextResponse, NextRequest } from 'next/server';
import { nanoid } from 'nanoid';

export function middleware(req: NextRequest) {
  // Generate a CSRF token if it doesn't exist
  if (!req.cookies.get('csrfToken')) {
    const csrfToken = nanoid();
    const response = NextResponse.next();
    response.cookies.set('csrfToken', csrfToken, { 
        secure: true,
        httpOnly: false,
        sameSite: 'none'
    });
    return response;
  }

  console.log("Middleware: ", req.cookies);

  // Continue the request
  return NextResponse.next();
}

// Specify the paths where the middleware should apply
export const config = {
  matcher: ['/api/contact'],
};
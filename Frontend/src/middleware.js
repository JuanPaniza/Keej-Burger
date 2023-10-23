import { NextResponse } from 'next/server'
import {jwtVerify} from 'jose'

 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
const token  = request.cookies.get('token');
if(request.nextUrl.pathname.includes('/profile'))
    if(!token){
        return NextResponse.redirect(new URL('/es/login', request.url))
    }
  try {
    const {payload} = await jwtVerify(token, process.env.JWT_SECRET)
  } catch (error) {
    
  }
}

export const config = {
  matcher: '/profile/:path*',
}
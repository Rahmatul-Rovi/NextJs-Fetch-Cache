import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server"


export const middleware = async(req) => {
  
    const token = getToken({ req });
    const isTokenOk = Boolean(token);
    cpnst isAdminUser = token?.user == 'admin';
    const isAdminSpecificRoute = req.nextUrl.pathname.startsWith('/dashboard')
    if(isAdminSpecificRoute && !isAdminUser){
        const callbackUrl = encodeURIComponent(req.nexturl.pathname);

        return NextResponse.redirect(new URL(`/api/auth/signin?callbackUrl=${callbackUrl}`, request.url));
    }
    if(token) console.log( "From MiddleWare:" ,token);

    return NextResponse.next();
}
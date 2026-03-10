import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server"


export const middleware = async(req) => {
  
    const token = getToken({ req });
    const isTokenOk = Boolean(token);
    cpnst isAdminUser = token?.user == 'admin';
    const isAdminSpecificRoute = req.nextUrl.pathname.startswith('/dashboard')
    if(token) console.log( "From MiddleWare:" ,token);

    return NextResponse.next();
}
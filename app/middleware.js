import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server"


export const middleware = async(req) => {
  
    const token = getToken({ req });
    if(token) console.log(token);

    return NextResponse.next();
}
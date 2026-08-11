import { NextResponse } from "next/server";

export function proxy(request){
    const isLoggedIn = request.cookies.get("loggedIn") 
    if(request.nextUrl.pathname === "/dashboard" && !isLoggedIn) {
        return NextResponse.redirect(new URL("/login", request.url));

    }

    return NextResponse.next();
}
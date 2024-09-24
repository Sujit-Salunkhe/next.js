import {headers,cookies} from "next/headers";
export async function GET(request){
    const requestHeaders = new Headers(request.headers)
    const headerList = headers();
    cookies().set("results","20")
    const theme = request.cookies.get("theme"); 
    console.log(requestHeaders.get("Authorization"))
    console.log(headerList.get("Authorization")); 
    console.log(theme)
    console.log(cookies().get("results"))
    return new Response("<h1>Profile API data</h1>",{
        headers:{
            "Content-type":"text/html",
            "Set-Cookie":"theme=dark",
        },
    })
}
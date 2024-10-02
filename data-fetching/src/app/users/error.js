'use client';
import { useEffect } from "react";

export default function ErrorPage({error}){
    useEffect(() => {
            console.log(`${error}`)
    },[error])
return (
    <div>
        <div>Error in Fetching Data</div>
    </div>
)
}


"use client" 
import { useState } from "react"
import {ClientComponentTwo} from './client-server-one-two'
export const ClientComponent = () => {
    const [name,setName] = useState('KIng')
    return (
        <>
        <h1>Client Component one</h1>
        <ClientComponentTwo/>
        </>

    )
}
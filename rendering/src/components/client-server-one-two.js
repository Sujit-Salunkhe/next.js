"use client" 
import { useState } from "react"

export const ClientComponentTwo = () => {
    const [name,setName] = useState('King')
    return <h1>Client Component two</h1>
}
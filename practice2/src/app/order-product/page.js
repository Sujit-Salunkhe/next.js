"use client";
import React from 'react'
import { useRouter } from 'next/navigation'
const orderProduct = () => {
    const router = useRouter();
    const handleClick = () =>{
        console.log("order is placed");
        router.push("/");
    };

     
  return (
    <div>
     <h1>Order is placed</h1>
      <button onClick={handleClick}>place Order</button>
    </div>
  )
}

export default orderProduct

"use client";

import clientSideFunction from "@/components/utils/client-utils";


export default function Client_Route_Page() {
    const result = clientSideFunction()
  return (
    <h1 className="text-white">
      Client route {result} 
    </h1>
  );
}
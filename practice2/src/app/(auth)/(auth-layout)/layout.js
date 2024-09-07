"use client";
import Link from "next/link";
// import React, { Children } from 'react'
import { usePathname } from "next/navigation";
import './styles.css'
const layout = ({ children }) => {
  const navLinks = [
    { name: "login", href: "/login" },
    { name: "register", href: "/register" },
    { name: "ForgoPassword", href: "/forgotpassword" },
  ];
  const pathName = usePathname();
  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <>
            <Link href={link.href} className={isActive ? "font-bold mr-4" : "text-blue-500  mr-4"}>{link.name}</Link>
            <br />
          </>
        );
      })}
      <h1 className="text-red-500 font-bold">Inner layouts</h1>
      {children}
    </div>
  );
};

export default layout;

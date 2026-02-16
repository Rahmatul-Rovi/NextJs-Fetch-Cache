"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname, pathname.includes("dashboard"));
  if(!pathname.includes("dashboard"))
  {
  return (
    <nav className='flex justify-center'>
          <ul className='flex justify-between gap-10'>
            <Link href="/">
             <li>Home</li>
            </Link>

             <Link href="/services">
            <li>Services</li>
            </Link>

             <Link href="/about">
            <li>About</li>
            </Link>
          
          </ul>
        </nav>
  )
  }
  else{
    return <></>
  }
 
}

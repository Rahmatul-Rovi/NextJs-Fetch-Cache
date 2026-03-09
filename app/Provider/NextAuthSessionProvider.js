"use client";

import { SessionProvider } from "next-auth/react"

export default function NextAuthSessionProvider({childen}) {
  return (
    <SessionProvider >
     {childen}
    </SessionProvider>
  )
}
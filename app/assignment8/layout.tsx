"use client"
import { SessionProvider } from "next-auth/react";

export default function Assignment8Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}
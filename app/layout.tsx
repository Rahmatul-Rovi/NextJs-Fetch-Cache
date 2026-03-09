import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:  "Learning Next App",
    template: "%s | Learning Next App"
  },
  keywords: ['Next JS', 'React', 'JavaScript', 'Learning', 'PlayGround']
  description: "Trying to learn NextJS as best as we can",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      
      >
        <Navbar></Navbar>
        {children}
      </body>
      </NextAuthSessionProvider>
    </html>
  );
}

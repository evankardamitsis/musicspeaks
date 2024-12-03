import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Manrope } from 'next/font/google';

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
  title: "Music Speaks | Digital Music Marketing",
  description: "We are dedicated to empowering independent artists through targeted paid media, creative promotional campaigns and customized digital music marketing. \n",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.className}>
      <body className={"bg-[#FFEE07]"} >
        {children}
      </body>
    </html>
  );
}

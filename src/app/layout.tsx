import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Music Speaks | Digital Music Marketing for Independent Artists",
    template: "%s | Music Speaks"
  },
  description: "We are dedicated to empowering independent artists through targeted paid media, creative promotional campaigns and customized digital music marketing strategies. Grow your fanbase and boost your music career with our expert marketing services.",
  keywords: [
    "digital music marketing",
    "independent artists",
    "music promotion",
    "paid media campaigns",
    "music marketing agency",
    "artist promotion",
    "music advertising",
    "social media marketing for musicians",
    "streaming promotion",
    "music industry marketing"
  ],
  authors: [{ name: "Music Speaks Team" }],
  creator: "Music Speaks",
  publisher: "Music Speaks",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://musicspeaks.gr',
    siteName: 'Music Speaks',
    title: 'Music Speaks | Digital Music Marketing for Independent Artists',
    description: 'We are dedicated to empowering independent artists through targeted paid media, creative promotional campaigns and customized digital music marketing strategies.',
    images: [
      {
        url: '/og-image.png',
        width: 1000,
        height: 149,
        alt: 'Music Speaks - Digital Music Marketing for Independent Artists',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Music Speaks | Digital Music Marketing for Independent Artists',
    description: 'We are dedicated to empowering independent artists through targeted paid media, creative promotional campaigns and customized digital music marketing strategies.',
    images: ['/og-image.png'],
    creator: '@musicspeaks', // Replace with your actual Twitter handle
  },
  verification: {
    google: 'your-google-site-verification-code', // Replace with your actual verification code
  },
  category: 'technology',
  other: {
    'theme-color': '#FFEE07',
    'color-scheme': 'light',
  },
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

import type React from "react"
import type { Metadata } from "next"
import {Geist} from 'next/font/google'
import { Suspense } from "react"
import "./globals.css"

const brandFont = Geist({subsets:['latin']})

export const metadata: Metadata = {
  title: {
    default: "Unhooked - Faith-Based Recovery from Pornography Addiction",
    template: "%s | Unhooked",
  },
  description:
    "Break free from pornography addiction with faith-based support, accountability partners, and a Christian community. Download the Unhooked app for free.",
  keywords:
    "pornography addiction, faith-based recovery, Christian accountability, addiction recovery app, spiritual healing, porn addiction help, Christian support",
  authors: [{ name: "Unhooked Team" }],
  creator: "Unhooked",
  publisher: "Unhooked",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://unhooked.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Unhooked - Faith-Based Recovery App",
    description:
      "Join thousands who have found freedom from pornography addiction through faith, accountability, and community support.",
    url: "https://unhooked.app",
    siteName: "Unhooked",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Unhooked - Faith-Based Recovery App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unhooked - Faith-Based Recovery App",
    description: "Break free from pornography addiction with faith-based support and accountability.",
    images: ["/og-image.jpg"],
    creator: "@unhooked_app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={brandFont.className}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}

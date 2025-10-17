import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { structuredData } from "./structured-data"
import "./globals.css"

export const metadata: Metadata = {
  title: "Questly - La vida no era un juego, ¡Hasta ahora!",
  description: "La app que transforma tu productividad con tecnología de vanguardia. Gamifica tu vida diaria y alcanza tus objetivos de manera divertida y efectiva.",
  keywords: ["productividad", "gamificación", "objetivos", "hábitos", "app móvil", "juegos", "motivación", "tareas", "metas"],
  authors: [{ name: "Questly Team" }],
  creator: "Questly",
  publisher: "Questly",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://questly.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Questly - La vida no era un juego, ¡Hasta ahora!",
    description: "La app que transforma tu productividad con tecnología de vanguardia. Gamifica tu vida diaria y alcanza tus objetivos de manera divertida y efectiva.",
    url: 'https://questly.app',
    siteName: 'Questly',
    images: [
      {
        url: '/image_seo.png',
        width: 1200,
        height: 630,
        alt: 'Questly - Gamifica tu productividad',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Questly - La vida no era un juego, ¡Hasta ahora!",
    description: "La app que transforma tu productividad con tecnología de vanguardia. Gamifica tu vida diaria y alcanza tus objetivos de manera divertida y efectiva.",
    images: ['/image_seo.png'],
    creator: '@questly',
    site: '@questly',
  },
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
  generator: "Next.js",
  applicationName: "Questly",
  referrer: 'origin-when-cross-origin',
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" }
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: '/manifest.json',
  category: 'productivity',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

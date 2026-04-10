import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const gottak = localFont({
  src: [
    {
      path: '../public/fonts/Gottak-Thin.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gottak-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gottak-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-gottak',
  display: 'swap',
})

const gottakBody = localFont({
  src: '../public/fonts/Gottak-Thin.ttf',
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Forester OS | Websites voor het MKB die blijven groeien',
  description: 'De meeste bureaus bouwen je website en verdwijnen. Wij niet. Elke maand weet jij precies wat er is gebeurd — en wat wij eraan hebben gedaan.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d0015',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <body className={`${gottakBody.variable} ${gottak.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

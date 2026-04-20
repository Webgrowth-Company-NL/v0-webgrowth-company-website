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
      path: '../public/fonts/Gottak-Regular.ttf',
      weight: '400',
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
  src: '../public/fonts/Gottak-Regular.ttf',
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Forester OS — Groeiplatform voor het MKB | Webgrowth',
  description: 'De meeste bureaus bouwen je website en verdwijnen. Wij niet. Elke maand weet jij precies wat er is gebeurd en wat het heeft opgeleverd. Breda, heel Nederland.',
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

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Webgrowth Company',
  description: 'Groeiplatform voor het MKB. Website, marketing automatisering en CRM in één systeem.',
  url: 'https://webgrowth.company',
  telephone: '+31762045010',
  email: 'martijn@webgrowth.company',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ceresstraat 13',
    addressLocality: 'Breda',
    postalCode: '4811 CA',
    addressCountry: 'NL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5719,
    longitude: 4.7683,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Nederland',
  },
  priceRange: '€€€',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Forester OS Pakketten',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Core',
        price: '399',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          billingIncrement: 1,
          unitCode: 'MON',
        },
      },
      {
        '@type': 'Offer',
        name: 'Growth',
        price: '699',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          billingIncrement: 1,
          unitCode: 'MON',
        },
      },
      {
        '@type': 'Offer',
        name: 'Scale',
        price: '999',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          billingIncrement: 1,
          unitCode: 'MON',
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${gottakBody.variable} ${gottak.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

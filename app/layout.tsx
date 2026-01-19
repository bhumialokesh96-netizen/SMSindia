import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AdSenseScript from '@/components/AdSenseScript'

export const metadata: Metadata = {
  metadataBase: new URL('https://smsindiablog.com'),
  title: {
    default: 'SMS India Blog - Latest Tech News, Trends & Insights',
    template: '%s | SMS India Blog'
  },
  description: 'Discover the latest technology trends, news, and insights from India. Expert analysis on mobile, telecommunications, digital services, and more.',
  keywords: ['SMS', 'India', 'Technology', 'Blog', 'Trends', 'Mobile', 'Telecom', 'Digital Services'],
  authors: [{ name: 'SMS India Team' }],
  creator: 'SMS India',
  publisher: 'SMS India Blog',
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
    locale: 'en_IN',
    url: 'https://smsindiablog.com',
    title: 'SMS India Blog - Latest Tech News, Trends & Insights',
    description: 'Discover the latest technology trends, news, and insights from India.',
    siteName: 'SMS India Blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SMS India Blog',
    description: 'Latest technology trends, news, and insights from India.',
    creator: '@smsindia',
  },
  alternates: {
    canonical: 'https://smsindiablog.com',
    types: {
      'application/rss+xml': 'https://smsindiablog.com/rss.xml',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <AdSenseScript />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

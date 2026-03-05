import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Source_Sans_3, Manrope } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import StructuredData from "@/components/StructuredData";
import { siteDetails } from '@/data/siteDetails';

import "./globals.css";

const manrope = Manrope({ subsets: ['latin'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteDetails.metadata.title,
    template: `%s | ${siteDetails.siteName}`
  },
  description: siteDetails.metadata.description,
  keywords: [
    'telemetry',
    'racing analytics',
    'GPS tracking',
    'performance analysis',
    'motorsports',
    'lap timing',
    'driving analytics',
    'AI insights',
    'vehicle performance'
  ],
  authors: [{ name: 'Overlap Team' }],
  creator: 'Overlap',
  publisher: 'Overlap',
  metadataBase: new URL(siteDetails.siteUrl),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'bg-BG': '/bg-BG',
    },
  },
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    siteName: siteDetails.siteName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ['/images/twitter-image.jpg'],
    creator: '@overlap',
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${manrope.className} ${sourceSans.className} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <CookieConsent />
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
      </body>
    </html>
  );
}

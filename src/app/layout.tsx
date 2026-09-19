import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  variable: "--font-inter",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

const manrope = localFont({
  src: "./fonts/manrope-latin.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mindmaxtutoring.com.au"),
  title: {
    default: "MindMax Tutoring | Melbourne Tutoring for Grades 3–6",
    template: "%s | MindMax Tutoring",
  },
  description:
    "Structured Maths, English and reasoning tutoring for students in Grades 3–6, with online and face-to-face options in Melbourne.",
  applicationName: "MindMax Tutoring",
  category: "education",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "MindMax Tutoring",
    url: "/",
    title: "MindMax Tutoring",
    description:
      "Structured tutoring for students in Grades 3–6, established in Melbourne since 2012.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MindMax Tutoring | Melbourne Tutoring for Grades 3–6",
    description:
      "Structured Maths, English and reasoning tutoring with online and face-to-face options.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF8F3",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "MindMax Tutoring",
    url: "https://mindmaxtutoring.com.au",
    telephone: "+61 407 583 662",
    foundingDate: "2012",
    areaServed: "Melbourne, Victoria",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "681 Chapel Street",
        addressLocality: "South Yarra",
        addressRegion: "VIC",
        postalCode: "3141",
        addressCountry: "AU",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Unit 14/89 Elm Park Drive",
        addressLocality: "Hoppers Crossing",
        addressRegion: "VIC",
        postalCode: "3029",
        addressCountry: "AU",
      },
    ],
  };

  return (
    <html lang="en-AU" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}

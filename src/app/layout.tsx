import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

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
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "MindMax Tutoring",
    title: "MindMax Tutoring",
    description:
      "Structured tutoring for students in Grades 3–6, established in Melbourne since 2012.",
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
  return (
    <html lang="en-AU" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}

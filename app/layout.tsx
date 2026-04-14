import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

// Space Grotesk — distinctive, sharp, used for all headings.
// Gives the "senior developer portfolio" feel vs plain Inter everywhere.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Nischal Khatri | Expert Paraplanner for Australian Advisory Firms",
  description:
    "Expert paraplanner with 2+ years delivering compliant SOAs, ROAs, financial modelling, insurance analysis, and superannuation strategies for Australian advisory firms. RG 146 compliant. Available remotely.",
  keywords: [
    "paraplanner",
    "financial planning",
    "SOA preparation",
    "ROA preparation",
    "superannuation",
    "SMSF",
    "insurance analysis",
    "financial modelling",
    "RG 146",
    "Australia",
    "remote paraplanner",
    "ASIC compliance",
    "Irate",
    "Morningstar",
    "Xplan",
    "Chant West",
  ],
  authors: [{ name: "Nischal Khatri", url: "mailto:nischal.khatry@outlook.com" }],
  openGraph: {
    title: "Nischal Khatri | Expert Paraplanner",
    description:
      "2+ years delivering compliant SOAs, financial modelling, and insurance analysis for Australian advisory firms — remotely, reliably, and ASIC-ready.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nischal Khatri | Paraplanner",
    description:
      "Expert paraplanning for Australian advisory firms — SOA/ROA, financial modelling, insurance analysis.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "Financial Services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased bg-[#050E1D] text-[#F0F4FF]">
        {children}
      </body>
    </html>
  );
}

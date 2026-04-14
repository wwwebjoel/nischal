import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nischal Khatri | Paraplanner & Financial Planning Expert",
  description:
    "Expert paraplanner with 2+ years specialising in SOA/ROA preparation, financial modelling, insurance analysis, and superannuation. RG 146 compliant and available for remote collaboration with Australian advisory firms.",
  keywords:
    "paraplanner, financial planning, SOA, ROA, superannuation, SMSF, insurance analysis, financial modelling, RG 146, Australia, remote paraplanner, Nepal",
  authors: [{ name: "Nischal Khatri", url: "mailto:nischal.khatry@outlook.com" }],
  openGraph: {
    title: "Nischal Khatri | Paraplanner & Financial Planning Expert",
    description:
      "Expert paraplanning services for Australian financial advisers — SOA/ROA, financial modelling, insurance analysis, superannuation.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nischal Khatri | Paraplanner",
    description: "Expert paraplanning for Australian advisory firms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-[#050E1D] text-[#F0F4FF]">
        {children}
      </body>
    </html>
  );
}

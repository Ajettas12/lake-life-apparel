import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lake Life Apparel | Custom Bulk Apparel in the Twin Cities",
    template: "%s | Lake Life Apparel",
  },
  description:
    "Custom bulk apparel for schools, teams, churches, businesses, camps, and community groups. Made locally in the Twin Cities, Minnesota.",
  keywords: [
    "custom apparel",
    "bulk orders",
    "screen printing",
    "embroidery",
    "Twin Cities",
    "Minnesota",
    "team apparel",
    "school apparel",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Lake Life Apparel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

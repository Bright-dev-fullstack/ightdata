import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IGHTDATA / Research, Data, & Business Intelligence",
  description: "IGHTDATA connect businesses with researchers to collect, analyse, and access valuable data. Transform research into actionable insight  and make  samrter data-driven decisions.",
  keywords:[
    "IGHTDATA",
    "Research Platform",
    "Data intelligence",
    "Market Research",
    "Business Intelligence",
    "Research Data",
    "Data Collection",
    "Nigeria Research Platform",
    "Surveys",
  ]
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

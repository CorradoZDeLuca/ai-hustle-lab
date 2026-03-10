import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Hustle Lab | Autonomous AI Agent Building & Shipping",
  description: "An autonomous AI agent that builds tools, trades markets, hunts bounties, and ships code — 100 Days of AI Hustle. Follow the journey of an AI making money from scratch.",
  keywords: ["AI agent", "autonomous AI", "developer tools", "npm packages", "open source", "AI hustle"],
  openGraph: {
    title: "AI Hustle Lab",
    description: "An autonomous AI agent building, shipping & earning from scratch",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Hustle Lab",
    description: "An autonomous AI agent building, shipping & earning from scratch",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}

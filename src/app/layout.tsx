import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";

const interFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InstaDocs",
  description: "An Intellient chat to pdf platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          'min-h-screen font-sans antialiased grainy',
          interFont.className
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

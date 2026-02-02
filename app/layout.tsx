import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import SkipLink from "@/components/SkipLink";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-syne" });

export const metadata: Metadata = {
  title: "Stefan Land | Portfolio",
  description: "Photography Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${syne.variable} font-sans antialiased`}>
        <SkipLink />
        <div className="grain"></div>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

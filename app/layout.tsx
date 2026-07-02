import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const displaySerif = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
  display: "swap",
});

const bodySans = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FV Dict - Offline French-Vietnamese Dictionary",
  description:
    "A calm offline French-Vietnamese dictionary for fast lookup, clear meanings, favorites, and recent searches.",
  keywords: [
    "French Vietnamese dictionary",
    "offline French dictionary",
    "French Vietnamese app",
    "tu dien Phap Viet",
    "dictionnaire francais vietnamien",
  ],
  openGraph: {
    title: "FV Dict",
    description: "A calm offline French-Vietnamese dictionary.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f2efe6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displaySerif.variable} ${bodySans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <div aria-hidden className="grain" />
        {children}
      </body>
    </html>
  );
}

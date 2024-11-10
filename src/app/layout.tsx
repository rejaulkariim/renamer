import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
  src: "../app/fonts/PoppinsVF.ttf",
  weight: "100 200 300 400 500 600 700 800 900",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ["Indie Page", "Portfolio"],
  authors: [
    {
      name: "Rejaul Karim",
      url: "https://renamer.me/rejaul",
    },
  ],
  creator: "Rejaul Karim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@rejaulkariim",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", poppins.className)}>{children}</body>
    </html>
  );
}

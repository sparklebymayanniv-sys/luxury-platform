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
  metadataBase: new URL("https://bluediamondtattoostudio.com"),

  title: {
    default: "Blue Diamond Tattoo Studio",
    template: "%s | Blue Diamond Tattoo Studio",
  },

  description:
    "Luxury tattoo artistry — fine line, realism, and custom pieces in Massachusetts.",

  alternates: {
    canonical: "/",
  },

  icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
  ],
  apple: "/apple-touch-icon.png",
},

  openGraph: {
    title: "Blue Diamond Tattoo Studio",
    description:
      "Luxury tattoo artistry — fine line, realism, and custom pieces.",
    url: "https://bluediamondtattoostudio.com",
    siteName: "Blue Diamond Tattoo Studio",
    images: [
      {
        url: "/branding/blue_diamond_logo.png",
        width: 1200,
        height: 630,
        alt: "Blue Diamond Tattoo Studio logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Blue Diamond Tattoo Studio",
    description:
      "Luxury tattoo artistry — fine line, realism, and custom pieces.",
    images: ["/branding/blue_diamond_logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
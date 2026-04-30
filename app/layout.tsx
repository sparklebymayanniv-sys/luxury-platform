import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  metadataBase: new URL("https://bluediamondtattoostudio.com"),

  title: {
    default: "Blue Diamond Tattoo Studio | Tattoo Shop in Attleboro MA",
    template: "%s | Blue Diamond Tattoo Studio",
  },

  description:
    "Blue Diamond Tattoo Studio in Attleboro MA offers custom tattoos, realism, black and grey tattoos, piercing, paintings, cover ups, and original artwork.",

  keywords: [
    "Blue Diamond Tattoo Studio",
    "tattoo shop Attleboro MA",
    "tattoo artist Attleboro MA",
    "custom tattoos Attleboro",
    "realism tattoo Massachusetts",
    "black and grey tattoo",
    "piercing Attleboro MA",
    "cover up tattoo Attleboro",
    "tattoo studio near me",
  ],

  alternates: {
    canonical: "https://bluediamondtattoostudio.com",
  },

  icons: {
     icon: "/favicon.ico",
  shortcut: "/favicon.ico",
  apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Blue Diamond Tattoo Studio | Attleboro MA",
    description:
      "Custom tattoos, realism, black and grey work, piercing, paintings, and original artwork in Attleboro MA.",
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
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const tattooSchema = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    "@id": "https://bluediamondtattoostudio.com/#business",
    name: "Blue Diamond Tattoo Studio",
    url: "https://bluediamondtattoostudio.com",
    image: "https://bluediamondtattoostudio.com/branding/blue_diamond_logo.png",
    logo: "https://bluediamondtattoostudio.com/branding/blue_diamond_logo.png",
    telephone: "+15084551948",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4 Park St",
      addressLocality: "Attleboro",
      addressRegion: "MA",
      postalCode: "02703",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Attleboro" },
      { "@type": "City", name: "North Attleborough" },
      { "@type": "City", name: "Mansfield" },
      { "@type": "City", name: "Taunton" },
      { "@type": "City", name: "Pawtucket" },
      { "@type": "City", name: "Providence" },
      { "@type": "City", name: "Boston" },
    ],
    sameAs: ["https://www.instagram.com/bluediamond.tattoo_studio"],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Tattoos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Realism Tattoos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Black and Grey Tattoos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Portrait Tattoos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cover Up Tattoos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Piercing" } },
    ],
  }

  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Script
          id="blue-diamond-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(tattooSchema),
          }}
        />
        {children}
      </body>
    </html>
  )
}
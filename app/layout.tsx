import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  metadataBase: new URL("https://bluediamondtattoostudio.com"),

  title: {
    default: "Blue Diamond Tattoo Studio",
    template: "%s | Blue Diamond Tattoo Studio",
  },

  description:
    "Blue Diamond Tattoo Studio in Attleboro MA. Custom tattoos, realism, black and grey, piercing, and original artwork.",

  keywords: [
    "tattoo shop Attleboro",
    "tattoo artist Attleboro MA",
    "realism tattoo Massachusetts",
    "black and grey tattoo",
    "piercing Attleboro",
    "custom tattoos near me",
  ],

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Blue Diamond Tattoo Studio",
    description:
      "Custom tattoos and piercing in Attleboro MA. Realism, black and grey, and original artwork.",
    url: "https://bluediamondtattoostudio.com",
    siteName: "Blue Diamond Tattoo Studio",
    images: [
      {
        url: "/branding/blue_diamond_logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>

        {/* STRUCTURED DATA */}
        <Script id="schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TattooParlor",
            name: "Blue Diamond Tattoo Studio",
            image:
              "https://bluediamondtattoostudio.com/branding/blue_diamond_logo.png",
            url: "https://bluediamondtattoostudio.com",
            telephone: "+15084551948",

            address: {
              "@type": "PostalAddress",
              streetAddress: "4 Park St",
              addressLocality: "Attleboro",
              addressRegion: "MA",
              postalCode: "02703",
              addressCountry: "US",
            },

            areaServed: [
              "Attleboro MA",
              "North Attleborough MA",
              "Mansfield MA",
              "Taunton MA",
              "Pawtucket RI",
              "Providence RI",
              "Boston MA",
            ],

            openingHours: "Mo-Su 10:00-21:00",
            priceRange: "$$",

            sameAs: [
              "https://www.instagram.com/bluediamond.tattoo_studio",
            ],
          })}
        </Script>

        {children}
      </body>
    </html>
  )
}
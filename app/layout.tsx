import "../styles/global.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata = {
  title: "Nexus Software | Precision Engineering & Digital Architecture",
  description:
    "Nexus is a high-performance software development agency specializing in scalable React architectures, Next.js ecosystems, and futuristic UI/UX design.",
  icons: {
    icon: '/favicon.ico',
  },
  keywords:
    "software agency, web development, Next.js, React, UI/UX, digital transformation, custom software, typescript, tailwind css",
  openGraph: {
    title: "Nexus Software | Precision Engineering",
    description:
      "Building the digital future with precision. We engineer high-performance web applications and digital experiences.",
    url: "https://www.nexdevsoftware.com/",
    siteName: "Nexus Software",
    images: [
      {
        url: "https://www.nexdevsoftware.com/og-image.png", // Replace with actual OG Image
        width: 1200,
        height: 630,
        alt: "Nexus Software Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        {/* ✅ JSON-LD Structured Data for Agency SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Nexus Software",
              url: "https://www.nexdevsoftware.com/",
              logo: "https://www.nexdevsoftware.com/logo.png",
              description:
                "Nexus is a premier software development agency delivering high-performance web applications and digital architecture.",
              foundingDate: "2023",
              address: {
                "@type": "PostalAddress",
                addressCountry: "Indonesia",
              },
              priceRange: "$$$",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Sales",
                email: "nexussoftwaredev@gmail.com",
                areaServed: "Worldwide",
              },
              offers: {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Custom Software Development",
                  description:
                    "Full-cycle software engineering using React, Next.js, and Cloud Native technologies.",
                },
              },
            }),
          }}
        />
      </head>
      <body id="top">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter, Poppins, Oswald } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/v2/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/v2/Footer";
import WhatsAppButton from "@/components/v2/WhatsAppButton";
import ScrollToTop from "@/components/v2/ScrollToTop";
import JsonLd from "@/components/seo/JsonLd";
import AnalyticsProvider from "@/components/analytics/AnalyticsProvider";
import CookieConsent from "@/components/v2/CookieConsent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.epathshalaonline.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "ePathshala Online | India's Recognized Online School",
    template: "%s | ePathshala Online School",
  },
  description:
    "ePathshala Online is India's recognized online CBSE school providing high-quality education with experienced faculty, AI/Robotics, Sports, Art & Dance programs for Grades 1-12.",
  keywords: [
    "Online School India",
    "CBSE alternative",
    "CBSE online school",
    "online school for kids India",
    "ePathshala Online",
    "recognized online school",
    "AI Robotics school",
    "online sports academy",
    "online art classes",
    "online dance classes",
    "online education India",
    "Grade 1 to 12 online",
  ],

  // ── Open Graph ──
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "ePathshala Online School",
    title: "ePathshala Online | India's Recognized Online School",
    description:
      "India's recognized online CBSE school with AI/Robotics, Sports, Art & Dance programs. Admissions open for 2026-27.",
    images: [
      {
        url: "/images/footerlogo.png",
        width: 1200,
        height: 630,
        alt: "ePathshala Online School",
      },
    ],
  },

  // ── Twitter Card ──
  twitter: {
    card: "summary_large_image",
    title: "ePathshala Online | India's Recognized Online School",
    description:
      "India's recognized online CBSE school with AI/Robotics, Sports, Art & Dance programs. Admissions open for 2026-27.",
    images: ["/images/footerlogo.png"],
  },

  // ── Canonical ──
  alternates: {
    canonical: siteUrl,
  },

  // ── Search Engine Verification ──
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },

  // ── Favicons ──
  icons: {
    icon: "/favicon.ico",
  },

  // ── Robots ──
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${oswald.variable} antialiased font-body`}
      >
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wrdx1oniqg");
          `}
        </Script>

        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
        <AnalyticsProvider />
        <CookieConsent />
        <JsonLd />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}

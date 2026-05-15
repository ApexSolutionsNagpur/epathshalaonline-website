import type { Metadata } from "next";
import { Inter, Poppins, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/v2/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/v2/Footer";
import WhatsAppButton from "@/components/v2/WhatsAppButton";
import ScrollToTop from "@/components/v2/ScrollToTop";

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

export const metadata: Metadata = {
  title: "ePathshala Online | India's Recognized Online School",
  description: "ePathshala Online CBSE School provides high-quality online education with experienced faculty and proven results.",
  icons: {
    icon: "/favicon.ico",
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
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}

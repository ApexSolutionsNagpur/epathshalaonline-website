import type { Metadata } from "next";
import DanceShalaScreen from "@/screens/DanceShala";

export const metadata: Metadata = {
  title: "DanceShala | Premium Dance Academy",
  description:
    "Move Today, Shine Tomorrow. Join our premium dance academy for expert training in Hip Hop, Bollywood, Classical, and more. India's leading online dance school.",
  keywords: [
    "online dance classes India",
    "dance academy for kids",
    "DanceShala ePathshala",
    "Bollywood dance classes online",
    "Hip Hop dance training",
    "classical dance online",
  ],
  icons: {
    icon: "/images/danceshala/danceshalalogo.webp",
  },
  openGraph: {
    title: "DanceShala | Premium Dance Academy",
    description:
      "Move Today, Shine Tomorrow. Expert training in Hip Hop, Bollywood, Classical, and more.",
    images: [
      {
        url: "/images/danceshala/danceshalalogo.webp",
        alt: "DanceShala Logo",
      },
    ],
  },
};

export default function DanceShalaPage() {
  return (
    <main className="min-h-screen bg-white">
      <DanceShalaScreen />
    </main>
  );
}

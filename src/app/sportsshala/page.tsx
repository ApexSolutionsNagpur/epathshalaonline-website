import type { Metadata } from "next";
import SportsShalaScreen from "@/screens/SportsShala";

export const metadata: Metadata = {
  title: "SportsShala | ePathshala Online Sports Academy",
  description:
    "Play Today. Lead Tomorrow. SportsShala is the perfect arena for young champions to train, compete and excel in their favorite sports through online coaching.",
  keywords: [
    "online sports academy India",
    "sports coaching for kids",
    "SportsShala ePathshala",
    "online sports training",
    "youth sports India",
  ],
  icons: {
    icon: "/images/sportsshala/sportshalalogo.webp",
  },
  openGraph: {
    title: "SportsShala | ePathshala Online Sports Academy",
    description:
      "Play Today. Lead Tomorrow. The perfect arena for young champions to train, compete and excel.",
    images: [
      {
        url: "/images/sportsshala/sportshalalogo.webp",
        alt: "SportsShala Logo",
      },
    ],
  },
};

export default function SportsShalaPage() {
  return <SportsShalaScreen />;
}

import type { Metadata } from "next";
import ArtShalaScreen from "@/screens/ArtShala";

export const metadata: Metadata = {
  title: "ArtShala | Unleash Creativity. Shape Your Future.",
  description:
    "ArtShala is the creative space for young artists to learn, explore and express their imagination. Join our community of creators at India's premier online art academy.",
  keywords: [
    "online art classes India",
    "art academy for kids",
    "ArtShala ePathshala",
    "creative arts education",
    "online drawing classes",
  ],
  icons: {
    icon: "/images/artshala/artshalalogo.png",
  },
  openGraph: {
    title: "ArtShala | Unleash Creativity. Shape Your Future.",
    description:
      "The creative space for young artists to learn, explore and express their imagination.",
    images: [
      {
        url: "/images/artshala/artshalalogo.png",
        alt: "ArtShala Logo",
      },
    ],
  },
};

export default function ArtShalaPage() {
  return <ArtShalaScreen />;
}

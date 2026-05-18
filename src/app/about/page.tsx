import type { Metadata } from "next";
import AboutPage from "@/screens/About";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ePathshala Online School — India's recognized online CBSE school empowering students from Grade 1 to 12 with world-class education, experienced faculty, and innovative programs.",
  keywords: [
    "about ePathshala Online",
    "online school India",
    "CBSE online school",
    "recognized online school",
  ],
  openGraph: {
    title: "About Us | ePathshala Online School",
    description:
      "India's recognized online CBSE school empowering students with world-class education and innovative programs.",
  },
};

export default function About() {
  return <AboutPage />;
}

import type { Metadata } from "next";
import AIRoboticsShalaScreen from "@/screens/AIRoboticsShala";

export const metadata: Metadata = {
  title: "AIRoboticsShala | Code. Create. Innovate.",
  description:
    "AIRoboticsShala empowers young minds to explore AI, Robotics, and Coding through hands-on learning and real-world projects. Join India's premier online AI & Robotics academy.",
  keywords: [
    "AI robotics for kids",
    "online robotics classes India",
    "coding for children",
    "STEM education India",
    "AIRoboticsShala ePathshala",
  ],
  icons: {
    icon: "/images/roboticshala/airoboticshalalogo.png",
  },
  openGraph: {
    title: "AIRoboticsShala | Code. Create. Innovate.",
    description:
      "Empowering young minds to explore AI, Robotics, and Coding through hands-on learning and real-world projects.",
    images: [
      {
        url: "/images/roboticshala/airoboticshalalogo.png",
        alt: "AIRoboticsShala Logo",
      },
    ],
  },
};

export default function AIRoboticsShalaPage() {
  return <AIRoboticsShalaScreen />;
}

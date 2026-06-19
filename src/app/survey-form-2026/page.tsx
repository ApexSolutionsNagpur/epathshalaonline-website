import type { Metadata } from "next";
import SurveyFormScreen from "@/screens/SurveyForm";

export const metadata: Metadata = {
  title: "Parent Survey 2026",
  description:
    "ePathshala Parent Survey 2026 — Help us improve your child's online education.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "ePathshala Parent Survey 2026",
    description:
      "Help us improve your child's online education. Fill our 3-minute parent survey.",
  },
};

export default function SurveyFormPage() {
  return (
    <main className="min-h-screen  bg-[#F5F7FA]">
      <SurveyFormScreen />
    </main>
  );
}

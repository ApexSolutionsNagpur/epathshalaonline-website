import DanceShalaScreen from "@/screens/DanceShala";

export const metadata = {
  title: 'DanceShala | Premium Dance Academy',
  description: 'Move Today, Shine Tomorrow. Join our premium dance academy for expert training in Hip Hop, Bollywood, Classical, and more.',
  icons: {
    icon: "/images/danceshala/dance shala logo.png",
  },
};

export default function DanceShalaPage() {
  return (
    <main className="min-h-screen bg-white">
      <DanceShalaScreen />
    </main>
  );
}



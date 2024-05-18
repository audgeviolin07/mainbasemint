import LandingPage from "@/components/Landing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basemint - Where the Esport Crypto Market Lives ",
  description: "Simple Marketplace",
  openGraph: {
    images: ['https://i.imgur.com/FjcUss9.png']
  }
};

export default function Home() {
  return (
    <main className="px-2 sm:px-8 md:px-24 py-12">
      <LandingPage />
    </main>
  );
}

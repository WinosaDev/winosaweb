import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionCTA from "@/components/layout/SectionCTA";

import Hero from "@/components/sectionService/ui-ux/Hero";
import Features from "@/components/sectionService/ui-ux/Features";
import Tech from "@/components/sectionService/ui-ux/Tech";
import Pricing from "@/components/sectionService/ui-ux/Pricing";

export default function UIUXPage() {
  return (
    <main className="bg-white">

      <Navbar />

      <Hero />
      <Features />
      <Tech />
      <Pricing />
      <SectionCTA />

      <Footer />

    </main>
  );
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionCTA from "@/components/layout/SectionCTA";

import SectionMobileHero from "@/components/sectionService/mobile/Hero";
import SectionMobileFeatures from "@/components/sectionService/mobile/Features";
import SectionMobileTech from "@/components/sectionService/mobile/Tech";
import SectionMobilePricing from "@/components/sectionService/mobile/Pricing";

export default function MobileAppPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <SectionMobileHero />
      <SectionMobileFeatures />
      <SectionMobileTech />
      <SectionMobilePricing />
      <SectionCTA />

      <Footer />
    </main>
  );
}

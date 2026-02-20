import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionCTA from "@/components/layout/SectionCTA";

import WebHero from "@/components/sectionService/web/Hero";
import WebFeatures from "@/components/sectionService/web/Features";
import WebTech from "@/components/sectionService/web/Tech";
import WebPricing from "@/components/sectionService/web/Pricing";

export default function WebDevelopmentPage() {
  return (
    <main className="bg-white">
      <Navbar />
      
      <WebHero />
      <WebFeatures />
      <WebTech />
      <WebPricing />
      
      <SectionCTA />
      <Footer />
    </main>
  );
}

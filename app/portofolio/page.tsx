import SectionPortoHero from "@/components/sectionsPorto/SectionPortoHero";
import SectionPortoCards from "@/components/sectionsPorto/SectionPortoCards";
import Footer from "@/components/layout/Footer";
import SectionExplanation from "@/components/sectionsPorto/SectionExplanation";
import SectionBridge from "@/components/sectionsPorto/SectionBrige";
export default function PortfolioPage() {
  return (
    <main>
      <SectionPortoHero />
      <SectionPortoCards />
      <SectionBridge/>
      <SectionExplanation/>
      <Footer/>
    </main>
  );
}
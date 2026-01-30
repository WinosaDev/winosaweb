import SectionPortoHero from "@/components/sectionsPorto/SectionPortoHero";
import SectionPortoCards from "@/components/sectionsPorto/SectionPortoCards";
import Footer from "@/components/layout/Footer";

export default function PortfolioPage() {
  return (
    <main>
      <SectionPortoHero />
      <SectionPortoCards />
      <Footer/>
    </main>
  );
}
import SectionPortoHero from "@/components/sections/SectionPortoHero";
import SectionPortoCards from "@/components/sections/SectionPortoCards";
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
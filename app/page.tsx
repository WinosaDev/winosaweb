import SectionHero from "@/components/sections/SectionHero";
import SectionFrame from "@/components/sections/SectionFrame";
import SectionGlass from "@/components/sections/SectionGlass";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main>
      <SectionHero />
      <SectionFrame />
      <SectionGlass />
      <Footer />
    </main>
  );
}

import SectionHero from "@/components/sectionsHomepage/SectionHero";
import SectionMap from "@/components/sectionsHomepage/SectionMap";
import SectionGlass from "@/components/sectionsHomepage/SectionGlass";
import SectionPreview from "@/components/sectionsHomepage/SectionPreview";
import SectionCTA from "@/components/layout/SectionCTA";
import Footer from "@/components/layout/Footer";

import {
  servicesData,
  portfolioData,
  blogData,
} from "@/components/data/homeData";

export default function HomePage() {
  return (
    <main>
      <SectionHero />
      <SectionMap />
      <SectionGlass />

      <SectionPreview
        title="Our Services"
        items={servicesData}
      />

      <SectionPreview
        title="Our Portfolio"
        items={portfolioData}
      />

      <SectionPreview
        title="Latest Blog"
        items={blogData}
      />

      <SectionCTA />
      <Footer />
    </main>
  );
}

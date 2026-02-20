import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import SectionStory from "@/components/sectionAboutUs/SectionStory";
import SectionMissionVision from "@/components/sectionAboutUs/SectionMissionVision";
import SectionTeam from "@/components/sectionAboutUs/SectionTeam";
import SectionStats from "@/components/sectionAboutUs/SectionStats";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <SectionStory />
      <SectionMissionVision />
      <SectionTeam />
      <SectionStats />
      <Footer />
    </main>
  );
}

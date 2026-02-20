import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionBlogHero from "@/components/sectionBlog/SectionHero";
import SectionBlog from "@/components/sectionBlog/SectionBlog";

export default function BlogPage() {
  return (
    <main>
      <Navbar />
      <SectionBlogHero />
      <SectionBlog />
      <Footer />
    </main>
  );
}

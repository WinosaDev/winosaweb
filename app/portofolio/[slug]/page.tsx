import { notFound } from 'next/navigation';
import { projects } from '@/lib/projectsData';
import HeroSection from '@/components/sectionsPorto/sectionDetailProject/HeroSection';
import InfoSection from '@/components/sectionsPorto/sectionDetailProject/InfoSection';
import CaseStudySection from '@/components/sectionsPorto/sectionDetailProject/CaseStudySection';
import GallerySection from '@/components/sectionsPorto/sectionDetailProject/GallerySection';
import NextProjectSection from '@/components/sectionsPorto/sectionDetailProject/NextProjectSection';
import styles from './detail.module.css';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className={styles.detailPage}>
      <HeroSection project={project} />
      <InfoSection project={project} />
      <CaseStudySection project={project} />
      <GallerySection project={project} />
      <NextProjectSection nextProject={nextProject} />
    </main>
  );
}
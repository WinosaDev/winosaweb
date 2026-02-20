import Image from 'next/image';
import styles from '@/app/portofolio/[slug]/detail.module.css';

interface HeroSectionProps {
  project: {
    heroImage: string;
    title: string;
    description: string;
    category: string;
  };
}

export default function HeroSection({ project }: HeroSectionProps) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroImageWrapper}>
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          style={{ objectFit: 'cover' }}
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>
      
      <div className={styles.heroContent}>
        <span className={styles.heroCategory}>{project.category}</span>
        <h1 className={styles.heroTitle}>{project.title}</h1>
        <p className={styles.heroDescription}>{project.description}</p>
      </div>
    </section>
  );
}
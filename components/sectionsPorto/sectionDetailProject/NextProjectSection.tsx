import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/portofolio/[slug]/detail.module.css';

interface NextProjectSectionProps {
  nextProject: {
    slug: string;
    title: string;
    description: string;
    image: string;
  };
}

export default function NextProjectSection({ nextProject }: NextProjectSectionProps) {
  return (
    <section className={styles.nextProjectSection}>
      <div className={styles.nextProjectContainer}>
        <h2 className={styles.nextProjectLabel}>Next Project</h2>
        
        <Link href={`/portofolio/${nextProject.slug}`} className={styles.nextProjectCard}>
          <div className={styles.nextProjectImageWrapper}>
            <Image
              src={nextProject.image}
              alt={nextProject.title}
              fill
              style={{ objectFit: 'cover' }}
              className={styles.nextProjectImage}
            />
          </div>
          
          <div className={styles.nextProjectContent}>
            <h3 className={styles.nextProjectTitle}>{nextProject.title}</h3>
            <p className={styles.nextProjectDescription}>{nextProject.description}</p>
            <span className={styles.nextProjectArrow}>→</span>
          </div>
        </Link>

        <div className={styles.backToPortfolioWrapper}>
          <Link href="/portofolio" className={styles.backToPortfolioButton}>
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
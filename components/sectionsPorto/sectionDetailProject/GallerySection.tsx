import Image from 'next/image';
import styles from '@/app/portofolio/[slug]/detail.module.css';

interface GallerySectionProps {
  project: {
    title: string;
    gallery: string[];
  };
}

export default function GallerySection({ project }: GallerySectionProps) {
  return (
    <section className={styles.gallerySection}>
      <div className={styles.galleryContainer}>
        <h2 className={styles.sectionTitle}>Project Gallery</h2>
        <div className={styles.galleryGrid}>
          {project.gallery.map((image, index) => (
            <div key={index} className={styles.galleryItem}>
              <Image
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
                className={styles.galleryImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
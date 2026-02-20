import styles from '@/app/portofolio/[slug]/detail.module.css';

interface InfoSectionProps {
  project: {
    client: string;
    year: string;
    duration?: string;
    role?: string;
    technologies: string[];
  };
}

export default function InfoSection({ project }: InfoSectionProps) {
  return (
    <section className={styles.infoSection}>
      <div className={styles.infoContainer}>
        <h2 className={styles.sectionTitle}>Project Overview</h2>
        
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <span className={styles.infoLabel}>Client</span>
            <span className={styles.infoValue}>{project.client}</span>
          </div>
          
          <div className={styles.infoCard}>
            <span className={styles.infoLabel}>Year</span>
            <span className={styles.infoValue}>{project.year}</span>
          </div>
          
          {project.duration && (
            <div className={styles.infoCard}>
              <span className={styles.infoLabel}>Duration</span>
              <span className={styles.infoValue}>{project.duration}</span>
            </div>
          )}
          
          {project.role && (
            <div className={styles.infoCard}>
              <span className={styles.infoLabel}>Our Role</span>
              <span className={styles.infoValue}>{project.role}</span>
            </div>
          )}
        </div>

        <div className={styles.techStack}>
          <h3 className={styles.techStackTitle}>Technologies Used</h3>
          <div className={styles.techTags}>
            {project.technologies.map((tech, index) => (
              <span key={index} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
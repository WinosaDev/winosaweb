import styles from '@/app/portofolio/[slug]/detail.module.css';

interface CaseStudySectionProps {
  project: {
    challenge: string;
    solution: string;
    result: string;
    metrics?: Array<{
      value: string;
      label: string;
    }>;
  };
}

export default function CaseStudySection({ project }: CaseStudySectionProps) {
  return (
    <section className={styles.caseStudySection}>
      <div className={styles.caseStudyContainer}>
        <h2 className={styles.sectionTitle}>Case Study</h2>
        
        <div className={styles.caseStudyFlow}>
          <div className={styles.caseStudyBlock}>
            <span className={styles.caseStudyStep}>Step 01</span>
            <h3 className={styles.caseStudyTitle}>The Challenge</h3>
            <p className={styles.caseStudyText}>{project.challenge}</p>
          </div>

          <div className={styles.caseStudyBlock}>
            <span className={styles.caseStudyStep}>Step 02</span>
            <h3 className={styles.caseStudyTitle}>The Solution</h3>
            <p className={styles.caseStudyText}>{project.solution}</p>
          </div>

          <div className={styles.caseStudyBlock}>
            <span className={styles.caseStudyStep}>Step 03</span>
            <h3 className={styles.caseStudyTitle}>The Result</h3>
            <p className={styles.caseStudyText}>{project.result}</p>
          </div>
        </div>

        {project.metrics && project.metrics.length > 0 && (
          <div className={styles.metricsWrapper}>
            <h3 className={styles.metricsTitle}>Impact & Results</h3>
            <div className={styles.metricsGrid}>
              {project.metrics.map((metric, index) => (
                <div key={index} className={styles.metricCard}>
                  <span className={styles.metricValue}>{metric.value}</span>
                  <span className={styles.metricLabel}>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
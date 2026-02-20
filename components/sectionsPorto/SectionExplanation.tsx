import styles from "@/app/portofolio/portfolio.module.css";

export default function SectionExplanation() {
  return (
    <section className={styles.explanationSection}>
      <div className={styles.explanationContainer}>
        <div className={styles.explanationContent}>
          <span className={styles.explanationBadge}>Why Choose Us?</span>

          <h2 className={styles.explanationTitle}>
            Creativity & <span>High-Level Expertise</span>
          </h2>

          <p className={styles.explanationText}>
           We are a software consulting and development company based in Sumatra, focusing on delivering IT services for both national and international clients. Our professional team is dedicated to providing tailored solutions that add value to your organization.
          </p>

          <div className={styles.highlightStats}>
            <div className={styles.highlightItem}>
              <h3 className={styles.highlightNumber}>24+</h3>
              <p className={styles.highlightLabel}>Tim Profesional</p>
            </div>

            <div className={styles.highlightItem}>
              <h3 className={styles.highlightNumber}>15+</h3>
              <p className={styles.highlightLabel}>Proyek Sukses</p>
            </div>

            <div className={styles.highlightItem}>
              <h3 className={styles.highlightNumber}>100%</h3>
              <p className={styles.highlightLabel}>Komitmen Kualitas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
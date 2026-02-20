"use client";

import styles from "@/app/portofolio/portfolio.module.css";

export default function SectionPortoHero() {
  const scrollToCards = () => {
    const cardsSection = document.getElementById('portfolio-cards');
    if (cardsSection) {
      cardsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>
          Our <span>Portfolio</span>
        </h1>

        <h2 className={styles.tagline}>
          Real Projects, Real Results
        </h2>

        <p className={styles.subtitle}>
          From enterprise systems to innovative platforms,<br />
          we transform business visions into scalable digital solutions.
        </p>

        <button 
          className={styles.heroButton}
          onClick={scrollToCards}
        >
          Explore Our Work
          <span className={styles.arrow}>→</span>
        </button>
      </div>
    </section>
  );
}
import styles from "@/app/portofolio/portfolio.module.css";

export default function SectionPortoHero() {
  return (
    <section className={styles.hero}>
  <div className={styles.overlay} />

  <div className={styles.content}>
    <h1 className={styles.title}>
      My <span>Portfolio</span>
    </h1>

    <p className={styles.subtitle}>
      Selected works & UI explorations
    </p>

    <button className={styles.heroButton}>
      View Our Work
    </button>

    <div className={styles.icons}>
      ✦ ✦ ✦
    </div>
  </div>
</section>

  );
}

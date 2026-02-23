"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";
import styles from "@/app/portofolio/portfolio.module.css";

export default function SectionPortoHero() {
  const scrollToCards = () => {
    const cardsSection = document.getElementById("portfolio-cards");
    if (cardsSection) {
      cardsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <FadeUp>
      <section className={styles.hero}>
        <div className={styles.overlay} />

        <motion.div
          className={styles.content}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            className={styles.title}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our <span>Portfolio</span>
          </motion.h1>

          <motion.h2
            className={styles.tagline}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Real Projects, Real Results
          </motion.h2>

          <motion.p
            className={styles.subtitle}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            From enterprise systems to innovative platforms,
            <br />
            we transform business visions into scalable digital solutions.
          </motion.p>

          <motion.button
            className={styles.heroButton}
            onClick={scrollToCards}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Explore Our Work
            <span className={styles.arrow}>→</span>
          </motion.button>
        </motion.div>
      </section>
    </FadeUp>
  );
}
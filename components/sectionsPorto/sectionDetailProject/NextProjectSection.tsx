"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/portofolio/[slug]/detail.module.css";

interface NextProjectSectionProps {
  nextProject: {
    slug: string;
    title: string;
    description: string;
    image: string;
  };
}

export default function NextProjectSection({
  nextProject,
}: NextProjectSectionProps) {
  return (
    <FadeUp>
      <section className={styles.nextProjectSection}>
        <div className={styles.nextProjectContainer}>
          <motion.h2
            className={styles.nextProjectLabel}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Next Project
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <Link
              href={`/portofolio/${nextProject.slug}`}
              className={styles.nextProjectCard}
            >
              <div className={styles.nextProjectImageWrapper}>
                <Image
                  src={nextProject.image}
                  alt={nextProject.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className={styles.nextProjectImage}
                />
              </div>

              <div className={styles.nextProjectContent}>
                <h3 className={styles.nextProjectTitle}>
                  {nextProject.title}
                </h3>
                <p className={styles.nextProjectDescription}>
                  {nextProject.description}
                </p>
                <span className={styles.nextProjectArrow}>→</span>
              </div>
            </Link>
          </motion.div>

          <motion.div
            className={styles.backToPortfolioWrapper}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="/portofolio"
              className={styles.backToPortfolioButton}
            >
              ← Back to Portfolio
            </Link>
          </motion.div>
        </div>
      </section>
    </FadeUp>
  );
}
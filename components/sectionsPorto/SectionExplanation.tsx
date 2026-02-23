"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";
import styles from "@/app/portofolio/portfolio.module.css";

export default function SectionExplanation() {
  return (
    <FadeUp>
      <section className={styles.explanationSection}>
        <div className={styles.explanationContainer}>
          <motion.div
            className={styles.explanationContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.span
              className={styles.explanationBadge}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              Why Choose Us?
            </motion.span>

            <motion.h2
              className={styles.explanationTitle}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              Creativity & <span>High-Level Expertise</span>
            </motion.h2>

            <motion.p
              className={styles.explanationText}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              We are a software consulting and development company based in
              Sumatra, focusing on delivering IT services for both national and
              international clients. Our professional team is dedicated to
              providing tailored solutions that add value to your organization.
            </motion.p>

            <motion.div
              className={styles.highlightStats}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.div
                className={styles.highlightItem}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
              >
                <h3 className={styles.highlightNumber}>24+</h3>
                <p className={styles.highlightLabel}>Tim Profesional</p>
              </motion.div>

              <motion.div
                className={styles.highlightItem}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
              >
                <h3 className={styles.highlightNumber}>15+</h3>
                <p className={styles.highlightLabel}>Proyek Sukses</p>
              </motion.div>

              <motion.div
                className={styles.highlightItem}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
              >
                <h3 className={styles.highlightNumber}>100%</h3>
                <p className={styles.highlightLabel}>Komitmen Kualitas</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </FadeUp>
  );
}
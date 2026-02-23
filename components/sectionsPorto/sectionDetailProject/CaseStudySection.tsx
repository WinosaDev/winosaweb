"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";
import styles from "@/app/portofolio/[slug]/detail.module.css";

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
    <FadeUp>
      <section className={styles.caseStudySection}>
        <div className={styles.caseStudyContainer}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Case Study
          </motion.h2>

          <motion.div
            className={styles.caseStudyFlow}
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
            <motion.div
              className={styles.caseStudyBlock}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              <span className={styles.caseStudyStep}>Step 01</span>
              <h3 className={styles.caseStudyTitle}>The Challenge</h3>
              <p className={styles.caseStudyText}>{project.challenge}</p>
            </motion.div>

            <motion.div
              className={styles.caseStudyBlock}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              <span className={styles.caseStudyStep}>Step 02</span>
              <h3 className={styles.caseStudyTitle}>The Solution</h3>
              <p className={styles.caseStudyText}>{project.solution}</p>
            </motion.div>

            <motion.div
              className={styles.caseStudyBlock}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              <span className={styles.caseStudyStep}>Step 03</span>
              <h3 className={styles.caseStudyTitle}>The Result</h3>
              <p className={styles.caseStudyText}>{project.result}</p>
            </motion.div>
          </motion.div>

          {project.metrics && project.metrics.length > 0 && (
            <motion.div
              className={styles.metricsWrapper}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              <motion.h3
                className={styles.metricsTitle}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
              >
                Impact & Results
              </motion.h3>

              <div className={styles.metricsGrid}>
                {project.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    className={styles.metricCard}
                    variants={{
                      hidden: { opacity: 0, y: 60 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.7 }}
                  >
                    <span className={styles.metricValue}>
                      {metric.value}
                    </span>
                    <span className={styles.metricLabel}>
                      {metric.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </FadeUp>
  );
}
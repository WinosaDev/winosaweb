"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";
import styles from "@/app/portofolio/[slug]/detail.module.css";

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
    <FadeUp>
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Project Overview
          </motion.h2>

          <motion.div
            className={styles.infoGrid}
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
              className={styles.infoCard}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              <span className={styles.infoLabel}>Client</span>
              <span className={styles.infoValue}>{project.client}</span>
            </motion.div>

            <motion.div
              className={styles.infoCard}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              <span className={styles.infoLabel}>Year</span>
              <span className={styles.infoValue}>{project.year}</span>
            </motion.div>

            {project.duration && (
              <motion.div
                className={styles.infoCard}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
              >
                <span className={styles.infoLabel}>Duration</span>
                <span className={styles.infoValue}>{project.duration}</span>
              </motion.div>
            )}

            {project.role && (
              <motion.div
                className={styles.infoCard}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
              >
                <span className={styles.infoLabel}>Our Role</span>
                <span className={styles.infoValue}>{project.role}</span>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            className={styles.techStack}
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
              className={styles.techStackTitle}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              Technologies Used
            </motion.h3>

            <div className={styles.techTags}>
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className={styles.techTag}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </FadeUp>
  );
}
"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";
import styles from "@/app/portofolio/portfolio.module.css";

export default function SectionBridge() {
  return (
    <FadeUp>
      <section className={styles.bridgeSection}>
        <motion.div
          className={styles.bigTitle}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2>
            Through integrity, courage, and solid teamwork, we provide the best
            solutions to support your business vision.
          </h2>
        </motion.div>
      </section>
    </FadeUp>
  );
}
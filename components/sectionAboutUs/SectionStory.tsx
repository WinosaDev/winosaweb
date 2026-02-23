"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";
import Link from "next/link";

export default function SectionStory() {
  return (
    <FadeUp>
      <section className="relative w-full py-40 overflow-hidden bg-white">

        {/* GOLD RADIAL — DIPINDAH KE ATAS & DIPERKECIL */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_35%,rgba(255,215,100,0.45)_0%,rgba(255,215,100,0.25)_30%,transparent_55%)]" />

        {/* TOP FADE */}
        <div className="absolute top-0 left-0 w-full h-[220px] bg-gradient-to-b from-white via-white to-transparent pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-black">

          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
          >
            We Build Digital Products <br />
            With Purpose, Not Just Code
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-black/70 leading-relaxed text-lg mb-12 max-w-3xl"
          >
            We are a digital studio focused on building high-quality web and mobile
            products that help businesses grow sustainably.
            <br /><br />
            Our approach blends strategy, design, and technology 
            ensuring every product delivers real value, not just visuals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="/Contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-black text-black text-sm font-semibold transition-all duration-300 hover:bg-black/10"
            >
              Get in Touch
            </Link>
          </motion.div>

        </div>

        {/* BOTTOM FADE — DIPERBESAR */}
        <div className="absolute bottom-0 left-0 w-full h-[320px] bg-gradient-to-t from-white via-white to-transparent pointer-events-none" />

      </section>
    </FadeUp>
  );
}
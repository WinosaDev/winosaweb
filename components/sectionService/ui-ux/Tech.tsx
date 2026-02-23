"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";

export default function SectionTechUIUX() {
  const tools = [
    "Figma",
    "Adobe XD",
    "Framer",
    "Miro",
    "Notion",
    "Maze Testing",
  ];

  return (
    <FadeUp>
      <section className="relative w-full bg-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            Tools & Technology
          </h2>
          <p className="text-black/60 max-w-xl mx-auto text-sm md:text-base">
            Modern design ecosystem that empowers structured,
            scalable, and collaborative workflows.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 22,
              ease: "linear",
            }}
            className="flex whitespace-nowrap"
          >
            {[...tools, ...tools].map((tool, i) => (
              <div
                key={i}
                className="mx-20 text-3xl md:text-4xl font-semibold text-black tracking-normal"
              >
                {tool}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div
            className="w-full h-full blur-[140px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,200,0,0.55) 0%, rgba(255,200,0,0.4) 30%, rgba(255,200,0,0.2) 55%, rgba(255,200,0,0.08) 70%, transparent 85%)",
            }}
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>
    </FadeUp>
  );
}
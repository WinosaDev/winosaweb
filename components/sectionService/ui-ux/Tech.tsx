"use client";

import { motion } from "framer-motion";

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
    <section className="relative w-full bg-white py-32 overflow-hidden">

      {/* TITLE */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
          Tools & Technology
        </h2>
        <p className="text-black/60 max-w-xl mx-auto text-sm md:text-base">
          Modern design ecosystem that empowers structured,
          scalable, and collaborative workflows.
        </p>
      </div>

      {/* FLOATING STRIP */}
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
              className="
                mx-20
                text-3xl md:text-4xl
                font-semibold
                text-black
                tracking-normal
              "
            >
              {tool}
            </div>
          ))}
        </motion.div>
      </div>

      {/* subtle gold accent */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-yellow-400/15 blur-[120px] rounded-full pointer-events-none" />

    </section>
  );
}

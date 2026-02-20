"use client";

import { motion } from "framer-motion";

export default function SectionHeroUIUX() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center">

      {/* LEFT VISUAL */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[35%] hidden lg:block"
      >
        <div className="h-[500px] bg-gradient-to-br from-gray-100 to-white rounded-r-[80px] shadow-2xl flex items-center justify-center">
          <span className="text-gray-400">Left Visual</span>
        </div>
      </motion.div>

      {/* RIGHT VISUAL */}
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[35%] hidden lg:block"
      >
        <div className="h-[500px] bg-gradient-to-bl from-gray-100 to-white rounded-l-[80px] shadow-2xl flex items-center justify-center">
          <span className="text-gray-400">Right Visual</span>
        </div>
      </motion.div>

      {/* CENTER CONTENT */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 text-center max-w-3xl px-6"
      >
        <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
          Empowering <br /> Sustainable Design
        </h1>

        <p className="text-gray-600 mb-10 text-lg">
          We craft thoughtful digital experiences that blend aesthetics,
          usability, and strategy into seamless product journeys.
        </p>

        <button className="px-8 py-4 rounded-full border border-black text-black font-semibold hover:bg-black/5 transition">
          Get in Touch
        </button>
      </motion.div>

      {/* SUBTLE BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-white to-transparent" />

    </section>
  );
}

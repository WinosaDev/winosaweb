"use client";

import { motion } from "framer-motion";

export default function SectionFrame() {
  return (
    <section className="w-full bg-white py-32">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-sm tracking-widest mb-12 font-semibold text-black text-center"
      >
        FIND US WHERE INNOVATION LIVES
      </motion.h2>

      <motion.a
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        href="https://www.google.com/maps/place/Bandar+Lampung,+Indonesia"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full max-w-[1800px] mx-auto"
      >
        <div className="relative w-full pt-[50%]">
          <img
            src="/map.jpg"
            alt="Indonesia Map"
            className="absolute inset-0 w-full h-full object-contain"
          />

          <div
            className="absolute"
            style={{
              top: "61%",
              left: "71.3%",
              transform: "translate(-50%, -100%)",
            }}
          >
            <div className="map-pin"></div>
            <div className="map-stick"></div>
          </div>

          <span
            className="absolute text-xs text-black bg-white px-2 py-1 rounded shadow"
            style={{
              top: "61%",
              left: "90%",
              transform: "translateX(-50%)",
            }}
          >
            Bandar Lampung
          </span>
        </div>
      </motion.a>

    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useTranslate } from "@/lib/useTranslate";

export default function SectionFrame() {
  const { t } = useTranslate();

  return (
    <section className="w-full bg-white py-32">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-sm tracking-widest font-semibold text-black text-center min-h-[24px] whitespace-nowrap"
      >
        {t("frame", "title")}
      </motion.h2>

      {/* MAP */}
      <motion.a
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        href="https://www.google.com/maps/place/Bandar+Lampung,+Indonesia"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full max-w-[1800px] mx-auto mt-12"
      >
        <div className="relative w-full pt-[50%]">
          <img
            src="/map.jpg"
            alt="Indonesia Map"
            className="absolute inset-0 w-full h-full object-contain"
          />

          {/* 🔥 PIN + LABEL WRAPPER (POSISI PIN TETAP) */}
          <div
            className="absolute"
            style={{
              top: "61%",
              left: "71.3%",
              transform: "translate(-50%, -100%)",
            }}
          >
            {/* PIN */}
            <div className="map-pin"></div>
            <div className="map-stick"></div>

            {/* LABEL (RELATIVE TO PIN) */}
            <span
              className="
                absolute
                left-full           /* selalu di kanan pin */
                ml-3                /* jarak kecil dari pin */
                top-1/2
                -translate-y-1/2
                text-xs text-black bg-white px-3 py-1 rounded shadow
                whitespace-nowrap
              "
            >
              {t("frame", "location")}
            </span>
          </div>

        </div>
      </motion.a>

    </section>
  );
}

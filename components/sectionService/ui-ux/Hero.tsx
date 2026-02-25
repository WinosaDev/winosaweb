"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";
import Link from "next/link";
import { useTranslate } from "@/lib/useTranslate";

export default function SectionHeroUIUX({ data }: { data?: any }) {
  const { t } = useTranslate();

  const title = data?.title || t("uiuxHero", "title");
  const description = data?.description || t("uiuxHero", "subtitle");
  const ctaText = data?.ctaText || t("uiuxHero", "cta");

  return (
    <FadeUp>
      <section className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[35%] hidden lg:block"
        >
          <div className="h-[500px] rounded-r-[80px] shadow-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-white flex items-center justify-center">
            {data?.heroLeftImage ? (
              <img
                src={data.heroLeftImage}
                className="w-full h-full object-cover"
                alt="UIUX Left"
              />
            ) : (
              <span className="text-gray-400">UIUX Preview</span>
            )}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[35%] hidden lg:block"
        >
          <div className="h-[500px] rounded-l-[80px] shadow-2xl overflow-hidden bg-gradient-to-bl from-gray-100 to-white flex items-center justify-center">
            {data?.heroRightImage ? (
              <img
                src={data.heroRightImage}
                className="w-full h-full object-cover"
                alt="UIUX Right"
              />
            ) : (
              <span className="text-gray-400">UIUX Preview</span>
            )}
          </div>
        </motion.div>

        {/* CENTER CONTENT */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative z-10 text-center max-w-3xl px-6"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6">
            {title}
          </h1>

          <p className="text-gray-600 text-lg mb-10">
            {description}
          </p>

          <Link
            href="/Contact"
            className="inline-block px-8 py-4 rounded-full border border-black text-black font-semibold hover:bg-black/5 transition"
          >
            {ctaText}
          </Link>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-white to-transparent" />
      </section>
    </FadeUp>
  );
}

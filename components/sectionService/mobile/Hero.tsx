"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";
import { useTranslate } from "@/lib/useTranslate";

export default function SectionHeroMobileApp({ data }: { data?: any }) {
  const { t } = useTranslate();

  const title =
    data?.title || t("mobileHero", "defaultTitle");

  const titleParts = title.split(" ");

  return (
    <FadeUp>
      <section className="w-full bg-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
          
          {/* ===== LEFT VISUAL ===== */}
          <div className="flex-1 relative flex justify-center items-center">

            <div className="absolute w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-[140px]" />

            {/* BACK PHONE */}
            <div className="w-64 h-[500px] bg-white rounded-[40px] shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-black/10 rotate-[-12deg] absolute overflow-hidden">
              {data?.heroImageSecondary ? (
                <img
                  src={data.heroImageSecondary}
                  className="w-full h-full object-cover rounded-[40px]"
                  alt="App Screen Secondary"
                />
              ) : (
                <div className="w-full h-full rounded-[40px] bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center text-black/40">
                  App Screen
                </div>
              )}
            </div>

            {/* FRONT PHONE */}
            <div className="w-64 h-[500px] bg-white rounded-[40px] shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-black/10 rotate-[8deg] relative overflow-hidden">
              {data?.heroImagePrimary ? (
                <img
                  src={data.heroImagePrimary}
                  className="w-full h-full object-cover rounded-[40px]"
                  alt="App Screen Primary"
                />
              ) : (
                <div className="w-full h-full rounded-[40px] bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center text-black/40">
                  App Screen
                </div>
              )}
            </div>

          </div>

          {/* ===== RIGHT CONTENT ===== */}
          <div className="flex-1 text-center lg:text-left overflow-hidden">
            
            <motion.p
              initial={{ x: 120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-yellow-600 font-medium mb-4 tracking-wide uppercase text-sm"
            >
              {data?.heroLabel || t("mobileHero", "label")}
            </motion.p>

            <motion.h1
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold text-black leading-tight"
            >
              {titleParts[0]}
            </motion.h1>

            <motion.h1
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-5xl lg:text-6xl font-bold text-black leading-tight mb-6"
            >
              {titleParts.slice(1).join(" ")}
            </motion.h1>

            <motion.p
              initial={{ x: 120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-black/70 max-w-xl mb-10"
            >
              {data?.description || t("mobileHero", "description")}
            </motion.p>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <Link
                href="/Contact"
                className="inline-block border border-black text-black px-8 py-4 rounded-full font-medium transition hover:bg-black/10"
              >
                {data?.ctaText || t("mobileHero", "cta")}
              </Link>
            </motion.div>

          </div>

        </div>
      </section>
    </FadeUp>
  );
}

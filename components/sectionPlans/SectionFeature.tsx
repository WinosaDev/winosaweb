"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";
import { Check } from "lucide-react";
import { useTranslate } from "@/lib/useTranslate";

export default function SectionFeature() {
  const { t } = useTranslate();

  const features = [
    {
      name: t("plansFeature", "feature1"),
      basic: true,
      pro: true,
      enterprise: true,
    },
    {
      name: t("plansFeature", "feature2"),
      basic: false,
      pro: true,
      enterprise: true,
    },
    {
      name: t("plansFeature", "feature3"),
      basic: false,
      pro: true,
      enterprise: true,
    },
    {
      name: t("plansFeature", "feature4"),
      basic: false,
      pro: false,
      enterprise: true,
    },
  ];

  return (
    <FadeUp>
      <section className="w-full bg-white py-40">

        <div className="max-w-6xl mx-auto px-6">

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-black mb-4">
              {t("plansFeature", "title")}
            </h2>

            <p className="text-black/60">
              {t("plansFeature", "subtitle")}
            </p>
          </motion.div>


          <div className="relative">

            {/* GLOW */}
            <div className="absolute -inset-16 bg-[radial-gradient(circle,rgba(255,200,0,0.4)_0%,transparent_70%)] blur-[120px]" />


            <motion.div
              className="relative border border-black rounded-[32px] overflow-hidden bg-white"
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

              {/* HEADER */}
              <div className="grid grid-cols-4 text-center bg-black text-white">

                <div className="p-6 font-semibold text-left">
                  {t("plansFeature", "features")}
                </div>

                <div className="p-6">
                  {t("plansFeature", "basic")}
                </div>

                <div className="p-6 relative">

                  <span className="font-semibold">
                    {t("plansFeature", "pro")}
                  </span>

                  <div className="absolute top-2 right-4 text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full">
                    {t("plansFeature", "popular")}
                  </div>

                </div>

                <div className="p-6">
                  {t("plansFeature", "enterprise")}
                </div>

              </div>


              {/* BODY */}
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.7 }}
                  className="
                    group
                    grid grid-cols-4
                    text-center
                    border-b border-black/10
                    hover:bg-yellow-100/20
                    transition
                  "
                >

                  {/* FEATURE NAME */}
                  <div className="p-6 text-left font-medium text-black">
                    {feature.name}
                  </div>


                  {/* BASIC */}
                  <div className="p-6 flex justify-center">
                    {feature.basic ? (
                      <Check className="text-black" size={20} />
                    ) : (
                      "-"
                    )}
                  </div>


                  {/* PRO */}
                  <div className="p-6 flex justify-center bg-yellow-50/40">
                    {feature.pro ? (
                      <Check className="text-black" size={20} />
                    ) : (
                      "-"
                    )}
                  </div>


                  {/* ENTERPRISE */}
                  <div className="p-6 flex justify-center">
                    {feature.enterprise ? (
                      <Check className="text-black" size={20} />
                    ) : (
                      "-"
                    )}
                  </div>

                </motion.div>
              ))}

            </motion.div>

          </div>

        </div>

      </section>
    </FadeUp>
  );
}

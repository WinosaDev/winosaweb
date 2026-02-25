"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";
import { Target, Rocket, ShieldCheck, Users } from "lucide-react";
import { useTranslate } from "@/lib/useTranslate";

export default function SectionMissionVision() {

  const { t } = useTranslate();

  return (
    <FadeUp>

      <section className="w-full py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT VISUAL */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 flex items-center justify-center">

              <div className="absolute w-64 h-64 rounded-full bg-yellow-400/20"></div>
              <div className="absolute w-48 h-48 rounded-full bg-yellow-500/30"></div>
              <div className="absolute w-32 h-32 rounded-full bg-yellow-600/40"></div>

              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-xl">
                <Target className="text-white w-8 h-8" />
              </div>

            </div>
          </motion.div>


          {/* RIGHT CONTENT */}
          <motion.div
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
            className="flex-1"
          >

            {/* TITLE */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              {t("missionVision", "title")}
            </motion.h2>


            {/* DESCRIPTION */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-gray-600 mb-10 leading-relaxed max-w-xl"
            >
              {t("missionVision", "description")}
            </motion.p>


            {/* GRID */}
            <div className="grid sm:grid-cols-2 gap-10">


              {/* Innovation */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="flex gap-4"
              >
                <Rocket className="text-yellow-500 w-6 h-6 mt-1" />

                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t("missionVision", "innovationTitle")}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {t("missionVision", "innovationDesc")}
                  </p>
                </div>

              </motion.div>


              {/* Integrity */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="flex gap-4"
              >
                <ShieldCheck className="text-yellow-500 w-6 h-6 mt-1" />

                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t("missionVision", "integrityTitle")}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {t("missionVision", "integrityDesc")}
                  </p>
                </div>

              </motion.div>


              {/* Partnership */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="flex gap-4"
              >
                <Users className="text-yellow-500 w-6 h-6 mt-1" />

                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t("missionVision", "partnershipTitle")}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {t("missionVision", "partnershipDesc")}
                  </p>
                </div>

              </motion.div>


              {/* Impact */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="flex gap-4"
              >
                <Target className="text-yellow-500 w-6 h-6 mt-1" />

                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t("missionVision", "impactTitle")}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {t("missionVision", "impactDesc")}
                  </p>
                </div>

              </motion.div>


            </div>

          </motion.div>

        </div>

      </section>

    </FadeUp>
  );
}

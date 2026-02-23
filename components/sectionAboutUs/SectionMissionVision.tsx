"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";
import { Target, Rocket, ShieldCheck, Users } from "lucide-react";

export default function SectionMissionVision() {
  return (
    <FadeUp>
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
          
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
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              Our Mission & Vision
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-gray-600 mb-10 leading-relaxed max-w-xl"
            >
              We aim to deliver high-quality digital solutions that empower brands 
              with innovation, performance, and long-term impact.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-10">

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
                  <h4 className="font-semibold text-gray-900">Innovation</h4>
                  <p className="text-gray-500 text-sm">
                    Continuously creating modern and scalable digital solutions.
                  </p>
                </div>
              </motion.div>

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
                  <h4 className="font-semibold text-gray-900">Integrity</h4>
                  <p className="text-gray-500 text-sm">
                    Maintaining strong security and reliable performance standards.
                  </p>
                </div>
              </motion.div>

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
                  <h4 className="font-semibold text-gray-900">Partnership</h4>
                  <p className="text-gray-500 text-sm">
                    Building long-term collaboration based on trust and transparency.
                  </p>
                </div>
              </motion.div>

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
                  <h4 className="font-semibold text-gray-900">Impact</h4>
                  <p className="text-gray-500 text-sm">
                    Delivering measurable results that drive sustainable growth.
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
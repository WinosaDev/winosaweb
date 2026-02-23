"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";

export default function SectionHeroMobileApp() {
  return (
    <FadeUp>
      <section className="w-full bg-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 relative flex justify-center items-center">

            <div className="absolute w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-[140px]" />

            <div className="w-64 h-[500px] bg-white rounded-[40px] shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-black/10 rotate-[-12deg] absolute">
              <div className="w-full h-full rounded-[40px] bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center text-black/40">
                App Screen
              </div>
            </div>

            <div className="w-64 h-[500px] bg-white rounded-[40px] shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-black/10 rotate-[8deg] relative">
              <div className="w-full h-full rounded-[40px] bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center text-black/40">
                App Screen
              </div>
            </div>

          </div>

          <div className="flex-1 text-center lg:text-left overflow-hidden">
            
            <motion.p
              initial={{ x: 120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-yellow-600 font-medium mb-4 tracking-wide uppercase text-sm"
            >
              Modern Experience
            </motion.p>

            <motion.h1
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold text-black leading-tight"
            >
              Mobile App
            </motion.h1>

            <motion.h1
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-5xl lg:text-6xl font-bold text-black leading-tight mb-6"
            >
              Solution
            </motion.h1>

            <motion.p
              initial={{ x: 120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-black/70 max-w-xl mb-10"
            >
              We develop powerful mobile applications designed to streamline 
              user interaction and deliver seamless performance across devices.
            </motion.p>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <Link
                href="/Contact"
                className="
                  inline-block
                  border border-black
                  text-black
                  px-8 py-4
                  rounded-full
                  font-medium
                  transition
                  hover:bg-black/10
                "
              >
                Get in Touch
              </Link>
            </motion.div>

          </div>

        </div>
      </section>
    </FadeUp>
  );
}
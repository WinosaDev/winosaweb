"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SectionHero() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center">

      {/* ===== BACKGROUND GRADIENT DEPTH ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_0%,transparent_60%)]" />

      {/* ===== GOLD LIGHT BASE (MERGED GRADIENT) ===== */}
      <div className="absolute bottom-[-250px] left-0 right-0 h-[600px] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(255,200,0,1)_0%,rgba(255,200,0,0.7)_25%,rgba(255,200,0,0.35)_45%,rgba(255,200,0,0.15)_60%,transparent_75%)] blur-[120px]" />
      </div>

      {/* ===== HERO CONTENT ===== */}
      <div className="relative z-10 text-center max-w-4xl px-6">

        <h1 className="text-6xl md:text-7xl font-bold text-black leading-tight mb-6">
          Launch faster.
          <br />
          Convert better.
        </h1>

        <p className="text-black/60 text-lg max-w-2xl mx-auto mb-12">
          Subscription plans designed for scalable digital growth.
        </p>

        <Link
          href="#pricing"
          className="inline-block px-10 py-4 rounded-full border border-black text-black hover:bg-black/10 transition"
        >
          See Plans
        </Link>

      </div>

      {/* ===== FRONT HALF ARC SCROLLER ===== */}
      <div className="absolute bottom-20 w-full overflow-hidden pointer-events-none">

        <motion.div
          animate={{ x: ["-50%", "50%"] }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
          className="flex whitespace-nowrap text-black/20 text-xl font-semibold tracking-widest"
        >
          {[
            "PromptPilot",
            "Screen",
            "EventMix",
            "Scale",
            "Launch",
            "Optimize",
            "Growth",
            "Digital",
          ].map((item, i) => (
            <div key={i} className="mx-16">
              {item}
            </div>
          ))}

          {/* duplicate for seamless loop */}
          {[
            "PromptPilot",
            "Screen",
            "EventMix",
            "Scale",
            "Launch",
            "Optimize",
            "Growth",
            "Digital",
          ].map((item, i) => (
            <div key={`dup-${i}`} className="mx-16">
              {item}
            </div>
          ))}
        </motion.div>

        {/* FADE LEFT */}
        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-white to-transparent" />

        {/* FADE RIGHT */}
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-white to-transparent" />

      </div>

    </section>
  );
}

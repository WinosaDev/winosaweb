"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";

const steps = [
  {
    title: "Understanding Your Business",
    highlight: "We start with strategy",
    desc: "We deep dive into your business model, target users, and goals. This ensures the website is not just beautiful, but actually drives growth.",
  },
  {
    title: "Design That Converts",
    highlight: "UX first approach",
    desc: "We design user experiences that guide visitors into action — whether it's booking, buying, or contacting your team.",
  },
  {
    title: "Engineering Excellence",
    highlight: "Built with modern tech",
    desc: "Our developers build fast, secure, and scalable systems using modern frameworks and best practices.",
  },
  {
    title: "Launch & Optimization",
    highlight: "We don't stop at launch",
    desc: "After launch, we monitor performance, optimize SEO, and continuously improve based on real user data.",
  },
];

export default function SectionProcess() {
  return (
    <section className="relative w-full bg-white py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <FadeUp>
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              How We Work
            </h2>
            <p className="text-black/60 text-lg">
              A structured process designed for real business impact.
            </p>
          </div>
        </FadeUp>

        <div className="relative">

          {steps.map((step, i) => (
            <div key={i} className="min-h-[80vh] flex items-center">
              <div className="grid md:grid-cols-2 gap-20 w-full">

                {/* LEFT — STICKY NUMBER */}
                <div className="relative">
                  <div className="sticky top-32">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="relative select-none"
                    >
                      <div className="absolute inset-0 text-[120px] md:text-[160px] font-bold text-yellow-400/20 blur-3xl">
                        0{i + 1}
                      </div>

                      <div className="text-[120px] md:text-[160px] font-bold text-black">
                        0{i + 1}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* RIGHT — CONTENT */}
                <FadeUp>
                  <div className="max-w-xl">
                    <span className="text-yellow-500 font-semibold tracking-wide">
                      {step.highlight}
                    </span>

                    <h3 className="text-3xl font-bold text-black mt-3 mb-6">
                      {step.title}
                    </h3>

                    <p className="text-black/70 text-lg leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </FadeUp>

              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Background glow */}
      <motion.div
        animate={{ opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-400/10 blur-[150px] pointer-events-none"
      />
    </section>
  );
}
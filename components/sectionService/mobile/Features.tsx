"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";

const features = [
  {
    title: "Business-focused App Design",
    desc: "Apps designed to reflect your brand identity and business goals, not just visual trends.",
  },
  {
    title: "Cross-platform Development",
    desc: "Build once and deploy smoothly on both Android and iOS with consistent performance.",
  },
  {
    title: "User-friendly Experience",
    desc: "Intuitive navigation and clear interactions that increase engagement and retention.",
  },
  {
    title: "Secure & Scalable Architecture",
    desc: "Built with security best practices and scalable structure for long-term growth.",
  },
  {
    title: "Admin & Content Management",
    desc: "Manage users, content, and data easily through a dedicated admin dashboard.",
  },
  {
    title: "Performance Optimization",
    desc: "Fast loading times and smooth transitions for a premium mobile experience.",
  },
];

export default function SectionMobileFeatures() {
  return (
    <section className="w-full bg-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-black">

        {/* HEADER — sekarang pakai FadeUp */}
        <FadeUp>
          <div className="mb-20 max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">
              What You’ll Get
            </h2>
            <p className="text-black/70">
              Everything you need to build a professional mobile application
              that supports your business growth.
            </p>
          </div>
        </FadeUp>

        {/* GRID — tetap stagger animasi aslinya */}
        <FadeUp delay={0.2}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {features.map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative group"
              >

                {/* OUTER GLOW */}
                <div
                  className="
                    absolute -inset-10
                    rounded-[48px]
                    bg-[radial-gradient(circle,rgba(255,200,80,0.55),transparent_75%)]
                    blur-[90px]
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300
                  "
                />

                {/* INNER GLOW */}
                <div
                  className="
                    absolute -inset-4
                    rounded-[36px]
                    bg-[radial-gradient(circle,rgba(255,200,80,0.7),transparent_65%)]
                    blur-[45px]
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300
                  "
                />

                {/* CARD — border dihapus, shadow ditambah */}
                <div
                  className="
                    relative z-10
                    rounded-[28px]
                    p-8
                    bg-white
                    shadow-[0_12px_30px_rgba(0,0,0,0.15)]
                    transition-transform duration-300
                    group-hover:scale-[1.03]
                  "
                >
                  <h3 className="font-bold text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-black/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </FadeUp>

      </div>
    </section>
  );
}
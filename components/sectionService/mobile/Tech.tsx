"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";

const techStack = [
  {
    title: "Mobile Framework",
    desc: "Cross-platform development to reduce cost and speed up delivery.",
    items: ["Flutter", "React Native"],
  },
  {
    title: "Platform Support",
    desc: "Native-like experience optimized for each operating system.",
    items: ["Android", "iOS"],
  },
  {
    title: "Backend & API",
    desc: "Stable architecture to handle data, users, and integrations.",
    items: ["REST API", "Firebase", "Custom Backend"],
  },
  {
    title: "Authentication",
    desc: "Secure access control and user management.",
    items: ["JWT", "OAuth", "Secure Login"],
  },
  {
    title: "Performance",
    desc: "Smooth interaction and fast response across devices.",
    items: ["Caching", "Optimization", "Real-time Sync"],
  },
  {
    title: "Deployment",
    desc: "Production-ready apps published using best practices.",
    items: ["App Store", "Play Store", "CI/CD Pipeline"],
  },
];

export default function SectionMobileTech() {
  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 text-black">

        {/* HEADER — FadeUp */}
        <FadeUp>
          <div className="max-w-2xl mb-24">
            <h2 className="text-3xl font-bold mb-4">
              Technology Stack
            </h2>
            <p className="text-black/70">
              We use reliable and scalable technologies to ensure your mobile
              application is secure, fast, and future-ready.
            </p>
          </div>
        </FadeUp>

        {/* CONTENT */}
        <FadeUp delay={0.2}>
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
            className="divide-y divide-black/20"
          >
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: 60 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="py-12 transition hover:bg-yellow-100/30"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                  {/* LEFT SIDE */}
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {tech.title}
                    </h3>
                    <p className="text-sm text-black/60">
                      {tech.desc}
                    </p>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="lg:col-span-2 flex flex-wrap gap-x-10 gap-y-4 text-sm font-medium">
                    {tech.items.map((item, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="
                          relative
                          cursor-default
                          transition
                          hover:text-black
                          before:absolute before:-bottom-1 before:left-0
                          before:w-0 before:h-[1px]
                          before:bg-black
                          hover:before:w-full
                          before:transition-all
                        "
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </FadeUp>

      </div>
    </section>
  );
}
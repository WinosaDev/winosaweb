"use client";

import { Layout, Layers, MousePointerClick, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export default function SectionFeaturesUIUX() {
  const features = [
    {
      icon: Layout,
      title: "User-Centered Design",
      desc: "Every interface is built around user psychology, clarity, and intuitive interaction.",
    },
    {
      icon: Layers,
      title: "Design System Architecture",
      desc: "Scalable design foundations with reusable and consistent components.",
    },
    {
      icon: MousePointerClick,
      title: "Interactive Prototyping",
      desc: "Clickable and testable prototypes before development begins.",
    },
    {
      icon: Smartphone,
      title: "Responsive & App Experience",
      desc: "Optimized layouts for web, tablet, and mobile applications.",
    },
  ];

  return (
    <section className="w-full bg-white py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="text-sm uppercase tracking-widest text-yellow-500 mb-4">
            Our Expertise
          </p>

          <h2 className="text-5xl font-bold text-black leading-tight mb-6">
            Strategic Design <br /> That Drives Growth
          </h2>

          <p className="text-black/60 max-w-md">
            We craft intuitive digital systems that balance aesthetics,
            usability, and business goals into one cohesive experience.
          </p>
        </div>

        {/* RIGHT SIDE – FLOATING STACK */}
        <div className="relative flex flex-col gap-8">

          {features.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative pl-12"
              >
                {/* vertical line */}
                <div className="absolute left-5 top-0 bottom-0 w-px bg-black/10" />

                {/* icon circle */}
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full border border-black flex items-center justify-center bg-white group-hover:bg-yellow-50 transition">
                  <Icon className="w-5 h-5 text-black" />
                </div>

                <div className="pb-8 border-b border-black/10">
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:translate-x-1 transition">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-black/60 leading-relaxed max-w-md">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

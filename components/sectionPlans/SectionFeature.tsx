"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  {
    name: "Unlimited Projects",
    basic: true,
    pro: true,
    enterprise: true,
  },
  {
    name: "Priority Support",
    basic: false,
    pro: true,
    enterprise: true,
  },
  {
    name: "Advanced Analytics",
    basic: false,
    pro: true,
    enterprise: true,
  },
  {
    name: "Custom Integrations",
    basic: false,
    pro: false,
    enterprise: true,
  },
];

export default function SectionFeature() {
  return (
    <section className="w-full bg-white py-40">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-black mb-4">
            Feature Comparison
          </h2>
          <p className="text-black/60">
            Compare plans and choose the one that fits your growth stage.
          </p>
        </motion.div>

        {/* TABLE CONTAINER */}
        <div className="relative">

          {/* GOLD GLOW BACKGROUND */}
          <div className="absolute -inset-16 bg-[radial-gradient(circle,rgba(255,200,0,0.4)_0%,transparent_70%)] blur-[120px]" />

          <div className="relative border border-black rounded-[32px] overflow-hidden bg-white">

            {/* HEADER */}
            <div className="grid grid-cols-4 text-center bg-black text-white">
              <div className="p-6 font-semibold text-left bg-black">
                Features
              </div>
              <div className="p-6">Basic</div>
              <div className="p-6 relative">
                <span className="font-semibold">Pro</span>
                <div className="absolute top-2 right-4 text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full">
                  Popular
                </div>
              </div>
              <div className="p-6">Enterprise</div>
            </div>

            {/* BODY */}
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="
                  group
                  grid grid-cols-4
                  text-center
                  border-b border-black/10
                  hover:bg-yellow-100/20
                  transition
                "
              >
                <div className="p-6 text-left font-medium text-black">
                  {feature.name}
                </div>

                <div className="p-6 flex justify-center">
                  {feature.basic ? (
                    <Check className="text-black" size={20} />
                  ) : (
                    "-"
                  )}
                </div>

                <div className="p-6 flex justify-center bg-yellow-50/40">
                  {feature.pro ? (
                    <Check className="text-black" size={20} />
                  ) : (
                    "-"
                  )}
                </div>

                <div className="p-6 flex justify-center">
                  {feature.enterprise ? (
                    <Check className="text-black" size={20} />
                  ) : (
                    "-"
                  )}
                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

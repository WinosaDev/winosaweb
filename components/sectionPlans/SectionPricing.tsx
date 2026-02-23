"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";
import Link from "next/link";

const plans = [
  {
    name: "Starter Plan",
    price: "$1080 USD",
    features: [
      "5 Landing Pages",
      "Responsive Design",
      "Basic SEO",
      "Analytics Setup",
      "1 Month Support",
    ],
  },
  {
    name: "Pro Plan",
    price: "$2800 USD",
    features: [
      "Everything in Starter",
      "Advanced UI System",
      "CMS Integration",
      "Performance Optimization",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise Plan",
    price: "$4020 USD",
    features: [
      "Custom Architecture",
      "API Integration",
      "Scalable Infrastructure",
      "Security Optimization",
      "Dedicated Team",
    ],
  },
];

export default function SectionPricing() {
  return (
    <FadeUp>
      <section id="pricing" className="w-full bg-white py-40">
        <div className="max-w-7xl mx-auto px-6">

          {/* TITLE */}
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold text-black mb-6">
              Straightforward Pricing
            </h2>
            <p className="text-black/60 text-lg">
              Clean pricing designed for serious businesses.
            </p>
          </div>

          {/* CARDS */}
          <motion.div
            className="grid md:grid-cols-3 gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 80 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[32px] p-10 transition"
              >
                <h3 className="text-2xl font-semibold text-black mb-4">
                  {plan.name}
                </h3>

                <div className="text-3xl font-bold text-black mb-8">
                  {plan.price}
                </div>

                <ul className="space-y-3 text-black mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>

                <Link
                  href={`https://wa.me/6281234567890?text=Hi%20WINOSA!%20I%20am%20interested%20in%20the%20${encodeURIComponent(plan.name)}.`}
                  target="_blank"
                  className="block text-center py-3 rounded-full border border-black text-black hover:bg-black/5 transition"
                >
                  Choose This Plan
                </Link>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </FadeUp>
  );
}
"use client";

import { motion } from "framer-motion";
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
        <div className="grid md:grid-cols-3 gap-16">

          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >

              {/* 🔥 STRONG GOLD GLOW */}
              <div className="
                absolute -inset-16
                opacity-0
                group-hover:opacity-100
                transition duration-500
                blur-[100px]
                rounded-[60px]
                bg-[radial-gradient(circle,rgba(255,200,0,0.9)_0%,rgba(255,200,0,0.6)_40%,rgba(255,200,0,0.2)_70%,transparent_90%)]
              " />

              {/* CARD */}
              <div className="
                relative
                bg-white
                border border-black
                rounded-[32px]
                p-10
                transition-all duration-300
                group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]
              ">

                <h3 className="text-2xl font-semibold text-black mb-4">
                  {plan.name}
                </h3>

                <div className="text-3xl font-bold text-black mb-8">
                  {plan.price}
                </div>

                <ul className="space-y-3 text-black mb-10">
                  {plan.features.map((f, idx) => (
                    <li key={idx}>• {f}</li>
                  ))}
                </ul>

                <Link
                  href="#"
                  className="
                    block text-center py-3
                    rounded-full
                    border border-black
                    text-black
                    hover:bg-black/5
                    transition
                  "
                >
                  Choose This Plan
                </Link>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$299",
    desc: "For early stage businesses and startups.",
    features: [
      "IT Consulting",
      "UI/UX Design",
      "Business analysis",
      "Wireframe & prototype",
      "Basic system planning",
    ],
    type: "normal",
  },
  {
    name: "Business",
    price: "$699",
    desc: "For growing companies and digital products.",
    features: [
      "Software Development",
      "Cloud Solutions",
      "Responsive web app",
      "API integration",
      "Deployment setup",
    ],
    highlight: true,
    type: "normal",
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For enterprise level and complex systems.",
    features: [
      "Cyber Security",
      "IT Talent Outsourcing",
      "System architecture",
      "Security audit",
      "Dedicated developer team",
    ],
    type: "custom",
  },
];

export default function SectionPricing() {
  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 text-black">

        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-2">
            Choose Your Plan
          </h2>
          <p className="text-sm text-gray-500">
            Select the plan that fits your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {plans.map((plan, i) => (
            <div key={i} className="group relative h-full">

              {/* GOLD GLOW */}
              <div
                className="
                  absolute -inset-16
                  rounded-[60px]
                  bg-[radial-gradient(circle,rgba(255,200,0,0.6)_0%,rgba(255,200,0,0.35)_40%,transparent_75%)]
                  opacity-0
                  blur-[90px]
                  transition-all duration-500
                  group-hover:opacity-100
                "
              />

              {/* CARD */}
              <div
                className="
                  relative
                  border border-black
                  rounded-[28px]
                  p-10
                  bg-white
                  shadow-[0_12px_30px_rgba(0,0,0,0.15)]
                  transition-all duration-500
                  group-hover:-translate-y-2
                  group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                  flex flex-col
                  h-full
                "
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-black text-white text-xs">
                    Most Popular
                  </div>
                )}

                {/* HEADER */}
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {plan.name}
                  </h3>

                  <p className="text-sm text-black/70 mb-4">
                    {plan.desc}
                  </p>

                  {plan.type === "normal" && (
                    <span className="block text-sm text-black/60 mb-1">
                      Start from
                    </span>
                  )}

                  <p className="text-4xl font-bold mb-6">
                    {plan.price}
                  </p>
                </div>

                {/* FEATURES (GROW SECTION) */}
                <ul className="space-y-2 text-sm mb-8 flex-1">
                  {plan.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>

                {/* BUTTON ALWAYS BOTTOM */}
                {plan.type === "custom" ? (
                  <Link
                    href="/Services/custom-quote"
                    className="
                      w-full text-center
                      px-8 py-3
                      rounded-full
                      border border-black
                      text-sm font-medium
                      hover:bg-black/10
                      transition
                    "
                  >
                    Request Custom Quote
                  </Link>
                ) : (
                  <button
                    className="
                      w-full
                      px-8 py-3
                      rounded-full
                      border border-black
                      text-sm font-medium
                      hover:bg-black/10
                      transition
                    "
                  >
                    Choose Plan
                  </button>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

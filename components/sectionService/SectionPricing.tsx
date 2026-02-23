"use client";

import Link from "next/link";
import FadeUp from "@/components/animation/FadeUp";

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

const whatsappNumber = "6281234567890";

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
            <FadeUp key={i} delay={i * 0.2}>
              <div className="group relative h-full">

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

                <div
                  className="
                    relative
                    rounded-[28px]
                    p-10
                    bg-white
                    shadow-[0_12px_30px_rgba(0,0,0,0.15)]
                    transition-all duration-500
                    group-hover:-translate-y-2
                    group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                    flex flex-col
                    h-full
                    overflow-hidden
                  "
                >

                  {plan.highlight && (
                    <div className="absolute top-9 -right-16 rotate-45 bg-black text-white text-xs font-semibold px-16 py-2">
                      MOST POPULAR
                    </div>
                  )}

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

                  <ul className="space-y-2 text-sm mb-8 flex-1">
                    {plan.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>

                  {plan.type === "custom" ? (
                    <Link
                      href={`https://wa.me/${whatsappNumber}?text=Hello%20I%20want%20a%20custom%20quote`}
                      target="_blank"
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
                    <Link
                      href={`https://wa.me/${whatsappNumber}?text=Hello%20I%20am%20interested%20in%20the%20${plan.name}%20plan`}
                      target="_blank"
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
                      Choose Plan
                    </Link>
                  )}

                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
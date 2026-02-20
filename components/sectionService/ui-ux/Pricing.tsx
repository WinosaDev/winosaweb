"use client";

import { useState } from "react";
import Link from "next/link";

type PlanType = "normal" | "custom";

type Plan = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  type: PlanType;
};

const plans: Plan[] = [
  {
    name: "UI Basic",
    price: "$199",
    desc: "Perfect for landing page or small project.",
    features: [
      "1-3 Pages Design",
      "Wireframe + High Fidelity",
      "Responsive Layout",
      "Design System Basic",
      "3 Days Delivery",
    ],
    type: "normal",
  },
  {
    name: "UI/UX Pro",
    price: "$599",
    desc: "Best for startup and growing business.",
    features: [
      "Up to 10 Pages",
      "User Flow & Wireframe",
      "Full Design System",
      "Interactive Prototype",
      "Free Revision 2x",
    ],
    type: "normal",
  },
  {
    name: "Enterprise UX",
    price: "Custom",
    desc: "For complex system & mobile apps.",
    features: [
      "App / Dashboard Design",
      "User Research",
      "UX Strategy",
      "Full Prototype",
      "Developer Handoff",
    ],
    type: "custom",
  },
];

export default function SectionPricingUIUX() {
  const [active, setActive] = useState<number>(1);

  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold text-black mb-3">
          UI/UX Design Pricing
        </h2>
        <p className="text-black">
          Professional and user-centered design solutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {plans.map((plan, i) => (
          <PricingCard
            key={i}
            {...plan}
            isActive={active === i}
            onHover={() => setActive(i)}
            onLeave={() => setActive(1)}
          />
        ))}
      </div>
    </section>
  );
}

function PricingCard({
  name,
  price,
  desc,
  features,
  type,
  isActive,
  onHover,
  onLeave,
}: {
  name: string;
  price: string;
  desc: string;
  features: string[];
  type: PlanType;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`
        relative cursor-pointer
        rounded-[28px] p-8
        border border-black
        bg-white
        transition-all duration-300
        flex flex-col
        h-full
        ${
          isActive
            ? "shadow-[0_0_90px_rgba(255,200,80,0.8)] scale-[1.05]"
            : "hover:shadow-[0_0_40px_rgba(255,200,80,0.4)]"
        }
      `}
    >
      {/* HEADER */}
      <div>
        <h3 className="text-xl font-bold text-black mb-2">
          {name}
        </h3>

        <p className="text-black mb-6">
          {desc}
        </p>

        {type === "normal" && (
          <span className="text-sm text-black block mb-1">
            Start from
          </span>
        )}

        <div className="text-4xl font-bold text-black mb-6">
          {price}
        </div>
      </div>

      {/* FEATURES */}
      <ul className="space-y-3 text-sm mb-8 text-black flex-1">
        {features.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            {item}
          </li>
        ))}
      </ul>

      {/* BUTTON ALWAYS AT BOTTOM */}
      {type === "custom" ? (
        <Link
          href="/Services/customUi"
          className={`
            block text-center w-full py-3 rounded-full
            border border-black font-semibold transition
            ${
              isActive
                ? "bg-yellow-400 text-black hover:bg-yellow-300"
                : "bg-white text-black hover:bg-yellow-100"
            }
          `}
        >
          Custom Project
        </Link>
      ) : (
        <button
          className={`
            w-full py-3 rounded-full font-semibold
            border border-black transition
            ${
              isActive
                ? "bg-yellow-400 text-black hover:bg-yellow-300"
                : "bg-white text-black hover:bg-yellow-100"
            }
          `}
        >
          Get Started
        </button>
      )}
    </div>
  );
}

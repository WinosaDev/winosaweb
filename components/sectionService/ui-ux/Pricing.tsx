"use client";

import { useState } from "react";
import Link from "next/link";
import FadeUp from "@/components/animation/FadeUp";
import { useTranslate } from "@/lib/useTranslate";

type PlanType = "normal" | "custom";

type Plan = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  type: PlanType;
};

const defaultPlans: Plan[] = [
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

export default function SectionPricingUIUX({ data }: { data?: any }) {
  const { t } = useTranslate();
  const [active, setActive] = useState<number>(1);

  let plans: Plan[];

  // 🔥 Kalau API kirim harga
  if (data?.price) {
    const cleanPrice = data.price.replace(/Starting from\s*/i, "");

    const dynamicPlan: Plan = {
      name: data.title || "UI Basic",
      price: cleanPrice,
      desc: data.description || "Professional design solution.",
      features: data.features || [],
      type: "normal",
    };

    const proPlan: Plan = {
      name: "UI/UX Pro",
      price: "$799",
      desc: "Advanced user experience & full design system.",
      features: [
        ...(data.features || []),
        "User Research",
        "Interactive Prototype",
      ],
      type: "normal",
    };

    const customPlan: Plan = {
      name: "Enterprise UX",
      price: "Custom",
      desc: "Full custom UX strategy & product design.",
      features: [
        "UX Strategy",
        "Full Product Research",
        "Mobile & Web App",
        "Developer Handoff",
      ],
      type: "custom",
    };

    plans = [dynamicPlan, proPlan, customPlan];
  } else {
    // 🔥 Fallback default
    plans = defaultPlans;
  }

  return (
    <section className="w-full bg-white py-32">

      <FadeUp>
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-3">
            {t("pricing", "title")}
          </h2>
          <p className="text-black">
            {t("pricing", "subtitle")}
          </p>
        </div>
      </FadeUp>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {plans.map((plan, i) => (
          <FadeUp key={i} delay={i * 0.2}>
            <PricingCard
              {...plan}
              isActive={active === i}
              onHover={() => setActive(i)}
              onLeave={() => setActive(1)}
              t={t}
            />
          </FadeUp>
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
  t,
}: {
  name: string;
  price: string;
  desc: string;
  features: string[];
  type: PlanType;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  t: any;
}) {
  const whatsappLink =
    "https://wa.me/6281234567890?text=Hello%20I%20am%20interested%20in%20your%20UIUX%20service";

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`relative cursor-pointer rounded-[28px] p-8 bg-white transition-all duration-300 flex flex-col h-full ${
        isActive
          ? "shadow-[0_0_90px_rgba(255,200,80,0.8)] scale-[1.05]"
          : "hover:shadow-[0_0_40px_rgba(255,200,80,0.4)]"
      }`}
    >
      <div>
        <h3 className="text-xl font-bold text-black mb-2">
          {name}
        </h3>

        <p className="text-black mb-6">
          {desc}
        </p>

        {type === "normal" && (
          <span className="text-sm text-black block mb-1">
            {t("pricing", "startFrom")}
          </span>
        )}

        <div className="text-4xl font-bold text-black mb-6">
          {price}
        </div>
      </div>

      <ul className="space-y-3 text-sm mb-8 text-black flex-1">
        {features.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            {item}
          </li>
        ))}
      </ul>

      {type === "custom" ? (
        <Link
          href="/Services/customUi"
          className="block text-center w-full py-3 rounded-full border border-black font-semibold transition bg-white text-black hover:bg-yellow-100"
        >
          {t("pricing", "custom")}
        </Link>
      ) : (
        <a
          href={whatsappLink}
          target="_blank"
          className="block text-center w-full py-3 rounded-full border border-black font-semibold transition bg-white text-black hover:bg-yellow-100"
        >
          {t("pricing", "getStarted")}
        </a>
      )}
    </div>
  );
}

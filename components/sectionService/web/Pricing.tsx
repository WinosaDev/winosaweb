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
    name: "Starter",
    price: "$999",
    desc: "Professional service package.",
    features: [
      "Responsive Website",
      "Modern UI Design",
      "Basic SEO Setup",
      "Contact Form Integration",
    ],
    type: "normal",
  },
  {
    name: "Business",
    price: "$1,499",
    desc: "Extended features for growing companies.",
    features: [
      "Advanced SEO",
      "Performance Optimization",
      "Analytics Integration",
      "Priority Support",
    ],
    type: "normal",
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Fully customized solution tailored to your needs.",
    features: [
      "Custom Architecture",
      "Dedicated Support",
      "Scalable Infrastructure",
      "Advanced Security",
    ],
    type: "custom",
  },
];

export default function SectionPricing({ data }: { data?: any }) {
  const { t } = useTranslate();
  const [active, setActive] = useState<number>(0);

  let plans: Plan[];

  // 🔥 Kalau ada API detail Web
  if (data?.price) {
    const cleanPrice = data.price.replace(/Starting from\s*/i, "");

    const dynamicPlan: Plan = {
      name: data.title || "Starter",
      price: cleanPrice,
      desc: data.description || "Professional service package.",
      features: data.features || [],
      type: "normal",
    };

    const businessPlan: Plan = {
      name: "Business",
      price: "$1,499",
      desc: "Extended features for growing companies.",
      features: [
        ...(data.features || []),
        "Priority Support",
        "Advanced Optimization",
      ],
      type: "normal",
    };

    const customPlan: Plan = {
      name: "Enterprise",
      price: "Custom",
      desc: "Fully customized solution tailored to your needs.",
      features: [
        "Custom Architecture",
        "Dedicated Support",
        "Scalable Infrastructure",
        "Advanced Security",
      ],
      type: "custom",
    };

    plans = [dynamicPlan, businessPlan, customPlan];
  } else {
    // 🔥 Fallback default kalau belum ada API
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
              onLeave={() => setActive(0)}
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
    "https://wa.me/6281234567890?text=Hello%20I%20am%20interested%20in%20your%20service";

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
        <h3 className="text-xl font-bold text-black mb-2">{name}</h3>
        <p className="text-black mb-6">{desc}</p>

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
          href="/Services/customWeb"
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

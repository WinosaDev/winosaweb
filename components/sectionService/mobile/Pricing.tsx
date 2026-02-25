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
    name: "Starter App",
    price: "$499",
    desc: "Best for MVP, startup ideas, and simple mobile apps.",
    features: [
      "Single platform (Android or iOS)",
      "Modern UI design",
      "Basic navigation flow",
      "API integration",
      "Basic testing & deployment",
    ],
    type: "normal",
  },
  {
    name: "Business App",
    price: "$1299",
    desc: "Perfect for growing businesses and production-ready apps.",
    features: [
      "Android & iOS app",
      "Custom UI/UX design",
      "User authentication system",
      "Backend & database integration",
      "Performance optimization",
    ],
    type: "normal",
  },
  {
    name: "Enterprise App",
    price: "Custom",
    desc: "For complex systems, high traffic, and scalable platforms.",
    features: [
      "Advanced app architecture",
      "Custom backend & API",
      "Payment / booking system",
      "Security & scalability setup",
      "Dedicated development team",
    ],
    type: "custom",
  },
];

export default function SectionPricingMobile({ data }: { data?: any }) {
  const { t } = useTranslate();
  const [active, setActive] = useState<number>(1);

  // 🔥 Clean price from API kalau ada
  const cleanPrice = data?.price
    ? data.price.replace(/Starting from\s*/i, "")
    : null;

  let plans: Plan[];

  // ✅ Kalau ada data dari API (detail mobile app)
  if (data?.price) {
    const dynamicPlan: Plan = {
      name: data.title || "Starter App",
      price: cleanPrice || "$999",
      desc: data.description || "Professional mobile app solution.",
      features: data.features || [],
      type: "normal",
    };

    const businessPlan: Plan = {
      name: "Business App",
      price: "$1499",
      desc: "Advanced features for scalable mobile apps.",
      features: [
        ...(data.features || []),
        "User Authentication",
        "Cloud Deployment",
      ],
      type: "normal",
    };

    const customPlan: Plan = {
      name: "Enterprise App",
      price: "Custom",
      desc: "Full custom architecture & scalable mobile platform.",
      features: [
        "Custom Backend",
        "High Scalability",
        "Payment Integration",
        "Dedicated Team",
      ],
      type: "custom",
    };

    plans = [dynamicPlan, businessPlan, customPlan];
  } else {
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
  const { t } = useTranslate();

  const whatsappLink =
    "https://wa.me/6281234567890?text=Hello%20I%20am%20interested%20in%20your%20mobile%20app%20service";

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
          href="/Services/customMobile"
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

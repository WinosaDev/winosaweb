"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";
import Link from "next/link";
import { useTranslate } from "@/lib/useTranslate";

export default function SectionPricing() {

  const { t } = useTranslate();

  const plans = [
    {
      name: t("plansPricing", "starterName"),
      price: "$1080 USD",
      features: [
        t("plansPricing", "starterFeature1"),
        t("plansPricing", "starterFeature2"),
        t("plansPricing", "starterFeature3"),
        t("plansPricing", "starterFeature4"),
        t("plansPricing", "starterFeature5"),
      ],
    },
    {
      name: t("plansPricing", "proName"),
      price: "$2800 USD",
      features: [
        t("plansPricing", "proFeature1"),
        t("plansPricing", "proFeature2"),
        t("plansPricing", "proFeature3"),
        t("plansPricing", "proFeature4"),
        t("plansPricing", "proFeature5"),
      ],
    },
    {
      name: t("plansPricing", "enterpriseName"),
      price: "$4020 USD",
      features: [
        t("plansPricing", "enterpriseFeature1"),
        t("plansPricing", "enterpriseFeature2"),
        t("plansPricing", "enterpriseFeature3"),
        t("plansPricing", "enterpriseFeature4"),
        t("plansPricing", "enterpriseFeature5"),
      ],
    },
  ];

  return (
    <section id="pricing" className="relative w-full bg-white py-40 overflow-hidden">

      <div className="absolute -bottom-40 left-0 right-0 h-[600px] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(255,200,0,0.5)_0%,rgba(255,200,0,0.25)_40%,transparent_70%)] blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <FadeUp>
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold text-black mb-6">
              {t("plansPricing", "title")}
            </h2>

            <p className="text-black/70 text-lg">
              {t("plansPricing", "subtitle")}
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-12">

          {plans.map((plan, index) => (
            <div key={index} className="group relative">

              <div className="absolute -inset-6 rounded-[40px] bg-[radial-gradient(circle,rgba(255,200,0,0.55)_0%,rgba(255,200,0,0.25)_40%,transparent_70%)] opacity-0 blur-[70px] transition-all duration-500 group-hover:opacity-100" />

              <div className="relative bg-white border border-black rounded-[28px] p-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]">

                <h3 className="text-2xl font-semibold text-black mb-3">
                  {plan.name}
                </h3>

                <div className="text-sm text-black/60 mb-1">
                  {t("pricing", "startFrom")}
                </div>

                <div className="text-3xl font-bold text-black mb-8">
                  {plan.price}
                </div>

                <ul className="space-y-3 text-black mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>

                <Link
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                    `${t("plansPricing", "whatsappText")} ${plan.name}`
                  )}`}
                  target="_blank"
                  className="block text-center py-3 rounded-full border border-black text-black transition hover:bg-black/10"
                >
                  {t("plansPricing", "chooseButton")}
                </Link>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
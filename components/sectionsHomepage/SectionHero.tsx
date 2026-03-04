"use client";

import Link from "next/link";
import Button from "@/components/UI/Button";
import FadeUp from "@/components/animation/FadeUp";
import { useTranslate } from "@/lib/useTranslate";

export default function SectionHero() {
  const { t } = useTranslate();

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/bg/bg2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 w-full h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-16 flex justify-end">
          <div className="max-w-[620px] ml-auto text-white text-right">

            <FadeUp>
              <h1
                className="text-5xl md:text-6xl font-bold leading-tight"
                style={{ textShadow: "0 6px 20px rgba(0,0,0,0.6)" }}
              >
                <span className="block whitespace-nowrap">
                  {t("hero", "titleLine1")}
                </span>
                <span className="block whitespace-nowrap">
                  {t("hero", "titleLine2")}
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p
                className="mt-6 text-base text-white/90 leading-relaxed"
                style={{ textShadow: "0 4px 12px rgba(0,0,0,0.6)" }}
              >
                {t("hero", "description")}
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="mt-10 flex justify-end">
                <Link href="/Contact">
                  <Button
                    text={t("hero", "button")}
                    variant="light"
                  />
                </Link>
              </div>
            </FadeUp>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
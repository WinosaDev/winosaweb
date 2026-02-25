"use client";

import Link from "next/link";
import Button from "@/components/UI/Button";
import { motion } from "framer-motion";
import { useTranslate } from "@/lib/useTranslate";

export default function SectionCTA() {
  const { t } = useTranslate();

  return (
    <section className="w-full bg-white py-32">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl mx-auto text-center px-8 text-black"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {t("cta", "title")}
        </h2>

        <p className="text-gray-600 mb-10">
          {t("cta", "description")}
        </p>

        <div className="flex justify-center gap-6">
          <Link href="/Contact">
            <Button text={t("cta", "button")} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

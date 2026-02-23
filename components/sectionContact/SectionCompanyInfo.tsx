"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";
import { Plus, Minus } from "lucide-react";

export default function SectionCompanyInfo() {
  const [active, setActive] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services do you provide?",
      answer:
        "We provide web development, UI/UX design, branding, and scalable digital solutions tailored to your business needs.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Project timelines depend on scope and complexity, typically ranging from 2–8 weeks.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes, we offer maintenance and long-term support packages.",
    },
    {
      question: "How can we start working together?",
      answer:
        "Simply contact us through the form and our team will reach out to you.",
    },
  ];

  return (
    <FadeUp>
      <section className="w-full py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-20">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-yellow-600 font-medium mb-4">FAQ</p>

            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Frequently <br />
              asked <br />
              questions.
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {faqs.map((faq, index) => {
              const isOpen = active === index;

              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                  className="border-b border-gray-200 pb-6"
                >
                  <button
                    onClick={() =>
                      setActive(isOpen ? null : index)
                    }
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h4 className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </h4>

                    {isOpen ? (
                      <Minus className="text-yellow-600" size={18} />
                    ) : (
                      <Plus className="text-gray-500" size={18} />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-4 text-gray-600 leading-relaxed overflow-hidden"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>
    </FadeUp>
  );
}
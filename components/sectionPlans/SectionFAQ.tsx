"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely. You can upgrade your subscription at any time without losing any data or progress. Our system ensures seamless migration between plans so your business operations remain uninterrupted.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No. We believe in flexibility. Our plans are designed without long-term binding contracts, giving you full control over your subscription and allowing you to scale based on your needs.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 14-day money-back guarantee. If you're not satisfied with the service within the first two weeks, we will process a full refund — no complicated terms.",
  },
  {
    question: "Is technical support included?",
    answer:
      "Yes. All plans include technical support. Higher-tier plans offer priority response times and dedicated assistance to ensure your business runs smoothly.",
  },
  {
    question: "Can I request custom features?",
    answer:
      "Definitely. We offer custom development options for businesses with specific requirements. Our team can tailor solutions that align with your operational goals.",
  },
  {
    question: "How secure is the system?",
    answer:
      "Security is one of our core priorities. We implement modern authentication protocols, encrypted data handling, and regular security updates to protect your business and users.",
  },
];

export default function SectionFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-40">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-black">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">

          {faqs.map((faq, i) => {
            const isOpen = open === i;

            return (
              <div key={i} className="relative group">

                {/* GOLD GLOW WHEN OPEN */}
                {isOpen && (
                  <div className="
                    absolute -inset-8
                    bg-[radial-gradient(circle,rgba(255,200,0,0.5)_0%,rgba(255,200,0,0.3)_40%,transparent_75%)]
                    blur-[80px]
                    rounded-[40px]
                  " />
                )}

                <div
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="
                    relative
                    border border-black
                    rounded-[24px]
                    p-6
                    cursor-pointer
                    transition-all
                    bg-white
                  "
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-black">
                      {faq.question}
                    </h3>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-black text-xl"
                    >
                      +
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-black leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

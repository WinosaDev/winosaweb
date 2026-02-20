"use client";

import { useState } from "react";
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
    <section className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-20">

        {/* LEFT SIDE */}
        <div>
          <p className="text-yellow-600 font-medium mb-4">FAQ</p>

          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            Frequently <br />
            asked <br />
            questions.
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={index}
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

                {isOpen && (
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

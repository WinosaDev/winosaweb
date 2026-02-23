"use client";

import {
  ShieldCheckIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";

import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";

const process = [
  { title: "Discover", desc: "Understand your need and goals." },
  { title: "Design", desc: "Create detailed designs and prototypes." },
  { title: "Build", desc: "Develop robust and scalable solutions." },
  { title: "Test", desc: "Ensure quality and security through testing." },
  { title: "Deploy", desc: "Launch your solutions with confidence." },
];

const reasons = [
  {
    title: "Trusted Team",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Scalable Solutions",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: ChartBarIcon,
  },
  {
    title: "Business Oriented",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: CursorArrowRaysIcon,
  },
  {
    title: "Long-term Partnership",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: HandThumbUpIcon,
  },
];

export default function SectionInfo() {
  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 text-black">

        <FadeUp>
          <div className="text-center mb-24">
            <h2 className="text-3xl font-bold mb-2">Our Process</h2>
            <p className="text-sm text-gray-500">
              How we turn concepts into reality
            </p>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-28">
            {process.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="px-6 py-2 border border-black rounded-full font-medium bg-white">
                  {item.title}
                </div>

                <div className="w-px h-12 bg-black" />
                <div className="w-3 h-3 bg-black rounded-full mb-4" />

                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">
              Why Choose Winosa?
            </h2>
            <p className="text-sm text-gray-500">
              Experienced professionals dedicated to your success.
            </p>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {reasons.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <ReasonCard {...item} />
              </motion.div>
            ))}
          </div>
        </FadeUp>

      </div>
    </section>
  );
}

function ReasonCard({
  title,
  desc,
  icon: Icon,
}: {
  title: string;
  desc: string;
  icon: any;
}) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-12 h-12 flex items-center justify-center">
        <Icon className="w-10 h-10 text-black" />
      </div>

      <div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
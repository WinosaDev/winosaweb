"use client";

import Link from "next/link";
import {
  Monitor,
  Briefcase,
  Smartphone,
  CloudCog,
  Palette,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import FadeUp from "@/components/animation/FadeUp";

export const services = [
  {
    title: "Software Development",
    desc: "We design and develop scalable, secure, and high-performance web systems tailored to your business needs. From corporate websites to enterprise-grade platforms, our solutions are built using modern architecture and best engineering practices to ensure long-term reliability.",
    icon: Monitor,
    slug: "/Services/web-development",
    hasDetail: true,
  },
  {
    title: "IT Consulting",
    desc: "Our IT consulting services help businesses define technical strategies, evaluate system architecture, choose the right digital stack, and plan sustainable technology roadmaps aligned with business growth objectives.",
    icon: Briefcase,
    hasDetail: false,
  },
  {
    title: "Mobile App Development",
    desc: "We build custom Android and iOS applications focused on usability, scalability, and performance. Our apps integrate seamlessly with backend systems while delivering smooth user experiences.",
    icon: Smartphone,
    slug: "/Services/mobile-app",
    hasDetail: true,
  },
  {
    title: "Cloud Solutions",
    desc: "From infrastructure setup to monitoring and cost optimization, we implement reliable cloud environments designed for scalability, high availability, and operational efficiency.",
    icon: CloudCog,
    hasDetail: false,
  },
  {
    title: "UI/UX Design",
    desc: "We create intuitive interfaces, strong design systems, interactive prototypes, and data-driven user experiences that enhance engagement and improve product usability.",
    icon: Palette,
    slug: "/Services/ui-ux-design",
    hasDetail: true,
  },
  {
    title: "Cyber Security & Outsourcing",
    desc: "Our security services include system audits, penetration testing, vulnerability analysis, and dedicated IT resource outsourcing to ensure your digital infrastructure remains protected and efficient.",
    icon: Shield,
    hasDetail: false,
  },
];

export default function SectionServices() {
  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 text-black">

        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <ServiceCard {...item} />
              </motion.div>
            ))}
          </div>
        </FadeUp>

      </div>
    </section>
  );
}

function ServiceCard({
  title,
  desc,
  icon: Icon,
  slug,
  hasDetail,
}: {
  title: string;
  desc: string;
  icon: any;
  slug?: string;
  hasDetail: boolean;
}) {
  const content = (
    <div className="group relative h-full">

      <div
        className="
          absolute -inset-16
          rounded-[60px]
          bg-[radial-gradient(circle,rgba(255,200,0,0.6)_0%,rgba(255,200,0,0.35)_40%,transparent_75%)]
          opacity-0
          blur-[90px]
          transition-all duration-500
          group-hover:opacity-100
        "
      />

      <div
        className="
          relative
          h-full
          flex flex-col
          bg-white
          rounded-[28px]
          p-10
          shadow-[0_12px_30px_rgba(0,0,0,0.15)]
          transition-all duration-500
          group-hover:-translate-y-2
          group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
        "
      >
        <div className="flex items-start gap-6 mb-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-full border border-black">
            <Icon size={28} strokeWidth={1.5} />
          </div>

          <h3 className="font-bold text-lg leading-tight">
            {title}
          </h3>
        </div>

        <p className="text-sm text-black/70 leading-relaxed flex-1">
          {desc}
        </p>

        <div className="mt-6">
          {hasDetail ? (
            <span
              className="
                inline-block
                px-5 py-2
                rounded-full
                border border-black
                text-xs
                hover:bg-black/10
                transition
              "
            >
              View Details
            </span>
          ) : (
            <span className="opacity-0 select-none text-xs">
              placeholder
            </span>
          )}
        </div>
      </div>
    </div>
  );

  if (hasDetail && slug) {
    return <Link href={slug}>{content}</Link>;
  }

  return content;
}
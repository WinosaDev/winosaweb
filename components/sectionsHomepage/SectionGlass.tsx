"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SectionFrame() {
  return (
    <section className="w-full bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0 font-serif text-black">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-3xl lg:text-4xl font-bold mb-24 lg:mb-32 leading-tight"
        >
          EMPOWERING YOUR VISION WITH PEOPLE,<br />
          INTEGRITY, AND TECHNOLOGY
        </motion.h2>

        <TimelineRow
          side="right"
          title="WHO WE ARE"
          text="We are a team of highly skilled professionals driven by creativity and excellence.
          With honesty, courage, and strong collaboration, we transform your vision into
          practical solutions that deliver long-term business value."
        >
          <DoubleOvalImage />
        </TimelineRow>

        <TimelineRow
          side="left"
          title="WHAT WE DO"
          text="Winosa Mitra Bharatajaya is a business consulting and software development company
          focused on delivering IT solutions that support and accelerate your business growth."
        >
          <DoubleOvalImage reverse />
        </TimelineRow>

        <TimelineRow
          side="right"
          title="VISION, MISSION & TRUST"
          text="We are committed to becoming a trusted and innovative IT consulting and development
          company, capable of competing at both national and international levels."
          isLast
        >
          <SingleOvalImage />
        </TimelineRow>

      </div>
    </section>
  );
}

function TimelineRow({
  side,
  title,
  text,
  children,
  isLast,
}: {
  side: "left" | "right";
  title: string;
  text: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative grid lg:grid-cols-2 gap-16 items-center mb-32 lg:mb-40 min-h-[240px]"
    >
      {/* Timeline Line */}
      <div className="absolute top-16 left-4 lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-center">

        {/* Dot */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-4 h-4 bg-black rounded-full z-10"
        />

        {/* Line */}
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 365 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-px bg-black mt-2"
          />
        )}
      </div>

      {/* LEFT SIDE */}
      <div
        className={`${
          side === "left" ? "lg:order-1 text-right pr-16" : "lg:order-1"
        } flex justify-center lg:justify-end`}
      >
        {side === "left" ? (
          <TextBlock title={title} text={text} align="right" />
        ) : (
          children
        )}
      </div>

      {/* RIGHT SIDE */}
      <div
        className={`${
          side === "right" ? "lg:order-2 pl-16" : "lg:order-2"
        } flex justify-center lg:justify-start`}
      >
        {side === "right" ? (
          <TextBlock title={title} text={text} />
        ) : (
          children
        )}
      </div>
    </motion.div>
  );
}

function TextBlock({
  title,
  text,
  align,
}: {
  title: string;
  text: string;
  align?: "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "right" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`max-w-md ${align === "right" ? "text-right" : ""}`}
    >
      <h3 className="font-bold mb-4">{title}</h3>
      <p className="text-sm leading-relaxed">{text}</p>
    </motion.div>
  );
}

function DoubleOvalImage({ reverse }: { reverse?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative w-[320px] h-[180px]"
    >
      <MagnifyOval
        className={`${reverse ? "right-0" : "left-0"} top-6`}
        size="lg"
      />
      <MagnifyOval
        className={`${reverse ? "left-0" : "right-0"} bottom-0`}
        size="sm"
      />
    </motion.div>
  );
}

function SingleOvalImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="w-[220px] h-[140px]"
    >
      <MagnifyOval size="md" />
    </motion.div>
  );
}

function MagnifyOval({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeMap = {
    sm: "w-[160px] h-[100px]",
    md: "w-[220px] h-[140px]",
    lg: "w-[240px] h-[150px]",
  };

  return (
    <div
      className={`absolute ${sizeMap[size]} rounded-full overflow-hidden ${className}`}
      style={{
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        backgroundImage: "url(/placeholder.jpg)",
        backgroundSize: "180%",
        backgroundPosition: "center",
        boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
      }}
    >
      <Image
        src="/placeholder.jpg"
        alt="oval"
        fill
        className="object-cover opacity-40"
      />
    </div>
  );
}

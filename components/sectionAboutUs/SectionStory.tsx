"use client";

import Link from "next/link";

export default function SectionStory() {
  return (
    <section className="relative w-full py-40 overflow-hidden bg-white">

      {/* SMOOTH GOLD GRADIENT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(255,215,100,0.45),transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-6 text-black">

        {/* TITLE */}
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          We Build Digital Products <br />
          With Purpose, Not Just Code
        </h2>

        {/* DESCRIPTION */}
        <p className="text-black/70 leading-relaxed text-lg mb-12 max-w-3xl">
          We are a digital studio focused on building high-quality web and mobile
          products that help businesses grow sustainably.
          <br /><br />
          Our approach blends strategy, design, and technology 
          ensuring every product delivers real value, not just visuals.
        </p>

        {/* BUTTON */}
        <Link
          href="/Contact"
          className="
            inline-flex items-center justify-center
            px-8 py-3
            rounded-full
            border border-black
            text-black text-sm font-semibold
            transition-all duration-300
            hover:bg-black/10
          "
        >
          Get in Touch
        </Link>

      </div>
    </section>
  );
}

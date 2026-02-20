"use client";

import Link from "next/link";

export default function SectionBlogHero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/bg/bg9.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">

        {/* LABEL */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="w-10 h-px bg-white/70" />
          <span className="px-5 py-2 rounded-full border border-white text-xs tracking-wide">
            Blog & Articles
          </span>
          <span className="w-10 h-px bg-white/70" />
        </div>

        {/* TITLE (1 LINE) */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 whitespace-nowrap">
          Discover Our Latest Insights
        </h1>

        {/* SUBTITLE */}
        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
          Inspiring digital stories, technology perspectives, and strategic insights
          for modern businesses.
        </p>

        {/* BUTTON */}
        <Link
          href="/Contact"
          className="
            inline-block
            px-8 py-3
            rounded-full
            border border-white
            text-white font-medium
            hover:bg-white/20
            transition
          "
        >
          Get in Touch
        </Link>

      </div>

      {/* BOTTOM GRADIENT */}
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

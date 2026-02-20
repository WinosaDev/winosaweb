"use client";

import Link from "next/link";
import Button from "@/components/UI/Button";

export default function SectionHero() {
  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/bg/bg7.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
        <h1
          className="text-white text-[56px] md:text-[64px] font-bold mb-4"
          style={{
            textShadow: "0 6px 24px rgba(0,0,0,0.6)",
          }}
        >
          Our Services
        </h1>

        <p
          className="text-white/90 text-lg mb-8"
          style={{
            textShadow: "0 4px 16px rgba(0,0,0,0.6)",
          }}
        >
          Turning ideas into scalable digital solutions
        </p>

        <Link href="/Contact">
          <Button
            text="Get in Touch"
            className="border-white text-white hover:bg-white/20"
          />
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

"use client";

import Link from "next/link";
import Button from "@/components/UI/Button";

export default function SectionHero() {
  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/bg/bg2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 w-full h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-16 flex justify-end">
          <div className="max-w-xl ml-auto text-white text-right">
            <h1
              className="text-4xl md:text-[64px] font-bold leading-tight"
              style={{ textShadow: "0 6px 20px rgba(0,0,0,0.6)" }}
            >
              Build the Future
              <br />
              With Winosa
            </h1>

            <p
              className="mt-6 text-sm md:text-base text-white/90 leading-relaxed"
              style={{ textShadow: "0 4px 12px rgba(0,0,0,0.6)" }}
            >
              Kami adalah perusahaan konsultan dan pengembang IT yang berbasis di Indonesia, 
              berfokus pada penyediaan solusi teknologi untuk klien nasional dan internasional. 
              Dengan kreativitas tinggi, keahlian profesional, dan kerja tim yang solid, kami 
              membantu bisnis Anda tumbuh melalui solusi digital yang tepat, aman, dan berkelanjutan.
            </p>

            <div className="mt-10 flex justify-end">
              <Link href="/Contact">
                <Button
                  text="Get in Touch"
                  className="border-white text-white hover:bg-white/20"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

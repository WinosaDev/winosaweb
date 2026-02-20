"use client";

import Button from "@/components/UI/Button";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/bg/bg10.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-[56px] md:text-[64px] font-bold mb-4">
          Web Development
        </h1>

        <p className="text-white/90 text-lg mb-8 max-w-xl">
          Build fast, secure, and scalable websites for your business
        </p>

        <Button
          text="Start Your Project"
          className="border-white text-white hover:bg-white/20"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

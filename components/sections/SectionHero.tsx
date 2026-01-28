"use client";

import Button from "../UI/Button";
import Card from "../UI/Card";
import Input from "../UI/Input";

export default function SectionHero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 sm:pt-32 md:pt-40 lg:pt-48">

      {/* BASE */}
      <div className="absolute inset-0 bg-[#1a1405]" />

      {/* CENTER GOLD CORE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f7c96b,transparent_65%)] opacity-80" />

      {/* HORIZONTAL ENERGY BAND */}
      <div className="absolute top-1/2 left-0 w-full h-[320px] -translate-y-1/2 bg-[linear-gradient(90deg,transparent,#ffd27d,transparent)] opacity-60 blur-[60px]" />

      {/* SOFT WAVES */}
      <div className="absolute top-1/3 left-0 w-full h-[400px] bg-[linear-gradient(180deg,transparent,#ffcc70,transparent)] opacity-30 blur-[120px]" />

      {/* LIGHT STREAK LINES */}
      <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.35)_0px,rgba(255,255,255,0.35)_1px,transparent_1px,transparent_40px)]" />

      {/* SIDE SHADOWS */}
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/60 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/60 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          <div className="text-white max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Build the Future
              <br />With WINOSA
            </h1>

            <p className="mt-6 text-lg text-white/90">
              Connecting global companies with Indonesian tech talent.
            </p>

            <div className="mt-6">
              <Input placeholder="Your email" />
            </div>

            <div className="mt-6">
              <Button>Get Started</Button>
            </div>

            <div className="mt-10 flex flex-col gap-4">
              <Card
                image="/row-1.jpg"
                title="Where Technology, Design, and Stories Meet"
                description="We create digital experiences that inspire, connect, and grow."
              />

              <Card
                image="/row-2.jpg"
                title="More Technology, Design, and Stories"
                description="Innovative solutions built for global audiences."
              />
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/Hero.png"
              alt="WINOSAWEB Mascot"
              className="w-[320px] drop-shadow-[0_40px_80px_rgba(255,200,80,0.45)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

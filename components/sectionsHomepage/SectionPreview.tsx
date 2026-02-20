"use client";

import Image from "next/image";

type Item = {
  id: number;
  title: string;
  desc: string;
  image: string;
};

export default function SectionPreview({
  title,
  items,
}: {
  title: string;
  items: Item[];
}) {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-8 text-black">

        <h2 className="text-center text-2xl md:text-3xl font-bold mb-16">
          {title}
        </h2>

        <div className="grid md:grid-cols-3 gap-16">
          {items.map((item) => (
            <div key={item.id} className="group relative">

              {/* 🔥 BIG GOLD GLOW */}
              <div
                className="
                  absolute -inset-16
                  rounded-[60px]
                  bg-[radial-gradient(circle,rgba(255,200,0,0.6)_0%,rgba(255,200,0,0.4)_30%,transparent_70%)]
                  opacity-0
                  blur-[80px]
                  transition-all duration-500
                  group-hover:opacity-100
                "
              />

              {/* CARD */}
              <div
                className="
                  relative
                  bg-white
                  rounded-[28px]
                  border border-black
                  shadow-[0_12px_30px_rgba(0,0,0,0.15)]
                  transition-all duration-500
                  group-hover:-translate-y-3
                  group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)]
                  overflow-hidden
                "
              >
                <div className="relative h-[220px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-semibold mb-2 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

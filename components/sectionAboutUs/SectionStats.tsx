"use client";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Happy Clients" },
  { value: "100%", label: "Commitment" },
];

export default function SectionStats() {
  return (
    <section className="relative w-full bg-white py-32 overflow-hidden">
      <div className="absolute -bottom-40 right-0 w-[600px] h-[600px] bg-yellow-300/30 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-black">
        {stats.map((item, i) => (
          <div key={i}>
            <div className="text-5xl font-bold mb-2">
              {item.value}
            </div>
            <p className="text-black/70">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

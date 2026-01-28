"use client";

export default function SectionFrame() {
  return (
    <section className="w-full bg-white py-32">

      <h2 className="text-sm tracking-widest mb-12 font-semibold text-black text-center">
        FIND US WHERE INNOVATION LIVES
      </h2>

      <a
        href="https://www.google.com/maps/place/Bandar+Lampung,+Indonesia"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full max-w-[1800px] mx-auto"
      >
        <div className="relative w-full pt-[50%]">

          <img
            src="/map.jpg"
            alt="Indonesia Map"
            className="absolute inset-0 w-full h-full object-contain"
          />

          {/* PIN */}
          <div
            className="absolute"
            style={{
              top: "57%",
              left: "71%",
              transform: "translate(-50%, -100%)",
            }}
          >
            <div className="map-pin"></div>
            <div className="map-stick"></div>
          </div>

          <span
            className="absolute text-xs text-black bg-white px-2 py-1 rounded shadow"
            style={{
              top: "61%",
              left: "90%",
              transform: "translateX(-50%)",
            }}
          >
            Bandar Lampung
          </span>

        </div>
      </a>

    </section>
  );
}

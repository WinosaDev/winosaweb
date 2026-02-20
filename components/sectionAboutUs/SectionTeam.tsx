"use client";

import { useEffect, useState } from "react";

const team = [
  {
    name: "Michael Anderson",
    role: "CEO & Founder",
    image: "/team/team1.jpg",
  },
  {
    name: "Sophia Martinez",
    role: "Head of Design",
    image: "/team/team2.jpg",
  },
  {
    name: "Daniel Kim",
    role: "Lead Developer",
    image: "/team/team3.jpg",
  },
  {
    name: "Emma Williams",
    role: "Project Manager",
    image: "/team/team4.jpg",
  },
];

export default function SectionTeam() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % team.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getPosition = (index: number) => {
    if (index === active) return "center";
    if (index === (active - 1 + team.length) % team.length) return "left";
    if (index === (active + 1) % team.length) return "right";
    return "hidden";
  };

  return (
    <section className="w-full bg-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-black">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Meet Our Team
          </h2>
          <p className="text-black/60 max-w-2xl mx-auto">
            Strategy, design, and engineering experts delivering scalable
            digital solutions.
          </p>
        </div>

        <div className="relative h-[520px] flex items-center justify-center">

          {/* Subtle gold glow */}
          <div className="absolute w-[700px] h-[700px] bg-yellow-300/20 blur-[160px] rounded-full" />

          {team.map((member, i) => {
            const position = getPosition(i);

            let styles = "";

            if (position === "center") {
              styles =
                "translate-x-0 scale-100 z-30 opacity-100 blur-0";
            } else if (position === "left") {
              styles =
                "-translate-x-[320px] scale-90 z-20 opacity-60 blur-sm";
            } else if (position === "right") {
              styles =
                "translate-x-[320px] scale-90 z-20 opacity-60 blur-sm";
            } else {
              styles = "opacity-0 scale-75";
            }

            return (
              <div
                key={i}
                className={`
                  absolute
                  transition-all duration-700 ease-in-out
                  ${styles}
                `}
              >
                <div className="w-[340px] h-[420px] bg-white border border-black rounded-[32px] shadow-xl overflow-hidden">

                  <img
                    src={member.image}
                    className="w-full h-72 object-cover"
                  />

                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold">
                      {member.name}
                    </h3>

                    <p className="text-yellow-600 font-medium text-sm mt-1">
                      {member.role}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

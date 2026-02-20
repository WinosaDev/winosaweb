"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const techStack = [
  {
    category: "Frontend",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    tech: ["Node.js", "Express", "Laravel", "REST API"],
  },
  {
    category: "Database",
    tech: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Cloud & DevOps",
    tech: ["AWS", "Docker", "Vercel", "CI/CD"],
  },
];

export default function SectionTechWeb() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white py-40">

      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Technology Stack
        </h2>
        <p className="text-black/60 text-lg max-w-2xl mx-auto">
          Structured layers powering scalable digital systems.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* ⛔ HAPUS overflow-hidden */}
        <div className="relative flex h-[500px] rounded-[40px] border border-black">

          {techStack.map((group, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setActive(i)}
              animate={{ flex: active === i ? 3 : 1 }}
              transition={{ duration: 0.5 }}
              className="relative cursor-pointer flex items-center justify-center bg-white"
            >

              {/*  GOLD GLOW  */}
              {active === i && (
                <motion.div
                  layoutId="glow"
                  transition={{ duration: 0.4 }}
                  className="
                    absolute 
                    inset-0
                    flex items-center justify-center
                    pointer-events-none
                  "
                >
                  <div
                    className="
                      w-[120%] h-[120%]
                      bg-[radial-gradient(circle,rgba(255,200,0,0.55)_0%,rgba(255,200,0,0.3)_40%,transparent_70%)]
                      blur-[100px]
                    "
                  />
                </motion.div>
              )}

              <div className="relative z-10 text-center px-8">

                <h3 className="text-2xl font-semibold text-black mb-6">
                  {group.category}
                </h3>

                {active === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-wrap justify-center gap-4 text-black/70 text-lg"
                  >
                    {group.tech.map((tech, idx) => (
                      <span key={idx}>{tech}</span>
                    ))}
                  </motion.div>
                )}

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

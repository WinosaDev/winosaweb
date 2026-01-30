"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">

        <img src="/logo.png" className="h-12" />

        <ul className="hidden md:flex gap-8 text-black text-sm">
          {["Company","Services","Portfolio","Blog","About Us","Contact","Plans"].map((m) => (
            <li
              key={m}
              className="
                px-4 py-1.5 rounded-full transition
                hover:bg-black/20 hover:border hover:border-black
              "
            >
              {m}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "EN" ? "NL" : "EN")}
            className="hidden md:block px-5 py-2 rounded-full border-2 border-black text-black hover:bg-black/20"
          >
            {lang}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-black text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 backdrop-blur-xl bg-transparent px-10 py-10 overflow-y-auto">
          <div className="flex justify-between items-center">
            <img src="/logo.png" className="h-12" />
            <button onClick={() => setOpen(false)} className="text-black text-2xl">
              ✕
            </button>
          </div>

          <div className="w-full h-px bg-black my-6" />

          <div className="flex flex-col gap-5 pb-24">
            {["Company","Services","Portfolio","Blog","About Us","Contact","Plans"].map((m) => (
              <button
                key={m}
                className="
                  text-left text-black
                  px-4 py-3 rounded-full transition
                  hover:bg-black/20 hover:border hover:border-black
                "
              >
                {m}
              </button>
            ))}

            <button
              onClick={() => setLang(lang === "EN" ? "NL" : "EN")}
              className="
                mt-8 w-full px-6 py-4 rounded-full
                border-2 border-black text-black
                hover:bg-black/20
              "
            >
              {lang}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

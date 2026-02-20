"use client";

import { useState } from "react";
import Link from "next/link";

const menus = [
  { name: "Company", href: "/Company" },
  { name: "Services", href: "/Services" },
  { name: "Portfolio", href: "/portofolio" },
  { name: "Blog", href: "/Blog" },
  { name: "About Us", href: "/About" },
  { name: "Contact", href: "/Contact" },
  { name: "Plans", href: "/Plans" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      {/* ===== TOP BAR ===== */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-11 cursor-pointer"
          />
        </Link>

        {/* DESKTOP MENU (LG UP) */}
        <ul className="hidden lg:flex gap-8 text-black text-sm">
          {menus.map((m) => (
            <li key={m.name}>
              <Link
                href={m.href}
                className="
                  px-4 py-1.5 rounded-full transition
                  hover:bg-black/20 hover:border hover:border-black
                "
              >
                {m.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT ACTION */}
        <div className="flex items-center gap-4">
          {/* LANGUAGE (LG UP) */}
          <button
            onClick={() => setLang(lang === "EN" ? "NL" : "EN")}
            className="
              hidden lg:flex
              px-5 py-2 rounded-full
              border-2 border-black text-black
              hover:bg-black/20
              transition
            "
          >
            {lang}
          </button>

          {/* HAMBURGER (BELOW LG) */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-black text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-xl px-6 py-8 overflow-y-auto">
          {/* HEADER */}
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setOpen(false)}>
              <img
                src="/logo.png"
                alt="Logo"
                className="h-11 cursor-pointer"
              />
            </Link>

            <button
              onClick={() => setOpen(false)}
              className="text-black text-2xl"
            >
              ✕
            </button>
          </div>

          <div className="w-full h-px bg-black my-6" />

          {/* MENU LIST */}
          <div className="flex flex-col gap-4">
            {menus.map((m) => (
              <Link
                key={m.name}
                href={m.href}
                onClick={() => setOpen(false)}
                className="
                  px-5 py-3 rounded-full
                  text-black
                  transition
                  hover:bg-black/20 hover:border hover:border-black
                "
              >
                {m.name}
              </Link>
            ))}

            {/* LANGUAGE MOBILE */}
            <button
              onClick={() => setLang(lang === "EN" ? "NL" : "EN")}
              className="
                mt-6
                w-full px-6 py-4 rounded-full
                border-2 border-black text-black
                hover:bg-black/20
                transition
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

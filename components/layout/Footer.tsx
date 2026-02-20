"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#efede9] text-black px-12 pt-16 pb-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        <div className="space-y-4">
          <h4 className="font-bold tracking-wide">ABOUT</h4>
          <Link href="/Company" className="block hover:underline">Company</Link>
          <Link href="/About" className="block hover:underline">About Us</Link>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold tracking-wide">SERVICES</h4>
          <Link href="/Services" className="block hover:underline">Services</Link>
          <Link href="/Plans" className="block hover:underline">Plans</Link>
          <Link href="/Contact" className="block hover:underline">Contact</Link>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold tracking-wide">INSIGHT</h4>
          <Link href="/Portfolio" className="block hover:underline">Portfolio</Link>
          <Link href="/Blog" className="block hover:underline">Blog</Link>
        </div>

        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <Link href="/">
              <img src="/logo.png" alt="Winosa" className="h-14 cursor-pointer" />
            </Link>
            <span className="text-3xl font-bold">
              <span className="text-4xl">W</span>inosa.
            </span>
          </div>

          <p className="text-sm">Innovating for Business Growth</p>

          <div className="flex gap-6 mt-4 items-center">
            <a
              href="https://facebook.com"
              target="_blank"
              className="w-14 h-14 rounded-full bg-black flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 scale-[1.45] translate-y-[3.3px]" fill="white">
                <path d="M9 8h2V6c0-1.7 1-3 3.3-3h2.2v2.7h-1.6c-.9 0-1.1.4-1.1 1.1V8h2.6l-.4 2.8H13v7h-3v-7H8V8h1z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="w-14 h-14 rounded-full bg-black flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 scale-[1.05] translate-x-[1.5px]" fill="white">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22zM8.48 8h4.37v1.91h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.26c0-1.49-.03-3.41-2.08-3.41-2.08 0-2.4 1.62-2.4 3.3V22H8.48z"/>
              </svg>
            </a>

            <a
              href="https://wa.me/628000000000"
              className="w-14 h-14 rounded-full bg-black flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 scale-[1.15] translate-x-[1px]" fill="white">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1v3.49a1 1 0 01-1 1C10.07 21 3 13.93 3 5.5a1 1 0 011-1H7.5a1 1 0 011 1c0 1.25.2 2.47.57 3.56a1 1 0 01-.24 1.01l-2.21 2.22z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12">
        <div className="h-px bg-black mb-4" />
        <div className="flex flex-col md:flex-row justify-between text-sm">
          <span>Bandar Lampung, Indonesia</span>
          <span>© 2026 WINOSA MITRA BHARATAJAYA. Digital Solutions</span>
        </div>
      </div>
    </footer>
  );
}

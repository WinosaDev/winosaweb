"use client";

import Link from "next/link";
import Button from "@/components/UI/Button";

export default function SectionCTA() {
  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-5xl mx-auto text-center px-8 text-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Build Your Digital Future?
        </h2>

        <p className="text-gray-600 mb-10">
          Mari bekerja sama untuk menciptakan solusi digital yang inovatif,
          aman, dan berkelanjutan untuk bisnis Anda.
        </p>

        <div className="flex justify-center gap-6">
          <Link href="/Contact">
            <Button text="Contact Us" />
          </Link>
        </div>
      </div>
    </section>
  );
}

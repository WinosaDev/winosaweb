"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Monitor,
  Briefcase,
  Smartphone,
  CloudCog,
  Palette,
  Shield,
} from "lucide-react";

type Item = {
  id: number;
  title: string;
  desc?: string;
  description?: string;
  image?: string;
  icon?: string;
  slug?: string;
};

const iconMap: Record<string, any> = {
  monitor: Monitor,
  briefcase: Briefcase,
  smartphone: Smartphone,
  cloud: CloudCog,
  palette: Palette,
  shield: Shield,
};

export default function SectionPreview({
  title,
  items,
}: {
  title: string;
  items: Item[];
}) {
  const previewItems = items.slice(0, 3);

  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-black mb-20"
        >
          {title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-14">

          {previewItems.map((item, index) => {
            const Icon = item.icon ? iconMap[item.icon] : null;

            const content = (
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group relative h-[420px]"
              >

                {/* STRONGER GOLD GLOW */}
                <div className="absolute -inset-12 opacity-0 blur-[100px] transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle,rgba(255,185,0,0.8)_0%,rgba(255,185,0,0.4)_40%,transparent_75%)]" />

                <div className="relative h-full rounded-[32px] overflow-hidden bg-white shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition duration-500 group-hover:shadow-[0_40px_90px_rgba(0,0,0,0.15)]">

                  {/* IMAGE VERSION */}
                  {item.image ? (
                    <div className="relative h-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />

                      {/* GOLD LIGHT BLEND */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-transparent h-[45%] bottom-0 top-auto" />

                      <div className="absolute bottom-0 p-8 text-black">
                        <h3 className="text-xl font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-black/70 line-clamp-2">
                          {item.desc || item.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    /* SERVICES VERSION */
                    <div className="flex flex-col justify-between h-full p-10 text-center">

                      <div>
                        {Icon && (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="mb-6 flex justify-center"
                          >
                            <Icon
                              size={48}
                              strokeWidth={1.5}
                              className="text-black"
                            />
                          </motion.div>
                        )}

                        <h3 className="text-xl font-semibold text-black mb-4">
                          {item.title}
                        </h3>

                        <p className="text-sm text-black/60 leading-relaxed line-clamp-3">
                          {item.desc}
                        </p>
                      </div>

                      {item.slug && (
                        <div className="pt-6">
                          <span
                            className="
                              inline-block
                              px-5 py-2
                              rounded-full
                              border border-black
                              text-xs
                              text-black
                              hover:bg-black/10
                              transition
                            "
                          >
                            View Details
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                </div>
              </motion.div>
            );

            return item.slug ? (
              <Link key={item.id} href={item.slug}>
                {content}
              </Link>
            ) : (
              <div key={item.id}>{content}</div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

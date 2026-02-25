"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { useTranslate } from "@/lib/useTranslate";

type Item = {
  _id: string;
  title: string;
  desc?: string;
  description?: string;
  image?: string;
  icon?: string;
  slug?: string;
};

function resolveIcon(iconName?: string) {
  if (!iconName) return Icons.Monitor;

  const formatted = iconName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  const IconComponent = (Icons as any)[formatted];

  return IconComponent || Icons.Monitor;
}

export default function SectionPreview({
  title,
  items = [],
}: {
  title: string;
  items?: Item[];
}) {
  const { t } = useTranslate();

  const previewItems = items.slice(0, 3);

  function getTranslatedTitle() {
    if (title === "Our Services") return t("preview", "services");
    if (title === "Our Portfolio") return t("preview", "portfolio");
    if (title === "Latest Blog") return t("preview", "blog");
    return title;
  }

  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-7xl mx-auto px-8">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-black mb-20"
        >
          {getTranslatedTitle()}
        </motion.h2>


        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-14">

          {previewItems.map((item, index) => {

            const Icon = resolveIcon(item.icon);

            const Card = (
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group relative h-[420px] cursor-pointer"
              >

                {/* GOLD GLOW */}
                <div className="
                  absolute -inset-12
                  opacity-0
                  blur-[100px]
                  transition duration-500
                  group-hover:opacity-100
                  bg-[radial-gradient(circle,rgba(255,185,0,0.8)_0%,rgba(255,185,0,0.4)_40%,transparent_75%)]
                " />

                {/* CARD */}
                <div className="
                  relative h-full
                  rounded-[32px]
                  overflow-hidden
                  bg-white
                  shadow-[0_25px_60px_rgba(0,0,0,0.08)]
                  transition duration-500
                  group-hover:shadow-[0_40px_90px_rgba(0,0,0,0.15)]
                ">

                  {/* IMAGE MODE */}
                  {item.image ? (
                    <div className="relative h-full overflow-hidden">

                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="
                          object-cover
                          transition duration-700
                          group-hover:scale-110
                        "
                        unoptimized
                      />

                      {/* gradient */}
                      <div className="
                        absolute inset-0
                        bg-gradient-to-t
                        from-white
                        via-white/85
                        to-transparent
                        h-[45%]
                        bottom-0
                        top-auto
                      " />

                      {/* text */}
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

                    /* ICON MODE */
                    <div className="flex flex-col justify-between h-full p-10 text-center">

                      <div>

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

                        <h3 className="text-xl font-semibold text-black mb-4">
                          {item.title}
                        </h3>

                        <p className="text-sm text-black/60 leading-relaxed line-clamp-3">
                          {item.desc}
                        </p>

                      </div>


                      {/* BUTTON */}
                      {item.slug && (
                        <div className="pt-6">

                          <span className="
                            inline-block
                            px-5 py-2
                            rounded-full
                            border border-black
                            text-xs
                            text-black
                            hover:bg-black/10
                            transition
                          ">
                            {t("preview", "viewDetails")}
                          </span>

                        </div>
                      )}

                    </div>
                  )}

                </div>

              </motion.div>
            );


            /* SAFE LINK WRAPPER */
            if (item.slug) {
              return (
                <Link key={item._id} href={item.slug}>
                  {Card}
                </Link>
              );
            }

            return (
              <div key={item._id}>
                {Card}
              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
}

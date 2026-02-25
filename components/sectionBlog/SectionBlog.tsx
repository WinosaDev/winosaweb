"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import FadeUp from "@/components/animation/FadeUp";
import EmptyState from "@/components/UI/EmptyState";
import { useTranslate } from "@/lib/useTranslate";

type Blog = {
  _id: string;
  title: string;
  content: string;
  excerpt?: string;
  image?: string;
  category?: string;
  slug: string;
  createdAt: string;
};

export default function SectionBlog() {

  const { t } = useTranslate();

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");


  useEffect(() => {

    const fetchBlogs = async () => {
      try {

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blog`
        );

        const data = await res.json();

        setBlogs(data.data || []);

      } catch (err) {

        console.error(err);

      } finally {

        setLoading(false);

      }
    };

    fetchBlogs();

  }, []);



  const filteredBlogs = blogs.filter((blog) => {

    const title = blog.title?.toLowerCase() || "";

    const category = blog.category?.toLowerCase() || "";

    const matchSearch =
      title.includes(search.toLowerCase());

    const matchCategory =
      activeCategory === "All" ||
      category.includes(activeCategory.toLowerCase());

    return matchSearch && matchCategory;

  });



  const categories = [
    "All",
    "Insight",
    "Design",
    "Tech",
  ];



  return (
    <section className="w-full bg-white py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 text-black">

        {/* TITLE */}
        <FadeUp>
          <h2 className="text-3xl font-bold mb-8">
            {t("blogSection", "title")}
          </h2>
        </FadeUp>



        {/* SEARCH */}
        <FadeUp>

          <div className="flex gap-4 mb-6">

            <input
              type="text"
              placeholder={t("blogSection", "search")}
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="flex-1 px-5 py-2 rounded-full border border-black text-sm"
            />

          </div>

        </FadeUp>



        {/* CATEGORY */}
        <FadeUp>

          <div className="flex justify-end gap-3 mb-14 flex-wrap">

            {categories.map((cat) => (

              <button
                key={cat}
                onClick={() =>
                  setActiveCategory(cat)
                }
                className={`px-5 py-2 rounded-full border text-sm transition ${
                  activeCategory === cat
                    ? "bg-black text-white"
                    : "border-black hover:bg-black/10"
                }`}
              >
                {t("blogCategories", cat)}
              </button>

            ))}

          </div>

        </FadeUp>



        {/* LOADING */}
        {loading ? (

          <div className="text-center py-20">
            {t("global", "loading")}
          </div>

        ) : (

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="flex flex-col gap-8"
          >

            {filteredBlogs.length === 0 ? (

              <EmptyState
                title={t("blogSection", "emptyTitle")}
                description={t("blogSection", "emptyDesc")}
              />

            ) : (

              filteredBlogs.map((blog) => (

                <motion.div
                  key={blog._id}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 50
                    },
                    visible: {
                      opacity: 1,
                      y: 0
                    }
                  }}
                  transition={{
                    duration: 0.5
                  }}
                >

                  <BlogCard blog={blog} />

                </motion.div>

              ))

            )}

          </motion.div>

        )}

      </div>

    </section>
  );
}



function BlogCard({ blog }: { blog: Blog }) {

  const { t } = useTranslate();

  return (

    <div className="group relative">

      {/* GLOW */}
      <div
        className="
          absolute -inset-6
          rounded-[40px]
          bg-[radial-gradient(circle,rgba(255,200,0,0.55)_0%,rgba(255,200,0,0.35)_35%,transparent_70%)]
          opacity-0
          blur-[70px]
          transition-all duration-500
          group-hover:opacity-100
        "
      />



      {/* CARD */}
      <div className="
        relative
        flex gap-6
        bg-white
        border border-black
        rounded-[28px]
        px-8 py-6
        transition-all duration-500
        group-hover:-translate-y-1
        group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]
      ">

        {/* IMAGE */}
        <div className="w-28 h-28 rounded-2xl overflow-hidden bg-gray-100">

          {blog.image ? (

            <img
              src={blog.image}
              className="w-full h-full object-cover"
              alt={blog.title}
            />

          ) : (

            <div className="w-full h-full bg-gray-200" />

          )}

        </div>



        {/* CONTENT */}
        <div className="flex-1">

          <span className="text-xs font-semibold text-black/60">
            {blog.category || t("blogSection", "general")}
          </span>


          <h3 className="font-bold text-lg mt-1 mb-2">
            {blog.title}
          </h3>


          <p className="text-sm text-black/70 mb-4">
            {blog.excerpt ||
              blog.content?.slice(0, 120) ||
              ""}
          </p>


          <Link
            href={`/Blog/${blog.slug}`}
            className="inline-block px-6 py-2 rounded-full border border-black text-sm text-black transition hover:bg-black/10"
          >
            {t("blogSection", "readMore")}
          </Link>

        </div>

      </div>

    </div>
  );
}

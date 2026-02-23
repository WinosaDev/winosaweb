"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import FadeUp from "@/components/animation/FadeUp";
import EmptyState from "@/components/UI/EmptyState";

type Blog = {
  id: number;
  title: string;
  desc: string;
  image: string;
  category: string;
  slug: string;
};

type BlogCardProps = {
  title: string;
  desc: string;
  image: string;
  category: string;
  slug: string;
};

const dummyBlogs: Blog[] = [
  {
    id: 1,
    title: "Where Technology, Design, and Stories Meet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/bg/bg1.jpg",
    category: "Insight",
    slug: "technology-design-stories",
  },
  {
    id: 2,
    title: "Digital Future of Business",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/bg/bg1.jpg",
    category: "Design",
    slug: "digital-future-business",
  },
  {
    id: 3,
    title: "How Technology Shapes UX",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/bg/bg1.jpg",
    category: "Insight",
    slug: "technology-shapes-ux",
  },
];

const categories = ["All", "Insight", "Design", "Tech"];

export default function SectionBlog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingStep, setLoadingStep] = useState(0);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    setLoading(true);

    const t1 = setTimeout(() => setLoadingStep(1), 1000);
    const t2 = setTimeout(() => setLoadingStep(2), 2000);
    const t3 = setTimeout(() => setLoadingStep(3), 3000);
    const t4 = setTimeout(() => setLoadingStep(4), 4000);

    const t5 = setTimeout(() => {
      setLoadingStep(5);
      setBlogs([]);
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    const matchSearch = blog.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      activeCategory === "All" ||
      blog.category === activeCategory;

    return matchSearch && matchCategory;
  });

  return (
    <FadeUp>
      <section className="w-full bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 text-black">
          <h2 className="text-3xl font-bold mb-8">
            Articles for you
          </h2>

          <div className="flex gap-4 mb-6">
            <input
              type="text"
              placeholder="Search blog..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-5 py-2 rounded-full border border-black text-sm"
            />
            <button className="px-8 py-2 rounded-full border border-black hover:bg-black/10">
              Search
            </button>
          </div>

          <div className="flex justify-end gap-3 mb-14 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full border text-sm transition ${
                  activeCategory === cat
                    ? "bg-black text-white"
                    : "border-black hover:bg-black/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading && (
            <div className="flex flex-col gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`flex gap-6 border border-black rounded-[28px] px-8 py-6 transition-all duration-700 ${
                    loadingStep >= i ? "opacity-100" : "opacity-30"
                  }`}
                >
                  <div className="w-28 h-28 bg-gray-200 rounded-2xl animate-pulse" />
                  <div className="flex-1 space-y-3">
                    <div className="h-3 bg-gray-200 w-24 rounded animate-pulse" />
                    <div className="h-5 bg-gray-200 w-3/4 rounded animate-pulse" />
                    <div className="h-3 bg-gray-200 w-full rounded animate-pulse" />
                    <div className="h-3 bg-gray-200 w-2/3 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="flex flex-col gap-8"
            >
              {filteredBlogs.length === 0 ? (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <EmptyState
                    title="No Articles Found"
                    description="We couldn’t find articles matching your search."
                  />
                </motion.div>
              ) : (
                filteredBlogs.map((blog) => (
                  <motion.div
                    key={blog.id}
                    variants={{
                      hidden: { opacity: 0, y: 60 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <BlogCard {...blog} />
                  </motion.div>
                ))
              )}
            </motion.div>
          )}
        </div>
      </section>
    </FadeUp>
  );
}

function BlogCard({
  title,
  desc,
  image,
  category,
  slug,
}: BlogCardProps) {
  return (
    <div className="flex gap-6 border border-black rounded-[28px] px-8 py-6 transition hover:shadow-md">
      <div className="w-28 h-28">
        <img
          src={image}
          className="w-full h-full object-cover rounded-2xl"
          alt={title}
        />
      </div>

      <div className="flex-1">
        <span className="text-xs font-semibold text-black/60">
          {category}
        </span>

        <h3 className="font-bold text-lg mt-1 mb-2">
          {title}
        </h3>

        <p className="text-sm text-black/70 mb-4">
          {desc}
        </p>

        <Link
          href={`/Blog/Detail?slug=${slug}`}
          className="inline-block px-4 py-1.5 rounded-full border border-black text-xs hover:bg-black/10"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
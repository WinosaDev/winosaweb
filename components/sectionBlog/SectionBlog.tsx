"use client";

import { useState } from "react";
import Link from "next/link";

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

const blogs: Blog[] = [
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
  {
    id: 4,
    title: "Building Scalable Products",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/bg/bg1.jpg",
    category: "Tech",
    slug: "building-scalable-products",
  },
  {
    id: 5,
    title: "UI Trends 2026",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/bg/bg1.jpg",
    category: "Design",
    slug: "ui-trends-2026",
  },
  {
    id: 6,
    title: "AI in Digital Industry",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/bg/bg1.jpg",
    category: "Tech",
    slug: "ai-digital-industry",
  },
  {
    id: 7,
    title: "Design System Guide",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/bg/bg1.jpg",
    category: "Design",
    slug: "design-system-guide",
  },
  {
    id: 8,
    title: "Why UX Matters",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/bg/bg1.jpg",
    category: "Insight",
    slug: "why-ux-matters",
  },
  {
    id: 9,
    title: "Future Web Technology",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/bg/bg1.jpg",
    category: "Tech",
    slug: "future-web-technology",
  },
];

const categories = ["All", "Insight", "Design", "Tech"];

export default function SectionBlog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

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
            className="
              flex-1 px-5 py-2
              rounded-full
              border border-black
              text-sm
            "
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

        <div className="flex flex-col gap-8">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

      </div>
    </section>
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
    <div className="flex gap-6 border border-black rounded-[28px] px-8 py-6">
      <div className="w-28 h-28">
        <img src={image} className="w-full h-full object-cover rounded-2xl" />
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

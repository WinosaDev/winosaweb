"use client";

import { useState } from "react";
import Footer from "@/components/layout/Footer";

const relatedPosts = [
  { title: "How Technology Shapes UX", category: "Insight" },
  { title: "UI Trends 2026", category: "Design" },
  { title: "Future Web Technology", category: "Tech" },
];

export default function BlogDetailPage() {
  const [comments, setComments] = useState<
    { name: string; message: string }[]
  >([
    {
      name: "Alex",
      message: "Great insight! Really enjoyed this article.",
    },
    {
      name: "Nadine",
      message: "This explains perfectly how design and tech work together.",
    },
  ]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handlePost = () => {
    if (!name || !message) return;
    setComments([{ name, message }, ...comments]);
    setName("");
    setMessage("");
  };

  return (
    <>
      <main className="w-full bg-white overflow-x-hidden">

        {/* ===== HERO ===== */}
        <section
          className="relative w-full h-[75vh] flex items-end"
          style={{
            backgroundImage: "url('/bg/bg1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 text-white">
            <span className="inline-block px-4 py-1 rounded-full border border-white text-xs mb-4">
              Insight
            </span>

            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Where Technology, Design, and Stories Meet
            </h1>

            <div className="text-sm text-white/80 flex gap-4">
              <span>By Winosa Team</span>
              <span>•</span>
              <span>March 24, 2026</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* ===== ARTICLE CONTENT ===== */}
        <section className="max-w-5xl mx-auto px-6 py-24 text-black">
          <article className="prose prose-lg max-w-none">
            <p>
              In the modern digital landscape, technology and design are no longer
              independent elements. They work hand in hand to shape experiences
              that are intuitive, scalable, and impactful for users.
            </p>

            <h2>Design as a Strategic Asset</h2>

            <p>
              Design plays a critical role in how users perceive trust, usability,
              and credibility.
            </p>

            <blockquote>
              “Good design is not what it looks like, but how it works.”
            </blockquote>

            <p>
              At Winosa, we believe the strongest digital products are built where
              technology, design, and storytelling intersect.
            </p>
          </article>
        </section>

        {/* ===== RELATED ARTICLES ===== */}
        <section className="w-full py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-black">
            <h2 className="text-2xl font-bold mb-12">
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
              {relatedPosts.map((post, i) => (
                <div key={i} className="group relative">
                  <div className="absolute -inset-16 rounded-[50px] bg-[radial-gradient(circle,rgba(255,200,0,0.6)_0%,rgba(255,200,0,0.35)_40%,transparent_75%)] opacity-0 blur-[90px] transition-all duration-500 group-hover:opacity-100" />

                  <div className="relative bg-white rounded-[28px] border border-black p-6 shadow-[0_12px_30px_rgba(0,0,0,0.15)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                    <div className="w-full h-40 rounded-[20px] bg-gray-200 mb-5" />
                    <span className="text-xs text-black/60">
                      {post.category}
                    </span>
                    <h3 className="text-black font-semibold mt-2">
                      {post.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== COMMENTS ===== */}
        <section className="w-full py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-black">

            <h2 className="text-2xl font-bold mb-12">
              Comments
            </h2>

            <div className="grid md:grid-cols-2 gap-10 mb-16">
              {comments.map((c, i) => (
                <div
                  key={i}
                  className="border border-black rounded-[24px] p-6 shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                >
                  <p className="font-semibold mb-2">{c.name}</p>
                  <p className="text-sm text-black/70">{c.message}</p>
                </div>
              ))}
            </div>

            <div className="border border-black rounded-[28px] p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-5 py-3 border border-black rounded-full"
                />
              </div>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a comment..."
                className="w-full min-h-[140px] px-6 py-4 border border-black rounded-[20px]"
              />

              <button
                onClick={handlePost}
                className="mt-6 px-8 py-3 rounded-full border border-black hover:bg-black/10 transition"
              >
                Post Comment
              </button>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

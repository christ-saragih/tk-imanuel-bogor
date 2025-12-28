"use client";

import { blogPosts } from "@/lib/data";
import { RevealOnScroll } from "@/components/layout/RevealOnScroll";
import { BlogCard } from "@/components/features/blog/BlogCard";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      {/* Header Section */}
      <section className="bg-kid-blue/5 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <span className="bg-white text-kid-blue px-4 py-1 rounded-full text-sm font-bold shadow-sm inline-block mb-4">
              Berita & Artikel
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-kid-dark mb-6">
              Cerita dari <span className="text-kid-blue">Sekolah Kami</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Ikuti perkembangan terbaru, tips parenting, dan keseruan kegiatan
              belajar mengajar di TK Imanuel Bogor.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <RevealOnScroll key={post.id} delay={index * 100}>
              <BlogCard post={post} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}

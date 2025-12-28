"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Calendar, User, Tag, Share2 } from "lucide-react";
import { blogPosts } from "@/lib/data"; 

export default function BlogDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-kid-dark mb-4">
          Artikel Tidak Ditemukan
        </h1>
        <p className="text-gray-600 mb-8">
          Maaf, artikel yang Anda cari tidak tersedia atau telah dihapus.
        </p>
        <Link
          href="/blog"
          className="bg-kid-blue text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors"
        >
          Kembali ke Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-500 hover:text-kid-blue font-bold mb-8 transition-colors group"
        >
          <ArrowLeft
            size={20}
            className="mr-2 group-hover:-translate-x-1 transition-transform"
          />
          Kembali
        </Link>

        <article className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
          {/* Header Image */}
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 w-full">
                <span className="bg-kid-yellow text-kid-dark px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                  {post.category}
                </span>
                <h1 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight mb-4">
                  {post.title}
                </h1>
                <div className="flex flex-wrap gap-6 text-white/90 text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={18} />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-8 md:p-12">
            <div className="prose prose-lg prose-blue mx-auto text-gray-700 leading-loose">
              <p className="font-medium text-xl text-gray-500 mb-8 italic border-l-4 border-kid-blue pl-4">
                &ldquo;{post.excerpt}&rdquo;
              </p>

              {/* Splitting content by newline for simple rendering */}
              {post.content.split("\n").map((paragraph, idx) => (
                <p key={idx} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags & Share */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-default"
                  >
                    <Tag size={14} />
                    {tag}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 text-kid-blue font-bold hover:bg-blue-50 px-4 py-2 rounded-xl transition-colors">
                <Share2 size={20} />
                Bagikan Artikel
              </button>
            </div>
          </div>
        </article>

        {/* Call to Action */}
        <div className="mt-12 bg-kid-dark rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-kid-yellow opacity-10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="font-display font-bold text-2xl mb-4">
              Suka dengan artikel ini?
            </h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Daftarkan putra-putri Anda sekarang untuk mendapatkan pengalaman
              belajar terbaik di TK Imanuel Bogor.
            </p>
            <Link
              href="#contact"
              className="inline-block bg-kid-red hover:bg-red-500 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg transform hover:-translate-y-1"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

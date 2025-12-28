import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link href={`/blog/${post.id}`} className="group block h-full">
      <article className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
        <div className="relative h-56 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-kid-dark px-3 py-1 rounded-full text-xs font-bold shadow-sm">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <span>{post.author}</span>
            </div>
          </div>
          <h2 className="font-display font-bold text-xl text-gray-800 mb-3 group-hover:text-kid-blue transition-colors line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
            {post.excerpt}
          </p>
          <div className="flex items-center text-kid-blue font-bold text-sm mt-auto">
            Baca Selengkapnya
            <ArrowRight
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </div>
        </div>
      </article>
    </Link>
  );
};

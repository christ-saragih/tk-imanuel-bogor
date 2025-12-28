import { Testimonial } from "@/types";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative border border-gray-100 h-full">
      {/* Quote Icon */}
      <div className="absolute -top-4 right-8 bg-kid-yellow text-white p-3 rounded-full shadow-md">
        <Quote size={20} fill="currentColor" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4 text-yellow-400">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={18} fill="currentColor" />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-600 italic mb-6 leading-relaxed">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      {/* User Profile */}
      <div className="flex items-center gap-4 border-t border-gray-100 pt-6 mt-auto">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          height={48}
          width={48}
          className="rounded-full object-cover ring-2 ring-kid-blue/20"
        />
        <div>
          <h4 className="font-display font-bold text-kid-dark text-sm">
            {testimonial.name}
          </h4>
          <p className="text-xs text-kid-blue font-medium">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
};

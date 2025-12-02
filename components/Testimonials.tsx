import React from "react";
import { Star, Quote } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Ibu Sarah Pratiwi",
    role: "Bunda dari Kenzo (TK B)",
    content:
      "Sejak sekolah di sini, Kenzo jadi jauh lebih percaya diri dan mandiri. Metode belajarnya sangat menyenangkan, tidak membuat anak merasa tertekan. Gurunya sabar luar biasa!",
    rating: 5,
    image: "https://picsum.photos/seed/sarah/100/100",
  },
  {
    id: 2,
    name: "Pak Dimas Anggara",
    role: "Ayah dari Luna (Playgroup)",
    content:
      "Fasilitasnya sangat aman dan bersih. Saya tenang meninggalkan anak saya di sini. Laporan perkembangan harian via aplikasi juga sangat membantu kami memantau aktivitas Luna.",
    rating: 5,
    image: "https://picsum.photos/seed/dimas/100/100",
  },
  {
    id: 3,
    name: "Ibu Ratna Dewi",
    role: "Bunda dari Arka (TK A)",
    content:
      "Anak saya dulu pemalu, sekarang jadi aktif ikut kegiatan seni dan musik. TK Imanuel Bogor benar-benar tempat yang tepat untuk tumbuh kembang karakter anak.",
    rating: 5,
    image: "https://picsum.photos/seed/ratna/100/100",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-blue-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-kid-yellow opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-kid-red opacity-5 rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-kid-blue font-bold tracking-wider uppercase text-sm">
              Kata Orang Tua
            </span>
            <h2 className="font-display font-bold text-4xl text-kid-dark mt-2 mb-4">
              Apa Kata Mereka?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cerita bahagia dari keluarga besar TK Imanuel Bogor yang telah
              mempercayakan buah hatinya kepada kami.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, index) => (
            <RevealOnScroll
              key={item.id}
              delay={index * 150}
              className="h-full"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative border border-gray-100 h-full">
                {/* Quote Icon */}
                <div className="absolute -top-4 right-8 bg-kid-yellow text-white p-3 rounded-full shadow-md">
                  <Quote size={20} fill="currentColor" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "{item.content}"
                </p>

                {/* User Profile */}
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6 mt-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-kid-blue/20"
                  />
                  <div>
                    <h4 className="font-display font-bold text-kid-dark text-sm">
                      {item.name}
                    </h4>
                    <p className="text-xs text-kid-blue font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

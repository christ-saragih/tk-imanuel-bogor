"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Heart,
  Sun,
  ArrowRight,
  Sparkles,
  Baby,
  Palette,
  BookOpen,
} from "lucide-react";

import { RevealOnScroll } from "@/components/layout/RevealOnScroll";
import { BlogCard } from "@/components/features/blog/BlogCard";
import { TeacherCard } from "@/components/features/teacher/TeacherCard";
import { TestimonialCard } from "@/components/features/testimonial/TestimonialCard";
import {
  blogPosts,
  features,
  images,
  programsData,
  socialMediaLinks,
  stats,
  teachersData,
  testimonialsData,
  values,
} from "@/lib/data";

export default function HomePage() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getIcon = (name: string) => {
    switch (name) {
      case "baby":
        return <Baby size={32} className="text-white" />;
      case "palette":
        return <Palette size={32} className="text-white" />;
      case "book":
        return <BookOpen size={32} className="text-white" />;
      default:
        return <Baby size={32} />;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative"
      >
        {/* Background Decor */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-kid-yellow rounded-full opacity-20 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-kid-blue rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-6">
              <RevealOnScroll delay={0}>
                <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100 mx-auto lg:mx-0">
                  <span className="bg-kid-blue text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    Baru
                  </span>
                  <span className="text-kid-blue text-sm font-medium">
                    Pendaftaran Tahun Ajaran 2026 Buka!
                  </span>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={100}>
                <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-kid-dark">
                  Belajar Sambil <br />
                  <span className="text-kid-red inline-block transform -rotate-2">
                    Bermain
                  </span>
                  , <br />
                  Tumbuh <span className="text-kid-green">Bahagia</span>
                </h1>
              </RevealOnScroll>

              <RevealOnScroll delay={200}>
                <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Membangun karakter anak yang cerdas, kreatif, dan mandiri
                  dengan metode pembelajaran yang menyenangkan dan penuh kasih
                  sayang.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <button
                    onClick={() => scrollToSection("#contact")}
                    className="group bg-kid-yellow text-kid-dark font-display font-bold text-lg px-8 py-4 rounded-2xl shadow-[0_6px_0_rgb(217,119,6)] hover:shadow-[0_3px_0_rgb(217,119,6)] hover:translate-y-1 transition-all flex items-center justify-center gap-2"
                  >
                    Daftar Trial Class
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => scrollToSection("#programs")}
                    className="bg-white border-2 border-gray-200 text-gray-700 font-display font-bold text-lg px-8 py-4 rounded-2xl hover:border-kid-blue hover:text-kid-blue transition-colors flex items-center justify-center"
                  >
                    Lihat Program
                  </button>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={400}>
                <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-gray-500 text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <Sparkles size={18} className="text-kid-yellow" />
                    <span>Metode Montessori</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles size={18} className="text-kid-green" />
                    <span>Guru Bersertifikat</span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Image Content */}
            <RevealOnScroll delay={200} className="relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://picsum.photos/800/600?random=1"
                  height={800}
                  width={600}
                  alt="Anak-anak bermain di sekolah"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Cards */}
              <div
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <div className="bg-green-100 p-2 rounded-full">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <p className="font-bold text-gray-800">Kreativitas</p>
                  <p className="text-xs text-gray-500">Kelas Seni Harian</p>
                </div>
              </div>

              <div
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 animate-bounce"
                style={{ animationDuration: "4s" }}
              >
                <div className="bg-red-100 p-2 rounded-full">
                  <span className="text-2xl">🧸</span>
                </div>
                <div>
                  <p className="font-bold text-gray-800">Playground</p>
                  <p className="text-xs text-gray-500">Aman & Luas</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-kid-blue opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-48 h-48 bg-kid-red opacity-5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Section */}
            <RevealOnScroll className="relative order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-kid-yellow rounded-[3rem] transform rotate-3 translate-x-4 translate-y-4"></div>
                <Image
                  src="https://picsum.photos/seed/school/600/700"
                  height={600}
                  width={700}
                  alt="Aktivitas belajar mengajar"
                  className="relative rounded-[3rem] border-4 border-white shadow-2xl z-10 w-full h-auto object-cover"
                />

                {/* Floating Badge */}
                <div
                  className="absolute -bottom-6 -right-6 md:right-10 bg-white p-4 rounded-2xl shadow-xl z-20 border-l-4 border-kid-green flex items-center gap-3 animate-bounce"
                  style={{ animationDuration: "5s" }}
                >
                  <div className="bg-green-100 p-2 rounded-full">
                    <Heart className="text-kid-green fill-current" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">
                      Pendidikan
                    </p>
                    <p className="text-xs text-gray-500 font-bold">
                      Penuh Kasih Sayang
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Text Section */}
            <div className="order-1 lg:order-2">
              <RevealOnScroll delay={100}>
                <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full border border-red-100 mb-6">
                  <Sun size={16} className="text-kid-red" />
                  <span className="text-kid-red text-sm font-bold uppercase tracking-wider">
                    Tentang Kami
                  </span>
                </div>

                <h2 className="font-display font-bold text-4xl lg:text-5xl text-kid-dark mb-6 leading-tight">
                  Mewujudkan Generasi <br />
                  <span className="text-kid-blue">Cerdas</span> &{" "}
                  <span className="text-kid-yellow">Berkarakter</span>
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  TK Imanuel Bogor berdiri sejak tahun 2014 dengan visi
                  menciptakan lingkungan belajar yang menyenangkan (joyful
                  learning). Kami percaya bahwa setiap anak itu unik dan
                  memiliki potensi luar biasa yang perlu diasah dengan
                  pendekatan yang tepat.
                </p>

                {/* Values List */}
                <div className="space-y-4 mb-10">
                  {values.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        className="text-kid-green mt-1 shrink-0"
                        size={20}
                      />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-8">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div
                        className={`mx-auto w-12 h-12 ${stat.bg} rounded-full flex items-center justify-center mb-3`}
                      >
                        <stat.icon className={stat.color} size={24} />
                      </div>
                      <h4 className="font-display font-bold text-2xl text-kid-dark">
                        {stat.value}
                      </h4>
                      <p className="text-xs text-gray-500 font-medium uppercase mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="text-kid-blue font-bold tracking-wider uppercase text-sm">
                Kurikulum Kami
              </span>
              <h2 className="font-display font-bold text-4xl text-kid-dark mt-2 mb-4">
                Program Belajar Unggulan
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kami merancang kurikulum yang sesuai dengan tahapan perkembangan
                usia emas anak, menyeimbangkan akademik dan pembentukan
                karakter.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programsData.map((program, index) => (
              <RevealOnScroll
                key={program.id}
                delay={index * 150}
                className="h-full"
              >
                <div className="group relative bg-gray-50 rounded-3xl p-8 hover:bg-white border-2 border-transparent hover:border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                  <div
                    className={`w-16 h-16 rounded-2xl ${program.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    {getIcon(program.icon)}
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-bold text-gray-500 mb-2">
                      Usia {program.age}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-kid-dark">
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 grow">
                    {program.description}
                  </p>
                  <Link
                    href={`/program/${program.id}`}
                    className="inline-flex font-bold text-kid-blue hover:text-kid-dark items-center gap-1 transition-colors mt-auto"
                  >
                    Info Lebih Lanjut <ArrowRight size={18} />
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Extra Features */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <RevealOnScroll key={idx} delay={300 + idx * 100}>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                  <div className={`p-3 rounded-full ${feature.bg}`}>
                    <feature.icon className={feature.color} size={24} />
                  </div>
                  <span className="font-display font-bold text-lg text-gray-700">
                    {feature.title}
                  </span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="text-kid-red font-bold tracking-wider uppercase text-sm">
                Tim Pengajar Kami
              </span>
              <h2 className="font-display font-bold text-4xl text-kid-dark mt-2 mb-4">
                Guru Sahabat Anak
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kami adalah tim pendidik profesional yang berdedikasi untuk
                membimbing tumbuh kembang buah hati Anda dengan hati yang tulus.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachersData.map((teacher, index) => (
              <RevealOnScroll
                key={teacher.id}
                delay={index * 150}
                className="h-full"
              >
                <TeacherCard teacher={teacher} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="font-display font-bold text-4xl text-kid-dark mb-4">
                  Galeri Ceria
                </h2>
                <p className="text-gray-600">
                  Mengintip keseruan aktivitas sehari-hari di TK Imanuel Bogor.
                </p>
              </div>
              <Link
                href={socialMediaLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-kid-dark font-bold py-2 px-6 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Lihat Instagram @tkimanuelbogor
              </Link>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
            {images.map((img, idx) => (
              <RevealOnScroll
                key={idx}
                delay={idx * 100}
                className={`${img.class} h-full`}
              >
                <div className="relative rounded-3xl overflow-hidden group h-full w-full">
                  <Image
                    src={img.src}
                    alt={`Gallery ${idx}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-display font-bold">
                      Kegiatan Seru
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
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
                <TestimonialCard testimonial={item} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <span className="text-kid-green font-bold tracking-wider uppercase text-sm">
                  Berita & Artikel
                </span>
                <h2 className="font-display font-bold text-4xl text-kid-dark mt-2">
                  Pojok Baca Ceria
                </h2>
              </div>
              <Link
                href="/blog"
                className="group text-kid-blue font-bold flex items-center gap-1 transition-colors"
              >
                Lihat Semua Artikel{" "}
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <RevealOnScroll
                key={post.id}
                delay={index * 150}
                className="h-full"
              >
                <BlogCard post={post} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

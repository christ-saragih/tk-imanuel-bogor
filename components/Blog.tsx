import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 'tips-bekal-sehat',
    title: "5 Ide Bekal Sehat & Lucu untuk Anak TK",
    excerpt: "Bingung mau bawain bekal apa? Yuk intip ide bekal 4 sehat 5 sempurna yang pasti disukai si kecil.",
    content: "Mempersiapkan bekal untuk anak memang tantangan tersendiri bagi para Bunda. Seringkali anak bosan dengan menu yang itu-itu saja. Artikel ini akan membahas 5 resep praktis bento karakter yang tidak hanya lucu tapi juga bergizi tinggi. Mulai dari nasi kepal bentuk panda, hingga sate buah-buahan segar.",
    author: "Bunda Sarah (Ahli Gizi)",
    date: "12 Mei 2025",
    category: "Parenting",
    image: "https://picsum.photos/seed/bekal/600/400",
    tags: ["Kesehatan", "Resep", "Gizi Anak"]
  },
  {
    id: 'manfaat-sensory-play',
    title: "Mengapa Sensory Play Penting untuk Balita?",
    excerpt: "Bermain berantakan ternyata punya segudang manfaat untuk perkembangan otak anak, lho!",
    content: "Sensory play atau permainan sensorik adalah aktivitas yang merangsang indra anak. Mulai dari menyentuh tekstur pasir, mencium aroma, hingga mendengar bunyi-bunyian. Aktivitas ini sangat krusial untuk membangun koneksi saraf di otak (sinapsis) yang mendukung kemampuan kognitif, motorik halus, dan penyelesaian masalah.",
    author: "Ms. Rini (Kepala Sekolah)",
    date: "28 April 2025",
    category: "Edukasi",
    image: "https://picsum.photos/seed/sensory/600/400",
    tags: ["Montessori", "Tumbuh Kembang", "Motorik"]
  },
  {
    id: 'kegiatan-field-trip',
    title: "Keseruan Kunjungan ke Pemadam Kebakaran",
    excerpt: "Intip keseruan murid TK B belajar menjadi pemadam kebakaran cilik sehari!",
    content: "Minggu lalu, siswa-siswi TK B Bintang Ceria melakukan kunjungan edukatif ke Dinas Pemadam Kebakaran Kota Bogor. Anak-anak belajar tentang bahaya api, cara menyelamatkan diri, dan bahkan mencoba menyemprotkan air dari selang pemadam! Kegiatan ini bertujuan melatih keberanian dan mengenalkan profesi.",
    author: "Admin Sekolah",
    date: "15 April 2025",
    category: "Kegiatan",
    image: "https://picsum.photos/seed/firefighter/600/400",
    tags: ["Field Trip", "Outdoor Learning", "Event"]
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-kid-green font-bold tracking-wider uppercase text-sm">Berita & Artikel</span>
              <h2 className="font-display font-bold text-4xl text-kid-dark mt-2">Pojok Baca Ceria</h2>
            </div>
            <Link to="/" className="text-kid-blue font-bold hover:underline flex items-center gap-1">
              Lihat Semua Artikel <ArrowRight size={18} />
            </Link>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <RevealOnScroll key={post.id} delay={index * 150} className="h-full">
              <div className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-kid-dark shadow-sm">
                      {post.category}
                    </span>
                  </div>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
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

                  <h3 className="font-display font-bold text-xl text-kid-dark mb-3 line-clamp-2 group-hover:text-kid-blue transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="inline-flex items-center text-sm font-bold text-kid-blue hover:text-kid-dark transition-colors"
                    >
                      Baca Selengkapnya <ArrowRight size={16} className="ml-1" />
                    </Link>
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

export default Blog;
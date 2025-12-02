import React from 'react';
import { CheckCircle, Shield, Heart, Sun, Users, Award } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const stats = [
  { value: '10+', label: 'Tahun Pengalaman', icon: Award, color: 'text-kid-yellow', bg: 'bg-yellow-50' },
  { value: '150+', label: 'Siswa Aktif', icon: Users, color: 'text-kid-blue', bg: 'bg-blue-50' },
  { value: 'A', label: 'Akreditasi Sekolah', icon: Shield, color: 'text-kid-green', bg: 'bg-green-50' },
];

const values = [
  "Lingkungan belajar yang aman, nyaman, dan inklusif.",
  "Kurikulum berbasis karakter dan kreativitas.",
  "Tenaga pendidik profesional dan penuh kasih sayang.",
  "Fasilitas modern yang mendukung tumbuh kembang anak."
];

const About: React.FC = () => {
  return (
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
              <img 
                src="https://picsum.photos/seed/school/600/700" 
                alt="Aktivitas belajar mengajar" 
                className="relative rounded-[3rem] border-4 border-white shadow-2xl z-10 w-full h-auto object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 md:right-10 bg-white p-4 rounded-2xl shadow-xl z-20 border-l-4 border-kid-green flex items-center gap-3 animate-bounce" style={{ animationDuration: '5s' }}>
                <div className="bg-green-100 p-2 rounded-full">
                  <Heart className="text-kid-green fill-current" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">Pendidikan</p>
                  <p className="text-xs text-gray-500 font-bold">Penuh Kasih Sayang</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Text Section */}
          <div className="order-1 lg:order-2">
            <RevealOnScroll delay={100}>
              <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full border border-red-100 mb-6">
                <Sun size={16} className="text-kid-red" />
                <span className="text-kid-red text-sm font-bold uppercase tracking-wider">Tentang Kami</span>
              </div>
              
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-kid-dark mb-6 leading-tight">
                Mewujudkan Generasi <br/>
                <span className="text-kid-blue">Cerdas</span> & <span className="text-kid-yellow">Berkarakter</span>
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                TK Bintang Ceria berdiri sejak tahun 2014 dengan visi menciptakan lingkungan belajar yang menyenangkan (joyful learning). Kami percaya bahwa setiap anak itu unik dan memiliki potensi luar biasa yang perlu diasah dengan pendekatan yang tepat.
              </p>

              {/* Values List */}
              <div className="space-y-4 mb-10">
                {values.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-kid-green mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className={`mx-auto w-12 h-12 ${stat.bg} rounded-full flex items-center justify-center mb-3`}>
                      <stat.icon className={stat.color} size={24} />
                    </div>
                    <h4 className="font-display font-bold text-2xl text-kid-dark">{stat.value}</h4>
                    <p className="text-xs text-gray-500 font-medium uppercase mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
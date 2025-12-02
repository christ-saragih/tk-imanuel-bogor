import React from 'react';
import { Link } from 'react-router-dom';
import { Program } from '../types';
import { Baby, Palette, BookOpen, Music, Trees, Puzzle, ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const programsData: Program[] = [
  {
    id: 'pg',
    title: 'Playgroup',
    age: '2 - 3 Tahun',
    description: 'Fokus pada stimulasi sensorik, motorik kasar, dan sosialisasi awal dalam lingkungan yang aman.',
    icon: 'baby',
    color: 'bg-kid-yellow',
  },
  {
    id: 'tka',
    title: 'TK A',
    age: '4 - 5 Tahun',
    description: 'Pengenalan literasi dan numerasi dasar melalui bermain, serta pengembangan kemandirian.',
    icon: 'palette',
    color: 'bg-kid-blue',
  },
  {
    id: 'tkb',
    title: 'TK B',
    age: '5 - 6 Tahun',
    description: 'Persiapan masuk SD dengan penguatan calistung (baca tulis hitung) yang menyenangkan.',
    icon: 'book',
    color: 'bg-kid-red',
  },
];

const features = [
  { title: 'Musik & Gerak', icon: Music, color: 'text-purple-500', bg: 'bg-purple-100' },
  { title: 'Outdoor Learning', icon: Trees, color: 'text-green-500', bg: 'bg-green-100' },
  { title: 'Logic Games', icon: Puzzle, color: 'text-orange-500', bg: 'bg-orange-100' },
];

const Programs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'baby': return <Baby size={32} className="text-white" />;
      case 'palette': return <Palette size={32} className="text-white" />;
      case 'book': return <BookOpen size={32} className="text-white" />;
      default: return <Baby size={32} />;
    }
  };

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-kid-blue font-bold tracking-wider uppercase text-sm">Kurikulum Kami</span>
            <h2 className="font-display font-bold text-4xl text-kid-dark mt-2 mb-4">Program Belajar Unggulan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami merancang kurikulum yang sesuai dengan tahapan perkembangan usia emas anak, menyeimbangkan akademik dan pembentukan karakter.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programsData.map((program, index) => (
            <RevealOnScroll key={program.id} delay={index * 150} className="h-full">
              <div className="group relative bg-gray-50 rounded-3xl p-8 hover:bg-white border-2 border-transparent hover:border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                <div className={`w-16 h-16 rounded-2xl ${program.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {getIcon(program.icon)}
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-bold text-gray-500 mb-2">
                    Usia {program.age}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-kid-dark">{program.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {program.description}
                </p>
                <Link 
                  to={`/program/${program.id}`} 
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
            <RevealOnScroll key={idx} delay={300 + (idx * 100)}>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                <div className={`p-3 rounded-full ${feature.bg}`}>
                  <feature.icon className={feature.color} size={24} />
                </div>
                <span className="font-display font-bold text-lg text-gray-700">{feature.title}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
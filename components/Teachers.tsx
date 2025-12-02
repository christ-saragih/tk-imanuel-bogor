import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Award } from 'lucide-react';
import { Teacher } from '../types';
import RevealOnScroll from './RevealOnScroll';

export const teachersData: Teacher[] = [
  {
    id: 'bu-rini',
    name: 'Ibu Rini Hartati',
    role: 'Kepala Sekolah & Konsultan Pendidikan',
    photo: 'https://picsum.photos/seed/rini/400/400',
    shortBio: 'Berpengalaman 15 tahun di dunia PAUD dengan pendekatan kasih sayang.',
    fullBio: 'Ibu Rini mendedikasikan hidupnya untuk dunia pendidikan anak usia dini. Beliau percaya bahwa setiap anak adalah bintang yang memiliki sinarnya sendiri. Pendekatan beliau menggabungkan kedisiplinan lembut dengan kebebasan berekspresi.',
    education: 'S2 Psikologi Pendidikan Anak, Universitas Indonesia',
    experience: '15 Tahun',
    funFact: 'Suka sekali mendongeng dengan suara karakter yang berbeda-beda!',
    quote: 'Mendidik pikiran tanpa mendidik hati adalah bukan pendidikan sama sekali.',
    color: 'bg-kid-yellow'
  },
  {
    id: 'kak-budi',
    name: 'Kak Budi Santoso',
    role: 'Guru Sentra Alam & Olahraga',
    photo: 'https://picsum.photos/seed/budi/400/400',
    shortBio: 'Enerjik dan kreatif, mengajak anak mencintai alam dan bergerak aktif.',
    fullBio: 'Kak Budi adalah favorit anak-anak saat kegiatan outdoor. Dengan latar belakang pendidikan olahraga dan kecintaannya pada alam, Kak Budi mengajarkan keberanian, kerja sama tim, dan rasa ingin tahu melalui eksplorasi lingkungan.',
    education: 'S1 Pendidikan Jasmani & Rekreasi',
    experience: '8 Tahun',
    funFact: 'Bisa menirukan suara 10 jenis hewan dengan sangat mirip.',
    quote: 'Anak yang bergerak adalah anak yang belajar.',
    color: 'bg-kid-green'
  },
  {
    id: 'miss-sarah',
    name: 'Miss Sarah Johnson',
    role: 'Guru Bahasa Inggris & Seni',
    photo: 'https://picsum.photos/seed/sarahj/400/400',
    shortBio: 'Native speaker yang mengajarkan bahasa melalui lagu dan seni lukis.',
    fullBio: 'Miss Sarah membawa nuansa internasional ke dalam kelas. Beliau menggunakan metode "Art & Language" di mana anak-anak belajar kosakata bahasa Inggris sambil membuat karya seni yang indah. Suasana kelasnya selalu penuh warna dan nyanyian.',
    education: 'Bachelor of Arts in Early Childhood Education',
    experience: '6 Tahun',
    funFact: 'Hobi melukis wajah (face painting) saat acara ulang tahun sekolah.',
    quote: 'Creativity is intelligence having fun.',
    color: 'bg-kid-red'
  },
  {
    id: 'bu-amel',
    name: 'Ibu Amel',
    role: 'Guru Sentra Balok & Matematika',
    photo: 'https://picsum.photos/seed/amel/400/400',
    shortBio: 'Ahli membuat logika matematika terasa seperti permainan seru.',
    fullBio: 'Ibu Amel memiliki bakat khusus dalam mengenalkan angka dan logika kepada anak usia dini tanpa paksaan. Melalui permainan balok dan puzzle, beliau menanamkan dasar pemecahan masalah yang kuat.',
    education: 'S1 PG-PAUD',
    experience: '10 Tahun',
    funFact: 'Kolektor mainan LEGO dan sering membawanya ke kelas.',
    quote: 'Setiap masalah punya solusi jika kita melihatnya dari sudut pandang berbeda.',
    color: 'bg-kid-blue'
  }
];

const Teachers: React.FC = () => {
  return (
    <section id="teachers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-kid-red font-bold tracking-wider uppercase text-sm">Tim Pengajar Kami</span>
            <h2 className="font-display font-bold text-4xl text-kid-dark mt-2 mb-4">Guru Sahabat Anak</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami adalah tim pendidik profesional yang berdedikasi untuk membimbing tumbuh kembang buah hati Anda dengan hati yang tulus.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachersData.map((teacher, index) => (
            <RevealOnScroll key={teacher.id} delay={index * 150} className="h-full">
              <div className="group relative h-full">
                {/* Card Background Blob */}
                <div className={`absolute inset-0 ${teacher.color} opacity-10 rounded-[2rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-300`}></div>
                
                <div className="relative bg-white border-2 border-gray-100 rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  {/* Photo */}
                  <div className="mb-6 relative mx-auto">
                    <div className={`absolute inset-0 ${teacher.color} rounded-full opacity-20 blur-md transform scale-110`}></div>
                    <img 
                      src={teacher.photo} 
                      alt={teacher.name} 
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md relative z-10"
                    />
                    <div className="absolute -bottom-2 -right-2 z-20 bg-white p-2 rounded-full shadow-sm">
                      <Heart size={16} className="text-kid-red fill-current" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center flex-grow">
                    <h3 className="font-display font-bold text-xl text-kid-dark mb-1">{teacher.name}</h3>
                    <p className="text-xs font-bold text-kid-blue uppercase tracking-wide mb-3">{teacher.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {teacher.shortBio}
                    </p>
                  </div>

                  {/* Button */}
                  <Link 
                    to={`/teacher/${teacher.id}`} 
                    className={`w-full py-2 px-4 rounded-xl border-2 border-gray-100 text-gray-600 font-bold text-sm hover:border-kid-blue hover:text-kid-blue hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group-hover:gap-3 mt-auto`}
                  >
                    Lihat Profil
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
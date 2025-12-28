"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Users,
  Calendar,
  BookOpen,
  CheckCircle,
  GraduationCap,
} from "lucide-react";
import { DetailedProgram } from "@/types";

const programDetails: Record<string, DetailedProgram> = {
  pg: {
    id: "pg",
    title: "Playgroup (Kelompok Bermain)",
    age: "2 - 3 Tahun",
    description:
      "Fokus pada stimulasi sensorik, motorik kasar, dan sosialisasi awal.",
    icon: "baby",
    color: "bg-kid-yellow",
    longDescription:
      "Program Playgroup kami dirancang khusus untuk balita usia 2-3 tahun sebagai langkah awal mereka mengenal lingkungan sekolah. Di sini, anak-anak akan belajar bersosialisasi, mandiri, dan mengeksplorasi dunia di sekitar mereka melalui permainan yang terarah.",
    schedule: ["Senin, Rabu, Jumat", "08:00 - 10:30 WIB"],
    classSize: 10,
    teacherRatio: "1 Guru : 5 Murid",
    tuition: "Rp 500.000 / bulan",
    curriculum: [
      "Stimulasi Sensorik & Motorik",
      "Sosialisasi & Kemandirian Dasar",
      "Pengenalan Warna & Bentuk",
      "Musik & Gerak",
      "Storytelling",
    ],
    dailyActivities: [
      { time: "08:00", activity: "Circle Time & Doa Pagi" },
      { time: "08:30", activity: "Motorik Kasar (Gym/Playground)" },
      { time: "09:00", activity: "Snack Time (Makan Sehat)" },
      { time: "09:30", activity: "Kegiatan Inti (Sensory Play/Art)" },
      { time: "10:15", activity: "Review & Doa Pulang" },
    ],
  },
  tka: {
    id: "tka",
    title: "TK A (Taman Kanak-Kanak A)",
    age: "4 - 5 Tahun",
    description: "Pengenalan literasi dan numerasi dasar melalui bermain.",
    icon: "palette",
    color: "bg-kid-blue",
    longDescription:
      "Di tingkat TK A, anak-anak mulai dikenalkan pada konsep literasi dan numerasi dengan cara yang menyenangkan. Kami menggunakan metode Montessori yang memungkinkan anak belajar sesuai dengan kecepatan mereka sendiri dalam lingkungan yang mendukung.",
    schedule: ["Senin - Jumat", "07:30 - 11:00 WIB"],
    classSize: 15,
    teacherRatio: "1 Guru : 7 Murid",
    tuition: "Rp 600.000 / bulan",
    curriculum: [
      "Phonics & Pengenalan Huruf",
      "Matematika Dasar & Logika",
      "Sains Sederhana",
      "Pendidikan Karakter",
      "Bahasa Inggris Dasar",
    ],
    dailyActivities: [
      { time: "07:30", activity: "Jurnal Pagi & Free Play" },
      { time: "08:00", activity: "Circle Time" },
      { time: "08:30", activity: "Materi Montessori" },
      { time: "09:30", activity: "Istirahat & Makan Bekal" },
      { time: "10:00", activity: "Art / Music / Physical Education" },
      { time: "10:45", activity: "Persiapan Pulang" },
    ],
  },
  tkb: {
    id: "tkb",
    title: "TK B (Taman Kanak-Kanak B)",
    age: "5 - 6 Tahun",
    description: "Persiapan masuk SD dengan penguatan calistung.",
    icon: "book",
    color: "bg-kid-red",
    longDescription:
      "Program TK B fokus pada pematangan konsep akademik dan kemandirian sebagai persiapan transisi ke Sekolah Dasar. Kami memastikan anak memiliki fondasi yang kuat dalam membaca, menulis, dan berhitung tanpa menghilangkan unsur bermain.",
    schedule: ["Senin - Jumat", "07:30 - 11:30 WIB"],
    classSize: 15,
    teacherRatio: "1 Guru : 8 Murid",
    tuition: "Rp 650.000 / bulan",
    curriculum: [
      "Membaca & Menulis Lancar",
      "Operasi Hitung Sederhana",
      "Proyek Sains & Eksperimen",
      "Presentasi & Public Speaking",
      "Persiapan Mental SD",
    ],
    dailyActivities: [
      { time: "07:30", activity: "Morning Assembly" },
      { time: "08:00", activity: "Academic Session 1 (Literasi)" },
      { time: "09:00", activity: "Snack & Outdoor Play" },
      { time: "09:45", activity: "Academic Session 2 (Numerasi)" },
      { time: "10:30", activity: "Project Based Learning" },
      { time: "11:15", activity: "Refleksi & Pulang" },
    ],
  },
};

export default function ProgramDetail() {
  const { id } = useParams<{ id: string }>();
  const program = id ? programDetails[id] : undefined;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-display font-bold text-kid-dark mb-4">
          Program Tidak Ditemukan
        </h1>
        <Link
          href="/"
          className="bg-kid-blue text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20">
      {/* Header Banner */}
      <div
        className={`relative ${program.color} h-64 sm:h-80 flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Decorative Circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>

        <div className="relative z-10 text-center text-white px-4">
          <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-bold mb-4">
            Usia {program.age}
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl mb-2 drop-shadow-md">
            {program.title}
          </h1>
          <p className="text-xl sm:text-2xl opacity-90 font-medium">
            TK Imanuel Bogor
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 border border-gray-100">
          <Link
            href="/#programs"
            className="inline-flex items-center text-gray-500 hover:text-kid-blue font-bold mb-8 transition-colors group"
          >
            <ArrowLeft
              size={20}
              className="mr-2 group-hover:-translate-x-1 transition-transform"
            />
            Kembali ke Daftar Program
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: Main Info */}
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="font-display font-bold text-3xl text-kid-dark mb-4">
                  Tentang Program
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {program.longDescription}
                </p>
              </section>

              <section>
                <h3 className="font-display font-bold text-2xl text-kid-blue mb-6 flex items-center gap-2">
                  <BookOpen className="text-kid-yellow" />
                  Fokus Kurikulum
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {program.curriculum.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl border border-blue-100"
                    >
                      <CheckCircle
                        className="text-kid-green shrink-0 mt-0.5"
                        size={20}
                      />
                      <span className="font-medium text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="font-display font-bold text-2xl text-kid-red mb-6 flex items-center gap-2">
                  <Clock className="text-kid-yellow" />
                  Jadwal Harian
                </h3>
                <div className="relative border-l-4 border-kid-yellow ml-3 space-y-8">
                  {program.dailyActivities.map((act, idx) => (
                    <div key={idx} className="relative pl-8">
                      <div className="absolute -left-2.75 top-1 w-5 h-5 bg-white border-4 border-kid-yellow rounded-full"></div>
                      <span className="block text-sm font-bold text-kid-blue mb-1">
                        {act.time}
                      </span>
                      <h4 className="font-bold text-gray-800 text-lg">
                        {act.activity}
                      </h4>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 sticky top-28">
                <h3 className="font-display font-bold text-xl text-kid-dark mb-6">
                  Detail Kelas
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <Calendar className="text-kid-blue" size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">
                        Hari Sekolah
                      </p>
                      <p className="font-bold text-gray-800">
                        {program.schedule[0]}
                      </p>
                      <p className="text-sm text-gray-600">
                        {program.schedule[1]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <Users className="text-kid-green" size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">
                        Ukuran Kelas
                      </p>
                      <p className="font-bold text-gray-800">
                        Maks. {program.classSize} Anak
                      </p>
                      <p className="text-sm text-gray-600">
                        {program.teacherRatio}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <GraduationCap className="text-kid-red" size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">
                        Biaya SPP
                      </p>
                      <p className="font-bold text-gray-800">
                        {program.tuition}
                      </p>
                      <p className="text-xs text-gray-500">
                        *Belum termasuk uang pangkal
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link
                    href="#contact"
                    className="inline-block text-center w-full bg-kid-yellow hover:bg-yellow-500 text-kid-dark font-display font-bold py-4 rounded-xl shadow-lg transform active:scale-95 transition-all text-lg"
                  >
                    Daftar Sekarang
                  </Link>
                  <p className="text-center text-xs text-gray-500 mt-3">
                    Ingin tanya-tanya dulu? <br />
                    <a href="#" className="text-kid-blue underline">
                      Chat WhatsApp Admin
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

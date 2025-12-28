"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Quote,
  GraduationCap,
  Clock,
  Sparkles,
  Star,
} from "lucide-react";

import { teachersData } from "@/lib/data";

export default function TeacherDetail() {
  const { id } = useParams<{ id: string }>();
  const teacher = teachersData.find((t) => t.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!teacher) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-display font-bold text-kid-dark mb-4">
          Guru Tidak Ditemukan
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
    <div className="min-h-screen bg-white pb-20 pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <Link
          href="/#teachers"
          className="inline-flex items-center text-gray-500 hover:text-kid-blue font-bold mb-8 transition-colors group"
        >
          <ArrowLeft
            size={20}
            className="mr-2 group-hover:-translate-x-1 transition-transform"
          />
          Kembali
        </Link>

        <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden relative">
          {/* Header Banner Background */}
          <div
            className={`h-48 ${teacher.color} opacity-10 absolute top-0 left-0 w-full`}
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 p-8 md:p-12 relative z-10">
            {/* Left Column: Photo & Stats */}
            <div className="md:col-span-4 flex flex-col items-center">
              <div className="relative mb-6">
                <div
                  className={`absolute inset-0 ${teacher.color} rounded-full blur-xl opacity-40 transform scale-95 translate-y-4`}
                ></div>
                <Image
                  src={teacher.photo}
                  alt={teacher.name}
                  height={256}
                  width={256}
                  className="rounded-full object-cover border-8 border-white shadow-xl relative z-10"
                />
                <div className="absolute top-0 right-0 bg-white p-3 rounded-full shadow-lg z-20">
                  <Star className="text-kid-yellow fill-current" size={24} />
                </div>
              </div>

              <div className="w-full space-y-4">
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl ${teacher.color} bg-opacity-20`}
                  >
                    <GraduationCap className="text-gray-700" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">
                      Pendidikan
                    </p>
                    <p className="text-sm font-bold text-gray-800 leading-tight">
                      {teacher.education}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl ${teacher.color} bg-opacity-20`}
                  >
                    <Clock className="text-gray-700" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">
                      Pengalaman
                    </p>
                    <p className="text-sm font-bold text-gray-800">
                      {teacher.experience}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl ${teacher.color} bg-opacity-20`}
                  >
                    <Sparkles className="text-gray-700" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">
                      Fakta Unik
                    </p>
                    <p className="text-sm font-bold text-gray-800 leading-tight">
                      {teacher.funFact}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Bio & Info */}
            <div className="md:col-span-8 flex flex-col justify-center">
              <div className="mb-2">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${teacher.color.replace(
                    "bg-",
                    "bg-opacity-100 bg-"
                  )}`}
                >
                  {teacher.role}
                </span>
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-kid-dark mb-6">
                {teacher.name}
              </h1>

              <div className="relative">
                <Quote
                  className="absolute -top-4 -left-2 text-gray-200 transform -scale-x-100"
                  size={42}
                />
                <blockquote className="relative z-10 text-xl font-medium italic text-gray-500 mb-8 pl-8">
                  {teacher.quote}
                </blockquote>
              </div>

              <div className="prose prose-lg text-gray-600">
                <h3 className="font-display font-bold text-2xl text-kid-blue mb-4">
                  Tentang Saya
                </h3>
                <p className="leading-relaxed whitespace-pre-line">
                  {teacher.fullBio}
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <Link
                  href="#contact"
                  className="bg-kid-dark text-white font-bold py-3 px-8 rounded-xl hover:bg-gray-800 transition-colors shadow-lg"
                >
                  Hubungi Sekolah
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

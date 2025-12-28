import { Teacher } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TeacherCardProps {
  teacher: Teacher;
}

export const TeacherCard = ({ teacher }: TeacherCardProps) => {
  return (
    <div className="group relative h-full">
      {/* Card Background Blob */}
      <div
        className={`absolute inset-0 ${teacher.color} opacity-10 rounded-[2rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-300`}
      ></div>

      <div className="relative bg-white border-2 border-gray-100 rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
        {/* Photo */}
        <div className="mb-6 relative mx-auto">
          <div
            className={`absolute inset-0 ${teacher.color} rounded-full opacity-20 blur-md transform scale-110`}
          ></div>
          <Image
            src={teacher.photo}
            alt={teacher.name}
            height={128}
            width={128}
            className="rounded-full object-cover border-4 border-white shadow-md relative z-10"
          />
        </div>

        {/* Content */}
        <div className="text-center grow">
          <h3 className="font-display font-bold text-xl text-kid-dark mb-1">
            {teacher.name}
          </h3>
          <p className="text-xs font-bold text-kid-blue uppercase tracking-wide mb-3">
            {teacher.role}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
            {teacher.shortBio}
          </p>
        </div>

        {/* Button */}
        <Link
          href={`/teacher/${teacher.id}`}
          className={`w-full py-2 px-4 rounded-xl border-2 border-gray-100 text-gray-600 font-bold text-sm hover:border-kid-blue hover:text-kid-blue hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group-hover:gap-3 mt-auto`}
        >
          Lihat Profil
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

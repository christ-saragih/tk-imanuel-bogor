import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { socialMediaLinks } from "@/lib/data";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-kid-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="font-display font-bold text-3xl">
              TK Imanuel <span className="text-kid-yellow">Bogor</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Membentuk generasi pembelajar yang bahagia, kreatif, dan berakhlak
              mulia. Bergabunglah bersama keluarga besar kami.
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                href={socialMediaLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-kid-red transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href={socialMediaLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href={socialMediaLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-red-600 transition-colors"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xl text-kid-green">
              Hubungi Kami
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="text-kid-yellow mt-1 shrink-0" size={20} />
                <span>
                  Jl. Kampung. Cincau No.41, <br />
                  Kota Bogor, Jawa Barat 16123
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="text-kid-yellow shrink-0" size={20} />
                <span>(021) 789-0123 / 0812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="text-kid-yellow shrink-0" size={20} />
                <span>admin@tkimanuelbogor.sch.id</span>
              </li>
            </ul>
          </div>

          {/* Quick Form */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xl text-kid-blue">
              Jadwalkan Kunjungan
            </h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Nama Orang Tua"
                className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-kid-yellow text-white placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="Nomor WhatsApp"
                className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-kid-yellow text-white placeholder-gray-400"
              />
              <button className="w-full bg-kid-red hover:bg-red-500 font-bold py-2 rounded-lg transition-colors">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} TK Imanuel Bogor. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

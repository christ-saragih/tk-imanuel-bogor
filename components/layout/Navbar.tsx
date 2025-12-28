"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/#about" },
    { name: "Program", href: "/#programs" },
    { name: "Guru", href: "/#teachers" },
    { name: "Galeri", href: "/#gallery" },
    { name: "Berita", href: "/blog" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b-4 border-kid-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={handleNavClick}
          >
            <Image
              src="/logo-tk-imanuel-bogor.svg"
              alt="Logo TK Imanuel Bogor"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
            <span className="font-display font-bold text-2xl text-kid-blue tracking-tight">
              TK Imanuel <span className="text-kid-red">Bogor</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-display font-medium text-gray-600 hover:text-kid-blue transition-colors px-2 py-2 rounded-md text-base lg:text-lg"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="bg-kid-red text-white font-display font-bold px-4 lg:px-6 py-2 rounded-full hover:bg-red-500 transition-transform hover:scale-105 shadow-md whitespace-nowrap text-sm lg:text-base flex items-center"
            >
              Daftar Sekarang
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-kid-blue focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-kid-blue hover:bg-blue-50"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/register"
              onClick={handleNavClick}
              className="block w-full mt-4 bg-kid-green text-white font-bold px-4 py-3 rounded-xl shadow-sm text-center"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

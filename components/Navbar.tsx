
import React, { useState } from 'react';
import { Menu, X, Star } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Program', href: '#programs' },
    { name: 'Guru', href: '#teachers' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Berita', href: '#blog' },
    { name: 'Kontak', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (isHome) {
      // If home, just scroll normal anchor behavior
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not home, navigate to home then scroll
      navigate('/');
      // Timeout to allow navigation to complete before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b-4 border-kid-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="bg-kid-yellow p-2 rounded-full text-white">
              <Star fill="white" size={24} />
            </div>
            <span className="font-display font-bold text-2xl text-kid-blue tracking-tight">
              TK Imanuel <span className="text-kid-red">Bogor</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="font-display font-medium text-gray-600 hover:text-kid-blue transition-colors px-2 py-2 rounded-md text-base lg:text-lg"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="bg-kid-red text-white font-display font-bold px-4 lg:px-6 py-2 rounded-full hover:bg-red-500 transition-transform hover:scale-105 shadow-md whitespace-nowrap text-sm lg:text-base"
            >
              Daftar Sekarang
            </button>
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
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-kid-blue hover:bg-blue-50"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="block w-full mt-4 bg-kid-green text-white font-bold px-4 py-3 rounded-xl shadow-sm text-center"
            >
              Daftar Sekarang
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
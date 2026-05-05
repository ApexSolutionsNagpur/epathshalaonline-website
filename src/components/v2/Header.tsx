import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';

const Header = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#' },
    { name: 'Academics', href: '#' },
    { name: 'Programs', href: '#' },
    { name: 'Admissions', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#1E5AA8] to-[#00A8A8] rounded-full flex items-center justify-center text-white font-bold text-lg">
            eP
          </div>
          <span className="text-[#0B3C5D] font-bold text-xl tracking-tight">
            ePathshala
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#1F2937] hover:text-[#1E5AA8] font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-[#1E5AA8]">
            <Phone size={18} />
            <span className="font-semibold">+91 7887889306</span>
          </div>
          <Link
            href="#"
            className="bg-[#FFC107] hover:bg-[#E0A800] text-[#1F2937] font-bold py-2.5 px-6 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile menu button (Simplified for now) */}
        <div className="md:hidden flex items-center">
          <button className="text-[#1F2937]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

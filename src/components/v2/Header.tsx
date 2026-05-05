import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <header className="">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Logo.png"
            alt="ePathshala Logo"
            width={200}
            height={100}
            className="h-20 md:h-40 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#1F2937] hover:text-[#1E5AA8] font-body font-medium tracking-wide transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-[#1E5AA8]">
            <Phone size={18} />
            <span className="font-body font-semibold tracking-tight">+91 7887889306</span>
          </div>
          <Link
            href="#"
            className="font-body bg-[#FFC107] hover:bg-[#E0A800] text-[#1F2937] font-bold py-2.5 px-6 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
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

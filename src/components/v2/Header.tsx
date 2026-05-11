"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSportsShala = pathname === '/sportsshala';
  const isAIRoboticsShala = pathname === '/airoboticsshala';
  const isArtShala = pathname === '/artshala';
  const isDanceShala = pathname === '/danceshala';


  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#' },
    { name: 'Academics', href: '#' },
    { name: 'Programs', href: '#' },
    { name: 'AI RoboticsShala', href: '/airoboticsshala' },
    { name: 'SportsShala', href: '/sportsshala' },
    { name: 'ArtShala', href: '/artshala' },
    { name: 'DanceShala', href: '/danceshala' },
    { name: 'Admissions', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white'
    }`}>

      <div className="px-6 h-25 flex items-center justify-between p-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Logo.png"
            alt="ePathshala Logo"
            width={200}
            height={200}
            className="h-20 md:h-60 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[#1F2937] font-body font-medium tracking-wide transition-colors ${isSportsShala ? 'hover:text-[#95C11F]' : isArtShala ? 'hover:text-[#ff4f87]' : isAIRoboticsShala ? 'hover:text-[#0D6EFD]' : isDanceShala ? 'hover:text-[#FF7A00]' : 'hover:text-[#1E5AA8]'
                } ${pathname === link.href
                  ? (isSportsShala ? 'text-[#95C11F] border-b-2 border-[#95C11F]' : isArtShala ? 'text-[#ff4f87] border-b-2 border-[#ff4f87]' : isAIRoboticsShala ? 'text-[#0D6EFD] border-b-2 border-[#0D6EFD]' : isDanceShala ? 'text-[#FF7A00] border-b-2 border-[#FF7A00]' : 'text-[#1E5AA8] border-b-2 border-[#1E5AA8]')
                  : ''
                }`}

            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex flex-col items-end">
            <div className={`flex items-center gap-2 ${isSportsShala ? 'text-[#062B5B]' : isArtShala ? 'text-[#ff4f87]' : isAIRoboticsShala ? 'text-[#0D6EFD]' : isDanceShala ? 'text-[#FF7A00]' : 'text-[#1E5AA8]'}`}>

              <Phone size={16} />
              <span className="font-body font-bold text-sm tracking-tight">+91 7887889306</span>
            </div>
            <span className="text-[10px] text-gray-500 font-medium">Call / WhatsApp</span>
          </div>
          <Link
            href="#"
            className={`font-body font-bold py-2.5 px-6 rounded-full shadow-lg hover:scale-105 transition-all duration-300 ${isSportsShala
              ? 'bg-[#95C11F] hover:bg-[#84ac1b] text-white'
              : isArtShala
                ? 'bg-[#ff4f87] hover:bg-[#e64479] text-white'
                : isAIRoboticsShala
                  ? 'bg-[#0D6EFD] hover:bg-[#0047CC] text-white'
                  : isDanceShala
                    ? 'bg-[#FF7A00] hover:bg-[#e66e00] text-white'
                    : 'bg-[#FFC107] hover:bg-[#E0A800] text-[#1F2937]'
              }`}

          >
            ENROLL NOW
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="xl:hidden flex items-center">
          <button className="p-2 text-[#1F2937]">
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

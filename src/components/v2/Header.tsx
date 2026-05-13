"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import DemoClassModal from './DemoClassModal';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSubMenu, setActiveSubMenu] = React.useState<string | null>(null);

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
    {
      name: 'Programs',
      href: '#',
      subItems: [
        { name: 'AI RoboticsShala', href: '/airoboticsshala' },
        { name: 'SportsShala', href: '/sportsshala' },
        { name: 'ArtShala', href: '/artshala' },
        { name: 'DanceShala', href: '/danceshala' },
      ]
    },
    { name: 'Admissions', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header className={` w-full bg-white`}>

      <div className="px-6 h-25 flex items-center justify-between p-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Logo.png"
            alt="ePathshala Logo"
            width={200}
            height={200}
            className="h-40 md:h-60 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.subItems ? (
                <>
                  <button
                    className={`flex items-center gap-1 text-[#1F2937] font-body font-medium tracking-wide transition-colors hover:text-[#1E5AA8] ${link.subItems.some(sub => pathname === sub.href) ? 'text-[#1E5AA8] border-b-2 border-[#1E5AA8]' : ''
                      }`}
                  >
                    {link.name}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 py-2">
                    {link.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={`block px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors ${pathname === subItem.href ? 'text-[#1E5AA8] bg-gray-50' : 'text-[#1F2937]'
                          }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`text-[#1F2937] font-body font-medium tracking-wide transition-colors ${isSportsShala ? 'hover:text-[#95C11F]' : isArtShala ? 'hover:text-[#ff4f87]' : isAIRoboticsShala ? 'hover:text-[#0D6EFD]' : isDanceShala ? 'hover:text-[#FF7A00]' : 'hover:text-[#1E5AA8]'
                    } ${pathname === link.href
                      ? (isSportsShala ? 'text-[#95C11F] border-b-2 border-[#95C11F]' : isArtShala ? 'text-[#ff4f87] border-b-2 border-[#ff4f87]' : isAIRoboticsShala ? 'text-[#0D6EFD] border-b-2 border-[#0D6EFD]' : isDanceShala ? 'text-[#FF7A00] border-b-2 border-[#FF7A00]' : 'text-[#1E5AA8] border-b-2 border-[#1E5AA8]')
                      : ''
                    }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
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
          <button
            onClick={() => setIsModalOpen(true)}
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
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="xl:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 text-[#1F2937] hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-white transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden overflow-y-auto`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/images/Logo.png"
                alt="ePathshala Logo"
                width={200}
                height={200}
                className="h-60 md:h-60 w-auto"
                priority
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <nav className="space-y-4">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100 pb-4">
                {link.subItems ? (
                  <div>
                    <button
                      onClick={() => setActiveSubMenu(activeSubMenu === link.name ? null : link.name)}
                      className="flex items-center justify-between w-full text-lg font-bold text-[#1F2937]"
                    >
                      {link.name}
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${activeSubMenu === link.name ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div className={`mt-4 space-y-3 pl-4 overflow-hidden transition-all duration-300 ${activeSubMenu === link.name ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                      {link.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-gray-600 font-medium hover:text-[#1E5AA8]"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-bold text-[#1F2937] hover:text-[#1E5AA8]"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
              <div className="bg-[#1E5AA8] p-3 rounded-xl text-white">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">Call / WhatsApp</div>
                <div className="text-lg font-bold text-[#1F2937]">+91 7887889306</div>
              </div>
            </div>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="w-full bg-[#FFC107] text-[#1F2937] font-extrabold py-5 rounded-2xl shadow-lg uppercase tracking-wider"
            >
              ENROLL NOW
            </button>
          </div>
        </div>
      </div>

      <DemoClassModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Header;

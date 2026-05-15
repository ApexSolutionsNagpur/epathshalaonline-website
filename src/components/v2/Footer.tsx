"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  const pathname = usePathname();
  const isSportsShala = pathname === '/sportsshala';
  const isAIRoboticsShala = pathname === '/airoboticsshala';
  const isDanceShala = pathname === '/danceshala';
  const isArtShala = pathname === '/artshala';


  return (
    <footer className={`${isSportsShala ? 'bg-[#062B5B]' : isAIRoboticsShala ? 'bg-[#072B61]' : isDanceShala ? 'bg-[#3B0A57]' : isArtShala ? 'bg-[#701a75]' : 'bg-[#0B3C5D]'} text-white pt-16 pb-8 px-6 md:px-14 transition-colors max-md:hidden`}>

      <div className=" grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand & Tagline */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/footerlogo.png"
              alt="ePathshala Logo"
              width={200}
              height={200}
              className="h-12 md:h-20 w-auto"
              priority
            />
          </Link>
          <p className="text-sm text-gray-300">
            Learn. Grow. Succeed - Anytime, Anywhere.
          </p>
          <div className="flex gap-4 pt-2">
            {[
              { Icon: FaFacebookF, href: 'https://www.facebook.com/epathshala.online.school/' },
              { Icon: FaInstagram, href: 'https://www.instagram.com/epathshalaonline/' },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={`w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 cursor-pointer transition-all ${isSportsShala ? 'bg-[#95C11F]' : isDanceShala ? 'bg-[#FF7A00]' : isArtShala ? 'bg-[#a21caf]' : 'bg-[#1E5AA8]'}`}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className={`font-bold text-base mb-4 ${isSportsShala ? 'text-[#95C11F]' : isAIRoboticsShala ? 'text-[#0D6EFD]' : isDanceShala ? 'text-[#FF7A00]' : 'text-[#20C997]'} font-heading uppercase tracking-wider`}>Quick Links</h4>

          <ul className="space-y-2 text-gray-300">
            {['Home', 'About Us', 'Academics', 'Programs', 'Admissions'].map((link) => (
              <li key={link}><Link href="#" className="hover:text-white transition-colors">{link}</Link></li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className={`font-bold text-base mb-4 ${isSportsShala ? 'text-[#95C11F]' : isAIRoboticsShala ? 'text-[#0D6EFD]' : isDanceShala ? 'text-[#FF7A00]' : 'text-[#20C997]'} font-heading uppercase tracking-wider`}>Programs</h4>

          <ul className="space-y-2 text-gray-300">
            {['CBSE Academic', 'JEE & NEET Foundation', 'STEM & Coding', 'ArtShala', 'SportsShala', 'Life Skills'].map((link) => (
              <li key={link}><Link href="#" className="hover:text-white transition-colors">{link}</Link></li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className={`font-bold text-base mb-4 ${isSportsShala ? 'text-[#95C11F]' : isAIRoboticsShala ? 'text-[#0D6EFD]' : isDanceShala ? 'text-[#FF7A00]' : 'text-[#20C997]'} font-heading uppercase tracking-wider`}>Newsletter</h4>

          <p className="text-sm text-gray-300 mb-4">Stay updated with the latest news and exclusive offers.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#95C11F]"
            />
            <button className={`px-4 py-2 rounded-r-md font-bold transition-all ${isSportsShala ? 'bg-[#95C11F] hover:bg-[#84ac1b] text-white' : isAIRoboticsShala ? 'bg-[#0D6EFD] hover:bg-[#0047CC] text-white' : isDanceShala ? 'bg-[#FF7A00] hover:bg-[#e66e00] text-white' : 'bg-[#FFC107] hover:bg-[#E0A800] text-[#1F2937]'}`}>

              →
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/20 pt-8 text-center text-sm text-gray-400 font-body">
        <p>© {new Date().getFullYear()} ePathshala Online School. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


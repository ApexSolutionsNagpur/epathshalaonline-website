import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0B3C5D] text-white pt-16 pb-8 px-14 max-md:hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand & Tagline */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/FooterLogo.png"
              alt="ePathshala Logo"
              width={200}
              height={300}
              className="h-10 md:h-24 w-auto object-contain"
            />
          </div>
          <p className="text-sm text-gray-300">
            Learn. Grow. Succeed - Anytime, Anywhere.
          </p>
          <div className="flex gap-4 pt-2">
            {/* Social Icons Placeholders */}
            <div className="w-8 h-8 rounded-full bg-[#1E5AA8] flex items-center justify-center hover:scale-105 cursor-pointer transition-transform">f</div>
            <div className="w-8 h-8 rounded-full bg-[#1E5AA8] flex items-center justify-center hover:scale-105 cursor-pointer transition-transform">in</div>
            <div className="w-8 h-8 rounded-full bg-[#1E5AA8] flex items-center justify-center hover:scale-105 cursor-pointer transition-transform">X</div>
            <div className="w-8 h-8 rounded-full bg-[#1E5AA8] flex items-center justify-center hover:scale-105 cursor-pointer transition-transform">ig</div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-base mb-4 text-[#20C997]">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Academics</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Programs</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Admissions</Link></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-bold text-base mb-4 text-[#20C997]">Programs</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#" className="hover:text-white transition-colors">CBSE Academic</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">JEE & NEET Foundation</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">STEM & Coding</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Spoken English</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Life Skills</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-base mb-4 text-[#20C997]">Newsletter</h4>
          <p className="text-sm text-gray-300 mb-4">Stay updated with the latest news and exclusive offers.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#20C997]"
            />
            <button className="bg-[#FFC107] hover:bg-[#E0A800] text-[#1F2937] px-4 py-2 rounded-r-md font-bold transition-colors">
              →
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/20 pt-8 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} ePathshala Online School. All Rights Reserved.</p>
      </div>
    </footer>
  );
};


"use client";
import React, { useState } from 'react';
import { PhoneCall, ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import DemoClassModal from '../v2/DemoClassModal';

const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const isSportsShala = pathname === '/sportsshala';
  const isArtShala = pathname === '/artshala';
  const isAIRoboticsShala = pathname === '/airoboticsshala';
  const isDanceShala = pathname === '/danceshala';

  // Define themes based on current route
  const themes = {
    default: {
      gradient: "from-[#0B3C5D] via-[#0B3C5D] to-[#0B4C6D]",
      accent: "text-[#FFC107]",
      button: "bg-[#FFC107] text-[#0B4362]",
      phone: "text-[#FFC107]",
      label: "text-[#0B4362]"
    },
    sports: {
      gradient: "from-[#062B5B] via-[#0B3C5D] to-[#95C11F]",
      accent: "text-[#95C11F]",
      button: "bg-[#95C11F] text-white",
      phone: "text-[#95C11F]",
      label: "text-[#555555]"
    },
    art: {
      gradient: "from-[#ff3f87] via-[#ff4f87] to-[#a21caf]",
      accent: "text-[#a21caf]",
      button: "bg-[#a21caf] text-white",
      phone: "text-[#a21caf]",
      label: "text-[#0B3C5D]"
    },
    robotics: {
      gradient: "from-[#072B61] via-[#0D6EFD] to-[#0047CC]",
      accent: "text-blue-300",
      button: "bg-[#0D6EFD] text-white",
      phone: "text-[#0D6EFD]",
      label: "text-white/70"
    },
    danceshala: {
      gradient: "from-[#FF7A00] via-[#FF8F1C] to-[#FF9F1C]] ",
      accent: "text-[#a21caf]",
      button: "bg-[#FF9F1C] text-white",
      phone: "text-[#a21caf]",
      label: "text-black"
    }
  };

  const theme = isSportsShala ? themes.sports : isArtShala ? themes.art : isAIRoboticsShala ? themes.robotics : isDanceShala ? themes.danceshala : themes.default;
  return (
    <section className="fixed bottom-0 left-0 right-0 z-50 md:relative md:bottom-auto py-0 md:py-12 md:px-14 bg-white md:bg-transparent shadow-[0_-10px_20px_rgba(0,0,0,0.1)] md:shadow-none">
      <div className="">
        <div className="relative bg-white md:border-2  md:rounded-[3rem] overflow-hidden shadow-xl flex  md:flex-row items-stretch">

          {/* LEFT SECTION */}
          <div
            onClick={() => setIsModalOpen(true)}
            className={`relative md:w-3/5 bg-gradient-to-r ${theme.gradient} p-4 md:p-12 text-white flex flex-col justify-center items-center cursor-pointer group`}
          >

            {/* ✅ SVG CURVE (REPLACED SKEW) */}
            <div className="hidden md:block absolute right-0 top-0 h-full w-[220px]">
              <svg viewBox="0 0 200 200" preserveAspectRatio="none" className="w-full h-full">
                <path
                  d="M0,200 C120,200 80,0 200,0 L200,200 Z"

                  // fill="#0B3C5D"
                  fill="white"
                />
              </svg>
            </div>

            {/* ✅ ICON (BETTER POSITIONING) */}
            <div className="absolute left-2 md:left-32">
              <div className="w-12 h-12 md:w-30 md:h-30 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
                <PhoneCall className={`w-4 h-4 md:w-10 md:h-10 ${theme.phone}`} />
              </div>
            </div>

            <div className="relative z-10 pl-16 md:pl-20 px-4 md:px-20">
              <div className="inline-block bg-white/10 backdrop-blur-sm text-white font-bold px-3 py-1 rounded-full text-[10px] md:text-xs mb-2 md:mb-4 border border-white/20 tracking-wider uppercase">
                ADMISSION OPEN
              </div>

              <h2 className="text-xl md:text-5xl font-extrabold mb-1 md:mb-3 leading-tight uppercase">
                ENROLL <span className={theme.accent}>NOW</span>
              </h2>

              <p className="text-white/80 text-[10px] md:text-base max-w-md">
                Limited Seats! Secure your child's future today.
              </p>
            </div>


          </div>

          {/* RIGHT SECTION */}
          <div className="md:w-2/5 p-4 md:p-12 flex flex-col justify-center items-center md:items-center text-center md:text-right bg-white">

            <div className={`${theme.label} font-bold text-[10px] md:text-base tracking-[2px] mb-1 md:mb-2 uppercase`}>
              CALL / WHATSAPP
            </div>

            <a href="tel:+917887889306" className="flex items-center gap-2 md:gap-4 group/phone transition-all">
              <div className="text-[#062B5B] font-oswald font-extrabold text-xl md:text-5xl tracking-tight group-hover/phone:text-[#1E5AA8] transition-colors">
                +91 7887889306
              </div>
              <div className={`flex w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-[#062B5B] items-center justify-center text-[#062B5B] rotate-[-45deg] group-hover/phone:rotate-0 group-hover/phone:border-[#1E5AA8] group-hover/phone:text-[#1E5AA8] transition-all duration-300`}>
                <ArrowRight size={20} className="md:w-6 md:h-6" />
              </div>
            </a>


          </div>

        </div>
      </div>
      <DemoClassModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default CTASection;
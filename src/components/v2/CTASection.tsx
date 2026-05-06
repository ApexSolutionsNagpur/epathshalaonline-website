import React from 'react';
import { PhoneCall } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-12 px-4 md:px-14 bg-white">
      <div className="">
        <div className="relative bg-white border-2 border-[#EBF3FE] rounded-[3rem] overflow-hidden shadow-xl flex flex-col md:flex-row items-stretch">

          {/* LEFT SECTION */}
          <div className="relative md:w-3/5 bg-gradient-to-r from-[#0B3C5D] via-[#0A7C86] to-[#00A8A8] p-8 md:p-12 text-white flex flex-col justify-center">

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
            {/* <div className="hidden md:block absolute right-0 top-0 h-full w-[260px]">
              <svg viewBox="0 0 200 200" preserveAspectRatio="none" className="w-full h-full">
                <path
                  d="M0,200 C120,200 80,0 200,0 L200,200 Z"
                  fill="white"
                />
              </svg>
            </div> */}

            {/* ✅ ICON (BETTER POSITIONING) */}
            <div className="absolute left-10">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
                <PhoneCall className="w-6 h-6 text-[#FFC107]" />
              </div>
            </div>

            <div className="relative z-10 px-20">
              <div className="inline-block bg-white/10 backdrop-blur-sm text-white font-bold px-4 py-1 rounded-full text-xs mb-4 border border-white/20 tracking-wider">
                ADMISSION OPEN
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">
                ENROLL <span className="text-[#FFC107]">NOW</span>
              </h2>

              <p className="text-white/80 text-sm md:text-base max-w-md">
                Limited Seats! Secure your child's future today.
              </p>
            </div>


          </div>

          {/* RIGHT SECTION */}
          <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center items-center md:items-center text-center md:text-right bg-white">

            <div className="text-[#0B4362] font-bold text-base tracking-[2px] mb-2 uppercase">
              CALL / WHATSAPP
            </div>

            <div className="text-black font-extrabold text-3xl md:text-4xl tracking-tight mb-4">
              +91 7887889306
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
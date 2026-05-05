import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className="relative bg-[#F5F7FA] overflow-hidden py-4.5 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/HeroSection.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <h1 className="font-heading text-4xl md:text-4xl font-extrabold text-[#0B3C5D] leading-[1.1] tracking-tight">
              HAR SAPNA HAI <br />
              <span className="text-transparent md:text-6xl leading-tight tracking-wide  bg-clip-text bg-gradient-to-r from-[#1E5AA8] to-[#00A8A8]">
                POSSIBLE
              </span>
            </h1>

            <p className="font-body text-lg md:text-xl text-[#1F2937] font-medium max-w-lg leading-relaxed">
              सही <span className="text-[#1E5AA8] font-bold">Education</span> से आज का <span className="text-[#00A8A8] font-bold">Focus</span>
              <br />
              कल का <span className="text-[#00A8A8] font-bold">Champion</span> बनाता है।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#"
                className="font-body bg-[#FFC107] hover:bg-[#E0A800] text-[#1F2937] font-bold py-4 px-8 rounded-full shadow-lg hover:scale-105 transition-all duration-300 text-center text-base"
              >
                Enroll Now
              </Link>
              <Link
                href="#"
                className="font-body bg-white border-2 border-[#1E5AA8] text-[#1E5AA8] hover:bg-gray-50 font-bold py-4 px-8 rounded-full shadow-lg hover:scale-105 transition-all duration-300 text-center text-base"
              >
                Explore More
              </Link>
            </div>
          </div>


        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#20C997] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-[#1E5AA8] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    </section>
  );
};

export default Hero;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative bg-[#F5F7FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <h1 className="text-4xl font-extrabold text-[#0B3C5D] leading-tight">
              HAR SAPNA HAI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E5AA8] to-[#00A8A8]">
                POSSIBLE
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#1F2937] font-medium max-w-lg">
              सही <span className="text-[#1E5AA8] font-bold">Education</span> से आज का <span className="text-[#00A8A8] font-bold">Focus</span>
              <br />
              कल का <span className="text-[#00A8A8] font-bold">Champion</span> बनाता है।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#"
                className="bg-[#FFC107] hover:bg-[#E0A800] text-[#1F2937] font-bold py-4 px-8 rounded-full shadow-lg hover:scale-105 transition-all duration-300 text-center text-base"
              >
                Enroll Now
              </Link>
              <Link
                href="#"
                className="bg-white border-2 border-[#1E5AA8] text-[#1E5AA8] hover:bg-gray-50 font-bold py-4 px-8 rounded-full shadow-lg hover:scale-105 transition-all duration-300 text-center text-base"
              >
                Explore More
              </Link>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative z-10 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1E5AA8] to-[#00A8A8] p-1">
              <div className="absolute inset-0 bg-white rounded-3xl overflow-hidden m-1">
                {/* Placeholder for the student mirror image */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                  <div className="text-gray-400 text-center px-4">
                    [Student Mirror Concept Image]
                  </div>
                </div>
              </div>

              {/* Floating Tags */}
              <div className="absolute -left-8 top-20 bg-white px-6 py-3 rounded-xl shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="font-bold text-[#1E5AA8]">🎯 Focus</span>
              </div>
              <div className="absolute -right-6 top-1/2 bg-white px-6 py-3 rounded-xl shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
                <span className="font-bold text-[#FFC107]">✨ Dream Big</span>
              </div>
              <div className="absolute -left-4 bottom-24 bg-white px-6 py-3 rounded-xl shadow-xl animate-bounce" style={{ animationDuration: '3.5s' }}>
                <span className="font-bold text-[#00A8A8]">💪 Discipline</span>
              </div>
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

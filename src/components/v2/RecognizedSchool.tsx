import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

const RecognizedSchool = () => {
  return (
    <section className=" py-8 md:py-12 px-4 md:px-14 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#1E5AA8] rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00A8A8] rounded-full blur-3xl opacity-20 -ml-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-black font-heading leading-tight max-w-4xl mx-auto text-[#0B3C5D] ">
            {"Welcome to India's "} <span className="text-[#1E5AA8]">{"First & Only"}</span> {"Recognized Online School"}
          </h2>
          <div className="w-24 h-1.5 bg-[#FFC107] mx-auto mt-8 rounded-full"></div>
        </div>
        <div className="relative group">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
            <Image
              src="/images/RecognizedSchool.png"
              alt="School Environment"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center p-8 md:p-12">
              <h3 className="text-white font-heading text-xl md:text-6xl font-extrabold leading-tight  mb-8 drop-shadow-lg uppercase italic">
                THIS IS HOW A SCHOOL <span className="text-[#FFC107]">SHOULD BE</span>
              </h3>

              {/* Play Button */}
              <button className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border-2 border-white/50 hover:bg-white hover:text-[#0B3C5D] hover:scale-110 transition-all duration-300">
                <Play size={32} fill="currentColor" />
              </button>
            </div>
          </div>

          {/* Background Accent Card Effect */}
          <div className="absolute -inset-4 border-2 border-[#00A8A8]/30 rounded-[2.5rem] -z-10 group-hover:scale-105 transition-transform duration-500"></div>
        </div>
      </div>
    </section>
  );
};

export default RecognizedSchool;

import React from 'react';
import { PhoneCall } from 'lucide-react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#0B3C5D] to-[#00A8A8] rounded-[2rem] overflow-hidden shadow-2xl relative">
          
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>

          <div className="relative z-10 px-8 py-16 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            
            <div className="text-center md:text-left md:max-w-2xl">
              <div className="inline-block bg-[#FFC107] text-[#1F2937] font-bold px-4 py-1.5 rounded-full text-sm mb-6 shadow-md">
                ADMISSION OPEN 2026-27
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                Start Your Journey to <br/>
                <span className="text-[#FFC107]">Greatness</span> Together
              </h2>
              <p className="text-base text-white/90 mb-8 max-w-xl">
                Limited Seats! Secure your child's future today with our expert-led online programs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link 
                  href="#"
                  className="bg-[#FFC107] hover:bg-[#E0A800] text-[#1F2937] font-bold py-4 px-8 rounded-full shadow-lg hover:scale-105 transition-all duration-300 text-center text-base flex items-center justify-center gap-2"
                >
                  Enroll Now
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-center md:min-w-[320px]">
              <PhoneCall className="w-12 h-12 text-[#FFC107] mx-auto mb-4 animate-pulse" />
              <div className="text-white/80 font-medium mb-1 tracking-widest text-sm">CALL / WHATSAPP</div>
              <div className="text-white font-extrabold text-2xl mb-6 tracking-tight">+91 7887889306</div>
              <Link 
                href="https://wa.me/917887889306"
                target="_blank"
                className="bg-white hover:bg-gray-50 text-[#0B3C5D] font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-all duration-300 text-center block w-full"
              >
                Chat on WhatsApp
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

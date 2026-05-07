import React from 'react';
import { PhoneCall, ArrowRight } from 'lucide-react';

const AdmissionCTA = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-[#95C11F] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch">
          {/* Left Side */}
          <div className="flex-1 p-10 lg:p-16 flex items-center gap-8 bg-[#95C11F] relative overflow-hidden group">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
              <PhoneCall size={40} />
            </div>
            
            <div className="text-white space-y-1">
              <span className="font-oswald font-bold uppercase tracking-[0.2em] text-sm opacity-80">Admission Open</span>
              <h2 className="font-oswald text-5xl md:text-6xl font-bold uppercase leading-none italic">ENROLL NOW</h2>
              <p className="font-body text-xs md:text-sm font-medium opacity-90 italic">Limited Seats! Secure your child's future today.</p>
            </div>
          </div>

          {/* Right Side - Diagonal Cut */}
          <div className="lg:w-1/2 bg-white relative p-10 lg:p-16 flex flex-col justify-center items-center lg:items-end">
            {/* The Slanted Divider */}
            <div className="hidden lg:block absolute top-0 -left-20 bottom-0 w-40 bg-white skew-x-[-15deg] z-0"></div>
            
            <div className="relative z-10 text-center lg:text-right space-y-2">
              <span className="font-oswald font-bold uppercase tracking-widest text-[#555555]">Call / Whatsapp</span>
              <div className="flex items-center gap-4 justify-center lg:justify-end">
                <h3 className="font-oswald text-4xl md:text-5xl font-bold text-[#062B5B] tracking-tight">+91 7887889306</h3>
                <div className="w-12 h-12 rounded-full border-2 border-[#062B5B] flex items-center justify-center text-[#062B5B] rotate-45">
                   <ArrowRight size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionCTA;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Video, Clock, Users, Lightbulb, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="relative bg-[#F5F7FA] overflow-hidden py-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/HeroSection.png')" }}
    >
      <div className=" px-4 md:px-14 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-[#0B3C5D] leading-[1.1] tracking-tight">
              HAR SAPNA HAI <br />
              <span className="text-transparent md:text-8xl   bg-clip-text bg-gradient-to-r from-[#1E5AA8] to-[#00A8A8]">
                POSSIBLE
              </span>
            </h1>

            <p className="font-body text-lg md:text-2xl text-[#1F2937] font-medium max-w-lg leading-relaxed">
              सही <span className="text-[#1E5AA8] font-bold">Education</span> से आज का <span className="text-[#00A8A8] font-bold">Focus</span>
              <br />
              कल का <span className="text-[#00A8A8] font-bold">Champion</span> बनाता है।
            </p>

            {/* Feature Cards Row */}
            <div className="pt-2 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Video className="w-6 h-6 text-[#0B3C5D]" />, title: "Live Classes Expert Faculty" },
                { icon: <Clock className="w-6 h-6 text-[#0B3C5D]" />, title: "Flexible Learning Anytime" },
                { icon: <Users className="w-6 h-6 text-[#0B3C5D]" />, title: "Personalized Mentorship" },
                { icon: <Lightbulb className="w-6 h-6 text-[#0B3C5D]" />, title: "Future Ready Skills & Values" },
              ].map((card, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow hover:scale-105 transition-all duration-300 ">
                  <div className="bg-gray-50 p-2 rounded-lg">
                    {card.icon}
                  </div>
                  <h4 className="text-[11px] md:text-xs font-bold text-[#0B3C5D] leading-tight px-1 uppercase tracking-tight">
                    {card.title}
                  </h4>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#"
                className="font-body bg-[#FFC107] hover:bg-[#E0A800] text-[#1F2937] font-bold py-4 px-8 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 text-center text-base"
              >
                Enroll Now
              </Link>
              <Link
                href="#"
                className="font-body bg-white border-2 border-[#1E5AA8] text-[#1E5AA8] hover:bg-gray-50 font-bold py-4 px-8 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 text-center text-base"
              >
                Explore More
              </Link>
            </div>
          </div>

          {/* Right Content - Floating Card */}
          <div className="relative h-full hidden lg:flex items-end justify-end z-50 ">
            <div className="absolute -bottom-20 right-0 group">
              {/* Outer Gradient Card */}
              <div className="bg-gradient-to-br from-[#00A8A8] to-[#1E5AA8] p-2 pr-2 rounded-[1.5rem] shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="bg-white rounded-[1.5rem] p-6  flex items-center gap-5">
                  {/* Icon Container */}
                  <div className="">
                    <GraduationCap className="w-10 h-10 text-[#0B3C5D]" />
                  </div>

                  {/* Text Content */}
                  <div>
                    <div className="text-[#0B3C5D] font-extrabold text-xl leading-tight tracking-tight uppercase">
                      Flexible <br /> Learning
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-[#00A8A8] font-bold text-xs">
                      <span className="w-4 h-[2px] bg-[#00A8A8]"></span>
                      BETTER FUTURE
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-[#00A8A8]/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
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

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Play } from 'lucide-react';

const WhyChoose = () => {
  const benefits = [
    'Professional coaching with modern training methods',
    'Focus on skill development & sportsmanship',
    'Regular matches & tournament participation',
    'Safe, inclusive & motivating environment',
    'Balancing academics and athletics',
  ];

  return (
    <section className="bg-white py-24">
      <div className=" px-6 md:pr-14 max-md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
          {/* Left: Equipment Graphic */}
          <div className="relative group">
            <div className="relative z-10 transition-transform duration-500 group-hover:-rotate-3">
              <Image
                src="/images/sportsshala/sportshala_equipment.png"
                alt="Sports Equipment"
                width={500}
                height={500}
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#95C11F]/10 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Center: Video Thumbnail Card */}
          <div className="space-y-10">
            <div className="text-left">
              <h2 className="font-oswald text-4xl font-bold text-[#062B5B] uppercase leading-tight mb-6 text-nowrap">
                WHY CHOOSE <span className="text-[#95C11F]">SPORTSSHALA?</span>
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 group">
                    <div className="flex-shrink-0 text-[#95C11F] group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={22} fill="#95C11F" className="text-white" />
                    </div>
                    <span className="text-gray-600 font-body font-medium leading-tight">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>


          </div>
          <div className=''>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video group cursor-pointer h-full">
              <Image
                src="/images/sportsshala/video_thumb.png"
                alt="Building Champions"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 h-full"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex flex-col items-center justify-center text-white p-6">
                <div className="w-16 h-16 rounded-full bg-[#95C11F] flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Play fill="white" size={28} className="translate-x-0.5" />
                </div>
                <h3 className="font-oswald font-bold text-2xl uppercase tracking-wider text-center">
                  Building Champions <br /> On & Off the Field
                </h3>
              </div>
            </div>
          </div>

          {/* Right: Testimonial Card */}
          <div className="bg-[#062B5B] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg width="100" height="80" viewBox="0 0 100 80" fill="white">
                <path d="M0 0V80L40 40V0H0ZM60 0V80L100 40V0H60Z" />
              </svg>
            </div>

            <div className="relative z-10 space-y-8">
              <p className="font-body text-xl italic leading-relaxed font-light opacity-90">
                "SportsShala has helped me become more confident, disciplined and passionate about sports. The coaches are amazing!"
              </p>

              <div className="flex items-center gap-5 pt-6 border-t border-white/10">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#95C11F] p-0.5 shadow-xl">
                  <Image
                    src="/images/sportsshala/student.png"
                    alt="Student"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-oswald font-bold text-xl uppercase tracking-wide">Rohan Mehta</h4>
                  <p className="text-[#95C11F] text-sm font-bold uppercase font-oswald tracking-widest mt-0.5">Student, Grade 9</p>
                </div>
              </div>
            </div>

            {/* Accent shapes */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#95C11F]/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

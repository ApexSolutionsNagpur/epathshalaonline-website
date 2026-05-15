import React from 'react';
import Image from 'next/image';
import { CheckCircle, Play, Quote } from 'lucide-react';

const WhyChooseSection = () => {
  const points = [
    "Improve creativity and imagination",
    "Build concentration and patience",
    "Enhance observation and expression",
    "Perfect blend of fun and learning",
    "Support for art competitions & exhibitions"
  ];

  return (
    <section className="bg-[#fff4f7] py-24 px-4 md:px-14">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Heading and Points */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#132c6b] font-heading leading-tight">
                WHY CHOOSE <br />
                <span className="text-[#ff4f87]">ARTSHALA?</span>
              </h2>
              <div className="w-16 h-1 bg-[#ff4f87] rounded-full"></div>
            </div>

            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="mt-1">
                    <CheckCircle className="text-[#ff4f87]" size={20} />
                  </div>
                  <span className="text-[#5f6675] font-heading font-medium group-hover:text-[#132c6b] transition-colors">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center: Video Preview Card */}
          <div className="lg:col-span-4">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] group">
              <Image
                src="/images/artshala/video-preview.png"
                alt="Student Painting"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex flex-col items-center justify-center text-center p-6">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#ff4f87] shadow-xl hover:scale-110 transition-transform mb-4">
                  <Play size={32} fill="currentColor" />
                </button>
                <p className="text-white font-heading font-bold text-xl uppercase tracking-wider drop-shadow-lg">
                  See Creativity <br /> in Action
                </p>
              </div>
            </div>
          </div>

          {/* Right: Testimonial Card */}
          <div className="lg:col-span-4">
            <div className="bg-[#132c6b] rounded-[40px] p-10 relative overflow-hidden h-full flex flex-col justify-between shadow-2xl">
              {/* Decorative Quote Icon */}
              <div className="absolute -top-4 -right-4 opacity-10">
                <Quote size={120} className="text-white" />
              </div>

              <div className="relative z-10 space-y-6">
                <Quote className="text-[#ff4f87]" size={40} fill="currentColor" />
                <p className="text-white/90 font-heading text-lg leading-relaxed italic">
                  {`"ArtShala helped me discover my passion. The teachers are amazing and the classes are so much fun!"`}
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-4 pt-8 border-t border-white/10">
                <div className="w-16 h-16 rounded-full border-2 border-[#ff4f87] overflow-hidden">
                  <Image
                    src="/images/artshala/hero-student.png"
                    alt="Ananya Sharma"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-heading font-bold text-lg">Ananya Sharma</h4>
                  <p className="text-[#ff4f87] font-heading text-sm font-medium">Student, Grade 8</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

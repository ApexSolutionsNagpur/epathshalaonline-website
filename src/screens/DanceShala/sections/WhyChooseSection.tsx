'use client';
import React from 'react';
import Image from 'next/image';
import { IoCheckmarkCircle, IoPlay } from 'react-icons/io5';
import { FaQuoteLeft } from 'react-icons/fa';

const WhyChooseSection = () => {
  const reasons = [
    'Learn from professional & passionate instructors',
    'Improve fitness, flexibility & coordination',
    'Build confidence & stage presence',
    'Regular performances & competitions',
    'Supportive & encouraging environment',
    'Unleash creativity & express yourself',
  ];

  return (
    <section className="pt-24 pb-32 md:py-24  overflow-hidden">
      <div className="container mx-auto pl-12 md:pl-24 pr-6 md:pr-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Bullets */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-black text-dance-purple font-oswald uppercase mb-8">
              WHY CHOOSE <span className="text-dance-orange">DANCE</span>SHALA?
            </h2>
            <ul className="space-y-4">
              {reasons.map((reason, idx) => (
                <li key={idx} className="flex items-start space-x-3 group">
                  <IoCheckmarkCircle className="w-6 h-6 text-dance-orange flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-dance-text-sec text-sm font-medium leading-tight">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center: Video Thumbnail */}
          <div className="lg:w-1/3 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-94">
              <Image
                src="/images/danceshala/why-choose.png"
                alt="Dance Class"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

              {/* Play Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <button className="bg-white text-dance-orange p-6 rounded-full shadow-2xl hover:scale-110 transition-transform">
                  <IoPlay className="w-8 h-8 ml-1" />
                </button>
              </div>

              {/* Bottom Text */}
              <div className="absolute bottom-8 left-0 w-full px-8 text-center text-white">
                <p className="text-xl font-bold uppercase tracking-wide leading-tight">
                  Every Step <br /> Takes You Closer <br /> To Your Best Self
                </p>
              </div>
            </div>
          </div>

          {/* Right: Testimonial */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-dance-purple p-10 rounded-[40px] shadow-2xl text-white relative">
              <FaQuoteLeft className="text-dance-orange/30 w-12 h-12 mb-6" />
              <p className="text-lg italic font-light leading-relaxed mb-10">
                DanceShala has given my daughter confidence, discipline and a love for dance. The teachers are amazing and the performances are a great learning experience.
              </p>

              <div className="flex items-center space-x-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-dance-orange">
                  <Image
                    src="/images/danceshala/priya.png"
                    alt="Priya Mehta"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-bold text-white">Priya Mehta</h4>
                  <p className="text-dance-orange text-xs font-medium">Parent</p>
                </div>
              </div>

              {/* Decorative Paint Brush on card */}
              <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-20 pointer-events-none">
                <div className="w-full h-full bg-dance-orange blur-3xl rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

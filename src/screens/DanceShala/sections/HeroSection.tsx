'use client';
import React from 'react';
import Image from 'next/image';
import { Sparkles, Star, ShieldCheck, Heart, UserCheck, Zap } from 'lucide-react';

const HeroSection = () => {
  const features = [
    { icon: <Sparkles className="w-5 h-5" />, text: 'EXPRESSION' },
    { icon: <Star className="w-5 h-5" />, text: 'CREATIVITY' },
    { icon: <ShieldCheck className="w-5 h-5" />, text: 'CONFIDENCE' },
    { icon: <Heart className="w-5 h-5" />, text: 'FITNESS' },
    { icon: <UserCheck className="w-5 h-5" />, text: 'DISCIPLINE' },
    { icon: <Zap className="w-5 h-5" />, text: 'PASSION' },
  ];

  return (
    <section
      className="relative pt-1 pb-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/danceshala/dancehero.webp')" }}
    >

      <div className=" mx-auto pl-24 pr-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            <Image
              src="/images/danceshala/danceshalalogo.webp"
              alt="DanceShala Logo"
              width={300}
              height={50}
              className="h-auto w-auto"
              priority
            />

            <h1 className="text-5xl lg:text-7xl font-black text-dance-purple mb-4 leading-tight font-oswald uppercase">
              MOVE TODAY. <br />
              <span className="text-dance-orange">SHINE TOMORROW.</span>
            </h1>

            <p className="text-dance-text-sec text-lg mb-10 max-w-lg mx-auto lg:mx-0 font-medium">
              DanceShala is your stage to express, explore and evolve through the art of dance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="w-full sm:w-auto bg-gradient-orange text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:shadow-xl transition-all">
                Explore Programs
              </button>
              <button className="w-full sm:w-auto border-2 border-dance-purple text-dance-purple px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-dance-purple hover:text-white transition-all">
                Join Dance Community
              </button>
            </div>
          </div>

          {/* Right Content: Dancers & Features */}
          <div className=" relative">
            {/* Floating Features */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 flex flex-col space-y-3 z-20">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-2 pr-4 rounded-full flex items-center space-x-3 5 transition-all cursor-default"

                >
                  <div className="bg-white p-1.5 rounded-full text-dance-orange">
                    {feature.icon}
                  </div>
                  <span className="text-lg font-bold text-dance-purple uppercase tracking-widest">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Artistic Paint Splashes Background for Dancers */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 opacity-30 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-dance-orange blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-dance-purple blur-[100px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


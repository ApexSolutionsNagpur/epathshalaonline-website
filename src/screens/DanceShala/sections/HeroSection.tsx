'use client';
import React from 'react';
import Image from 'next/image';
import { Sparkles, Star, ShieldCheck, Heart, UserCheck, Zap, Music } from 'lucide-react';

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
      className="relative pt-32 pb-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/danceshala/dancehero.png')" }}
    >
      {/* Background Splashes */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-dance-orange/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-dance-purple/5 rounded-full blur-3xl -z-10" />

      <div className=" mx-auto pl-24 pr-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-block mb-10 relative group">
              {/* Outer Decorative Rings */}
              <div className="absolute inset-0 bg-dance-orange/20 rounded-full scale-110 blur-xl group-hover:scale-125 transition-transform duration-700" />
              <div className="absolute inset-0 border-4 border-dashed border-dance-orange/30 rounded-full animate-spin-slow" />

              <div className="relative w-48 h-48 bg-dance-orange rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                {/* Background Pattern */}

                <div className="text-white text-center relative z-10 px-4">
                  <div className="flex justify-center mb-1">
                    <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
                  </div>
                  <h2 className="text-5xl font-black leading-none tracking-tighter uppercase font-oswald">
                    <span className="block text-3xl font-bold mb-1">डांस</span>
                    <span className="tracking-[0.1em]">SHALA</span>
                  </h2>
                  <div className="flex justify-center mt-2 space-x-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    <div className="w-1.5 h-1.5 bg-white rounded-full opacity-50" />
                    <div className="w-1.5 h-1.5 bg-white rounded-full opacity-20" />
                  </div>
                </div>

                {/* Light Ray Effect */}
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/20 rotate-45 translate-x-1/2 translate-y-1/2" />
              </div>

              {/* Musical Notes / Sparkles around the circle */}
              <div className="absolute -top-4 -right-4 text-dance-orange animate-bounce-slow">
                <Music className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-2 -left-4 text-dance-purple animate-pulse">
                <Star className="w-6 h-6" />
              </div>
            </div>

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

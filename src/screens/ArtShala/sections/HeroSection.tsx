import React from 'react';
import Image from 'next/image';
import { Pencil, Image as ImageIcon, Palette, GraduationCap, Compass, Heart, Star } from 'lucide-react';

const HeroSection = () => {
  const features = [
    { icon: <GraduationCap className="text-pink-500" size={24} />, title: "Learn from Experts" },
    { icon: <Compass className="text-pink-500" size={24} />, title: "Explore Your Style" },
    { icon: <Heart className="text-pink-500" size={24} />, title: "Create with Passion" },
    { icon: <Star className="text-pink-500" size={24} />, title: "Showcase Your Talent" },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 px-4 md:px-14">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <div className="space-y-4">
            <Image
              src="/images/artshala/logo.png"
              alt="ArtShala Logo"
              width={220}
              height={80}
              className="h-20 w-auto"
            />
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fff4f7] border border-pink-100">
              <span className="text-[#ff4f87] text-sm font-semibold font-heading">By ePathshala</span>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#132c6b] font-heading">
              Unleash <span className="bg-gradient-to-r from-[#ff4f87] to-[#ff85a1] bg-clip-text text-transparent italic">Creativity.</span> <br />
              Shape Your Future.
            </h1>
            <p className="text-lg text-[#5f6675] max-w-xl leading-relaxed font-heading font-medium">
              ArtShala is the creative space for young artists to learn, explore and express their imagination.
            </p>
          </div>

          {/* Feature Mini Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col items-center text-center gap-3 transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-[#fff4f7] flex items-center justify-center">
                  {feature.icon}
                </div>
                <span className="text-[12px] font-bold text-[#132c6b] font-heading leading-tight">{feature.title}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-gradient-to-r from-[#ff4f87] to-[#ff759f] hover:opacity-90 text-white font-heading font-bold py-4 px-10 rounded-full shadow-lg shadow-pink-200 transition-all text-lg tracking-wide uppercase">
              Explore Programs
            </button>
            <button className="border-2 border-[#132c6b] text-[#132c6b] hover:bg-[#132c6b] hover:text-white font-heading font-bold py-4 px-10 rounded-full transition-all text-lg tracking-wide uppercase">
              Join Art Community
            </button>
          </div>
        </div>

        {/* Right Content - Visuals */}
        <div className="relative">
          {/* Main Image with Background Splash */}
          <div className="relative z-10">
            {/* Pink brush stroke background replacement using a stylized div or SVG if image not perfect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#fff4f7] rounded-full blur-3xl -z-10 opacity-60 animate-pulse"></div>
            <Image
              src="/images/artshala/hero-student.png"
              alt="Student Artist"
              width={700}
              height={700}
              className="w-full h-auto drop-shadow-2xl relative z-10"
              priority
            />
          </div>

          {/* Floating Icons */}
          <div className="absolute top-10 right-0 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce-slow">
            <ImageIcon className="text-[#ff4f87]" size={32} />
          </div>
          <div className="absolute bottom-20 -left-8 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce-slow delay-700">
            <Palette className="text-[#ff4f87]" size={32} />
          </div>
          <div className="absolute top-1/2 -right-4 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce-slow delay-1000">
            <Pencil className="text-[#ff4f87]" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

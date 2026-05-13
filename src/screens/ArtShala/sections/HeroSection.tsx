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
    <section className="relative overflow-hidden bg-white pt-20 pb-24 px-4 md:px-24 flex items-center  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/artshala/artshalahero.png')" }}
    >
      <div className="relative z-10  grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <Image
              src="/images/artshala/artshalalogo.png"
              alt="ArtShala Logo"
              width={220}
              height={80}
              className="h-40 w-auto"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#132c6b] font-heading">
              Unleash <span className="bg-gradient-to-r from-[#ff4f87] to-[#ff85a1] bg-clip-text text-transparent italic">Creativity.</span> <br />
              Shape Your Future.
            </h1>
            <p className="text-lg md:text-xl text-[#5f6675] max-w-xl leading-relaxed font-heading font-medium">
              ArtShala is the creative space for young artists to learn, explore and express their imagination. Join our community of creators today.
            </p>
          </div>

          {/* Feature Mini Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 flex flex-col items-center text-center gap-3 transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-[#fff4f7] flex items-center justify-center">
                  {feature.icon}
                </div>
                <span className="text-[12px] font-bold text-[#132c6b] font-heading leading-tight">{feature.title}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-gradient-to-r from-[#ff4f87] to-[#ff759f] hover:scale-105 active:scale-95 text-white font-heading font-bold py-4 px-10 rounded-full shadow-lg shadow-pink-200 transition-all text-lg tracking-wide uppercase">
              Explore Programs
            </button>
            <button className="border-2 border-[#132c6b] text-[#132c6b] hover:bg-[#132c6b] hover:text-white font-heading font-bold py-4 px-10 rounded-full transition-all text-lg tracking-wide uppercase">
              Join Art Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

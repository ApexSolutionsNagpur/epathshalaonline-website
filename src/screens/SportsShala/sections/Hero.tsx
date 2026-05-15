import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const features = ['Discipline', 'Teamwork', 'Fitness', 'Focus', 'Confidence'];

  return (
    <section
      className="relative overflow-hidden pt-1 pb-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/sportsshala/sport_hero.png')" }}
    >
      <div className=" px-4 md:px-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <div className="space-y-6 z-10">
          <Image
            src="/images/sportsshala/sportshalalogo.png"
            alt="SportsShala Logo"
            width={300}
            height={50}
            className="h-24 md:h-100 w-auto"
          />

          <div className="space-y-2">
            <h1 className="font-oswald text-6xl md:text-8xl font-bold leading-tight text-[#062B5B] uppercase italic">
              PLAY TODAY. <br />
              <span className="">LEAD TOMORROW.</span>
            </h1>
            <p className="font-body text-lg text-gray-600 max-w-lg leading-relaxed font-medium">
              SportsShala is the perfect arena for young champions to train, compete and excel in their favorite sports.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#062B5B] hover:bg-[#84ac1b] text-white font-oswald font-bold py-4 px-8 rounded-lg shadow-xl hover:scale-105 transition-all text-lg uppercase tracking-wider">
              Explore Programs
            </button>
            <button className="border-2 border-[#062B5B] text-[#062B5B] hover:bg-[#95C11F] hover:border-[#95C11F] hover:text-white font-oswald font-bold py-4 px-8 rounded-lg hover:scale-105 transition-all text-lg uppercase tracking-wider">
              Join Sports Community
            </button>
          </div>
        </div>

        {/* Right Side Collage */}
        <div className="relative group">
          <div className="relative z-10 scale-110 lg:scale-125 translate-x-4">
            <Image
              src="/images/sportsshala/hero.png"
              alt="Sports Collage"
              width={800}
              height={800}
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
          </div>

          {/* Vertical Feature List */}
          <div className="absolute top-1/2 -right-4 md:-right-8 -translate-y-2/3 flex flex-col gap-4 z-20">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="bg-white/90 backdrop-blur-sm border border-gray-100 p-3 rounded-full shadow-lg flex items-center gap-3 pr-6 animate-fadeInRight"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-[#95C11F] flex items-center justify-center text-white shadow-md">
                  <CheckCircle2 size={20} strokeWidth={3} />
                </div>
                <span className="font-oswald font-bold text-[#062B5B] uppercase tracking-wide">{feature}</span>
              </div>
            ))}
          </div>

          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#95C11F]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#062B5B]/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

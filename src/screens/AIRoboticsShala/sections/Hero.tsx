import React from 'react';
import Image from 'next/image';
import { ChevronRight, Cpu, Bot, Rocket, Target, Zap, Globe } from 'lucide-react';

const Hero = () => {
  const features = [
    { icon: <Zap className="text-blue-500" size={20} />, text: "INNOVATION" },
    { icon: <Target className="text-blue-500" size={20} />, text: "PROBLEM SOLVING" },
    { icon: <Cpu className="text-blue-500" size={20} />, text: "LOGICAL THINKING" },
    { icon: <Bot className="text-blue-500" size={20} />, text: "HANDS-ON LEARNING" },
    { icon: <Rocket className="text-blue-500" size={20} />, text: "FUTURE READY" },
  ];

  return (
    <section
      className=" min-h-[90vh] w-full pt-1 pb-16 overflow-hidden bg-cover bg-center bg-no-repeat selection:bg-blue-100"
      style={{ backgroundImage: "url('/images/roboticshala/ai_roboticshero.png')" }}
    >

      <div className=" px-4 md:px-24 flex items-center justify-between w-full">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            {/* Logo / Subtext */}
            <div className="animate-fade-in">
              <Image
                src="/images/roboticshala/airoboticshalalogo.png"
                alt="AI Robotic Shala Logo"
                width={300}
                height={50}
                className="h-auto w-auto"
                priority
              />
            </div>

            <h1 className="text-5xl md:text-6xl font-oswald font-extrabold text-[#072B61] leading-[1.1] uppercase">
              CODE. CREATE. INNOVATE.<br />
              <span className="text-blue-600"> BUILD THE FUTURE.</span>

            </h1>

            <p className="text-lg text-slate-600 max-w-xl leading-relaxed font-medium">
              AIRoboticsShala empowers young minds to explore AI, Robotics, and Coding through hands-on learning and real-world projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl shadow-blue-200 transition-all flex items-center gap-2 group">
              EXPLORE PROGRAMS
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-all">
              JOIN AI COMMUNITY
            </button>
          </div>
        </div>

        {/* Right Content - Visuals */}
        <div className=" ">
          <div className="relative z-10 scale-110 lg:translate-x-10">

            <div className="absolute right-0 top-1/2 -translate-y-3/8 flex flex-col gap-6 z-20  backdrop-blur-lg ">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-4 px-6 py-2 rounded-full hover:scale-105 transition-all cursor-default">
                  <div className="w-10 h-10 rounded-full p-2 bg-white flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-oswald font-bold text-[10px] md:text-xs text-[#072B61] tracking-wider uppercase text-nowrap">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Feature List */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

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
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden bg-white selection:bg-blue-100">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl -ml-32 -mb-32"></div>
        <div className="absolute top-1/4 left-1/4 w-full h-full bg-[url('/images/tech-pattern.png')] opacity-5"></div>
      </div>

      <div className=" px-4 md:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            {/* Logo / Subtext */}
            <div className="flex items-center gap-4 animate-fade-in">
              <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-200">
                <Bot className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-blue-600 font-oswald font-bold text-3xl tracking-tighter leading-none">AI</h2>
                <h3 className="text-[#072B61] font-oswald font-bold text-2xl tracking-tighter leading-none">ROBOTIC</h3>
                <h4 className="text-[#072B61] font-oswald font-bold text-xl tracking-tighter leading-none">SHALA</h4>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-oswald font-extrabold text-[#072B61] leading-[1.1] uppercase">
              CODE. CREATE. <br />
              <span className="text-blue-600">INNOVATE.</span> <br />
              BUILD THE FUTURE.
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
        <div className="lg:col-span-6 relative">
          <div className="relative z-10 scale-110 lg:translate-x-10">
            {/* Main Image Container */}
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-[100px] opacity-20 -z-10 animate-pulse"></div>
              <Image
                src="/images/ai-robotics-hero.png"
                alt="Student with AI Robot"
                width={800}
                height={800}
                className="w-full h-auto drop-shadow-2xl relative z-10"
                priority
              />
            </div>

            {/* Floating UI Cards */}
            <div className="absolute top-20 -left-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/50 animate-bounce-slow hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">95%</div>
                <div className="text-xs">
                  <div className="font-bold text-[#072B61]">Success Rate</div>
                  <div className="text-slate-500 italic">Advanced Learning</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 -right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/50 animate-bounce-slow delay-700 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Globe size={20} />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-[#072B61]">Global Standards</div>
                  <div className="text-slate-500 italic">Industry Ready</div>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Feature List */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
            {features.map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/50 hover:scale-105 transition-all cursor-default">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="font-oswald font-bold text-[10px] md:text-xs text-[#072B61] tracking-wider uppercase">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

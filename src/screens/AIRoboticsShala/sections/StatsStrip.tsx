import React from 'react';
import { Users, GraduationCap, Award, MapPin, Globe, Rocket } from 'lucide-react';

const StatsStrip = () => {
  const stats = [
    { icon: <Users size={24} />, value: "5,000+", label: "Young Innovators" },
    { icon: <Rocket size={24} />, value: "200+", label: "Projects Built" },
    { icon: <GraduationCap size={24} />, value: "50+", label: "Expert Mentors" },
    { icon: <Award size={24} />, value: "95%", label: "Skill Improvement" },
    { icon: <Globe size={24} />, value: "25+", label: "Competitions Won" },
    { icon: <MapPin size={24} />, value: "20+", label: "Cities & Growing" },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-24 ">
      <div className="">
        <div className="bg-[#072B61] rounded-[3rem] py-10 px-8 relative overflow-hidden shadow-2xl">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/20 pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-3 group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white backdrop-blur-md group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-oswald font-extrabold text-white leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs font-medium text-blue-200 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;

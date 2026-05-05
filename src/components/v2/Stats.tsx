import React from 'react';
import { Users, GraduationCap, TrendingUp, MapPin } from 'lucide-react';

const Stats = () => {
  const stats = [
    { value: '10,000+', label: 'Happy Students', icon: <Users className="w-10 h-10 text-white/80" /> },
    { value: '500+', label: 'Expert Teachers', icon: <GraduationCap className="w-10 h-10 text-white/80" /> },
    { value: '95%', label: 'Success Rate', icon: <TrendingUp className="w-10 h-10 text-white/80" /> },
    { value: '25+', label: 'Cities & Growing', icon: <MapPin className="w-10 h-10 text-white/80" /> },
  ];

  return (
    <section className="bg-gradient-to-r from-[#0B3C5D] to-[#1E5AA8] py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="bg-white/20 p-4 rounded-xl">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-white mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[#20C997] font-medium text-base">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

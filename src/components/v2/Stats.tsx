import React from 'react';
import { Users, GraduationCap, TrendingUp, MapPin } from 'lucide-react';

const Stats = () => {
  const stats = [
    { value: '10,000+', label: 'Happy Students', icon: <Users size={24} /> },
    { value: '500+', label: 'Expert Teachers', icon: <GraduationCap size={24} /> },
    { value: '95%', label: 'Success Rate', icon: <TrendingUp size={24} /> },
    { value: '25+', label: 'Cities & Growing', icon: <MapPin size={24} /> },
  ];

  return (
    <section className="mb-10 relative z-20 md:px-10 md:mt-20">
      <div className="bg-[linear-gradient(90deg,#052b5b_0%,#0a3c63_20%,#1e5aa8_55%,#062b5b_80%,#062b5b_100%)] md:rounded-full w-full shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 px-2 py-6 relative z-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex items-center justify-start md:justify-center gap-4 text-white p-4 ${index !== stats.length - 1 ? 'lg:border-r lg:border-white/20' : ''
                }`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                {React.cloneElement(stat.icon, { className: "text-white" })}
              </div>
              <div className="text-left">
                <h3 className="font-oswald font-bold text-2xl md:text-3xl tracking-tight leading-none">{stat.value}</h3>
                <p className="text-white/80 text-[9px] md:text-[10px] font-bold uppercase tracking-wider font-oswald leading-tight mt-1 max-w-[100px]">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

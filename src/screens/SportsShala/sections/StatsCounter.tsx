import React from 'react';
import { Users, UserCircle2, Trophy, Bike, Target } from 'lucide-react';

const StatsCounter = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Active Young Athletes' },
    { icon: UserCircle2, value: '50+', label: 'Expert Coaches' },
    { icon: Trophy, value: '200+', label: 'Championship Won' },
    { icon: Bike, value: '25+', label: 'Sports Offered' },
    { icon: Target, value: '100%', label: 'Focus on All-Round Growth' },
  ];

  return (
    <section className="-mb-24 relative z-20">
      <div className="bg-[linear-gradient(90deg,#052B5B_0%,#0A3C63_20%,#166C4A_55%,#1E8A38_80%,_#0D5A4F_100%)] rounded-r-full w-[98%] shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 p-2">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 text-white p-4 ${index !== stats.length - 1 ? 'lg:border-r lg:border-white/20' : ''
                }`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                <stat.icon size={24} className="text-white" />
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

export default StatsCounter;

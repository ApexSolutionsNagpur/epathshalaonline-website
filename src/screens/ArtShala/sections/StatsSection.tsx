import React from 'react';
import { Users, GraduationCap, Palette, Presentation, MapPin } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Users size={24} />,
      number: "2,000+",
      label: "Young Artists"
    },
    {
      icon: <GraduationCap size={24} />,
      number: "100+",
      label: "Expert Mentors"
    },
    {
      icon: <Palette size={24} />,
      number: "500+",
      label: "Artworks Created"
    },
    {
      icon: <Presentation size={24} />,
      number: "50+",
      label: "Exhibitions"
    },
    {
      icon: <MapPin size={24} />,
      number: "25+",
      label: "Cities & Growing"
    }
  ];

  return (
    <section className="mb-10 relative z-20 md:px-10">
      <div className="bg-[linear-gradient(90deg,#ff4f87_0%,#C71E6E_20%,#ff4f87_55%,#C71E6E_80%,#C71E6E_100%)] md:rounded-full w-full shadow-2xl ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 px-2 py-6">
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
                <h3 className="font-oswald font-bold text-2xl md:text-3xl tracking-tight leading-none">{stat.number}</h3>
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

export default StatsSection;

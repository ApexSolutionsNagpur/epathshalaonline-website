import React from 'react';
import { Users, GraduationCap, Palette, Presentation, MapPin } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Users size={32} />,
      number: "2,000+",
      label: "Young Artists"
    },
    {
      icon: <GraduationCap size={32} />,
      number: "100+",
      label: "Expert Mentors"
    },
    {
      icon: <Palette size={32} />,
      number: "500+",
      label: "Artworks Created"
    },
    {
      icon: <Presentation size={32} />,
      number: "50+",
      label: "Exhibitions"
    },
    {
      icon: <MapPin size={32} />,
      number: "25+",
      label: "Cities & Growing"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-[#ff4f87] to-[#ff759f] pt-10 pb-14 md:py-12 px-4 md:px-14 max-md:mb-16">
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center text-white space-y-3 group"
            >
              <div className="p-3 bg-white/20 rounded-2xl group-hover:bg-white group-hover:text-[#ff4f87] transition-all duration-300">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold font-heading">
                  {stat.number}
                </h3>
                <p className="text-white/80 font-heading text-sm font-medium uppercase tracking-wider">
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

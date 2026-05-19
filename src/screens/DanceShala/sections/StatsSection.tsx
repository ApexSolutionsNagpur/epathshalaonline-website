'use client';
import React from 'react';
import { IoPeople, IoStar, IoMusicalNotes, IoLocation, IoTrophy } from 'react-icons/io5';

const StatsSection = () => {
  const stats = [
    {
      icon: <IoPeople size={24} />,
      value: '2,000+',
      label: 'Young Dancers',
    },
    {
      icon: <IoStar size={24} />,
      value: '100+',
      label: 'Expert Instructors',
    },
    {
      icon: <IoTrophy size={24} />,
      value: '500+',
      label: 'Performances',
    },
    {
      icon: <IoMusicalNotes size={24} />,
      value: '25+',
      label: 'Dance Styles',
    },
    {
      icon: <IoLocation size={24} />,
      value: '20+',
      label: 'Cities & Growing',
    },
  ];

  return (
    <section className="mb-10 relative z-20 md:px-10">
      <div className="bg-[linear-gradient(90deg,#6A0DAD_0%,#3B0A57_20%,#FF7A00_55%,#3B0A57_80%,#3B0A57_100%)] md:rounded-full w-full shadow-2xl relative overflow-hidden">
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-dance-orange/10 rounded-full -mr-16 -mt-16 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-dance-royal/20 rounded-full -ml-16 -mb-16 blur-2xl" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 px-2 py-6 relative z-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex items-center justify-start md:justify-center gap-4 text-white p-4 ${index !== stats.length - 1 ? 'lg:border-r lg:border-white/20' : ''
                }`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                {React.cloneElement(stat.icon as React.ReactElement<any>, { className: "text-white" })}
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

export default StatsSection;

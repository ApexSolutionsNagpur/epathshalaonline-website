'use client';
import React from 'react';
import { IoPeople, IoStar, IoMusicalNotes, IoLocation, IoTrophy } from 'react-icons/io5';

const StatsSection = () => {
  const stats = [
    {
      icon: <IoPeople className="w-8 h-8" />,
      value: '2,000+',
      label: 'Young Dancers',
    },
    {
      icon: <IoStar className="w-8 h-8" />,
      value: '100+',
      label: 'Expert Instructors',
    },
    {
      icon: <IoTrophy className="w-8 h-8" />,
      value: '500+',
      label: 'Performances',
    },
    {
      icon: <IoMusicalNotes className="w-8 h-8" />,
      value: '25+',
      label: 'Dance Styles',
    },
    {
      icon: <IoLocation className="w-8 h-8" />,
      value: '20+',
      label: 'Cities & Growing',
    },
  ];

  return (
    <section className=" -mt-12 relative z-20">
      <div className="bg-dance-purple  p-8 shadow-2xl overflow-hidden relative">
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-dance-orange/10 rounded-full -mr-16 -mt-16 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-dance-royal/20 rounded-full -ml-16 -mb-16 blur-2xl" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center relative z-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center justify-center space-x-4">
              <div className="p-3 bg-white/5 border border-white/10 rounded-full text-dance-orange">
                {stat.icon}
              </div>
              <div className="text-left">
                <h4 className="text-2xl font-black text-white leading-none mb-1">
                  {stat.value}
                </h4>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
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

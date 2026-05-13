'use client';
import React from 'react';
import { Users, Layout, GraduationCap, Trophy, Brain } from 'lucide-react';

const FeatureStrip = () => {
  const items = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'EXPERT DANCE FACULTY',
      desc: 'Trained & Experienced',
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'VARIETY OF STYLES',
      desc: 'Explore. Learn. Master.',
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'PERSONALIZED TRAINING',
      desc: 'For all age groups',
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'STAGE OPPORTUNITIES',
      desc: 'Perform & Grow',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'HOLISTIC DEVELOPMENT',
      desc: 'Mind, Body & Expression',
    },
  ];

  return (
    <section className="bg-dance-purple py-10 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-dance-royal/30 blur-[100px] -z-0" />
      
      <div className=" px-4 md:px-24 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="mb-4 text-dance-orange group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-1">
                {item.title}
              </h3>
              <p className="text-gray-400 text-[10px] font-medium uppercase tracking-tight">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip;

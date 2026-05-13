import React from 'react';
import { UserCheck, Building2, Target, Trophy, HeartPulse } from 'lucide-react';

const FeatureStrip = () => {
  const items = [
    { icon: UserCheck, title: 'Expert Coaches', subtitle: 'Trained & Certified' },
    { icon: Building2, title: 'World-Class Facilities', subtitle: 'Train in the best environment' },
    { icon: Target, title: 'Personalized Training', subtitle: 'For every skill level' },
    { icon: Trophy, title: 'Tournament Exposure', subtitle: 'Local to National Level' },
    { icon: HeartPulse, title: 'Holistic Development', subtitle: 'Mind, Body & Character' },
  ];

  return (
    <section className="bg-[#062B5B] py-8">
      <div className=" px-4 md:px-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4 text-white group cursor-default">
              <div className="p-3 rounded-lg bg-[#95C11F]/20 group-hover:bg-[#95C11F]/40 transition-colors">
                <item.icon className="text-[#95C11F]" size={28} />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-oswald font-bold text-lg leading-none uppercase tracking-wide">{item.title}</h4>
                <p className="text-gray-400 text-xs font-medium font-body">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip;

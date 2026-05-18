import React from 'react';
import { Users, BookOpen, Microscope, Award, Trophy } from 'lucide-react';

const FeatureStrip = () => {
  const features = [
    {
      icon: <Users size={28} className="text-white" />,
      title: "EXPERT MENTORS",
      desc: "Industry Professionals"
    },
    {
      icon: <BookOpen size={28} className="text-white" />,
      title: "PRACTICAL LEARNING",
      desc: "Build Real-World Projects"
    },
    {
      icon: <Microscope size={28} className="text-white" />,
      title: "ADVANCED TECHNOLOGY",
      desc: "AI, Robotics & IoT Labs"
    },
    {
      icon: <Award size={28} className="text-white" />,
      title: "CERTIFICATIONS",
      desc: "Boost Your Profile"
    },
    {
      icon: <Trophy size={28} className="text-white" />,
      title: "COMPETITIONS & EVENTS",
      desc: "Showcase Your Talent"
    }
  ];

  return (
    <section className="bg-[#072B61] py-8 px-6 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none"></div>

      <div className="px-4 md:px-24  flex flex-wrap justify-between items-center gap-y-8">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center  gap-4 group cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md group-hover:bg-blue-500 transition-all duration-300">
              {feature.icon}
            </div>
            <div className="space-y-0.5">
              <h4 className="font-oswald font-bold text-white text-sm md:text-base tracking-wide uppercase leading-tight">
                {feature.title}
              </h4>
              <p className="text-blue-200 text-[10px] md:text-xs font-medium">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureStrip;

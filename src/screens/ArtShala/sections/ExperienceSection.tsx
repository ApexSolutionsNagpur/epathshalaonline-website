import React from 'react';
import { Paintbrush, LayoutGrid, Presentation, Trophy, Users } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      icon: <Paintbrush size={40} className="text-[#ff4f87]" />,
      title: "EXPERT GUIDANCE",
      desc: "Learn from experienced artists and mentors."
    },
    {
      icon: <LayoutGrid size={40} className="text-[#fca311]" />,
      title: "DIVERSE MEDIUMS",
      desc: "Explore drawing, painting, sketching, digital art and more."
    },
    {
      icon: <Presentation size={40} className="text-[#7209b7]" />,
      title: "CREATIVE PROJECTS",
      desc: "Work on exciting projects that build confidence and skills."
    },
    {
      icon: <Trophy size={40} className="text-[#4361ee]" />,
      title: "SHOWCASE & SHINE",
      desc: "Exhibit your artwork and get recognized for your talent."
    },
    {
      icon: <Users size={40} className="text-[#f72585]" />,
      title: "ART COMMUNITY",
      desc: "Connect with like-minded creators and grow together."
    }
  ];

  return (
    <section className="bg-[#f3f3f3] py-24 px-4 md:px-14">
      <div className="">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132c6b] font-heading uppercase tracking-wider">
            WHAT YOU'LL EXPERIENCE AT <span className="text-[#ff4f87]">ARTSHALA</span>
          </h2>
          <div className="w-24 h-1 bg-[#ff4f87] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col items-center text-center gap-6 border border-white hover:border-pink-100 transition-all hover:shadow-xl group h-full"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#fff4f7] flex items-center justify-center group-hover:scale-110 transition-transform">
                {exp.icon}
              </div>
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-[#132c6b] text-sm tracking-widest uppercase">
                  {exp.title}
                </h3>
                <p className="text-[#5f6675] text-sm font-heading leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

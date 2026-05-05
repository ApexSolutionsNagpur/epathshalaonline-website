import React from 'react';
import { BookOpen, Lightbulb, Trophy, Brain, Clock } from 'lucide-react';

const DiscoverExcellence = () => {
  const cards = [
    {
      title: 'Expert Faculty',
      desc: 'Learn from experienced educators dedicated to your success.',
      icon: <BookOpen className="w-10 h-10 text-white mb-4" />,
      gradient: 'from-[#2F80ED] to-[#1E5AA8]'
    },
    {
      title: 'Focus on Concepts',
      desc: 'Concept clarity through interactive and engaging learning.',
      icon: <Lightbulb className="w-10 h-10 text-white mb-4" />,
      gradient: 'from-[#28A745] to-[#20C997]'
    },
    {
      title: 'Champion Mindset',
      desc: 'Building discipline, confidence and a winning attitude.',
      icon: <Trophy className="w-10 h-10 text-white mb-4" />,
      gradient: 'from-[#FF7A18] to-[#FFC107]'
    },
    {
      title: 'Future Ready Skills',
      desc: 'Preparing you with skills for tomorrow\'s opportunities.',
      icon: <Brain className="w-10 h-10 text-white mb-4" />,
      gradient: 'from-[#6F42C1] to-[#9B5DE5]'
    },
    {
      title: 'Flexible Learning',
      desc: 'Study at your pace with live & recorded sessions.',
      icon: <Clock className="w-10 h-10 text-white mb-4" />,
      gradient: 'from-[#00A8A8] to-[#20C997]'
    }
  ];

  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3C5D] mb-4">
            DISCOVER <span className="text-[#1E5AA8]">EXCELLENCE</span> AT OUR ONLINE SCHOOL
          </h2>
          {/* <p className="text-base text-[#6B7280] max-w-2xl mx-auto">
            At our online school, we focus on holistic development, academic rigor, and nurturing future leaders.
          </p> */}
          <div className="w-24 h-1 bg-[#FFC107] mx-auto mt-6 rounded-full "></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-8 text-center text-white shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
            >
              <div className="flex justify-center">{card.icon}</div>
              <h3 className="font-bold text-lg mb-3">{card.title}</h3>
              <p className="text-sm opacity-90 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverExcellence;

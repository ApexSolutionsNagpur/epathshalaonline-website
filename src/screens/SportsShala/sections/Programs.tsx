import React from 'react';
import Image from 'next/image';
import { Trophy, Users, Star, ArrowRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: 'FOOTBALL',
      description: 'Build stamina, teamwork & game intelligence.',
      grades: 'Grades 1 - 12',
      image: '/images/sportsshala/football.png',
      icon: '⚽',
    },
    {
      title: 'BASKETBALL',
      description: 'Enhance agility, teamwork & leadership skills.',
      grades: 'Grades 1 - 12',
      image: '/images/sportsshala/basketball.png',
      icon: '🏀',
    },
    {
      title: 'BADMINTON',
      description: 'Improve speed, reflexes & concentration.',
      grades: 'Grades 1 - 12',
      image: '/images/sportsshala/Badminton.png',
      imgPos: 'object-[0%_0%]',
      icon: '🏸',
    },
    {
      title: 'CRICKET',
      description: 'Build technique, strategy & match temperament.',
      grades: 'Grades 1 - 12',
      image: '/images/sportsshala/cricket.png',
      imgPos: 'object-[100%_0%]',
      icon: '🏏',
    },
    {
      title: 'ATHLETICS',
      description: 'Build speed, strength & endurance.',
      grades: 'Grades 1 - 12',
      image: '/images/sportsshala/athletics.png',
      imgPos: 'object-[0%_100%]',
      icon: '🏃',
    },
    {
      title: 'FITNESS & YOGA',
      description: 'Improve flexibility, focus & overall well-being.',
      grades: 'All Grades',
      image: '/images/sportsshala/yoga.jpg',
      imgPos: 'object-[100%_100%]',
      icon: '🧘',
    },
  ];

  return (
    <section className="bg-[#F7F7F7] py-20">
      <div className="px-4 md:px-14">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-[#062B5B] uppercase tracking-wider inline-block relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-[#95C11F]">
            OUR SPORTS <span className="text-[#95C11F]">PROGRAMS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col"
            >
              <div className="relative h-94 md:h-60 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className={`object-fit transition-transform duration-500 group-hover:scale-110 ${program.imgPos || ''}`}
                />
                {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-md">
                  <span className="text-2xl">{program.icon}</span>
                </div> */}
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-oswald font-bold text-2xl text-[#062B5B] mb-3 uppercase tracking-wide group-hover:text-[#95C11F] transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-500 font-body text-sm mb-6 flex-grow leading-relaxed">
                  {program.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <span className="text-[#95C11F] font-bold text-sm uppercase tracking-wider font-oswald">{program.grades}</span>
                  <div className="text-[#062B5B] opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#95C11F] hover:bg-[#84ac1b] text-white font-oswald font-bold py-4 px-10 rounded-lg shadow-lg hover:scale-105 transition-all text-lg uppercase tracking-widest">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;

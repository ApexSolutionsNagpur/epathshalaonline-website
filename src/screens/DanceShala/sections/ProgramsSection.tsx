'use client';
import React from 'react';
import Image from 'next/image';
import { IoMusicalNotes, IoFlash, IoStar, IoHeart, IoSparkles, IoPeople } from 'react-icons/io5';

const ProgramsSection = () => {
  const programs = [
    {
      title: 'HIP HOP',
      desc: 'High energy moves that build style, rhythm and confidence.',
      grades: 'Grades 1 - 12',
      image: '/images/danceshala/hip_hop.png',
      icon: <IoFlash className="w-6 h-6" />,
      color: 'bg-purple-600',
    },
    {
      title: 'BOLLYWOOD',
      desc: 'Dance on popular hits and learn the art of performance.',
      grades: 'Grades 1 - 12',
      image: '/images/danceshala/bollywood.png',
      icon: <IoMusicalNotes className="w-6 h-6" />,
      color: 'bg-orange-500',
    },
    {
      title: 'CONTEMPORARY',
      desc: 'Express emotions through fluid movements and creative choreography.',
      grades: 'Grades 1 - 12',
      image: '/images/danceshala/contemporary.png',
      icon: <IoSparkles className="w-6 h-6" />,
      color: 'bg-purple-500',
    },
    {
      title: 'FREESTYLE',
      desc: 'Unleash your individuality with freestyle and improv moves.',
      grades: 'Grades 1 - 12',
      image: '/images/danceshala/freestyle.png',
      iconComp: <IoStar className="w-6 h-6" />,
      color: 'bg-orange-600',
    },
    {
      title: 'CLASSICAL',
      desc: 'Discover the grace of Indian classical dance forms.',
      grades: 'Grades 1 - 12',
      image: '/images/danceshala/classical.png',
      iconComp: <IoHeart className="w-6 h-6" />,
      color: 'bg-purple-800',
    },
    {
      title: 'KIDS DANCE',
      desc: 'Fun-filled sessions to develop coordination, rhythm & joy.',
      grades: 'Ages 4 - 10',
      image: '/images/danceshala/childrendance.png',
      iconComp: <IoPeople className="w-6 h-6" />,
      color: 'bg-orange-400',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="px-4 md:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-dance-purple font-oswald uppercase">
            OUR <span className="text-dance-orange">DANCE PROGRAMS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {programs.map((prog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-96 md:h-60 overflow-hidden">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* <div className={`absolute bottom-4 left-4 p-2 rounded-xl text-white shadow-lg ${prog.color}`}>
                  {prog.icon || prog.iconComp}
                </div> */}
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-dance-purple mb-2 uppercase tracking-tight">
                    {prog.title}
                  </h3>
                  <p className="text-dance-text-sec text-xs leading-relaxed mb-4">
                    {prog.desc}
                  </p>
                </div>
                <div className="mt-auto">
                  <p className="text-[10px] font-bold text-dance-orange uppercase bg-dance-peach inline-block px-3 py-1 rounded-full">
                    {prog.grades}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-orange text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:shadow-2xl transition-all">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

import React from 'react';
import { GraduationCap, Code, Globe, Compass, Star, Rocket } from 'lucide-react';
import Link from 'next/link';

const AcademicPrograms = () => {
  const programs = [
    {
      title: 'CBSE Program',
      desc: 'Structured learning aligned with CBSE curriculum.',
      grade: 'Grade 1 - 12',
      icon: <GraduationCap className="w-8 h-8 text-[#1E5AA8]" />
    },
    {
      title: 'JEE & NEET Foundation',
      desc: 'Strong foundation for engineering & medical aspirants.',
      grade: 'Grade 6 - 12',
      icon: <Rocket className="w-8 h-8 text-[#00A8A8]" />
    },
    {
      title: 'STEM & Coding',
      desc: 'Build problem solving and coding skills for the future.',
      grade: 'Grade 3 - 12',
      icon: <Code className="w-8 h-8 text-[#FFC107]" />
    },
    {
      title: 'Spoken English',
      desc: 'Improve communication skills with confidence.',
      grade: 'Grade 3 - 12',
      icon: <Globe className="w-8 h-8 text-[#6F42C1]" />
    },
    {
      title: 'Career Guidance',
      desc: 'Personalized guidance to help you choose the right path.',
      grade: 'Grade 8 - 12',
      icon: <Compass className="w-8 h-8 text-[#28A745]" />
    },
    {
      title: 'Discipline & Life Skills',
      desc: 'Build habits and values for lifelong success.',
      grade: 'All Grades',
      icon: <Star className="w-8 h-8 text-[#FF7A18]" />
    }
  ];

  return (
    <section className="py-10 px-4 md:px-10 bg-[#F5F7FA]">
      <div className="">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#0B3C5D] mb-4">
            OUR <span className="text-[#1E5AA8]">ACADEMIC PROGRAMS</span>
          </h2>
          <div className="w-24 h-1 bg-[#FFC107] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl px-2 py-4 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2 group text-center"
            >
              <div className="bg-gray-50 w-16 mx-auto h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#EBF3FE] transition-colors">
                {program.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1F2937] mb-3">{program.title}</h3>
              <p className="text-[#6B7280] mb-6 min-h-[3rem]">{program.desc}</p>

              <div className="flex items-center justify-center pt-6 border-t border-gray-100">
                <span className="text-xs font-semibold text-[#1E5AA8] bg-blue-50 px-3 py-1 rounded-full">
                  {program.grade}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="#"
            className="inline-block bg-[#1E5AA8] hover:bg-[#0B3C5D] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-all duration-300 text-base"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;

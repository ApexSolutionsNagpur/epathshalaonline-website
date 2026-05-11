import React from 'react';
import Image from 'next/image';

const Programs = () => {
  const programs = [
    {
      title: "AI EXPLORERS",
      desc: "Introduction to Artificial Intelligence and Machine Learning concepts.",
      grades: "Grades 5 - 8",
      image: "/images/programs/ai-explorers.png",
      borderColor: "hover:border-blue-500"
    },
    {
      title: "ROBOTICS BEGINNERS",
      desc: "Learn robotics fundamentals and build your first robot projects.",
      grades: "Grades 5 - 10",
      image: "/images/programs/robotics-beginners.png",
      borderColor: "hover:border-blue-500"
    },
    {
      title: "CODING MASTERS",
      desc: "Master Python, logic building and problem solving through exciting challenges.",
      grades: "Grades 5 - 12",
      image: "/images/programs/coding-masters.png",
      borderColor: "hover:border-blue-500"
    },
    {
      title: "IOT & AUTOMATION",
      desc: "Explore IoT, sensors and automation to build smart real-world solutions.",
      grades: "Grades 7 - 12",
      image: "/images/programs/iot.png",
      borderColor: "hover:border-blue-500"
    },
    {
      title: "AI & DATA SCIENCE",
      desc: "Dive into data, analytics and AI models to solve real-life problems.",
      grades: "Grades 8 - 12",
      image: "/images/programs/data-science.png",
      borderColor: "hover:border-blue-500"
    },
    {
      title: "GAME & APP DEVELOPMENT",
      desc: "Design and code your own games and mobile apps.",
      grades: "Grades 6 - 12",
      image: "/images/programs/game-dev.png",
      borderColor: "hover:border-blue-500"
    }
  ];

  return (
    <section className="bg-slate-50 py-24 px-4 md:px-24 ">
      <div className="">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-oswald font-extrabold text-[#072B61] uppercase">
            OUR <span className="text-blue-600">AI & ROBOTICS</span> PROGRAMS
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {programs.map((program, i) => (
            <div
              key={i}
              className={`bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200 border-2 border-transparent ${program.borderColor} transition-all duration-300 hover:-translate-y-2 group`}
            >
              <div className="h-48 relative overflow-hidden bg-slate-100">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col justify-between h-56">
                <div className="space-y-3">
                  <h3 className="font-oswald font-bold text-lg text-[#072B61] leading-tight uppercase group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed">
                    {program.desc}
                  </p>
                </div>
                <div className="pt-4 mt-auto">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {program.grades}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-xl shadow-lg transition-all uppercase tracking-widest">
            VIEW ALL PROGRAMS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;

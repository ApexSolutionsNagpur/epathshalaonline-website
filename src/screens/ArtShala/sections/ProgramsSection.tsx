import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      title: "SKETCHING",
      grades: "Grades 1 - 12",
      image: "/images/artshala/sketching.webp",
      bgColor: "bg-pink-50"
    },
    {
      title: "PAINTING",
      grades: "Grades 1 - 12",
      image: "/images/artshala/painting.webp",
      bgColor: "bg-yellow-50"
    },
    {
      title: "DIGITAL ART",
      grades: "Grades 5 - 12",
      image: "/images/artshala/digital_art.webp",
      bgColor: "bg-blue-50"
    },
    {
      title: "SCULPTURE & CLAY",
      grades: "Grades 5 - 12",
      image: "/images/artshala/sculpturen_clay.webp",
      bgColor: "bg-green-50"
    },
    {
      title: "MANDALA & FOLK ART",
      grades: "Grades 1 - 12",
      image: "/images/artshala/folk_art.webp",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="bg-[#f3f3f3] py-10 px-4 md:px-14">
      <div className="">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132c6b] font-heading uppercase tracking-wider">
            OUR <span className="text-[#ff4f87]">ART PROGRAMS</span>
          </h2>
          <div className="w-20 h-1 bg-[#ff4f87] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`${program.bgColor} rounded-[25px] overflow-hidden shadow-sm hover:shadow-lg transition-all group border border-transparent hover:border-pink-200`}
            >
              <div className="h-96 md:h-64 relative overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-fit group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-[#132c6b] text-base leading-tight">
                    {program.title}
                  </h3>
                  <p className="text-[#5f6675] text-sm font-heading">
                    {program.grades}
                  </p>
                </div>
                <div className="flex justify-end">
                  <button className="w-10 h-10 rounded-full border-2 border-[#ff4f87] flex items-center justify-center text-[#ff4f87] hover:bg-[#ff4f87] hover:text-white transition-colors">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-[#ff4f87] to-[#ff759f] hover:opacity-90 text-white font-heading font-bold py-4 px-12 rounded-full shadow-lg shadow-pink-100 transition-all text-lg uppercase tracking-widest">
            VIEW ALL PROGRAMS
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Play } from 'lucide-react';

const WhyChoose = () => {
  const benefits = [
    "Hands-on learning with real robots & AI tools",
    "Industry-relevant skills for future careers",
    "Encourages creativity, logic & innovation",
    "Projects, hackathons & competitions",
    "Personalized mentorship & guidance",
    "Safe, engaging & future-ready environment"
  ];

  return (
    <section className="bg-white pt-12 pb-36 md:py-10 px-4 md:pr-24 ">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Column 1: Robot Image & Benefits */}
          <div className="lg:col-span-5 flex flex-col md:flex-row justify-between ">
            <Image
              src="/images/roboticshala/airboticshala.webp"
              alt="Advanced Robot"
              width={300}
              height={300}
              className="object-contain  h-full  group-hover:scale-105 transition-transform duration-500"
            />

            <div className="space-y-6">
              <h2 className="text-3xl font-oswald font-extrabold text-[#072B61] leading-tight uppercase">
                WHY CHOOSE
                <span className="text-blue-600"> AIROBOTICSSHALA?</span>
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={20} />
                    <span className="text-slate-600 font-medium text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Video Card */}
          <div className="lg:col-span-4 relative group">
            <div className="relative h-[350px] md:h-[350px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/roboticshala/buildingideas.webp"
                alt="Robotics Class"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-2xl shadow-white/50 cursor-pointer hover:scale-110 transition-transform active:scale-95 group/btn">
                  <Play size={32} fill="currentColor" className="ml-1 text-[#072B61]" />
                </div>
                <div className="mt-8 space-y-2">
                  <h3 className="text-white text-3xl font-oswald font-extrabold uppercase tracking-tight leading-none">
                    Building Ideas Today,
                  </h3>
                  <p className="text-white text-3xl font-oswald font-extrabold uppercase tracking-tight leading-none opacity-90">
                    Leading Tomorrow
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Testimonial */}
          <div className="lg:col-span-3 h-full flex flex-col">
            <div className="bg-[#072B61] rounded-[3rem] p-10 flex-grow relative overflow-hidden flex flex-col justify-between group shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-blue-500/10 transition-colors">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C14.8079 14 13.017 12.2091 13.017 10V5H21.017V14H19.017V16H21.017C22.1216 16 23.017 16.8954 23.017 18V21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017V14H4.017C1.80787 14 0.017 12.2091 0.017 10V5H8.017V14H6.017V16H8.017C9.12157 16 10.017 16.8954 10.017 18V21H1.017Z" />
                </svg>
              </div>

              <div className="relative z-10 space-y-2">
                <div className="text-white text-5xl font-serif leading-none italic opacity-30">“</div>
                <p className="text-white text-lg md:text-xl font-medium leading-relaxed italic opacity-90">
                  AIRoboticsShala has transformed the way my son thinks and learns. The projects are amazing and the mentors are truly inspiring!
                </p>
              </div>

              <div className="relative z-10 pt-2 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-400">
                  <Image
                    src="/images/parenttestimonial.webp"
                    alt="Sneha Kapoor"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-oswald font-bold text-lg leading-none mb-1">Sneha Kapoor</h4>
                  <p className="text-blue-300 text-sm">Parent</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

import React from 'react';
import Image from 'next/image';

const SuccessSection = () => {
  return (
    <section className="py-16 md:py-14 px-4 md:px-28 bg-white overflow-hidden">
      <div className=" mx-auto">
        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-16 items-end">
          <div className="space-y-4">
            <span className="text-[#FF7A18] font-heading font-bold text-sm tracking-widest uppercase">
              20+ YEARS OF EXCELLENCE
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3C5D] leading-tight font-heading">
              LEADING CBSE ACADEMIC <br className="hidden md:block" /> SUCCESS FOR TWO DECADES
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="text-[#5F6675] text-base md:text-sm leading-relaxed font-body max-w-xl">
              ePathshala Online CBSE School is built on a foundation of trust and proven results. Our technology-enabled infrastructure and experienced faculty ensure that every student receives the individual attention they deserve.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column - Large Vertical Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-full min-h-[350px] md:min-h-[500px] group">
              <Image
                src="/images/studentwinimg.png"
                alt="Students Success"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Right Column - Image + Vision/Mission Cards */}
          <div className="lg:col-span-6 flex flex-col gap-8">

            {/* Top Horizontal Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[250px] md:h-[450px] group">
              <Image
                src="/images/studentwinimg.png"
                alt="Students Celebration"
                fill
                className="object- transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Bottom Vision/Mission Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-fit">
              {/* Our Vision Card */}
              <div className="bg-[#F8F9FA] p-8 rounded-2xl border-l-4 border-[#FFC107] shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-[2px] bg-[#1E5AA8]"></div>
                    <span className="text-[#1E5AA8] font-heading font-bold text-[10px] tracking-widest uppercase">
                      ACADEMIC FOCUS
                    </span>
                  </div>
                  <h3 className="text-[#0B3C5D] font-heading font-bold text-2xl">OUR VISION</h3>
                  <p className="text-[#5F6675] text-sm leading-relaxed font-body">
                    To provide high-quality CBSE education that is accessible, inclusive, and tailored to every child's potential.
                  </p>
                </div>
              </div>

              {/* Our Mission Card */}
              <div className="bg-[#F8F9FA] p-8 rounded-2xl border-l-4 border-[#FFC107] shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-[2px] bg-[#1E5AA8]"></div>
                    <span className="text-[#1E5AA8] font-heading font-bold text-[10px] tracking-widest uppercase">
                      ACADEMIC FOCUS
                    </span>
                  </div>
                  <h3 className="text-[#0B3C5D] font-heading font-bold text-2xl">OUR MISSION</h3>
                  <p className="text-[#5F6675] text-sm leading-relaxed font-body">
                    To empower students through structured academic support, skill development, and personal mentoring for future readiness.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;

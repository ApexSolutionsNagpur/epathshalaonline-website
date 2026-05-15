"use client";

import React from 'react';
import Slider from 'react-slick';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import DemoClassModal from './DemoClassModal';

const CustomPrevArrow = (props: { onClick?: React.MouseEventHandler<HTMLButtonElement> }) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#0B3C5D] hover:bg-[#1E5AA8] hover:text-white transition-colors"
    >
      <ChevronLeft size={24} />
    </button>
  );
};

const CustomNextArrow = (props: { onClick?: React.MouseEventHandler<HTMLButtonElement> }) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#0B3C5D] hover:bg-[#1E5AA8] hover:text-white transition-colors"
    >
      <ChevronRight size={24} />
    </button>
  );
};

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    customPaging: () => (
      <div className="w-3 h-3 mx-1 rounded-full bg-gray-300 mt-8"></div>
    )
  };

  const reviews = [
    {
      name: 'Neha Sharma',
      role: 'Parent',
      content: 'ePathshala has transformed the way my child learns. The teachers are supportive and their approach to concepts is excellent.',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      name: 'Arjun Verma',
      role: 'Student, Grade 10',
      content: 'The regular feedback and live classes keep me motivated. I feel more confident and focused on my goals.',
      avatar: 'https://i.pravatar.cc/150?img=11'
    },
    {
      name: 'Priya Singh',
      role: 'Student, Grade 12',
      content: 'The JEE foundation course here is amazing. The faculty breaks down complex problems into very simple steps.',
      avatar: 'https://i.pravatar.cc/150?img=5'
    }
  ];

  return (
    <section className="py-32 px-4 md:px-14 bg-white overflow-hidden max-md:mb-1">
      <div className="">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#0B3C5D] mb-4">
            VOICES OF OUR PROUD <span className="text-[#1E5AA8]">STUDENTS & PARENTS</span>
          </h2>
          <div className="w-24 h-1 bg-[#FFC107] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start px-4">
          <div className="lg:col-span-2 relative ">
            <Slider {...settings} className="testimonial-slider ">
              {reviews.map((review, index) => (
                <div key={index} className="px-4 py-4 h-[300px]">
                  <div className="bg-white rounded-2xl p-3 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow h-full flex flex-col">
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 text-[#FFC107] fill-[#FFC107]" />
                      ))}
                    </div>
                    <p className="text-[#6B7280] text-base mb-8 italic flex-grow">
                      {`"${review.content}"`}
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#1E5AA8]"
                      />
                      <div>
                        <h4 className="font-bold text-[#1F2937] text-base">{review.name}</h4>
                        <p className="text-sm text-[#00A8A8] font-medium">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Right Side CTA Card */}
          <div
            className="rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden shadow-2xl group h-full flex flex-col justify-between bg-cover bg-center"
            style={{ backgroundImage: "url('/images/journeyimage.png')" }}
          >
            {/* Dark Overlay for better readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D] via-[#0B3C5D]/40 to-transparent"></div>

            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-500"></div>

            <div className="relative z-10">
              <h3 className="text-md md:text-lg font-extrabold mb-4 leading-tight">
                Start Your Journey to <br />
                <span className="text-[#FFC107]">Greatness</span> Together
              </h3>
              <p className="text-white/80 mb-8 text-xs leading-relaxed">
                Join thousands of students who are building a better future with ePathshala.
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="relative z-10 bg-[#FFC107] hover:bg-[#E0A800] text-[#1F2937] font-bold py-4 px-8 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 text-center block w-fit text-base"
            >
              ENROLL NOW
            </button>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .testimonial-slider .slick-dots li.slick-active div {
          background-color: #1E5AA8;
          transform: scale(1.2);
        }
      `}} />
      <DemoClassModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Testimonials;

"use client";

import React from 'react';
import Slider from 'react-slick';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const CustomPrevArrow = (props: any) => {
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

const CustomNextArrow = (props: any) => {
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
  const settings = {
    dots: true,
    infinite: true,
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
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#0B3C5D] mb-4">
            VOICES OF OUR PROUD <span className="text-[#00A8A8]">STUDENTS & PARENTS</span>
          </h2>
          <div className="w-24 h-1 bg-[#FFC107] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto relative px-4 md:px-0">
          <Slider {...settings} className="testimonial-slider">
            {reviews.map((review, index) => (
              <div key={index} className="px-4 py-4">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow h-full flex flex-col">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-[#FFC107] fill-[#FFC107]" />
                    ))}
                  </div>
                  <p className="text-[#6B7280] text-base mb-8 italic flex-grow">
                    "{review.content}"
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
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .testimonial-slider .slick-dots li.slick-active div {
          background-color: #1E5AA8;
          transform: scale(1.2);
        }
      `}} />
    </section>
  );
};

export default Testimonials;

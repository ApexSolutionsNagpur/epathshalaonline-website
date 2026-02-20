"use client";

import Image from "next/image";
import { FC } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamData: TeamMember[] = [
  {
    name: "Ryan Cole",
    role: "Head Coach",
    image: "/images/heroImages.jpg",
  },
  {
    name: "Amanda Lee",
    role: "Assistant Coach",
    image: "/images/heroImages.jpg",
  },
  {
    name: "Daniel Smith",
    role: "Fitness Trainer",
    image: "/images/heroImages.jpg",
  },
];

const TeamSection: FC = () => {
  return (
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {teamData.map((member, index) => (
            <div key={index} className="relative group overflow-hidden">
              {/* Image */}
              <Image
                src={member.image}
                alt={member.name}
                width={500}
                height={600}
                className="w-full h-[500px] object-cover"
                priority={index === 0}
              />

              <div
                className={` text-white absolute inset-0 bg-black/60 
            flex flex-col justify-center items-center 
            text-center px-6 pb-10
            transition-transform duration-500
                           translate-y-full group-hover:translate-y-0`}
              >
                <h3 className="text-3xl font-bold uppercase tracking-wide">
                  {member.name}
                </h3>

                <p className="mt-2 text-lg tracking-widest">{member.role}</p>

                {/* Social Icons */}
                <div className="flex gap-4 mt-6">
                  <div className="bg-blue-600 p-3 rounded-full cursor-pointer hover:scale-110 transition">
                    <FaFacebookF />
                  </div>
                  <div className="bg-blue-500 p-3 rounded-full cursor-pointer hover:scale-110 transition">
                    <FaXTwitter />
                  </div>
                  <div className="bg-blue-700 p-3 rounded-full cursor-pointer hover:scale-110 transition">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default TeamSection;

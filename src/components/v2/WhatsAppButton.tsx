"use client";

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917887889306"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-28 md:bottom-10 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-[#1F2937] px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
        Chat with us!
      </span>
    </a>
  );
};

export default WhatsAppButton;

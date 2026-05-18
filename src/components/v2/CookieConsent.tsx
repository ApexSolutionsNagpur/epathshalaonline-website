"use client";

import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[60] animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-6 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-orange-100 p-2.5 rounded-xl">
            <span className="text-xl">🍪</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 font-heading">Cookie Settings</h3>
        </div>
        
        <p className="text-sm text-gray-600 leading-relaxed font-body">
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <button
            onClick={handleAccept}
            className="w-full sm:flex-1 bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-[#1F2937] font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-orange-200 active:scale-95 cursor-pointer"
          >
            Accept All
          </button>
          <button
            onClick={handleDecline}
            className="w-full sm:flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-gray-200 active:scale-95 cursor-pointer"
          >
            Reject All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

"use client"
import { useState, useEffect } from 'react';

export const useFirstScrollPopup = (delay: number = 500) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if popup has already been shown in this session
    const hasShown = sessionStorage.getItem('hasShownDemoPopup');

    if (hasShown) return;

    const handleScroll = () => {
      // Small delay after first scroll starts
      setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasShownDemoPopup', 'true');
      }, delay);

      // Remove listener after first scroll detection
      window.removeEventListener('scroll', handleScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [delay]);

  const closeModal = () => setIsOpen(false);

  return { isOpen, closeModal };
};

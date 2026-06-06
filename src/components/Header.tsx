import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import { Phone, Calendar } from 'lucide-react';

const Header = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-brand-navy-dark/95 shadow-md py-3' : 'bg-brand-navy py-4'
    } text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-0">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="OMEDU Logo" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>
        </div>

        {/* Contact Links & CTA Section */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a 
            href="tel:+919130130460" 
            className="hidden md:flex items-center gap-2 text-sm text-slate-300 hover:text-brand-gold transition-colors font-semibold"
          >
            <Phone className="h-4 w-4 text-brand-gold" />
            +91 91301 30460
          </a>
          
          <button
            onClick={onBookClick}
            className="bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold py-2 px-3 sm:px-5 rounded-lg shadow-md transition-all duration-200 active:scale-95 flex items-center gap-1.5 text-[11px] sm:text-sm font-display cursor-pointer whitespace-nowrap shrink-0"
          >
            <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Get Free Counselling</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

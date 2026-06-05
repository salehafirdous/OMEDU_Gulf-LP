import React from 'react';
import { Phone, ArrowRight, MessageCircle } from 'lucide-react';

const MobileStickyCTA = ({ onBookClick }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-gradient-to-r from-brand-navy-dark to-brand-navy shadow-[0_-4px_20px_rgba(0,0,0,0.15)] z-40 border-t border-white/10 px-3 py-2.5 flex items-center justify-between gap-2">
      
      <div className="flex-1 shrink-0">
        <p className="text-[11px] font-bold text-white uppercase tracking-wider">Free Gulf</p>
        <p className="text-[13px] font-black text-brand-gold leading-tight font-display">Consultation</p>
      </div>

      <div className="flex gap-2">
        <a 
          href="https://wa.me/971505204207?text=Hi,%20I%20want%20MBBS%20consultation"
          target="_blank"
          rel="noreferrer"
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform text-xs"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>

        <button 
          onClick={() => {
            const formSection = document.getElementById('lead-form-section');
            if (formSection) {
              formSection.scrollIntoView({ behavior: 'smooth' });
            } else {
              onBookClick();
            }
          }}
          className="bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-1 shadow-sm active:scale-95 transition-transform text-xs"
        >
          Book Free <ArrowRight className="h-3 w-3" />
        </button>
      </div>

    </div>
  );
};

export default MobileStickyCTA;

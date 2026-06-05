import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.svg';

const Footer = ({ onCtaClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-slate-100 pt-10 pb-6 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-navy/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="inline-block">
              <img src={logo} alt="OM Consultants Logo" className="h-10 sm:h-12 w-auto object-contain drop-shadow-md" />
            </div>
            <p className="text-sm leading-relaxed text-white/90 font-medium">
              India's pioneer in European medical education since 2000. Sharjah UAE office serving Gulf NRI families. MBBS in Georgia, Czech Republic, Poland & Italy. 4,000+ Indian doctors created.
            </p>
            <div className="flex items-center gap-2 text-brand-gold text-sm font-bold bg-white/5 w-fit px-3 py-1.5 rounded-lg border border-white/10">
              <ShieldCheck className="h-4 w-4" /> 24 Years of Trust
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-bold font-display text-lg tracking-wide uppercase">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm group">
                <Phone className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block text-white font-medium mb-1">UAE (Sharjah)</span>
                  <a href="tel:+971505204207" className="hover:text-white transition-colors block">+971 5052 04207</a>
                  <span className="block text-white font-medium mt-2 mb-1">India</span>
                  <a href="tel:+919130130460" className="hover:text-white transition-colors block">+91 91301 30460</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm group">
                <Mail className="h-5 w-5 text-brand-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@omconsultants.com" className="hover:text-white transition-colors">info@omconsultants.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm mt-4 pt-4 border-t border-white/10">
                <a href="https://wa.me/971505204207" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold transition-colors">
                  WhatsApp Sharjah Office →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Destinations */}
          <div className="space-y-6">
            <h4 className="text-white font-bold font-display text-lg tracking-wide uppercase">Destinations</h4>
            <ul className="space-y-3">
              {[
                "MBBS in Georgia",
                "MBBS Czech Republic",
                "MBBS in Poland",
                "MBBS in Italy"
              ].map((link, i) => (
                <li key={i}>
                  <button onClick={onCtaClick} className="text-sm hover:text-brand-pink-light transition-colors flex items-center gap-1 group cursor-pointer text-left">
                    <ChevronRight className="h-3 w-3 text-brand-gold/50 group-hover:text-brand-gold transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform">{link}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location Map */}
          <div className="space-y-6">
            <h4 className="text-white font-bold font-display text-lg tracking-wide uppercase">Sharjah Office</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                <span>SRTIP Building C, Office 02-01,<br/>Sharjah, UAE</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                <span>Mon-Sat: 9:00 AM - 6:00 PM<br/>Friday: 9:00 AM - 12:00 PM</span>
              </li>
            </ul>
            <div className="mt-4 w-full h-40 bg-slate-800 rounded-xl overflow-hidden border border-white/20 relative shadow-inner">
              <iframe 
                src="https://maps.google.com/maps?q=OM%20Consultants%20(FZC),%20SRTIP%20Building%20C,%20Sharjah&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/80 font-medium">
          <p>© {currentYear} OM Consultants. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { School, MapPin, Award, ArrowUpRight, GraduationCap } from 'lucide-react';
import partnerUniversitiesImg from '../assets/partner_universities.png';

const YoutubeIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837z" />
    <polygon points="9.545 15.568 15.818 12 9.545 8.432 9.545 15.568" fill="white" />
  </svg>
);

const PartnersAndTrust = ({ onCtaClick }) => {
  const universities = [
    {
      name: "Tbilisi State Medical University",
      location: "Tbilisi, Georgia",
      est: "Est. 1918",
      accredited: "NMC, WHO, WFME",
      desc: "The largest medical university in Georgia and Eastern Europe. Over 100 years of academic excellence."
    },
    {
      name: "UniCamillus University of Rome",
      location: "Rome, Italy",
      est: "Est. 2017",
      accredited: "EU Approved, WHO",
      desc: "Internationally renowned medical university dedicated to health and medical sciences in Rome."
    },
    {
      name: "Emory University",
      location: "Atlanta, USA (Partner Programs)",
      est: "Est. 1836",
      accredited: "World-Class Clinical Partner",
      desc: "Prominent research institution facilitating student exchange and advanced medical curricula."
    },
    {
      name: "ALTE University",
      location: "Tbilisi, Georgia",
      est: "Est. 2002",
      accredited: "NMC, WHO, EECA Approved",
      desc: "Leading modern school of medicine in Tbilisi offering highly practical, English-medium training."
    }
  ];

  const locations = [
    "Kerala", "Tamil Nadu", "Delhi", "Mumbai", "Ahmedabad",
    "Hyderabad", "Bangalore", "UAE", "Qatar", "Kuwait",
    "Bahrain", "Oman", "Saudi Arabia"
  ];

  return (
    <>
      <section className="bg-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Partner Universities Headline */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy font-display sm:text-4xl">
              Our Prestigious Partner Universities
            </h2>
            <p className="mt-4 text-lg text-slate-700">
              Secure direct admission to top-ranked medical institutions in Europe and globally.
            </p>
          </div>

          {/* University Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {universities.map((uni, index) => (
              <div
                key={index}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-100 hover:border-brand-pink/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-brand-pink/5 rounded-bl-full group-hover:bg-brand-pink/15 transition-all duration-300"></div>
                <div>
                  <div className="bg-brand-navy/5 text-brand-navy group-hover:bg-brand-pink/10 group-hover:text-brand-pink-dark p-3 rounded-xl w-fit transition-all duration-300">
                    <School className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold text-brand-navy mt-4 group-hover:text-brand-pink-dark transition-colors duration-300 font-display">
                    {uni.name}
                  </h3>

                  <div className="flex items-center gap-1 text-slate-600 text-xs mt-2">
                    <MapPin className="h-3 w-3" /> {uni.location}
                  </div>

                  <p className="text-sm text-slate-700 mt-4 leading-relaxed">
                    {uni.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-xs font-semibold bg-brand-navy/5 text-brand-navy-light px-2.5 py-1 rounded-md">
                    {uni.est}
                  </span>
                  <span className="text-xs font-bold text-brand-pink-dark flex items-center gap-1">
                    <Award className="h-3.5 w-3.5" /> {uni.accredited}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos Banner (Full Viewport Width) */}
      <div className="w-full border-y border-slate-100 bg-[#f5d5da]">
        <img
          src={partnerUniversitiesImg}
          alt="Prestigious Partner Universities Logos"
          className="w-full h-auto block mx-auto"
        />
      </div>

      <section className="bg-white pt-8 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Student Stories CTA Row */}
          <div className="bg-gradient-to-r from-brand-navy to-brand-navy-light rounded-3xl p-8 md:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 bg-white/95 text-brand-navy border border-white/40 rounded-full py-1 px-3.5 text-[10px] sm:text-xs font-bold tracking-wider font-display shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                YOUTUBE CHANNELS & MEDIA
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Hear Directly From Our Students In Georgia
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Discover student life, mess facilities, hostel walkthroughs, and clinical internship experiences directly from our active student communities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 shrink-0 w-full lg:w-auto">
              <a
                href="https://www.youtube.com/@omconsultants/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-4 sm:py-3.5 sm:px-6 rounded-xl shadow-lg transition-all duration-200 hover:shadow-red-600/20 active:scale-98 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer font-display w-full sm:w-auto"
              >
                <YoutubeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span>Watch Student Stories</span>
                <ArrowUpRight className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" />
              </a>

              <button
                onClick={onCtaClick}
                className="bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold py-2.5 px-4 sm:py-3.5 sm:px-6 rounded-xl shadow-lg transition-all duration-200 hover:shadow-brand-gold/10 active:scale-98 text-sm sm:text-base cursor-pointer font-display flex items-center justify-center w-full sm:w-auto"
              >
                Get Free Counselling
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Row Section with Marquee Effect (Full Viewport Width) */}
      <div className="w-full border-t border-slate-100 pt-8 pb-12 bg-white">
        <p className="text-center text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-widest mb-6">
          Trusted by 4,000+ families from:
        </p>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden py-4 bg-slate-50 border-y border-slate-100">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Infinite Marquee Content */}
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
            {/* First loop */}
            {locations.map((loc, idx) => (
              <span key={`l1-${idx}`} className="text-brand-navy font-semibold text-sm sm:text-base flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-pink shrink-0"></span>
                {loc}
              </span>
            ))}
            {/* Second loop (duplication to make it seamless) */}
            {locations.map((loc, idx) => (
              <span key={`l2-${idx}`} className="text-brand-navy font-semibold text-sm sm:text-base flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-pink shrink-0"></span>
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersAndTrust;

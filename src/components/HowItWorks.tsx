import React from 'react';
import { PhoneCall, FileSearch, FileCheck, PlaneTakeoff, ShieldCheck, ArrowRight, MapPin, GraduationCap } from 'lucide-react';

const HowItWorks = ({ onCtaClick }) => {
  const steps = [
    {
      num: "01",
      title: "Free Counselling Session",
      desc: "Speak with our expert counsellor about your score, academic profile, budget, and goals. Online, offline, or WhatsApp.",
      icon: PhoneCall,
      badge: "FREE"
    },
    {
      num: "02",
      title: "University Shortlist",
      desc: "We match you to the best-fit Georgian university based on your profile and budget. You receive a personalised comparison within 24 hours of enquiry.",
      icon: FileSearch
    },
    {
      num: "03",
      title: "Application & Offer Letter",
      desc: "We manage the full application process. You receive your official university offer letter within days.",
      icon: FileCheck
    },
    {
      num: "04",
      title: "Visa Documentation & Processing",
      desc: "Our team handles every document. We've processed hundreds of Georgian student visas. Full guidance, zero rejections on our watch.",
      icon: MapPin
    },
    {
      num: "05",
      title: "Travel & Arrival Support",
      desc: "Charter or airline booking coordination. Airport pickup arranged. Accommodation ready before you land. You arrive, not scramble.",
      icon: PlaneTakeoff
    },
    {
      num: "06",
      title: "On-Ground Support for All 6 Years",
      desc: "Food mess, local transport, health insurance, bank account, 24/7 counsellor support. We stay with you from Day 1 to graduation.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy font-display sm:text-4xl">
            From NEET Result to Georgia in 45–60 Days. We Handle Everything.
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            A seamless, fully managed 6-step process ensuring zero stress for students and parents.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 rounded-full z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 relative z-10 mb-8">
            {/* Top Row (Steps 1, 2, 3) */}
            {steps.slice(0, 3).map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-navy text-white font-black text-xl flex items-center justify-center rounded-2xl shadow-lg transform rotate-3 group-hover:rotate-0 transition-all">
                    {step.num}
                  </div>
                  {step.badge && (
                    <div className="absolute -top-3 right-4 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm animate-pulse">
                      {step.badge}
                    </div>
                  )}
                  <div className="pt-6">
                    <div className="bg-brand-navy/5 text-brand-navy p-3 rounded-xl w-fit mb-4 group-hover:bg-brand-pink/10 group-hover:text-brand-pink-dark transition-colors">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2 font-display leading-tight">{step.title}</h3>
                    <p className="text-slate-800 text-sm leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 relative z-10">
            {/* Bottom Row (Steps 4, 5, 6) */}
            {steps.slice(3, 6).map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index + 3} className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-navy text-white font-black text-xl flex items-center justify-center rounded-2xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-all">
                    {step.num}
                  </div>
                  <div className="pt-6">
                    <div className="bg-brand-navy/5 text-brand-navy p-3 rounded-xl w-fit mb-4 group-hover:bg-brand-pink/10 group-hover:text-brand-pink-dark transition-colors">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2 font-display leading-tight">{step.title}</h3>
                    <p className="text-slate-800 text-sm leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button 
            onClick={onCtaClick}
            className="bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold py-4 px-8 rounded-xl shadow-xl transition-all duration-200 hover:shadow-brand-gold/20 active:scale-98 flex items-center gap-2 mx-auto text-lg font-display"
          >
            Start My MBBS Application Now <ArrowRight className="h-5 w-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;

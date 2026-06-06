import React from 'react';
import { Star, PlayCircle, Quote, CheckCircle2 } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Being from Dubai, I was worried about the complexity Gulf to India to Georgia. OM Edu's Sharjah team coordinated everything including bank transfers. My daughter is now in 2nd year MBBS. We should have called sooner.",
      name: "Nadia A.",
      role: "Dubai → Georgia · MBBS Year 2",
      badge: "Gulf NRI Student"
    },
    {
      quote: "Living in Qatar, I couldn't trust any random consultant. OM Edu's 24 years and the Sharjah office gave me confidence. Every cost disclosed upfront. No hidden fees. My son walks onto graduation stage next year in Georgia.",
      name: "Ramachandran K.",
      role: "Parent · Qatar → Georgia",
      badge: "Verified Gulf Parent"
    },
    {
      quote: "I studied A-Levels in UAE. OM Consultants explained exactly what I needed the NEET qualifying score requirement for India practise, all clearly before I committed. They handled everything. No surprise fees. Georgia was the right decision.",
      name: "Arjun V.",
      role: "A-Levels UAE → TSMU Georgia",
      badge: "Gulf NRI Graduate"
    }
  ];

  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy font-display sm:text-4xl">
            What Gulf Families Say After Choosing OM Consultants
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative group hover:border-brand-pink/30 hover:shadow-lg transition-all">
              <Quote className="absolute top-6 right-6 h-12 w-12 text-brand-pink/10 group-hover:text-brand-pink/20 transition-colors" />

              <div className="flex gap-1 text-brand-gold mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="text-slate-900 text-base leading-relaxed mb-8 relative z-10 font-medium">
                "{t.quote}"
              </p>

              <div className="mt-auto pt-6 border-t border-slate-200">
                <p className="font-bold text-brand-navy font-display text-lg">{t.name}</p>
                <p className="text-slate-600 text-sm mt-1 font-medium">{t.role}</p>
                <div className="flex items-center gap-1.5 mt-3 text-emerald-600 text-xs font-semibold tracking-wide">
                  <CheckCircle2 className="h-3.5 w-3.5" /> {t.badge}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center px-4 sm:px-0">
          <a
            href="https://www.youtube.com/@omconsultants"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-navy-dark text-white font-bold py-3 px-4 sm:py-4 sm:px-8 rounded-xl shadow-lg transition-all duration-200 active:scale-98 font-display w-full sm:w-auto text-sm sm:text-base"
          >
            <PlayCircle className="h-4 w-4 sm:h-5 sm:w-5 text-brand-gold" /> Watch Gulf Student Video Stories →
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

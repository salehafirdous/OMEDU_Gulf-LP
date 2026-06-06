import React from 'react';
import LeadForm from './LeadForm';
import { CheckCircle2, ShieldCheck, ArrowRight, ClipboardCheck, PlayCircle } from 'lucide-react';

const HeroSection = ({ onSubmitSuccess, onCtaClick }) => {

  const promises = [
    { text: "100% free consultation", highlight: "Sharjah office, WhatsApp or video call. Zero fees." },
    { text: "Your Gulf counsellor calls you back within 2 hours", highlight: "in Gulf Standard Time." },
    { text: "Every cost disclosed before you commit to anything", highlight: "Zero hidden fees in 24 years." },
    { text: "Sharjah office open", highlight: "Mon-Sat." },
    { text: "Our on-ground Georgia team picks up your child at the airport on Day 1", highlight: "They are never alone." },
    { text: "Indian food", highlight: "every single day. 20 years running. Not occasionally. Every day." }
  ];

  return (
    <section className="relative bg-[#bd919f] py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background visual decorations */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-pink/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Left Column: Headline, Trust Promises, Hero Image */}
          <div className="lg:col-span-7 text-white space-y-8 lg:pr-6">

            {/* Admissions Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full py-1.5 px-4 text-xs sm:text-sm font-semibold text-brand-gold tracking-wider animate-pulse font-display">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-gold"></span>
              2026 INTAKE OPEN NOW. SEATS CLOSING SOON.
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-white font-display">
                Free MBBS Consultation for <span className="text-brand-gold">Gulf Families</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-100 font-medium leading-relaxed">
                Book your free consultation this week. Students who call now will be enrolled in Georgia by September 2026. Miss this intake - wait 12 more months.
              </p>
            </div>

            {/* Subheadline */}
            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl border-l-4 border-brand-gold pl-4 py-1 bg-white/5 rounded-r-lg">
              MBBS in Georgia, Czech Republic, Poland & Italy. WHO recognised. NMC approved.
            </p>

            {/* Trust Promises Checklist */}
            <div className="space-y-3 bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="font-semibold text-brand-gold text-lg mb-2 flex items-center gap-2 font-display uppercase tracking-wide text-sm">
                <ShieldCheck className="h-5 w-5" /> OUR PROMISE TO EVERY GULF FAMILY
              </h3>
              <ul className="space-y-3">
                {promises.map((promise, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-100 leading-snug">
                    <CheckCircle2 className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white font-semibold">{promise.text}</strong> {promise.highlight}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-white/10 mt-4">
                <a href="https://www.youtube.com/@omconsultants/videos" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors font-medium text-sm">
                  <PlayCircle className="w-5 h-5" /> Watch Student Stories
                </a>
              </div>
            </div>

            {/* Trust Promise CTA Link */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onCtaClick}
                className="bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all duration-200 hover:shadow-brand-gold/15 active:scale-98 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer font-display"
              >
                <ClipboardCheck className="h-5 w-5" /> Get Free Counselling Now <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Mandatory Hero Image Panel */}
            <div className="relative pt-6 max-w-lg lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-transparent to-transparent z-10 rounded-2xl"></div>
              <div className="absolute top-4 left-4 z-20 bg-brand-navy/90 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                OM Consultant Student in Georgia Campus
              </div>
              <img
                src="/StudentImg.jpg"
                alt="OmEdu Students Graduation"
                className="w-full h-[320px] sm:h-[400px] object-cover rounded-2xl border border-white/10 shadow-2xl relative"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <p className="text-sm font-semibold font-display">Original Pioneer Since 2000</p>
                <p className="text-xs text-white/90">Trusted by families nationwide and across the Gulf for over two decades.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Lead Form */}
          <div id="lead-form-section" className="lg:col-span-5 w-full sticky top-24">
            <LeadForm onSubmitSuccess={onSubmitSuccess} source="Hero Section Form" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

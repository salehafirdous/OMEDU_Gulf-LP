import React from 'react';
import { Award, Heart, HelpCircle, Shield, Globe, Star, Users, CheckCircle } from 'lucide-react';

const WhyGeorgia = ({ onCtaClick }) => {

  const features = [
    {
      title: "NMC / WHO Recognised",
      desc: "Degree fully valid. Recognised in 180+ countries.",
      icon: Award
    },
    {
      title: "No Donation. No Capitation.",
      desc: "Total 6-year cost a fraction of private colleges.",
      icon: Shield
    },
    {
      title: "100% English Teaching",
      desc: "All lectures, practicals, exams in English. No language barrier. Strong clinical training.",
      icon: Globe
    },
    {
      title: "Safe, Comfortable Country",
      desc: "Georgia is safe for Gulf students. Warm climate.",
      icon: Heart
    },
    {
      title: "Government Recognised",
      desc: "Direct relationship with Georgian Education Ministry. All universities government-approved.",
      icon: Users
    }
  ];

  return (
    <section className="bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight font-display sm:text-4xl">
            Gulf's Favourite MBBS Destination And For Very Good Reason
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-900 font-medium">
            85% of our students choose Georgia. Lower total cost than any private colleges. No donation. No capitation fee.
          </p>
        </div>

        {/* 5-column grid for Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-pink/20 transition-all duration-300 group flex flex-col"
              >
                <div className="bg-brand-navy/5 text-brand-navy group-hover:bg-brand-pink/10 group-hover:text-brand-pink-dark p-3.5 rounded-xl w-fit transition-all duration-300">
                  <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-brand-navy mt-4 group-hover:text-brand-pink-dark transition-colors duration-300 font-display leading-tight">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-800 mt-2 leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Founder Story Highlight Card - Premium Visual Treatment */}
        <div className="relative bg-brand-navy-dark rounded-3xl overflow-hidden shadow-2xl border border-brand-gold/30 p-8 md:p-12 lg:p-14">
          {/* Overlay glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl -ml-20 -mb-20"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">

              <div className="inline-flex items-center gap-1 bg-brand-gold/20 text-brand-gold border border-brand-gold/30 rounded-full py-1 px-3.5 text-xs font-bold tracking-wider font-display">
                <Star className="h-3.5 w-3.5 fill-current" />
                24+ YEARS OF EXCELLENCE
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display leading-tight">
                We Were First <span className="text-brand-gold">24 Years</span> Before It Became Mainstream
              </h3>

              <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
                OM Consultants introduced Georgian medical education to Indian students in 2003 - before any competitor. That's two decades of relationships with universities, the Education Ministry, and on-ground infrastructure that no new entrant can replicate.
              </p>

              <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
                When you choose OM Consultants, you're not choosing a broker. You're choosing the original team that built the pathway.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-stretch sm:items-center lg:items-end justify-center">
              <div className="bg-brand-navy border border-white/10 p-6 rounded-2xl text-center w-full max-w-sm mb-6 shadow-lg">
                <p className="text-3xl font-black text-brand-gold font-display">Year 2003</p>
                <p className="text-xs text-white/90 mt-1 uppercase tracking-wider font-bold">First Batch Sent to Georgia</p>
                <div className="w-12 h-0.5 bg-brand-pink mx-auto my-3"></div>
                <p className="text-xs text-slate-100">Establishing the trust and standard for Indian students abroad.</p>
              </div>

              <button
                onClick={onCtaClick}
                className="bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all duration-200 hover:shadow-brand-gold/15 active:scale-98 text-sm sm:text-base cursor-pointer text-center font-display w-full max-w-sm"
              >
                Claim Your Free Counselling →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyGeorgia;

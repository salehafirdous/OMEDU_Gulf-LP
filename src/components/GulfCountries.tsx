import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Building2 } from 'lucide-react';

const GulfCountries = () => {
  const countries = [
    { name: "UAE", icon: MapPin },
    { name: "Qatar", icon: MapPin },
    { name: "Kuwait", icon: MapPin },
    { name: "Bahrain", icon: MapPin },
    { name: "Oman", icon: MapPin },
    { name: "Saudi Arabia", icon: MapPin }
  ];

  return (
    <section className="bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy font-display sm:text-4xl">
            OM Consultants Serves Every Gulf Country Directly
          </h2>
          <p className="mt-4 text-lg text-slate-900 font-medium">
            UAE, Qatar, Kuwait, Bahrain, Oman, Saudi Arabia our Sharjah team covers all Gulf families. Gulf timezone-aware, Malayalam and Tamil counselling available.
          </p>
        </div>

        {/* 6-column country grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {countries.map((country, index) => {
            const Icon = country.icon;
            return (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-brand-pink/30 hover:shadow-md transition-all group">
                <div className="bg-brand-pink/10 p-3 rounded-xl group-hover:bg-brand-pink/20 transition-colors">
                  <Icon className="h-8 w-8 text-brand-pink-dark group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-brand-navy font-semibold font-display text-sm tracking-wide">{country.name}</span>
              </div>
            );
          })}
        </div>

        {/* Sharjah Office Highlight Box */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold"></div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex-1 space-y-4 text-brand-navy">
              <h3 className="text-xl sm:text-2xl font-bold font-display flex items-center gap-2 text-brand-navy">
                <Building2 className="h-6 w-6 text-brand-gold" /> Our Sharjah Office Walk In or Call
              </h3>

              <div className="space-y-3 pl-1">
                <div className="flex items-start gap-3 text-slate-900 font-medium">
                  <MapPin className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                  <p>SRTIP Building C, Office 02-01, Sharjah, UAE</p>
                </div>
                <div className="flex items-start gap-3 text-slate-900 font-medium">
                  <Clock className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                  <p>Open: Mon–Sat 9AM–6PM GST (Friday: 9AM–12PM)</p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-4 pt-4 border-t border-slate-100">
                  <a href="tel:+971505204207" className="flex items-center gap-2 text-brand-navy hover:text-brand-pink-dark transition-colors font-semibold">
                    <Phone className="h-4 w-4" /> +971 5052 04207 / 9130130460
                  </a>
                  <a href="https://wa.me/971505204207" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-500 transition-colors font-semibold">
                    <MessageCircle className="h-4 w-4" /> WhatsApp anytime
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GulfCountries;

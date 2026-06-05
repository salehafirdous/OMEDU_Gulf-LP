import React from 'react';
import { Utensils, Home, Plane, HeartPulse, Landmark, Bus, FileText, Headset } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      title: "Food Mess & Canteen",
      desc: "Home food from Day 1.",
      icon: Utensils,
      emoji: "🍛"
    },
    {
      title: "Accommodation Support",
      desc: "Safe, vetted housing arranged near the university before you land.",
      icon: Home,
      emoji: "🏠"
    },
    {
      title: "Charter & Airline Support",
      desc: "20 years of group travel coordination.",
      icon: Plane,
      emoji: "✈️"
    },
    {
      title: "Health Insurance Tie-Up",
      desc: "Students covered from day of arrival. Health emergencies won't become financial emergencies.",
      icon: HeartPulse,
      emoji: "🏥"
    },
    {
      title: "Bank Account Assistance",
      desc: "Local Georgian bank account set up without bureaucratic hurdles. Fee transfers made easy.",
      icon: Landmark,
      emoji: "🏦"
    },
    {
      title: "Local Transport",
      desc: "Airport transfer and city transport arranged from Day 1.",
      icon: Bus,
      emoji: "🚌"
    },
    {
      title: "Visa & Documentation",
      desc: "Complete documentation support by our team working directly with the Georgian Education Ministry.",
      icon: FileText,
      emoji: "📋"
    },
    {
      title: "24/7 Counsellor Support",
      desc: "Our counsellors don't vanish after admission. Students and parents can reach us anytime for 6 years.",
      icon: Headset,
      emoji: "📱"
    }
  ];

  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy font-display sm:text-4xl">
            You're Not Just Getting an Admission. You're Getting a Complete System.
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            End-to-end infrastructure specifically built for our students over the last 24 years.
          </p>
        </div>

        {/* 4x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac, index) => {
            const IconComponent = fac.icon;
            return (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-brand-pink/30 hover:shadow-lg transition-all duration-300 group">
                <div className="bg-brand-pink/10 p-3.5 rounded-xl text-brand-navy w-fit mb-4 group-hover:bg-brand-pink/20 transition-colors">
                  <IconComponent className="h-6 w-6 text-brand-pink-dark" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2 font-display">{fac.title}</h3>
                <p className="text-slate-800 text-sm leading-relaxed font-medium">{fac.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Facilities;

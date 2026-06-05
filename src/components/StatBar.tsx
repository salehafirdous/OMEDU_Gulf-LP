import React from 'react';
import { Award, Users, AwardIcon, Landmark, HelpCircle, GraduationCap } from 'lucide-react';

const StatBar = () => {
  const stats = [
    {
      value: "4,000+",
      label: "Doctors Practising",
      sub: "Graduated Worldwide"
    },
    {
      value: "24 Yrs",
      label: "Pioneer Since 2000",
      sub: "Trusted Expertise"
    },
    {
      value: "₹0",
      label: "Consultation Fee",
      sub: "Always Free Advisory"
    },
    {
      value: "Sharjah",
      label: "Gulf Office Open",
      sub: "Walk In or Call"
    }
  ];

  return (
    <div className="bg-brand-navy-dark py-10 px-4 sm:px-6 lg:px-8 border-t border-b border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient from-brand-navy-light/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-4 divide-y-0 divide-x-0 lg:divide-x divide-white/10">
          
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-2 flex flex-col justify-center items-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-gold font-display transition-transform duration-300 group-hover:scale-105">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-white mt-1 group-hover:text-brand-pink transition-colors duration-300">
                {stat.label}
              </div>
              <div className="text-xs text-white/85 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default StatBar;

import React from 'react';
import { Calculator, ArrowRight, MessageCircle, AlertCircle } from 'lucide-react';

const FeeTransparency = ({ onCtaClick }) => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 transform origin-top hidden lg:block"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center max-w-4xl mx-auto mb-8">

          <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight font-display sm:text-4xl">
            MBBS Abroad vs India Private College vs Gulf College The Honest Comparison Gulf Families Were Never Shown.
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Same WHO recognised degree at the end. See exactly where the difference goes.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden mb-8">
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="bg-slate-50 p-6 text-sm font-bold text-slate-500 uppercase tracking-wider border-b border-r border-slate-200 w-1/4">
                    Factor
                  </th>
                  <th className="bg-white p-6 text-base font-bold text-slate-600 border-b border-r border-slate-200 w-1/4 text-center">
                    Gulf Private Medical College
                  </th>
                  <th className="bg-white p-6 text-base font-bold text-slate-600 border-b border-r border-slate-200 w-1/4 text-center">
                    India Private Medical College
                  </th>
                  <th className="bg-brand-navy p-6 text-lg font-black text-white border-b border-brand-navy-dark w-1/4 text-center shadow-inner relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl -mr-10 -mt-10"></div>
                    Georgia MBBS via OM Consultants
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* Row 1 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-semibold text-brand-navy border-r border-slate-100 bg-slate-50/30">
                    Total 6-Year Cost
                  </td>
                  <td className="p-6 text-slate-700 border-r border-slate-100 text-center">
                    <span className="font-bold text-lg text-slate-800">AED 8,00,000–12,00,000+</span>
                  </td>
                  <td className="p-6 text-slate-700 border-r border-slate-100 text-center">
                    <span className="font-bold text-lg text-slate-800">₹80 Lakhs – ₹1.2 Crore</span>
                  </td>
                  <td className="p-6 text-center bg-brand-pink/10 relative">
                    <div className="absolute inset-y-0 left-0 w-1 bg-brand-pink-dark"></div>
                    <span className="font-black text-xl text-brand-navy-dark">₹35–40 Lakhs</span>
                    <p className="text-sm font-semibold text-brand-pink-dark mt-1">≈ AED 1,55,000</p>
                    <p className="text-xs text-slate-600 mt-1">All inclusive</p>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-semibold text-brand-navy border-r border-slate-100 bg-slate-50/30">
                    Tuition Per Year
                  </td>
                  <td className="p-6 text-slate-700 border-r border-slate-100 text-center">
                    AED 45,000–80,000/yr
                  </td>
                  <td className="p-6 text-slate-700 border-r border-slate-100 text-center">
                    ₹8–15 Lakhs/yr
                  </td>
                  <td className="p-6 text-center bg-brand-pink/10 relative">
                    <div className="absolute inset-y-0 left-0 w-1 bg-brand-pink-dark"></div>
                    <span className="font-bold text-brand-navy-dark">$5,500–8,000/yr</span>
                    <p className="text-xs font-semibold text-brand-pink-dark mt-1">≈ AED 20,000–29,000/yr</p>
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-semibold text-brand-navy border-r border-slate-100 bg-slate-50/30">
                    Capitation / Donation Fee
                  </td>
                  <td className="p-6 text-red-600 font-semibold border-r border-slate-100 text-center">
                    YES<br /><span className="text-xs text-red-500 font-medium">AED 50,000–1,50,000 EXTRA</span>
                  </td>
                  <td className="p-6 text-red-600 font-semibold border-r border-slate-100 text-center">
                    YES<br /><span className="text-xs text-red-500 font-medium">₹10–40 Lakhs EXTRA on top</span>
                  </td>
                  <td className="p-6 text-center bg-emerald-50 relative">
                    <div className="absolute inset-y-0 left-0 w-1 bg-emerald-500"></div>
                    <span className="font-black text-emerald-600 text-lg">ZERO</span>
                    <p className="text-xs text-emerald-700 font-medium mt-1">Guaranteed. Not one rupee.</p>
                  </td>
                </tr>
                {/* Row 4 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-semibold text-brand-navy border-r border-slate-100 bg-slate-50/30">
                    Accommodation (6 years)
                  </td>
                  <td className="p-6 text-slate-700 border-r border-slate-100 text-center">
                    <span className="font-medium text-slate-800">AED 60,000–1,20,000 extra</span><br />
                    <span className="text-xs text-slate-500">(Gulf rates)</span>
                  </td>
                  <td className="p-6 text-slate-700 border-r border-slate-100 text-center">
                    <span className="font-medium text-slate-800">₹6–12 Lakhs</span><br />
                    <span className="text-xs text-slate-500">additional cost</span>
                  </td>
                  <td className="p-6 text-center bg-brand-pink/10 relative">
                    <div className="absolute inset-y-0 left-0 w-1 bg-brand-pink-dark"></div>
                    <span className="font-bold text-brand-navy-dark">Included in ₹35–40L total</span>
                    <p className="text-xs text-slate-600 mt-1">Hostel + mess</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Buttons Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <button
            onClick={onCtaClick}
            className="bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold py-3 px-2 sm:py-3.5 sm:px-8 rounded-xl shadow-lg transition-all duration-200 hover:shadow-brand-gold/20 active:scale-98 flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto justify-center font-display text-sm sm:text-base"
          >
            <Calculator className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" /> 
            <span className="truncate sm:whitespace-normal">Get My Personalised Cost Estimate</span> 
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
          </button>

          <button
            onClick={onCtaClick}
            className="bg-white hover:bg-slate-50 text-brand-navy border border-slate-200 font-bold py-3 px-2 sm:py-3.5 sm:px-8 rounded-xl shadow-sm transition-all duration-200 active:scale-98 flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto justify-center font-display text-[13px] sm:text-base whitespace-nowrap sm:whitespace-normal"
          >
            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" /> 
            <span>Ask a Counsellor About Fees</span> 
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
          </button>
        </div>

        <div className="mt-8 w-fit mx-auto bg-brand-pink/10 border border-brand-pink/20 rounded-xl px-6 py-4 shadow-sm text-center">
          <p className="text-brand-navy font-bold text-sm sm:text-base whitespace-normal sm:whitespace-nowrap">
            Admissions for BBA, BE, MBA, M. Pharm and other fields are also available in other universities.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FeeTransparency;

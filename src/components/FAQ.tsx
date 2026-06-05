import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const FAQ = ({ onCtaClick }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Do Gulf NRI students need NEET for MBBS in Georgia?",
      a: "For Georgia admission itself NEET is NOT mandatory. A-Level, IB, American Diploma and CBSE students can all get direct admission. HOWEVER if your child plans to return to India and practise medicine there, NMC requires a qualifying NEET score (approximately 137+ for general category). OM Consultants' Sharjah counsellors explain this in detail on your first call based on your child's specific career plan."
    },
    {
      q: "Which Gulf education qualifications are accepted for MBBS in Georgia?",
      a: "All of the following are accepted: CBSE / ICSE / State Board (Indian schools in Gulf), A-Levels with Biology & Chemistry, IB Diploma (Science stream), American High School Diploma with SAT/AP sciences, Foundation/Pre-med year completed. Each qualification track has a slightly different process OM Consultants' Sharjah team explains the specific route for your child's qualification on the first free consultation."
    },
    {
      q: "How does OM Consultants' Sharjah office help Gulf families?",
      a: "Our Sharjah office (SRTIP Building C, Office 02-01) is open Monday to Saturday. Gulf families can walk in without an appointment. We speak Malayalam and Tamil. We handle the entire process in Gulf Standard Time no midnight calls. We coordinate bank transfers from Gulf currencies (AED, QAR, KWD), manage Gulf departure logistics, and provide WhatsApp-first communication preferred by Gulf audiences. One team from your city to Georgia."
    },
    {
      q: "Is Georgian MBBS valid in India and Gulf countries?",
      a: "Georgia MBBS is WHO recognised globally and NMC approved by India's own medical council. Graduates can: (1) Return to India, clear FMGE/NExT, and practise as a licensed Indian doctor. (2) Apply for medical licensing in Gulf countries UAE, Qatar, Kuwait, Bahrain, Oman, Saudi Arabia all recognise WHO-approved degrees with their respective licensing pathways."
    },
    {
      q: "How safe is Georgia for Indian students from the Gulf?",
      a: "Georgia consistently ranks among Europe's safest countries. OM Consultants has sent students from the Gulf for 24 years zero major safety incidents. Every student gets airport pickup on Day 1 from our on-ground Georgia team. OM Hostel for girls, health insurance from arrival, 24/7 emergency line. The Indian and Gulf student community in Georgia is large and well-established on every campus."
    },
    {
      q: "Can I get an education loan from India or Gulf for Georgia MBBS?",
      a: "Yes. Indian banks (SBI, PNB, Bank of Baroda) offer education loans for NMC-approved Georgian universities parents in the Gulf can apply for these through India-based documentation. OM Consultants provides complete loan guidance including bank selection, document preparation, and application support. The lower total cost (₹35–40L vs ₹80–120L India private) means a smaller loan and significantly faster repayment."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight font-display sm:text-4xl">
            Every Question Gulf Families Ask Answered Honestly
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Clear, transparent answers about admissions, fees, and safety.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-brand-pink ring-1 ring-brand-pink/20 shadow-md' : 'border-slate-200 hover:border-brand-pink/50'
                  }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className={`font-bold font-display text-base sm:text-lg pr-4 ${isOpen ? 'text-brand-navy' : 'text-slate-800'}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-pink-dark' : 'text-slate-400'}`}>
                    <ChevronDown className="h-6 w-6" />
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out origin-top ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="px-6 pb-6 text-slate-800 leading-relaxed text-sm sm:text-base border-t border-slate-100 pt-4 font-medium">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-8 bg-white rounded-2xl p-8 text-center border border-slate-100 shadow-sm flex flex-col items-center">

          <h3 className="text-xl font-bold text-brand-navy font-display mb-2">Still have questions?</h3>
          <p className="text-slate-800 mb-6 font-medium">Our Sharjah Gulf team is ready to answer any specific queries about your profile.</p>
          <button
            onClick={onCtaClick}
            className="bg-brand-navy hover:bg-brand-navy-dark text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 shadow-lg active:scale-98 font-display cursor-pointer"
          >
            Speak to an Expert Counsellor
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;

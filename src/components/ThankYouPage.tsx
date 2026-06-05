import React from 'react';
import { CheckCircle2, Phone, Calendar, ArrowLeft, ArrowRight, ShieldCheck, Mail } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12.01 2.01c-5.502 0-9.962 4.46-9.962 9.962 0 1.76.458 3.47 1.33 4.975L2.01 22.01l5.228-1.372c1.455.794 3.09 1.213 4.772 1.214 5.5 0 9.96-4.46 9.96-9.962 0-2.666-1.038-5.172-2.924-7.058C17.18 3.048 14.675 2.01 12.01 2.01zm5.88 14.195c-.242.684-1.22 1.25-1.68 1.32-.42.064-.973.11-2.91-.655-2.474-.977-4.062-3.49-4.186-3.654-.124-.165-.92-1.225-.92-2.335 0-1.11.58-1.656.786-1.88.206-.226.454-.282.6-.282.15 0 .298.002.43.007.136.005.32-.05.5-.05.186 0 .343.07.485.41.144.346.495 1.21.538 1.296.042.086.07.185.014.298-.056.113-.085.184-.17.282-.085.1-.184.22-.26.3-.086.083-.177.173-.077.346.1.173.443.73.95 1.182.653.58 1.202.76 1.372.844.17.086.27.07.37-.043.1-.114.428-.497.542-.667.114-.17.228-.14.385-.085.157.057.998.47 1.17.556.17.085.285.127.327.2.042.07.042.41-.2.1.095z" />
  </svg>
);

const ThankYouPage = ({ leadData, onBackClick }) => {
  const openWhatsApp = () => {
    window.open("https://wa.me/919130130460?text=Hi,%20I%20have%20submitted%20my%20form%20for%20MBBS%20Abroad.%20Please%20guide%20me%20on%20next%20steps.", "_blank");
  };

  return (
    <div className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        
        {/* Top visual green/blue panel */}
        <div className="bg-gradient-to-r from-brand-navy to-brand-navy-light p-8 text-white text-center relative">
          <div className="absolute inset-0 bg-radial-gradient from-white/10 to-transparent"></div>
          
          <div className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full p-4 w-fit mx-auto mb-4 animate-bounce">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-black font-display text-brand-gold">
            Counselling Request Received!
          </h1>
          <p className="text-sm text-slate-200 mt-2 max-w-lg mx-auto">
            Thank you for choosing OM Consultants. One of our expert counsellors will reach out to you within 2 hours.
          </p>
        </div>

        {/* Lead submission summary (if available) */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {leadData && (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <h3 className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-3 font-display">
                Submission Summary
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-500 block">Student Name:</span>
                  <strong className="text-slate-800">{leadData.studentName}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Mobile Number:</span>
                  <strong className="text-slate-800">{leadData.mobileNumber}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Email Address:</span>
                  <strong className="text-slate-800">{leadData.emailAddress}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Preferred Course:</span>
                  <strong className="text-brand-pink-dark font-bold">{leadData.preferredCourse}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block font-semibold text-xs">Destination:</span>
                  <strong className="text-slate-800">{leadData.studyDestinationInterest}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Academic Status:</span>
                  <strong className="text-slate-800">{leadData.currentAcademicStatus}</strong>
                </div>
              </div>
            </div>
          )}

          {/* Next Steps Timeline */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-brand-navy font-display">What Happens Next?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/50">
                <div className="text-brand-pink font-bold text-lg font-display mb-1">01</div>
                <h4 className="text-xs font-bold text-slate-800 mb-1 font-display">Document Gathering</h4>
                <p className="text-xs text-slate-500">Have your NEET score card, Class 10 & 12 marksheets ready for evaluation.</p>
              </div>
              <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/50">
                <div className="text-brand-pink font-bold text-lg font-display mb-1">02</div>
                <h4 className="text-xs font-bold text-slate-800 mb-1 font-display">Counsellor Call</h4>
                <p className="text-xs text-slate-500">We'll review your budget, preferred university list, and check eligibility matching.</p>
              </div>
              <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/50">
                <div className="text-brand-pink font-bold text-lg font-display mb-1">03</div>
                <h4 className="text-xs font-bold text-slate-800 mb-1 font-display">Custom Estimate</h4>
                <p className="text-xs text-slate-500">Receive a complete detailed fee structure in Indian Rupees and USD.</p>
              </div>
            </div>
          </div>

          {/* Prompt CTAs */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <button 
              onClick={onBackClick}
              className="border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold py-3 px-5 rounded-xl transition-all duration-200 active:scale-95 text-sm flex items-center justify-center gap-1.5 cursor-pointer font-display"
            >
              <ArrowLeft className="h-4.5 w-4.5" />
              <span>Back to Home</span>
            </button>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <button 
                onClick={openWhatsApp}
                className="bg-whatsapp hover:bg-whatsapp-hover text-white font-bold py-3 px-5 rounded-xl shadow-md transition-all duration-200 active:scale-95 text-sm flex items-center justify-center gap-1.5 cursor-pointer font-display"
              >
                <WhatsAppIcon className="h-4.5 w-4.5 fill-current" />
                <span>Message on WhatsApp</span>
              </button>
              
              <a 
                href="tel:+919130130460"
                className="bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold py-3 px-5 rounded-xl shadow-md transition-all duration-200 active:scale-95 text-sm flex items-center justify-center gap-1.5 cursor-pointer font-display"
              >
                <Phone className="h-4.5 w-4.5 fill-current" />
                <span>Call Counsellor Now</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ThankYouPage;

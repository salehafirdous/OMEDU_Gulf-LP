import React, { useState, useEffect } from 'react';
import { X, BookOpen, Lock, Download } from 'lucide-react';

const ExitIntentPopup = ({ onSubmitSuccess }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if already triggered in this session
    const triggered = sessionStorage.getItem('omedu_exit_intent_triggered');
    if (triggered) {
      setHasTriggered(true);
      return;
    }

    // Desktop Exit Intent (Mouse leave top of window)
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasTriggered) {
        triggerPopup();
      }
    };

    // Mobile Delay (60 seconds)
    const mobileTimer = setTimeout(() => {
      if (!hasTriggered && window.innerWidth <= 768) {
        triggerPopup();
      }
    }, 60000);

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, [hasTriggered]);

  const triggerPopup = () => {
    setIsOpen(true);
    setHasTriggered(true);
    sessionStorage.setItem('omedu_exit_intent_triggered', 'true');
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!phone.trim()) {
      setError('Please enter your WhatsApp number');
      return;
    }

    setIsSubmitting(true);

    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);

      const leadData = {
        studentName: name,
        mobileNumber: phone,
        leadSource: 'Exit Intent E-Book Download',
        submittedAt: new Date().toISOString()
      };

      const existingLeads = JSON.parse(localStorage.getItem('omedu_leads') || '[]');
      existingLeads.push(leadData);
      localStorage.setItem('omedu_leads', JSON.stringify(existingLeads));

      if (onSubmitSuccess) {
        onSubmitSuccess(leadData);
      }
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm transition-opacity duration-300">
      <div className="bg-white rounded-3xl overflow-hidden max-w-md w-full shadow-2xl relative animate-in zoom-in duration-300 scale-100">

        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 p-1.5 rounded-full transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header Section */}
        <div className="bg-brand-navy p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/20 rounded-full blur-2xl -mr-16 -mt-16"></div>

          <div className="bg-brand-gold/20 p-3 rounded-full inline-block mb-4 shadow-inner">
            <BookOpen className="h-8 w-8 text-brand-gold" />
          </div>

          <h3 className="text-2xl font-black text-white font-display leading-tight mb-2">
            Wait Gulf Families!
          </h3>
          <p className="text-slate-200 text-sm leading-relaxed">
            Get our FREE guide: <strong className="text-white">"MBBS Abroad for Gulf NRI Families Complete Cost in AED, Eligibility & Process"</strong> delivered instantly on WhatsApp.
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">

            {error && (
              <div className="bg-red-50 text-red-600 text-xs p-3 rounded-lg border border-red-100 font-medium">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => { setName(e.target.value); setError(''); }}
                className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-brand-pink transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp Number (Gulf)</label>
              <input
                type="tel"
                placeholder="+971 50 123 4567"
                value={phone}
                onChange={(e) => { setPhone(e.target.value); setError(''); }}
                className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-brand-pink transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold py-3.5 px-2 sm:px-4 rounded-xl shadow-lg transition-all duration-200 active:scale-98 flex items-center justify-center gap-1.5 sm:gap-2 mt-2 font-display disabled:opacity-70 disabled:cursor-not-allowed text-[13px] sm:text-base whitespace-nowrap sm:whitespace-normal"
            >
              {isSubmitting ? (
                <span className="inline-block animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-2 border-brand-navy border-t-transparent"></span>
              ) : (
                <>
                  <Download className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" /> Send Me the Free Gulf Guide →
                </>
              )}
            </button>

            <p className="text-center text-xs text-slate-500 font-medium flex items-center justify-center gap-1.5 mt-4">
              <Lock className="h-3 w-3" /> No spam. Instant WhatsApp delivery.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ExitIntentPopup;

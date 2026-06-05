import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatBar from './components/StatBar';
import PartnersAndTrust from './components/PartnersAndTrust';
import GulfCountries from './components/GulfCountries';
import WhyGeorgia from './components/WhyGeorgia';
import FeeTransparency from './components/FeeTransparency';
import HowItWorks from './components/HowItWorks';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ExitIntentPopup from './components/ExitIntentPopup';
import MobileStickyCTA from './components/MobileStickyCTA';
import ThankYouPage from './components/ThankYouPage';
import LeadForm from './components/LeadForm';
import { X } from 'lucide-react';

function App() {
  const [submittedLead, setSubmittedLead] = useState(null);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isCounsellingModalOpen, setIsCounsellingModalOpen] = useState(false);

  // Sync state with back/forward history navigation buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Escape key handler to close the modal
  useEffect(() => {
    if (!isCounsellingModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCounsellingModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCounsellingModalOpen]);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const openCounsellingModal = () => {
    setIsCounsellingModalOpen(true);
  };

  const handleFormSuccess = (leadData) => {
    setSubmittedLead(leadData);
    navigateTo('/thank-you');
  };

  const isThankYou = currentPath === '/thank-you' || currentPath === '/thankyou';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-brand-pink selection:text-white pb-[64px] md:pb-0">
      
      {/* Header Bar */}
      <Header onBookClick={isThankYou ? () => navigateTo('/') : openCounsellingModal} />

      {/* Main Sections */}
      {isThankYou ? (
        <main className="flex-grow">
          <ThankYouPage 
            leadData={submittedLead} 
            onBackClick={() => navigateTo('/')} 
          />
        </main>
      ) : (
        <main className="flex-grow">
          
          {/* 1. HERO SECTION & LEAD FORM */}
          <HeroSection 
            onSubmitSuccess={handleFormSuccess} 
            onCtaClick={openCounsellingModal} 
          />

          {/* 2. STAT BAR */}
          <StatBar />

          {/* GULF COUNTRIES SECTION */}
          <GulfCountries />

          {/* 3. PARTNERS & YT VIDEOS & TRUST CHEVRON */}
          <PartnersAndTrust onCtaClick={openCounsellingModal} />

          {/* 4. WHY GEORGIA REASON SECTION */}
          <WhyGeorgia onCtaClick={openCounsellingModal} />

          {/* 5. FEE TRANSPARENCY COMPARISON TABLE */}
          <FeeTransparency onCtaClick={openCounsellingModal} />

          {/* 6. HOW IT WORKS Timeline */}
          <HowItWorks onCtaClick={openCounsellingModal} />

          {/* 7. FACILITIES support grid */}
          <Facilities />

          {/* 8. TESTIMONIALS CAROUSEL */}
          <Testimonials />

          {/* 9. FAQ ACCORDION */}
          <FAQ onCtaClick={openCounsellingModal} />

        </main>
      )}

      {/* Footer Details */}
      <Footer onCtaClick={isThankYou ? () => navigateTo('/') : openCounsellingModal} />

      {/* Floating Elements (Shown only when not on thank-you page) */}
      {!isThankYou && (
        <>
          {/* Mobile Bottom Sticky CTA */}
          <MobileStickyCTA onBookClick={openCounsellingModal} />

          {/* Exit Intent / Delayed Lead Capture Popup */}
          <ExitIntentPopup onSubmitSuccess={handleFormSuccess} />
        </>
      )}

      {/* WhatsApp Floating Button (wa-fab) */}
      <a 
        href="https://wa.me/971505204207?text=Hi,%20I%20am%20a%20Gulf%20NRI%20family%20and%20want%20to%20know%20about%20MBBS%20abroad" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-[80px] right-5 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40 animate-bounce cursor-pointer bg-white"
        style={{ animationDuration: '2.5s' }}
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          className="w-full h-full"
        />
      </a>

      {/* Counselling Form Modal */}
      {isCounsellingModalOpen && (
        <div 
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsCounsellingModalOpen(false);
            }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
        >
          <div className="bg-white rounded-3xl overflow-hidden max-w-xl w-full shadow-2xl border border-brand-gold/30 relative my-8 animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button 
              onClick={() => setIsCounsellingModalOpen(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-brand-navy p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer z-50 bg-white shadow-sm border border-slate-100"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="max-h-[90vh] overflow-y-auto p-4 sm:p-6">
              <LeadForm 
                onSubmitSuccess={(leadData) => {
                  setIsCounsellingModalOpen(false);
                  handleFormSuccess(leadData);
                }} 
                source="Counselling Modal" 
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;

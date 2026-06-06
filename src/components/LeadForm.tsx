import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, GraduationCap, Award, Globe, HeartHandshake, CheckCircle, Lock } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12.01 2.01c-5.502 0-9.962 4.46-9.962 9.962 0 1.76.458 3.47 1.33 4.975L2.01 22.01l5.228-1.372c1.455.794 3.09 1.213 4.772 1.214 5.5 0 9.96-4.46 9.96-9.962 0-2.666-1.038-5.172-2.924-7.058C17.18 3.048 14.675 2.01 12.01 2.01zm5.88 14.195c-.242.684-1.22 1.25-1.68 1.32-.42.064-.973.11-2.91-.655-2.474-.977-4.062-3.49-4.186-3.654-.124-.165-.92-1.225-.92-2.335 0-1.11.58-1.656.786-1.88.206-.226.454-.282.6-.282.15 0 .298.002.43.007.136.005.32-.05.5-.05.186 0 .343.07.485.41.144.346.495 1.21.538 1.296.042.086.07.185.014.298-.056.113-.085.184-.17.282-.085.1-.184.22-.26.3-.086.083-.177.173-.077.346.1.173.443.73.95 1.182.653.58 1.202.76 1.372.844.17.086.27.07.37-.043.1-.114.428-.497.542-.667.114-.17.228-.14.385-.085.157.057.998.47 1.17.556.17.085.285.127.327.2.042.07.042.41-.2.1.095z" />
  </svg>
);

const LeadForm = ({ onSubmitSuccess, source = "Hero Section" }: any) => {
  const [formData, setFormData] = useState({
    studentName: '',
    whoIsFilling: '',
    mobileNumber: '',
    emailAddress: '',
    currentGulfCountry: '',
    currentAcademicStatus: '',
    preferredCourse: '',
    studyDestinationInterest: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const countriesList = [
    "UAE/Dubai/Sharjah", "Qatar/Doha", "Kuwait", "Bahrain", "Oman/Muscat", "Saudi Arabia/Riyadh/Jeddah"
  ];

  const academicStatusList = [
    "Class 12 CBSE/ICSE/State Board", "A-Levels Bio & Chem", "IB Diploma Sci", "American Diploma/SAT/AP",
    "Foundation/Pre-med completed", "Currently in Class 11 or 12", "University degree – want to switch", "Gap year – appeared NEET"
  ];

  const coursesList = [
    "MBBS", "BDS (Dentistry)", "BPT (Physiotherapy)", "B.Sc Nursing", "B.Pharm",
    "Allied Health Sciences", "Not Sure Need Guidance"
  ];

  const destinationList = [
    "India", "Georgia", "Czech Republic", "Poland", "Russia", "Italy", "Other", "Not Sure - Need Guidance"
  ];

  const validate = () => {
    let tempErrors: Record<string, string> = {};
    if (!formData.studentName.trim()) tempErrors.studentName = "Student Name is required";

    if (!formData.whoIsFilling) tempErrors.whoIsFilling = "Please select who is filling the form";

    if (!formData.mobileNumber) {
      tempErrors.mobileNumber = "WhatsApp Number is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.emailAddress) {
      tempErrors.emailAddress = "Email Address is required";
    } else if (!emailRegex.test(formData.emailAddress)) {
      tempErrors.emailAddress = "Enter a valid email address";
    }

    if (!formData.currentGulfCountry) tempErrors.currentGulfCountry = "Current Gulf Country is required";
    if (!formData.currentAcademicStatus) tempErrors.currentAcademicStatus = "Academic status is required";
    if (!formData.preferredCourse) tempErrors.preferredCourse = "Preferred course is required";
    if (!formData.studyDestinationInterest) tempErrors.studyDestinationInterest = "Preferred destination is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      const payload = {
        name: formData.studentName,
        phone: formData.mobileNumber,
        opportunity: "OmEdu Gulf Landing Page Lead",
        salesperson_id: 2,
        company_id: 94,
        email_from: formData.emailAddress,
        contact_name: formData.studentName,
        city: formData.currentGulfCountry,
        description: `Who is filling: ${formData.whoIsFilling}\nStudent's Education: ${formData.currentAcademicStatus}\nPreferred Course: ${formData.preferredCourse}\nStudy Destination: ${formData.studyDestinationInterest}\nLead Source: ${source}\nSubmission Time: ${new Date().toLocaleString()}`
      };

      try {
        await fetch('https://mysamplewebsite.in/api/crm_leads/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });
      } catch (error) {
        console.error("CRM Integration Error:", error);
      } finally {
        setIsSubmitting(false);
        const submissionData = {
          ...formData,
          submittedAt: new Date().toISOString(),
          leadSource: source
        };

        const existingLeads = JSON.parse(localStorage.getItem('omedu_leads') || '[]');
        existingLeads.push(submissionData);
        localStorage.setItem('omedu_leads', JSON.stringify(existingLeads));

        onSubmitSuccess(submissionData);
      }
    } else {
      const firstErrorKey = Object.keys(errors)[0];
      if (firstErrorKey) {
        const errorEl = document.getElementsByName(firstErrorKey)[0];
        if (errorEl) {
          errorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
      <div className="bg-brand-navy p-5 text-white text-center relative">
        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold opacity-10 rounded-full blur-xl -mr-10 -mt-10"></div>
        <h3 className="text-xl font-bold text-brand-gold font-display">Free Gulf Consultation</h3>
        <p className="text-xs text-slate-100 mt-1">Our Gulf counsellor calls or WhatsApp within 2 hours</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        {/* Current Gulf Country */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Current Gulf Country *</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-2.5 h-4.5 w-4.5 text-slate-400" />
            <select
              name="currentGulfCountry"
              value={formData.currentGulfCountry}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-2 text-sm border rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#003F5C] focus:border-[#003F5C] transition-colors ${errors.currentGulfCountry ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                }`}
            >
              <option value="">Select country</option>
              {countriesList.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
          {errors.currentGulfCountry && <p className="text-xs text-red-500 mt-1">{errors.currentGulfCountry}</p>}
        </div>

        {/* Student Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Student Name *</label>
          <div className="relative">
            <User className="absolute left-3 top-2.5 h-4.5 w-4.5 text-slate-400" />
            <input
              type="text"
              name="studentName"
              placeholder="Full name"
              value={formData.studentName}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-brand-pink transition-colors ${errors.studentName ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                }`}
            />
          </div>
          {errors.studentName && <p className="text-xs text-red-500 mt-1">{errors.studentName}</p>}
        </div>

        {/* Who is filling */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Who is filling? *</label>
          <div className="relative">
            <HeartHandshake className="absolute left-3 top-2.5 h-4.5 w-4.5 text-slate-400" />
            <select
              name="whoIsFilling"
              value={formData.whoIsFilling}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-2 text-sm border rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-brand-pink transition-colors ${errors.whoIsFilling ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                }`}
            >
              <option value="">Select option</option>
              <option value="I am the student">I am the student</option>
              <option value="I am the parent">I am the parent</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
          {errors.whoIsFilling && <p className="text-xs text-red-500 mt-1">{errors.whoIsFilling}</p>}
        </div>

        {/* WhatsApp Mobile Number */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp (with country code) *</label>
          <div className="relative">
            <Phone className="absolute left-3 top-2.5 h-4.5 w-4.5 text-slate-400" />
            <input
              type="tel"
              name="mobileNumber"
              placeholder="+971 50 123 4567"
              value={formData.mobileNumber}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-brand-pink transition-colors ${errors.mobileNumber ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                }`}
            />
          </div>
          {errors.mobileNumber && <p className="text-xs text-red-500 mt-1">{errors.mobileNumber}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Email *</label>
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 h-4.5 w-4.5 text-slate-400" />
            <input
              type="email"
              name="emailAddress"
              placeholder="example@email.com"
              value={formData.emailAddress}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-brand-pink transition-colors ${errors.emailAddress ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                }`}
            />
          </div>
          {errors.emailAddress && <p className="text-xs text-red-500 mt-1">{errors.emailAddress}</p>}
        </div>

        {/* Current Academic Status */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Student's Education *</label>
          <div className="relative">
            <GraduationCap className="absolute left-3 top-2.5 h-4.5 w-4.5 text-slate-400" />
            <select
              name="currentAcademicStatus"
              value={formData.currentAcademicStatus}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-2 text-sm border rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-brand-pink transition-colors ${errors.currentAcademicStatus ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                }`}
            >
              <option value="">Select education</option>
              {academicStatusList.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
          {errors.currentAcademicStatus && <p className="text-xs text-red-500 mt-1">{errors.currentAcademicStatus}</p>}
        </div>

        {/* Preferred Course */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Course *</label>
          <div className="relative">
            <CheckCircle className="absolute left-3 top-2.5 h-4.5 w-4.5 text-slate-400" />
            <select
              name="preferredCourse"
              value={formData.preferredCourse}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-2 text-sm border rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-brand-pink transition-colors ${errors.preferredCourse ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                }`}
            >
              <option value="">Select preferred course</option>
              {coursesList.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
          {errors.preferredCourse && <p className="text-xs text-red-500 mt-1">{errors.preferredCourse}</p>}
        </div>

        {/* Study Destination Interest */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Study Destination Interest *</label>
          <div className="relative">
            <Globe className="absolute left-3 top-2.5 h-4.5 w-4.5 text-slate-400" />
            <select
              name="studyDestinationInterest"
              value={formData.studyDestinationInterest}
              onChange={handleChange}
              className={`w-full pl-10 pr-3 py-2 text-sm border rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-brand-pink transition-colors ${errors.studyDestinationInterest ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                }`}
            >
              <option value="">Select study destination</option>
              {destinationList.map(destination => (
                <option key={destination} value={destination}>{destination}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
          {errors.studyDestinationInterest && <p className="text-xs text-red-500 mt-1">{errors.studyDestinationInterest}</p>}
        </div>

        {/* Gold Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold py-3 px-4 rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 mt-4 active:scale-98 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed text-base font-display"
        >
          {isSubmitting ? (
            <span className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-brand-navy border-t-transparent"></span>
          ) : (
            <>Get My Free Gulf Consultation →</>
          )}
        </button>

        {/* Secure Disclaimer */}
        <p className="text-center text-[11px] font-semibold text-slate-600 flex items-center justify-center gap-1.5 mt-2">
          <Lock className="h-3.5 w-3.5 text-slate-600 shrink-0" />
          <span>Private & Confidential. Zero fees.</span>
        </p>
      </form>
    </div>
  );
};

export default LeadForm;

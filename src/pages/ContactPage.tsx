import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteContent';
import {
  buildWhatsAppEnquiryUrl,
  EnquiryFormErrors,
  EnquiryFormInput,
  validateEnquiryForm,
} from '../utils/solarCalculator';
import { CalculatorPrefillData } from './CalculatorPage';

interface ContactPageProps {
  prefillData?: CalculatorPrefillData | null;
}

export const ContactPage: React.FC<ContactPageProps> = ({ prefillData }) => {
  const [formData, setFormData] = useState<EnquiryFormInput>({
    name: '',
    phone: '',
    email: '',
    city: prefillData?.city || '',
    propertyType: prefillData?.propertyType || 'Residential',
    monthlyBill: prefillData?.monthlyBill || '',
    message: prefillData?.message || '',
  });

  const [errors, setErrors] = useState<EnquiryFormErrors>({});
  const [submittedRecord, setSubmittedRecord] = useState<EnquiryFormInput | null>(null);

  useEffect(() => {
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        city: prefillData.city || prev.city,
        propertyType: prefillData.propertyType || prev.propertyType,
        monthlyBill: prefillData.monthlyBill || prev.monthlyBill,
        message: prefillData.message || prev.message,
      }));
    }
  }, [prefillData]);

  const handleChange = (
    field: keyof EnquiryFormInput,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateEnquiryForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmittedRecord({ ...formData });
  };

  const whatsappDirectUrl = buildWhatsAppEnquiryUrl(
    submittedRecord || formData,
    COMPANY_INFO.whatsappNumber
  );

  return (
    <div className="bg-[#F5F5F0] text-[#101C27]">
      {/* HERO */}
      <section className="bg-[#101C27] text-[#F5F5F0] py-12 md:py-16 border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-6 md:px-10">
          <div className="max-w-3xl space-y-3 animate-editorial-in">
            <p className="text-xs uppercase tracking-widest text-[#C6F36B] font-mono-tabular">
              Consultation & Site Survey
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.08]">
              Start a Conversation With Our Engineers.
            </h1>
            <p className="text-sm sm:text-base text-[#F5F5F0]/80 leading-relaxed max-w-2xl">
              Share your property details and monthly electricity consumption. Our team in Vallabh Vidyanagar, Anand will review your requirements and schedule a comprehensive site assessment.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-12 md:py-20 max-w-[1360px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: ENQUIRY FORM (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#101C27]/15 p-8 sm:p-12">
            {submittedRecord ? (
              <div
                data-testid="enquiry-confirmation"
                className="space-y-6 py-6"
              >
                <div className="w-12 h-12 bg-[#C6F36B] text-[#101C27] flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-mono-tabular uppercase tracking-widest text-[#5A6570]">
                    Consultation Request Logged
                  </p>
                  <h2 className="font-display text-3xl font-semibold text-[#101C27]">
                    Thank You, {submittedRecord.name}.
                  </h2>
                  <p className="text-sm text-[#5A6570] leading-relaxed">
                    Your solar enquiry for <strong className="text-[#101C27]">{submittedRecord.propertyType}</strong> in{' '}
                    <strong className="text-[#101C27]">{submittedRecord.city}</strong> (Monthly Bill:{' '}
                    <strong className="text-[#101C27]">{submittedRecord.monthlyBill}</strong>) has been prepared. You can also connect immediately with our engineering desk on WhatsApp with these exact details pre-filled.
                  </p>
                </div>

                <div className="p-6 bg-[#F5F5F0] border border-[#101C27]/10 space-y-2 text-xs font-mono-tabular text-[#334155]">
                  <p>Name: {submittedRecord.name}</p>
                  <p>Phone: {submittedRecord.phone}</p>
                  <p>Email: {submittedRecord.email}</p>
                  <p>Location: {submittedRecord.city}</p>
                  <p>Property Category: {submittedRecord.propertyType}</p>
                  <p>Monthly Bill: {submittedRecord.monthlyBill}</p>
                  {submittedRecord.message && <p>Notes: {submittedRecord.message}</p>}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#101C27] text-[#C6F36B] text-xs font-semibold uppercase tracking-wider hover:bg-[#1e3144] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Enquiry via WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmittedRecord(null)}
                    className="px-6 py-4 border border-[#101C27]/20 text-xs font-semibold uppercase tracking-wider text-[#101C27] hover:border-[#101C27] cursor-pointer"
                  >
                    Edit Enquiry Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="border-b border-[#101C27]/10 pb-4">
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#101C27]">
                    Request a Solar Consultation
                  </h2>
                  <p className="text-xs text-[#5A6570] mt-1">
                    All fields marked with * are required for an accurate site & load review.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono-tabular uppercase tracking-wider text-[#101C27]"
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="e.g. Rajesh Patel"
                      className="w-full px-4 py-3 bg-[#F5F5F0] border border-[#101C27]/20 text-sm text-[#101C27] focus:outline-none focus:border-[#101C27]"
                    />
                    {errors.name && (
                      <p role="alert" className="text-xs text-red-700 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-mono-tabular uppercase tracking-wider text-[#101C27]"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 bg-[#F5F5F0] border border-[#101C27]/20 text-sm text-[#101C27] focus:outline-none focus:border-[#101C27]"
                    />
                    {errors.phone && (
                      <p role="alert" className="text-xs text-red-700 font-medium">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono-tabular uppercase tracking-wider text-[#101C27]"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 bg-[#F5F5F0] border border-[#101C27]/20 text-sm text-[#101C27] focus:outline-none focus:border-[#101C27]"
                    />
                    {errors.email && (
                      <p role="alert" className="text-xs text-red-700 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* City */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-city"
                      className="block text-xs font-mono-tabular uppercase tracking-wider text-[#101C27]"
                    >
                      City / Site Location *
                    </label>
                    <input
                      id="contact-city"
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleChange('city', e.target.value)}
                      placeholder="e.g. Anand, Vadodara, Ahmedabad"
                      className="w-full px-4 py-3 bg-[#F5F5F0] border border-[#101C27]/20 text-sm text-[#101C27] focus:outline-none focus:border-[#101C27]"
                    />
                    {errors.city && (
                      <p role="alert" className="text-xs text-red-700 font-medium">
                        {errors.city}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Property Type */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-property-type"
                      className="block text-xs font-mono-tabular uppercase tracking-wider text-[#101C27]"
                    >
                      Property Type *
                    </label>
                    <select
                      id="contact-property-type"
                      value={formData.propertyType}
                      onChange={(e) => handleChange('propertyType', e.target.value)}
                      className="w-full px-4 py-3 bg-[#F5F5F0] border border-[#101C27]/20 text-sm text-[#101C27] focus:outline-none focus:border-[#101C27]"
                    >
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Industrial">Industrial</option>
                      <option value="Ground Mounted">Ground-Mounted Solar Park</option>
                      <option value="Battery & Hybrid">Battery Storage / Hybrid System</option>
                    </select>
                    {errors.propertyType && (
                      <p role="alert" className="text-xs text-red-700 font-medium">
                        {errors.propertyType}
                      </p>
                    )}
                  </div>

                  {/* Monthly Electricity Bill */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-bill"
                      className="block text-xs font-mono-tabular uppercase tracking-wider text-[#101C27]"
                    >
                      Monthly Electricity Bill *
                    </label>
                    <input
                      id="contact-bill"
                      type="text"
                      value={formData.monthlyBill}
                      onChange={(e) => handleChange('monthlyBill', e.target.value)}
                      placeholder="e.g. ₹6,500 or ₹1,20,000"
                      className="w-full px-4 py-3 bg-[#F5F5F0] border border-[#101C27]/20 text-sm text-[#101C27] focus:outline-none focus:border-[#101C27]"
                    />
                    {errors.monthlyBill && (
                      <p role="alert" className="text-xs text-red-700 font-medium">
                        {errors.monthlyBill}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono-tabular uppercase tracking-wider text-[#101C27]"
                  >
                    Project Notes / Sanctioned Load (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Share roof type (RCC / metal shed), sanctioned load, or preferred consultation time..."
                    className="w-full px-4 py-3 bg-[#F5F5F0] border border-[#101C27]/20 text-sm text-[#101C27] focus:outline-none focus:border-[#101C27]"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#101C27] text-[#F5F5F0] text-xs font-semibold uppercase tracking-wider hover:bg-[#1e3144] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <Send className="w-4 h-4 text-[#C6F36B]" />
                    <span>Submit Consultation Request</span>
                  </button>

                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-4 border border-[#101C27]/25 text-[#101C27] text-xs font-semibold uppercase tracking-wider hover:border-[#101C27] transition-colors whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT: VERIFIED COMPANY CONTACT DETAILS (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#101C27] text-[#F5F5F0] p-8 sm:p-10 space-y-8 border border-white/10">
              <div>
                <p className="text-xs font-mono-tabular uppercase tracking-widest text-[#C6F36B]">
                  Direct Channels
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold mt-1">
                  {COMPANY_INFO.name}
                </h2>
              </div>

              <div className="space-y-6 divide-y divide-white/10">
                {/* Corporate Office */}
                <div className="pt-6 first:pt-0 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono-tabular uppercase text-[#C6F36B]">
                    <MapPin className="w-4 h-4" />
                    <span>{COMPANY_INFO.corporateOffice.label}</span>
                  </div>
                  <p className="text-sm text-[#F5F5F0]/85 leading-relaxed">
                    {COMPANY_INFO.corporateOffice.address}
                  </p>
                </div>

                {/* Registered / GIDC Facility */}
                <div className="pt-6 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono-tabular uppercase text-[#C6F36B]">
                    <MapPin className="w-4 h-4" />
                    <span>{COMPANY_INFO.registeredOffice.label}</span>
                  </div>
                  <p className="text-sm text-[#F5F5F0]/85 leading-relaxed">
                    {COMPANY_INFO.registeredOffice.address}
                  </p>
                </div>

                {/* Phones */}
                <div className="pt-6 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono-tabular uppercase text-[#C6F36B]">
                    <Phone className="w-4 h-4" />
                    <span>Telephone & Consultation Helpline</span>
                  </div>
                  <div className="space-y-1 font-mono-tabular text-sm">
                    <p>
                      <a href="tel:+919313804410" className="hover:text-[#C6F36B] transition-colors">
                        +91 93138 04410
                      </a>
                    </p>
                    <p>
                      <a href="tel:+919313804411" className="hover:text-[#C6F36B] transition-colors">
                        +91 93138 04411
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="pt-6 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono-tabular uppercase text-[#C6F36B]">
                    <Mail className="w-4 h-4" />
                    <span>Official Email</span>
                  </div>
                  <p className="text-sm font-mono-tabular">
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="hover:text-[#C6F36B] transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* WhatsApp Direct Box */}
              <div className="pt-4">
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#C6F36B] text-[#101C27] text-xs font-semibold uppercase tracking-wider hover:bg-[#d4f78b] transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat With Engineering Team on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

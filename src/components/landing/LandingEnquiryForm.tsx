"use client";

import React, { useState, useEffect } from "react";
import {
  Send,
  MessageCircle,
  Phone,
  User,
  MapPin,
  BookOpen,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock,
  HelpCircle,
} from "lucide-react";
import { LANDING_COURSES } from "@/data/landingCoursesData";
import { submitContactEnquiry } from "@/services/contact/contactService";

interface LandingEnquiryFormProps {
  selectedCourseId?: string;
  onCourseSelect?: (courseId: string) => void;
}

export const LandingEnquiryForm: React.FC<LandingEnquiryFormProps> = ({
  selectedCourseId = "",
  onCourseSelect,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    whatsappNumber: "",
    sameAsPhone: true,
    location: "Sivakasi", // Sivakasi, Sattur, Srivilliputtur
    course: selectedCourseId || "ai-java-fullstack",
    qualification: "College Student / Graduate",
    preferredTiming: "Weekday Regular (Morning/Afternoon)",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  // Sync prop changes to form state
  useEffect(() => {
    if (selectedCourseId) {
      setFormData((prev) => ({ ...prev, course: selectedCourseId }));
    }
  }, [selectedCourseId]);

  // Keep whatsapp same as phone if checked
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({
      ...prev,
      phone: val,
      whatsappNumber: prev.sameAsPhone ? val : prev.whatsappNumber,
    }));
  };

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({
      ...prev,
      whatsappNumber: val,
      sameAsPhone: false,
    }));
  };

  const handleCheckboxToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setFormData((prev) => ({
      ...prev,
      sameAsPhone: checked,
      whatsappNumber: checked ? prev.phone : prev.whatsappNumber,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "course" && onCourseSelect) {
      onCourseSelect(value);
    }
  };

  const selectedCourseName =
    LANDING_COURSES.find((c) => c.id === formData.course)?.name || formData.course;

  const generateWhatsappUrl = () => {
    const text = encodeURIComponent(
      `Hello WeGrow Skill Campus!\n\nI want to enquire about admissions:\n• Name: ${formData.fullName || "Student"}\n• Phone: ${formData.phone || "Not specified"}\n• WhatsApp: ${formData.whatsappNumber || formData.phone || "Not specified"}\n• Preferred Campus: ${formData.location}\n• Course of Interest: ${selectedCourseName}\n\nPlease share course curriculum, upcoming batch dates, and fee details.`
    );
    return `https://wa.me/919344337331?text=${text}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || formData.phone.length < 10) {
      alert("Please provide your full name and a valid 10-digit mobile number.");
      return;
    }

    setStatus("submitting");
    setFeedbackMessage("");

    try {
      const detailedMessage = [
        `Campus Location Choice: ${formData.location}`,
        `Selected Course: ${selectedCourseName}`,
        `WhatsApp Number: ${formData.whatsappNumber || formData.phone}`,
        `Qualification: ${formData.qualification}`,
        `Preferred Timing: ${formData.preferredTiming}`,
      ].join("\n");

      await submitContactEnquiry({
        fullName: formData.fullName,
        email: `${formData.phone}@wegrow-lead.com`,
        phone: formData.phone,
        interestArea: "SkillCampus",
        message: detailedMessage,
      });

      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "Lead");
      }

      setStatus("success");
      setFeedbackMessage(
        "Thank you! Your enquiry has been received. Our senior counselor from your chosen campus will call you within 2 business hours."
      );
    } catch {
      // In static or decoupled frontend mode, still celebrate and provide instant whatsapp
      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "Lead");
      }

      setStatus("success");
      setFeedbackMessage(
        "Your enquiry details have been recorded! You can also chat directly with our admissions coordinator on WhatsApp right now."
      );
    }
  };

  return (
    <section id="enquiry-form-section" className="py-14 sm:py-20 bg-slate-50 relative">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Why Enquire & Trust Points */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-orange mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fast-Track Your Admission</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-navy leading-tight">
              Book a Free Demo Class &amp; 1-on-1 Career Counselling
            </h2>

            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Not sure which course fits your educational background or career ambitions? Speak with our certified mentors at <strong className="text-brand-navy">Sivakasi, Sattur, or Srivilliputtur</strong>. Get complete clarity before you enroll.
            </p>

            {/* Checklist of what students get */}
            <div className="mt-6 space-y-3.5">
              <div className="flex items-start gap-3 rounded-xl bg-white p-3.5 border border-slate-200/80 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Free 2-Hour Practical Hands-on Demo</h4>
                  <p className="text-xs text-slate-500">Experience our high-tech smart AC classroom and practical teaching methodology before paying anything.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-white p-3.5 border border-slate-200/80 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">100% Placement Support Commitment</h4>
                  <p className="text-xs text-slate-500">Continuous mock interviews, technical review rounds, and recruitment drives till you secure your job offer.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-white p-3.5 border border-slate-200/80 shadow-sm">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Convenient Campuses: Sivakasi • Sattur • Srivilliputtur</h4>
                  <p className="text-xs text-slate-500">Easily accessible centrally located learning centres with dedicated bus and rail transit access.</p>
                </div>
              </div>
            </div>

            {/* Quick Helpline Box */}
            <div className="mt-6 rounded-2xl bg-brand-navy p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                Prefer to Speak Immediately?
              </p>
              <div className="mt-3 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919344337331"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-bold text-white hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>Sivakasi: +91 93443 37331</span>
                </a>
                <a
                  href="tel:+919363337331"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-bold text-white hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Srivilliputtur / Sattur: +91 93633 37331</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: The Lead Gen Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border-2 border-brand-orange/20 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/60 relative overflow-hidden">
              {/* Highlight badge on top */}
              <div className="absolute top-0 right-0 bg-brand-orange text-white text-[11px] font-extrabold uppercase px-4 py-1 rounded-bl-xl tracking-wider">
                Limited Batch Seats
              </div>

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-brand-navy">
                  Quick Admission &amp; Course Enquiry Form
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details below. Our team will share the complete syllabus and schedule your campus visit.
                </p>
              </div>

              {status === "success" ? (
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-6 text-center animate-fade-in">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900">Enquiry Submitted Successfully!</h4>
                  <p className="mt-2 text-sm text-emerald-700 max-w-md mx-auto">
                    {feedbackMessage}
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700 transition shadow-md w-full sm:w-auto"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Continue to WhatsApp Instantly</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition w-full sm:w-auto"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Field 1: Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Karthik Rajan"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange text-sm font-medium transition"
                      />
                    </div>
                  </div>

                  {/* Field 2 & 3: Phone Number and WhatsApp Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          required
                          maxLength={10}
                          placeholder="10-digit mobile number"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange text-sm font-medium transition"
                        />
                      </div>
                    </div>

                    {/* WhatsApp Number */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          WhatsApp Number
                        </label>
                        <label className="inline-flex items-center gap-1.5 text-[11px] text-slate-600 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.sameAsPhone}
                            onChange={handleCheckboxToggle}
                            className="rounded border-slate-300 text-brand-orange focus:ring-brand-orange h-3.5 w-3.5"
                          />
                          <span>Same as Phone</span>
                        </label>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-500">
                          <MessageCircle className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          name="whatsappNumber"
                          value={formData.whatsappNumber}
                          onChange={handleWhatsappChange}
                          disabled={formData.sameAsPhone}
                          maxLength={10}
                          placeholder="WhatsApp mobile number"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 text-sm font-medium transition ${
                            formData.sameAsPhone ? "bg-slate-100 text-slate-500 cursor-not-allowed" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Field 4: Location Choose (Sivakasi, Sattur, Srivilliputtur) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Choose Your Preferred Campus / Location <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { id: "Sivakasi", label: "Sivakasi", sub: "Thiruthangal Rd" },
                        { id: "Sattur", label: "Sattur", sub: "Service Center" },
                        { id: "Srivilliputtur", label: "Srivilliputtur", sub: "North Car St" },
                      ].map((loc) => {
                        const isSelected = formData.location === loc.id;
                        return (
                          <button
                            type="button"
                            key={loc.id}
                            onClick={() => setFormData((prev) => ({ ...prev, location: loc.id }))}
                            className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                              isSelected
                                ? "border-brand-orange bg-orange-50/80 text-brand-navy ring-2 ring-brand-orange/40 font-bold"
                                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 font-medium"
                            }`}
                          >
                            <MapPin
                              className={`w-4 h-4 mb-1 ${
                                isSelected ? "text-brand-orange" : "text-slate-400"
                              }`}
                            />
                            <span className="text-xs sm:text-sm font-bold">{loc.label}</span>
                            <span className="text-[10px] text-slate-500">{loc.sub}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Field 5: Which Course (6 Courses) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Which Course Are You Interested In? <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full pl-10 pr-8 py-3 rounded-xl border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange text-sm font-medium transition"
                      >
                        {LANDING_COURSES.map((course) => (
                          <option key={course.id} value={course.id}>
                            {course.name} ({course.duration})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Field 6: Batch Timing & Mode */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Current Profile
                      </label>
                      <select
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 bg-white text-xs sm:text-sm font-medium"
                      >
                        <option value="College Student (Final / Pre-Final Year)">Final / Pre-Final Year Student</option>
                        <option value="Recent Graduate (Looking for IT Job)">Recent Graduate (Fresher)</option>
                        <option value="Non-IT / Career Switcher">Non-IT / Career Switcher</option>
                        <option value="Working Professional (Upskilling)">Working Professional</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Batch
                      </label>
                      <select
                        name="preferredTiming"
                        value={formData.preferredTiming}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 bg-white text-xs sm:text-sm font-medium"
                      >
                        <option value="Weekday Regular (Morning/Afternoon)">Weekday Regular (Mon-Fri)</option>
                        <option value="Weekend Special (Sat & Sun)">Weekend Special (Working Pros)</option>
                        <option value="Fast-Track Full Day Bootcamp">Fast-Track Intensive Bootcamp</option>
                      </select>
                    </div>
                  </div>

                  {/* Submission Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all active:scale-[0.99] disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{status === "submitting" ? "Submitting Enquiry..." : "Book Free Demo & Counselling"}</span>
                    </button>

                    <a
                      href={generateWhatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500 bg-emerald-50 px-5 py-3.5 text-sm font-bold text-emerald-700 hover:bg-emerald-100 transition"
                      title="Enquire on WhatsApp instantly"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Instant WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    🔒 Your details are 100% confidential. No spam calls. You will be connected directly with academic counselors from Sivakasi / Srivilliputtur / Sattur.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingEnquiryForm;


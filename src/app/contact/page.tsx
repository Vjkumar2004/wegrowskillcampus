"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/constants/company";
import Container from "@/components/common/Container";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import { submitContactEnquiry, ContactEnquiryPayload } from "@/services/contact/contactService";

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactEnquiryPayload>({
    fullName: "",
    email: "",
    phone: "",
    interestArea: "SkillCampus",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setFeedbackMessage("");

    try {
      await submitContactEnquiry(formData);
      setStatus("success");
      setFeedbackMessage("Thank you for your enquiry. Our admissions team will reach out shortly.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        interestArea: "SkillCampus",
        message: "",
      });
    } catch (err: unknown) {
      // In early frontend foundation, show meaningful message without crashing
      setStatus("error");
      const errorMsg =
        err instanceof Error ? err.message : "Unable to submit enquiry at this moment.";
      setFeedbackMessage(
        `${errorMsg} (Please note: Backend API server must be active at the configured endpoint).`
      );
    }
  };

  return (
    <div className="py-16 sm:py-20 bg-brand-bg">
      <Container>
        <div className="max-w-3xl mb-12">
          <Badge variant="brand" className="mb-3">
            Get In Touch
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy tracking-tight mb-4">
            Contact WeGrow Skill Campus
          </h1>
          <p className="text-lg text-brand-textSecondary leading-relaxed">
            Have questions regarding admissions, technical curriculum pathways, or corporate
            partnerships? Reach out to our campus office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-brand-border shadow-card space-y-6">
              <h2 className="text-xl font-bold text-brand-navy border-b border-slate-100 pb-4">
                Campus Information
              </h2>

              <div className="space-y-5 text-sm text-brand-textPrimary">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-semibold block text-slate-800">Campus Address</span>
                    <span className="text-xs text-brand-textSecondary leading-relaxed mt-1 block">
                      {COMPANY_INFO.addressPlaceholder}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-semibold block text-slate-800">Direct Contact Line</span>
                    <span className="text-xs text-brand-textSecondary mt-1 block">
                      {COMPANY_INFO.phonePlaceholder}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-semibold block text-slate-800">Enquiries Email</span>
                    <span className="text-xs text-brand-textSecondary mt-1 block">
                      {COMPANY_INFO.emailPlaceholder}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-semibold block text-slate-800">Campus Working Hours</span>
                    <span className="text-xs text-brand-textSecondary mt-1 block">
                      {COMPANY_INFO.workingHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-brand-border shadow-card">
              <h2 className="text-xl font-bold text-brand-navy mb-2">Send an Enquiry</h2>
              <p className="text-xs text-slate-500 mb-6">
                Fill in the details below and an academic advisor will connect with you.
              </p>

              {status === "success" && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded flex items-start space-x-3 text-emerald-800 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <strong className="block font-semibold">Enquiry Received!</strong>
                    <span>{feedbackMessage}</span>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded text-red-800 text-sm">
                  <strong className="block font-semibold mb-1">Submission Note:</strong>
                  <span>{feedbackMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 rounded border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-2.5 rounded border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-2.5 rounded border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interestArea" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Area of Interest *
                  </label>
                  <select
                    id="interestArea"
                    name="interestArea"
                    value={formData.interestArea}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue bg-white"
                  >
                    <option value="SkillCampus">WeGrow Skill Campus (Technical)</option>
                    <option value="BSchool">WeGrow B School (Management)</option>
                    <option value="IndustryServices">Industry & Corporate Partnership</option>
                    <option value="General">General Enquiry / Counseling</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Message / Query Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly state your requirements or queries..."
                    className="w-full px-4 py-2.5 rounded border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto"
                  >
                    <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                    <span>{status === "submitting" ? "Submitting..." : "Submit Enquiry"}</span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

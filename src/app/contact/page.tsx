"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Globe, Send, CheckCircle2 } from "lucide-react";
import { COURSES } from "@/constants/courses";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import PageHero from "@/components/common/PageHero";
import { submitContactEnquiry, ContactEnquiryPayload } from "@/services/contact/contactService";

const contactNumbers = [
  { display: "+91 93443 37331", tel: "+919344337331", whatsapp: "919344337331" },
  { display: "+91 93633 37331", tel: "+919363337331", whatsapp: "919363337331" },
];

const campuses = [
  {
    name: "Sivakasi — Thiruthangal Road",
    address: "100A/5, 1st Floor, Thiruthangal Road, Opposite Bell Hotel, IBACO Upstairs, Sivakasi – 626 123",
  },
  {
    name: "Srivilliputtur",
    address: "129, North Car Street, Opposite Bombay Textiles, Upstairs Pathras Kids & Gift Shop, Srivilliputtur – 626 125",
  },
];

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
  const [courseOfInterest, setCourseOfInterest] = useState("");
  const [preferredCampus, setPreferredCampus] = useState("");
  const [preferredMode, setPreferredMode] = useState("");

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
      const enquiryMessage = [
        formData.message,
        courseOfInterest && `Course of interest: ${courseOfInterest}`,
        preferredCampus && `Preferred campus: ${preferredCampus}`,
        preferredMode && `Preferred learning mode: ${preferredMode}`,
      ].filter(Boolean).join("\n\n");
      await submitContactEnquiry({ ...formData, message: enquiryMessage });
      setStatus("success");
      setFeedbackMessage("Thank you for your enquiry. Our admissions team will reach out shortly.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        interestArea: "SkillCampus",
        message: "",
      });
      setCourseOfInterest("");
      setPreferredCampus("");
      setPreferredMode("");
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
    <div className="pb-16 sm:pb-20 bg-brand-bg">
      <PageHero
        eyebrow="Contact WeGrow"
        title="Let’s Talk About Your Learning Goals"
        description="Have questions about courses, eligibility, duration, fees, or enrolment? Our team can help you understand the available options and what to confirm."
        image="/about-section.png"
        imageAlt="WeGrow Skill Campus building"
        imagePosition="object-center"
      />
      <Container>
        <div className="grid w-full grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Contact Details Column */}
          <div className="space-y-6 lg:col-span-5">
            <div className="relative space-y-5 overflow-hidden rounded-[26px] border border-brand-border bg-white p-6 shadow-card sm:p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange to-amber-300" aria-hidden="true" />
              <div>
                <h2 className="text-xl font-bold text-brand-navy">Call or WhatsApp</h2>
                <p className="mt-1 text-sm text-brand-textSecondary">Contact our team to find the right course for you.</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {contactNumbers.map((number) => (
                    <div key={number.tel} className="rounded-xl bg-orange-50 p-3">
                      <a href={`tel:${number.tel}`} className="flex items-center gap-3 px-1 py-1 font-bold text-brand-navy transition hover:text-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-orange text-white"><Phone className="h-5 w-5" aria-hidden="true" /></span>
                        <span>{number.display}</span>
                      </a>
                      <a href={`https://wa.me/${number.whatsapp}`} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center rounded-lg border border-emerald-200 bg-white px-3 py-1.5 text-xs font-bold text-emerald-800 transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-600">
                        WhatsApp
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5">
                <h2 className="mb-4 text-xl font-bold text-brand-navy">Visit Our Campuses</h2>
                <div className="space-y-3">
                  {campuses.map((campus) => (
                    <article key={campus.name} className="rounded-2xl border border-slate-100 bg-brand-bg/70 p-4 text-sm">
                      <h3 className="mb-2 font-bold text-brand-navy">{campus.name}</h3>
                      <p className="flex gap-2 leading-6 text-brand-textSecondary"><MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true" />{campus.address}</p>
                    </article>
                  ))}
                </div>
              </div>

              <a href="https://www.wegrowcampus.in" target="_blank" rel="noreferrer" className="flex items-center gap-3 border-t border-slate-100 pt-5 font-bold text-brand-blue hover:text-brand-orange">
                <Globe className="h-5 w-5 text-brand-orange" aria-hidden="true" />
                www.wegrowcampus.in
              </a>
            </div>
          </div>

          {/* Enquiry Form Column */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[26px] border border-brand-border bg-white p-6 shadow-card sm:p-9">
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-[26px] bg-gradient-to-r from-brand-orange to-amber-300" aria-hidden="true" />
              <h2 className="mb-2 text-2xl font-extrabold text-brand-navy">Send an Enquiry</h2>
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

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="courseOfInterest" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">Course of Interest</label>
                    <select id="courseOfInterest" value={courseOfInterest} onChange={(event) => setCourseOfInterest(event.target.value)} className="w-full px-4 py-2.5 rounded border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue bg-white">
                      <option value="">Select a course (optional)</option>
                      {COURSES.map((course) => <option key={course.id}>{course.title}</option>)}
                      <option>Other / Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="preferredCampus" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">Preferred Campus</label>
                    <select id="preferredCampus" value={preferredCampus} onChange={(event) => setPreferredCampus(event.target.value)} className="w-full px-4 py-2.5 rounded border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue bg-white">
                      <option value="">Select a campus (optional)</option>
                      <option>Sivakasi — Thiruthangal Road</option>
                      <option>Srivilliputtur</option>
                      <option>No preference</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="preferredMode" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">Preferred Learning Mode</label>
                    <select id="preferredMode" value={preferredMode} onChange={(event) => setPreferredMode(event.target.value)} className="w-full px-4 py-2.5 rounded border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue bg-white">
                      <option value="">Select a mode (optional; availability to be confirmed)</option>
                      <option>Online</option>
                      <option>Offline</option>
                      <option>Hybrid</option>
                      <option>Open to available options</option>
                    </select>
                  </div>
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

                <p className="text-xs text-slate-500 leading-relaxed">
                  By submitting this form, you acknowledge that your information will be handled according to our <Link href="/privacy-policy" className="text-brand-blue underline">Privacy Policy</Link>.
                </p>

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

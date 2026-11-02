"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export const LandingFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who is eligible to enroll in these 6 courses?",
      a: "Our courses are open to College Students (Final & Pre-Final Year), Recent Graduates (B.E., B.Tech, BCA, B.Sc CS/IT, Arts & Science), Diploma holders, and Working Professionals seeking career switches into IT. No prior coding experience is required as each track begins from programming fundamentals.",
    },
    {
      q: "How does WeGrow's 100% Placement Support work?",
      a: "From Month 3 onwards, our dedicated Placement Cell conducts technical mock interviews, resume reviews, aptitude preparation, and profile building. We organize on-campus placement drives and direct recruiter interviews at our Sivakasi and Srivilliputtur campuses until you secure a formal job offer.",
    },
    {
      q: "Are the classes conducted offline at Sivakasi and Srivilliputtur?",
      a: "Yes! All courses feature 100% in-person practical lab sessions inside our air-conditioned smart classrooms equipped with 4K interactive boards. For learners from Sattur and nearby areas, we also offer flexible morning, evening, and weekend hybrid tracks.",
    },
    {
      q: "Do I need my own high-end laptop?",
      a: "While having a personal laptop helps you practice at home, our campus provides high-speed connected workstations and high-speed fibre Wi-Fi so you can complete all daily coding assignments and lab projects comfortably on campus.",
    },
    {
      q: "Are there flexible installment (EMI) options available for fees?",
      a: "Yes! We believe financial constraints should never stop deserving students. We offer flexible zero-cost monthly EMI options and merit-based fee scholarships based on your performance in our initial aptitude and counselling assessment.",
    },
    {
      q: "What certifications and project portfolios will I graduate with?",
      a: "You will earn an industry-recognized Certificate of Completion from WeGrow Skill Campus Pvt. Ltd., verified internship experience certificates, and a live GitHub portfolio containing 4 to 6 full-stack/AI capstone applications to showcase to hiring managers.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-brand-orange" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Everything you need to know about admissions, course duration, and career placements.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:text-brand-navy transition-colors"
                >
                  <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-brand-orange" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LandingFAQ;


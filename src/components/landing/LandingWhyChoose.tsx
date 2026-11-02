"use client";

import React from "react";
import {
  CheckCircle,
  Briefcase,
  Code2,
  Users2,
  Building,
  Target,
  Sparkles,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export const LandingWhyChoose: React.FC = () => {
  const reasons = [
    {
      icon: Briefcase,
      title: "100% Placement Assistance Cell",
      description: "Dedicated campus placement drives, recruiter matchmaking, unlimited interview opportunities, and personalized placement coordination till you secure an offer letter.",
      badge: "Placement First",
    },
    {
      icon: Code2,
      title: "100% Practical & Project-First Training",
      description: "Skip theoretical rote learning. Write real enterprise code from Day 1 in modern IDEs, build 6-10 portfolio projects, and deploy live applications on cloud platforms.",
      badge: "Real Projects",
    },
    {
      icon: Users2,
      title: "Mentorship by Senior Industry Developers",
      description: "Learn directly from full-time developers and IT architects who bring real production insights, clean code architectures, and actual workplace best practices into the classroom.",
      badge: "Expert Mentors",
    },
    {
      icon: Building,
      title: "Corporate-Grade Smart Campus Infrastructure",
      description: "Fully air-conditioned interactive smart classrooms, ergonomic seating, high-speed dedicated fibre internet, executive boardrooms, and creative collaboration lounges.",
      badge: "World-Class Labs",
    },
    {
      icon: Target,
      title: "Local Excellence: Sivakasi • Sattur • Srivilliputtur",
      description: "Access Chennai and Bangalore-level tech curriculum and high-paying career launches right in your home region without incurring heavy metro relocation costs.",
      badge: "Regional Access",
    },
    {
      icon: ShieldCheck,
      title: "End-to-End Interview Readiness",
      description: "Rigorous 360-degree training covering technical interview drills, DS & Algo rounds, MNC aptitude tests, resume engineering, and English corporate communication bootcamps.",
      badge: "Complete Grooming",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0B3B8F_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-orange mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The WeGrow Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Why Choose WeGrow Skill Campus?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            We bridge the gap between traditional college degrees and high-paying IT jobs with industry-curated skills, intense mentorship, and verified campus recruitments.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-xl"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-navy transition-colors group-hover:bg-brand-navy group-hover:text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-orange-50 px-2.5 py-1 rounded-md">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-3 flex items-center gap-2 text-xs font-semibold text-brand-navy">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Guaranteed Skill Transformation</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Strip */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-brand-navy via-[#0E4CB5] to-brand-navy p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              Transform Your Career in 2026
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              Ready to visit our campus and talk to our lead faculty?
            </h3>
            <p className="text-sm text-blue-100 mt-1 max-w-xl">
              Walk in anytime between 9:00 AM and 7:00 PM at Sivakasi or Srivilliputtur, or book a free counselling slot.
            </p>
          </div>

          <a
            href="#enquiry-form-section"
            className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-orange-600 transition"
          >
            <span>Book Campus Tour &amp; Counselling</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingWhyChoose;


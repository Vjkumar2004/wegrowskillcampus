"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  MessageCircle,
  Building,
  GraduationCap,
} from "lucide-react";

interface LandingHeroProps {
  onEnquireClick: (course?: string) => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({ onEnquireClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#071739] via-[#0B3B8F] to-[#0A2660] text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative gradient glow elements */}
      <div className="absolute top-0 left-1/4 -z-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 -z-0 h-80 w-80 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />
      
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Top Announcement Bar */}
        <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-medium backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-amber-300 font-semibold tracking-wide uppercase">Admissions Open 2026</span>
          <span className="text-white/60">|</span>
          <span className="text-white/90">Sivakasi • Sattur • Srivilliputtur</span>
          <span className="hidden md:inline text-white/60">|</span>
          <span className="hidden md:inline text-emerald-300">100% Placement Assistance</span>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headline and Call-to-Actions */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl/[1.15] text-white">
              Launch Your <span className="text-brand-orange underline decoration-amber-400/40 underline-offset-8">High-Paying Tech Career</span> With Placement Support
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-blue-100/90 max-w-2xl font-light">
              Transform from learner to industry-ready software professional. Learn Full Stack Development, AI, Data Science &amp; Cyber Security with hands-on labs, 10+ live projects, and guaranteed campus placement drives in <strong className="font-semibold text-white">Sivakasi, Sattur, and Srivilliputtur</strong>.
            </p>

            {/* Key feature pills */}
            <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 backdrop-blur-sm border border-white/10 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                100% Practical Project Labs
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 backdrop-blur-sm border border-white/10 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                1,250+ Placed Students
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 backdrop-blur-sm border border-white/10 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                120+ Hiring Corporate Partners
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 backdrop-blur-sm border border-white/10 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Zero-Cost EMI Available
              </span>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={() => onEnquireClick()}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:bg-orange-600 hover:shadow-orange-500/50 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Book Free Career Counselling</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="https://wa.me/919344337331?text=Hi%20WeGrow%20Skill%20Campus,%20I%20am%20interested%20in%20courses%20and%20placements%20in%20Sivakasi/Sattur/Srivilliputtur.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-600/20 px-5 py-4 text-base font-bold text-emerald-300 backdrop-blur-sm transition-all hover:bg-emerald-600/30 hover:border-emerald-400 hover:text-white"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+919344337331"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-4 text-base font-medium text-white transition-all hover:bg-white/20"
                title="Call Sivakasi Admissions"
              >
                <PhoneCall className="w-5 h-5 text-amber-300" />
                <span className="sm:hidden font-semibold">+91 93443 37331</span>
              </a>
            </div>

            {/* Quick trust metrics row */}
            <div className="mt-10 border-t border-white/15 pt-6 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">15+</p>
                <p className="text-xs sm:text-sm text-blue-200/80">Tech Courses</p>
              </div>
              <div className="border-l border-white/15 pl-4 sm:pl-6">
                <p className="text-2xl sm:text-3xl font-extrabold text-white">3,500+</p>
                <p className="text-xs sm:text-sm text-blue-200/80">Enrolled Students</p>
              </div>
              <div className="border-l border-white/15 pl-4 sm:pl-6">
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-400">1,250+</p>
                <p className="text-xs sm:text-sm text-blue-200/80">Placed Candidates</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative Frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-900 aspect-[4/3] group">
                <Image
                  src="/images/infrastructure/campus-reception.jpg"
                  alt="WeGrow Skill Campus Grand Reception and Innovation Hub"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                {/* Campus Badge */}
                

                {/* Bottom Highlight Card */}
               
              </div>

              {/* Floating Stat Card: Placement Support */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;

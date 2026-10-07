"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const CTASection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F8FAFD] py-[90px] lg:py-[110px] px-6 sm:px-10 overflow-hidden"
      id="cta"
    >
      <style jsx>{`
        @keyframes floatCircle1 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes floatCircle2 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(10px);
          }
        }
        .animate-float-circle-1 {
          animation: floatCircle1 8s ease-in-out infinite;
        }
        .animate-float-circle-2 {
          animation: floatCircle2 8s ease-in-out infinite;
        }
      `}</style>

      {/* ================= BACKGROUND DECORATIONS (z-0) ================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* 1. TOP-LEFT: Light blue circle (~520px) + Thin orange arc */}
        <div className="absolute -top-[120px] -left-[100px] animate-float-circle-1">
          {/* Light blue circle */}
          <div className="w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] lg:w-[520px] lg:h-[520px] rounded-full bg-[#E3EEFB] opacity-80" />
          {/* Thin orange arc outline (2px #F7820E) */}
          <div className="absolute -top-[20px] -left-[20px] w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] lg:w-[560px] lg:h-[560px] rounded-full border-2 border-[#F7820E] border-t-transparent border-l-transparent rotate-45 opacity-90" />
        </div>

        {/* 2. BOTTOM-RIGHT: Soft peach circle (~480px) + Thin orange arc */}
        <div className="absolute -bottom-[120px] -right-[80px] animate-float-circle-2">
          {/* Soft peach circle */}
          <div className="w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] lg:w-[480px] lg:h-[480px] rounded-full bg-[#FDD5A8] opacity-85" />
          {/* Thin orange arc outline (2px #F7820E) */}
          <div className="absolute -top-[15px] -left-[15px] w-[390px] h-[390px] sm:w-[470px] sm:h-[470px] lg:w-[510px] lg:h-[510px] rounded-full border-2 border-[#F7820E] border-b-transparent border-r-transparent -rotate-12 opacity-90" />
        </div>

        {/* 3. BOTTOM WAVE: Light blue curved wave shape (#EAF2FC, opacity 0.7) curving up gently on both sides */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[90px] sm:h-[120px] lg:h-[140px] pointer-events-none"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,45 C420,125 1020,125 1440,45 L1440,120 L0,120 Z"
            fill="#EAF2FC"
            fillOpacity="0.7"
          />
        </svg>

        {/* 4. DOT GRIDS (5 rows x 5 cols, 3px dots, #C5D2E6, gap 22px) */}
        {/* Left dot grid (vertically centered, left 50px, hidden on mobile) */}
        <div className="hidden lg:grid grid-cols-5 gap-[22px] absolute left-[50px] top-1/2 -translate-y-1/2">
          {Array.from({ length: 25 }).map((_, i) => (
            <span key={i} className="w-[3px] h-[3px] rounded-full bg-[#C5D2E6] block" />
          ))}
        </div>

        {/* Top-Right dot grid (right 50px, top 180px, hidden on mobile) */}
        <div className="hidden lg:grid grid-cols-5 gap-[22px] absolute right-[50px] top-[180px]">
          {Array.from({ length: 25 }).map((_, i) => (
            <span key={i} className="w-[3px] h-[3px] rounded-full bg-[#C5D2E6] block" />
          ))}
        </div>
      </div>

      {/* ================= CONTENT (Centered, max-w 1200px, z-2) ================= */}
      <div className="relative z-[2] max-w-[1200px] mx-auto text-center flex flex-col items-center">
        {/* 1. EYEBROW (centered): 70px x 3px orange line + text, gap 30px */}
        <div
          className="flex items-center justify-center gap-[20px] sm:gap-[30px] transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transitionDelay: "0ms",
          }}
        >
          <span className="w-[50px] sm:w-[70px] h-[3px] bg-[#F7820E] rounded-full shrink-0" aria-hidden="true" />
          <span className="text-[16px] sm:text-[20px] font-bold font-montserrat uppercase tracking-[1px] text-[#F7820E]">
            TRANSFORM YOUR TRAJECTORY
          </span>
        </div>

        {/* 2. HEADING (2 lines, centered): 88px desktop / 60px tablet / 40px mobile, weight 800, line-height 1.05 */}
        <h2
          className="font-montserrat font-extrabold text-[40px] sm:text-[54px] md:text-[60px] lg:text-[76px] xl:text-[88px] tracking-[-1.5px] sm:tracking-[-2px] leading-[1.05] mt-[26px] sm:mt-[30px] transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transitionDelay: "120ms",
          }}
        >
          <span className="block text-[#0B3B8F]">Let&apos;s Build the Next</span>
          <span className="block text-[#F7820E]">Career Story.</span>
        </h2>

        {/* 3. PARAGRAPH (centered): 22px, weight 400, line-height 1.7, #4A5A78, max-width 1100px */}
        <p
          className="font-poppins text-[17px] sm:text-[19px] md:text-[22px] font-normal leading-[1.7] text-[#4A5A78] max-w-[1100px] mx-auto mt-[24px] sm:mt-[30px] transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transitionDelay: "240ms",
          }}
        >
          Whether you are a student aspiring to master in-demand industry competencies or a
          corporate partner seeking job-ready talent, WeGrow Skill Campus is your strategic bridge.
        </p>

        {/* 4. BUTTONS ROW (centered, gap 26px, margin-top 44px) */}
        <div
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-[26px] mt-[36px] sm:mt-[44px] w-full sm:w-auto transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transitionDelay: "360ms",
          }}
        >
          {/* Button 1: "Explore Programs →" — orange bg #F7820E, white text, padding 0 60px */}
          <Link
            href="/programs"
            id="cta-explore-programs"
            className="group w-full sm:w-auto h-[60px] sm:h-[80px] px-8 sm:px-[60px] rounded-[10px] bg-[#F7820E] hover:bg-[#E06F00] text-white font-montserrat font-bold text-[18px] sm:text-[22px] flex items-center justify-center gap-3 shadow-[0_10px_24px_rgba(247,130,14,0.25)] transition-all duration-200 hover:-translate-y-1"
          >
            <span>Explore Programs</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          {/* Button 2: "Partner With Us →" — transparent bg, 2px navy border, navy text, padding 0 60px */}
          <Link
            href="/industry"
            id="cta-partner-with-us"
            className="group w-full sm:w-auto h-[60px] sm:h-[80px] px-8 sm:px-[60px] rounded-[10px] bg-transparent border-2 border-[#0B3B8F] text-[#0B3B8F] hover:bg-[#0B3B8F] hover:text-white font-montserrat font-bold text-[18px] sm:text-[22px] flex items-center justify-center gap-3 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Partner With Us</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          {/* Button 3: "Contact Us →" — transparent bg, 2px navy border, navy text, padding 0 70px */}
          <Link
            href="/contact"
            id="cta-contact-us"
            className="group w-full sm:w-auto h-[60px] sm:h-[80px] px-8 sm:px-[70px] rounded-[10px] bg-transparent border-2 border-[#0B3B8F] text-[#0B3B8F] hover:bg-[#0B3B8F] hover:text-white font-montserrat font-bold text-[18px] sm:text-[22px] flex items-center justify-center gap-3 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

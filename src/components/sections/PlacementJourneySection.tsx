"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  GraduationCap,
  FileText,
  Laptop,
  Users,
  Briefcase,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

interface JourneyStepItem {
  step: string;
  theme: "blue" | "orange";
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const JOURNEY_STEPS: JourneyStepItem[] = [
  {
    step: "01",
    theme: "blue",
    icon: GraduationCap,
    title: "Skill Development",
    description: "Build strong foundational and industry-relevant technical competencies.",
  },
  {
    step: "02",
    theme: "orange",
    icon: FileText,
    title: "Career Preparation",
    description: "Strategic guidance, resume engineering, aptitude mastery and interview drills.",
  },
  {
    step: "03",
    theme: "blue",
    icon: Laptop,
    title: "Industry Projects",
    description: "Work on live real-world capstones with active industry mentorship and exposure.",
  },
  {
    step: "04",
    theme: "orange",
    icon: Users,
    title: "Interview Readiness",
    description: "Rigorous mock panels, technical & HR rounds, and personalized soft-skills feedback.",
  },
  {
    step: "05",
    theme: "blue",
    icon: Briefcase,
    title: "Placement Support",
    description: "Dedicated assistance connecting you directly to verified corporate hiring partners.",
  },
];

export const PlacementJourneySection: React.FC = () => {
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
      className="relative w-full bg-[#F8FAFD] py-[70px] lg:py-[85px] border-b border-[#E3E8F0] overflow-hidden"
      id="placement-journey"
    >
      {/* Full-width Container: No restrictive narrow max-width or excessive side margins */}
      <div className="w-full px-4 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* ================= HEADER ROW ================= */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-12 w-full mb-[46px]">
          {/* LEFT (60%): Eyebrow + Heading */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center">
            {/* Eyebrow: 48px x 3px orange line + text, gap 18px */}
            <div className="flex items-center gap-[18px] mb-3">
              <span className="w-[48px] h-[3px] bg-[#F7820E] rounded-full shrink-0" aria-hidden="true" />
              <span className="text-[15px] sm:text-[16px] font-bold font-montserrat uppercase tracking-[1px] text-[#F7820E]">
                STRUCTURED SUCCESS ROADMAP
              </span>
            </div>

            {/* Heading: balanced scale */}
            <h2 className="font-montserrat font-extrabold text-[36px] sm:text-[44px] md:text-[50px] lg:text-[56px] xl:text-[60px] tracking-[-1px] leading-[1.1]">
              <span className="text-[#0B3B8F]">Placement </span>
              <span className="text-[#F7820E]">Journey</span>
            </h2>
          </div>

          {/* RIGHT (40%): Paragraph */}
          <div className="w-full lg:w-[40%] flex flex-col justify-end">
            <p className="font-poppins text-[15px] sm:text-[17px] font-medium leading-[1.6] text-[#3B4A66] max-w-[560px]">
              A milestone-driven pathway guiding students from initial foundational competencies to
              successful corporate employment.
            </p>
            {/* Orange underline accent */}
            <div className="w-[50px] h-[3px] bg-[#F7820E] rounded-full mt-[16px]" aria-hidden="true" />
          </div>
        </div>

        {/* ================= TIMELINE (5 steps) ================= */}
        <div className="relative w-full pt-[36px]">
          {/* DESKTOP CONNECTOR LINE: 2px gradient running behind number circles (at top: 36px) */}
          <div
            className="hidden xl:block absolute top-[36px] left-[10%] right-[10%] h-[2px] pointer-events-none z-0"
            style={{
              background: "linear-gradient(90deg, #DCE6F8, #FFE3C7, #DCE6F8, #FFE3C7, #DCE6F8)",
              transformOrigin: "left center",
              transform: isVisible ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            aria-hidden="true"
          />

          {/* 4 ARROW BADGES BETWEEN CARDS (centered on the connector line at >=1280px) */}
          <div className="hidden xl:block absolute top-[36px] left-0 right-0 pointer-events-none z-10 -translate-y-1/2">
            {[1, 2, 3, 4].map((idx) => {
              const leftPercent = idx * 20;

              return (
                <div
                  key={idx}
                  className="absolute -translate-x-1/2 w-[44px] h-[44px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_14px_rgba(11,59,143,0.10)] border border-[#EEF1F6]"
                  style={{ left: `${leftPercent}%` }}
                >
                  <ChevronRight className="w-5 h-5 text-[#F7820E] stroke-[2.5]" />
                </div>
              );
            })}
          </div>

          {/* MOBILE VERTICAL CONNECTOR LINE (visible only on mobile) */}
          <div
            className="block sm:hidden absolute top-[36px] bottom-[36px] left-[28px] w-[2px] bg-gradient-to-b from-[#DCE6F8] via-[#FFE3C7] to-[#DCE6F8] z-0 pointer-events-none"
            aria-hidden="true"
          />

          {/* 5 STEP CARDS GRID (No points section, clean proportional cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-14 gap-x-5 xl:gap-5 2xl:gap-6 w-full items-stretch relative z-10">
            {JOURNEY_STEPS.map((item, index) => {
              const IconComponent = item.icon;
              const isBlue = item.theme === "blue";

              return (
                <div
                  key={item.step}
                  className="flex flex-col group relative"
                  style={{
                    animationDelay: `${index * 120}ms`,
                  }}
                >
                  {/* Step Card */}
                  <div className="w-full bg-white rounded-[20px] border border-[#EEF1F6] shadow-[0_6px_22px_rgba(11,59,143,0.06)] hover:shadow-[0_16px_36px_rgba(11,59,143,0.12)] pt-0 px-[18px] xl:px-[20px] pb-[26px] flex flex-col justify-start h-full transition-all duration-300 ease-out hover:-translate-y-[6px]">
                    {/* Number circle: 72px desktop / 66px mobile, margin-top half outside */}
                    <div
                      className={`w-[66px] h-[66px] sm:w-[72px] sm:h-[72px] rounded-full mx-auto -mt-[33px] sm:-mt-[36px] flex items-center justify-center shrink-0 transition-all duration-300 shadow-md ${
                        isBlue
                          ? "bg-[#E6EEFB] text-[#0B3B8F] group-hover:bg-[#0B3B8F] group-hover:text-white"
                          : "bg-[#FFE8D1] text-[#F7820E] group-hover:bg-[#F7820E] group-hover:text-white"
                      }`}
                    >
                      <span className="font-montserrat font-extrabold text-[25px] sm:text-[28px] leading-none">
                        {item.step}
                      </span>
                    </div>

                    {/* Icon circle: 76px desktop / 68px mobile */}
                    <div
                      className={`w-[68px] h-[68px] sm:w-[76px] sm:h-[76px] rounded-full mx-auto mt-[12px] sm:mt-[14px] flex items-center justify-center shrink-0 ${
                        isBlue ? "bg-[#E6EEFB] text-[#0B3B8F]" : "bg-[#FFE8D1] text-[#F7820E]"
                      }`}
                    >
                      <IconComponent className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] stroke-[2]" />
                    </div>

                    {/* Title */}
                    <h3 className="font-montserrat font-extrabold text-[19px] xl:text-[21px] text-[#0B3B8F] text-center w-full mt-[18px] leading-[1.25]">
                      {item.title}
                    </h3>

                    {/* Orange underline: centered 42px */}
                    <div className="flex justify-center w-full my-[12px]">
                      <span className="block h-[3px] w-[42px] bg-[#F7820E] rounded-full transition-all duration-300 group-hover:w-[60px]" />
                    </div>

                    {/* Description: Clean, readable body text */}
                    <p className="font-poppins text-[14px] xl:text-[15px] font-normal leading-[1.6] text-[#3B4A66] text-center w-full">
                      {item.description}
                    </p>
                  </div>

                  {/* MOBILE DOWN ARROW (between steps on mobile) */}
                  {index < JOURNEY_STEPS.length - 1 && (
                    <div className="sm:hidden flex justify-center my-3">
                      <div className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center shadow-md border border-[#EEF1F6]">
                        <ChevronDown className="w-5 h-5 text-[#F7820E] stroke-[2.5]" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementJourneySection;

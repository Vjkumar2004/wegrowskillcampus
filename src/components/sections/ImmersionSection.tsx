"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Code2,
  Users,
  Briefcase,
  TrendingUp,
  Building2,
  Settings,
  Laptop,
  Trophy,
  ArrowRight,
} from "lucide-react";

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STATS_DATA: StatItem[] = [
  {
    id: "live-projects",
    target: 50,
    suffix: "+",
    label: "Live Projects\nDelivered",
    icon: Code2,
  },
  {
    id: "practical-exposure",
    target: 200,
    suffix: "+",
    label: "Students Get\nPractical Exposure",
    icon: Users,
  },
  {
    id: "industry-partners",
    target: 100,
    suffix: "+",
    label: "Industry\nPartners",
    icon: Briefcase,
  },
  {
    id: "placement-support",
    target: 98,
    suffix: "%",
    label: "Placement\nSupport",
    icon: TrendingUp,
  },
];

const BOTTOM_FEATURES = [
  {
    id: "client-projects",
    icon: Building2,
    label: "Work on Real\nClient Projects",
  },
  {
    id: "industry-mentors",
    icon: Users,
    label: "Learn from\nIndustry Mentors",
  },
  {
    id: "practical-skills",
    icon: Settings,
    label: "Build\nPractical Skills",
  },
  {
    id: "real-exposure",
    icon: Laptop,
    label: "Gain Real-World\nExposure",
  },
  {
    id: "career-opportunities",
    icon: Trophy,
    label: "Step Into Better\nCareer Opportunities",
  },
];

const StatCardItem: React.FC<{
  stat: StatItem;
  isVisible: boolean;
}> = ({ stat, isVisible }) => {
  const [count, setCount] = useState(0);
  const IconComponent = stat.icon;

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    let animationFrameId: number;
    const duration = 1800;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * stat.target));
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(stat.target);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, stat.target]);

  return (
    <div className="flex flex-col items-center text-center px-1 sm:px-2">
      {/* Icon circle 56px, bg #123E8C, white icon 24px */}
      <div className="w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] rounded-full bg-[#123E8C] flex items-center justify-center shrink-0 shadow-md">
        <IconComponent className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] text-white stroke-[2.2]" />
      </div>

      {/* Number: 28px, weight 800, orange #F7820E */}
      <span className="font-montserrat font-extrabold text-[24px] sm:text-[28px] text-[#F7820E] mt-[8px] leading-none">
        {count}
        {stat.suffix}
      </span>

      {/* Label: 14px, weight 500, white, 2 lines */}
      <span className="font-montserrat font-medium text-[12px] sm:text-[14px] text-white mt-[5px] leading-[1.3] whitespace-pre-line text-center">
        {stat.label}
      </span>
    </div>
  );
};

export const ImmersionSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0A2A5E] overflow-hidden text-white"
      id="applied-immersion"
    >
      {/* ================= MAIN AREA (Adjusted to min-h-[750px] so stats card never cuts off) ================= */}
      <div className="relative min-h-[660px] xl:min-h-[750px] w-full flex flex-col min-[1200px]:block">
        {/* 1. PHOTO (right side): width 55%, height 100%, object-fit cover, z-index 1. NO dark overlay */}
        <div className="relative min-[1200px]:absolute top-0 right-0 w-full min-[1200px]:w-[55%] h-[400px] min-[1200px]:h-full z-[1] overflow-hidden bg-slate-900 order-2 min-[1200px]:order-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/skillcampus-hero.png"
            alt="Students engaged in applied industry immersion"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* 2. ORANGE CHEVRON BANDS (along the navy edge): z-index 3 */}
        <div
          className="hidden min-[1200px]:block absolute inset-0 w-full h-full pointer-events-none z-[3] overflow-hidden"
          aria-hidden="true"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 750"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Band 2 (outer): offset ~40px to the right, ~68px wide */}
            <path
              d="M 552,-35 L 471,338 L 622,785"
              stroke="url(#orangeOuterGrad)"
              strokeWidth="68"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.6"
            />
            {/* Band 1 (inner): solid #F7820E, ~48px wide, opacity 0.95 */}
            <path
              d="M 512,-25 L 431,338 L 582,775"
              stroke="#F7820E"
              strokeWidth="48"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.95"
            />
            <defs>
              <linearGradient id="orangeOuterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB060" />
                <stop offset="100%" stopColor="#F7820E" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 3. LEFT NAVY PANEL (chevron shape): width ~58%, z-index 2 */}
        <div
          className="immersion-navy-panel relative min-[1200px]:absolute top-0 left-0 w-full min-[1200px]:w-[58%] h-full z-[2] flex flex-col justify-between order-1 min-[1200px]:order-none"
          style={{
            background: "linear-gradient(135deg, #0A2A5E 0%, #0B3B8F 70%, #0E47A8 100%)",
          }}
        >
          {/* LEFT CONTENT (padding-left 120px, top padding 56px) */}
          <div className="w-full px-6 sm:px-12 min-[1200px]:pl-[120px] min-[1200px]:pr-8 pt-[48px] min-[1200px]:pt-[56px] pb-3 flex flex-col justify-start relative z-10">
            {/* 1. Eyebrow: 50px x 3px orange line + text */}
            <div className="flex items-center gap-[20px] mb-3">
              <span className="w-[50px] h-[3px] bg-[#F7820E] rounded-full shrink-0" aria-hidden="true" />
              <span className="text-[15px] sm:text-[17px] font-bold font-montserrat uppercase tracking-[1px] text-[#F7820E]">
                APPLIED INDUSTRY IMMERSION
              </span>
            </div>

            {/* 2. Heading (3 lines), 56px, weight 800, line-height 1.08 */}
            <h2 className="font-montserrat font-extrabold text-[34px] sm:text-[44px] lg:text-[50px] xl:text-[56px] tracking-[-1px] leading-[1.08]">
              <span className="block text-white">Real Projects.</span>
              <span className="block text-[#F7820E]">Real Experience.</span>
              <span className="block text-white">Real Careers.</span>
            </h2>

            {/* 3. Paragraph: 18px, weight 400, line-height 1.5, rgba(255,255,255,0.88), max-width 560px, margin-top 16px */}
            <p className="font-poppins text-[15px] sm:text-[17px] xl:text-[18px] font-normal leading-[1.5] text-white/90 max-w-[560px] mt-[16px]">
              We run live industry projects, web development services and client projects — giving
              students real exposure, practical experience and the confidence to step into their
              careers.
            </p>

            {/* 4. Button "Explore Our Live Projects →" */}
            <div className="mt-[18px]">
              <Link
                href="/programs#live-projects"
                className="inline-flex items-center justify-center bg-[#F7820E] hover:bg-[#E06F00] text-white text-[16px] sm:text-[17px] font-bold font-montserrat px-[34px] sm:px-[38px] py-[16px] rounded-[8px] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_20px_rgba(247,130,14,0.35)] text-center whitespace-nowrap group"
                id="explore-live-projects-btn"
              >
                <span>Explore Our Live Projects</span>
                <ArrowRight
                  className="w-5 h-5 ml-2.5 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* STATS CARD (below the button, inside navy panel): margin-left 190px, width ~630px, padding 16px 14px */}
          {/* Sits with comfortable margin above the bottom strip, perfectly intact with NO cutting off */}
          <div className="w-full px-6 sm:px-12 min-[1200px]:px-0 min-[1200px]:ml-[190px] min-[1200px]:max-w-[630px] pb-6 min-[1200px]:pb-5 relative z-10">
            <div
              className="w-full rounded-[14px] p-[16px_14px] shadow-[0_15px_40px_rgba(0,0,0,0.3)]"
              style={{
                background: "rgba(8, 30, 75, 0.65)",
                border: "1px solid rgba(255, 255, 255, 0.14)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <div className="grid grid-cols-2 min-[640px]:grid-cols-4 gap-2 min-[640px]:divide-x min-[640px]:divide-white/15 w-full items-start">
                {STATS_DATA.map((stat) => (
                  <StatCardItem key={stat.id} stat={stat} isVisible={isVisible} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM FEATURE STRIP (WHITE) (~130px) ================= */}
      <div className="w-full bg-[#FFFFFF] shadow-[0_-4px_20px_rgba(11,59,143,0.05)] border-t border-[#E3E8F0] px-6 sm:px-12 xl:px-[105px] py-[26px] relative z-20">
        {/* 5 items evenly spaced, thin vertical dividers #E3E8F0 (height 50px) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-[#E3E8F0] items-center justify-between w-full">
          {BOTTOM_FEATURES.map((item, index) => {
            const FeatureIcon = item.icon;

            return (
              <div
                key={item.id}
                className={`group flex items-center gap-[20px] sm:gap-[28px] transition-transform duration-200 ${
                  index !== 0 ? "lg:pl-6 2xl:pl-8" : ""
                } ${index !== BOTTOM_FEATURES.length - 1 ? "lg:pr-4" : ""}`}
              >
                {/* 72px circle bg #EEF2FA with navy icon 34px (#0B3B8F); hover: bg turns #F7820E, icon white */}
                <div className="w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] rounded-full bg-[#EEF2FA] flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 group-hover:bg-[#F7820E]">
                  <FeatureIcon className="w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] text-[#0B3B8F] transition-colors duration-300 group-hover:text-white stroke-[2.2]" />
                </div>

                {/* 2-line label: 18px, weight 500, navy #0B3B8F */}
                <span className="font-montserrat font-medium text-[16px] sm:text-[18px] text-[#0B3B8F] leading-[1.3] whitespace-pre-line">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImmersionSection;

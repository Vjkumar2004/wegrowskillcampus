import React from "react";
import {
  GraduationCap,
  Users,
  Code2,
  FileText,
  Briefcase,
} from "lucide-react";

interface DifferenceCardItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  image: string;
  accentPosition?: "bottom-left" | "top-left" | null;
}

const DIFFERENCE_CARDS: DifferenceCardItem[] = [
  {
    id: "career-guidance",
    icon: GraduationCap,
    title: "Career Guidance",
    description: "Helping students navigate modern career pathways with strategic direction.",
    image: "/difference/career-guidance.jpg",
    accentPosition: "bottom-left",
  },
  {
    id: "one-on-one-counselling",
    icon: Users,
    title: "One-on-One Counselling",
    description: "Personalized attention to identify strengths and goals.",
    image: "/difference/one-on-one-counselling.jpg",
    accentPosition: null,
  },
  {
    id: "industry-training",
    icon: Code2,
    title: "Industry-Focused Training",
    description: "Practical skills aligned with industry needs for real job readiness.",
    image: "/difference/industry-training.jpg",
    accentPosition: "top-left",
  },
  {
    id: "project-exposure",
    icon: FileText,
    title: "Real Project Exposure",
    description: "Work on live projects and real-world problem solving.",
    image: "/difference/project-exposure.jpg",
    accentPosition: null,
  },
  {
    id: "placement-support",
    icon: Briefcase,
    title: "Placement Support",
    description: "Dedicated assistance with resume building, interview preparation and job opportunities.",
    image: "/difference/placement-support.jpg",
    accentPosition: null,
  },
];

export const DifferenceSection: React.FC = () => {
  return (
    <section
      className="relative w-full bg-[#F8FAFD] py-[80px] lg:py-[90px] border-b border-[#E3E8F0] overflow-hidden"
      id="difference"
    >
      {/* Container: Full-width matching design system with no excessive side borders */}
      <div className="w-full px-4 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* ================= HEADER ROW (2 columns) ================= */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-12 w-full mb-[40px]">
          {/* LEFT (60%): Eyebrow + Heading */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center">
            {/* Eyebrow: 56px x 3px orange line + "HOW WE MAKE A DIFFERENCE" (17px, weight 700, uppercase, letter-spacing 1px, #F7820E), gap 24px */}
            <div className="flex items-center gap-[24px] mb-4">
              <span className="w-[56px] h-[3px] bg-[#F7820E] rounded-full shrink-0" aria-hidden="true" />
              <span className="text-[17px] font-bold font-montserrat uppercase tracking-[1px] text-[#F7820E]">
                HOW WE MAKE A DIFFERENCE
              </span>
            </div>

            {/* Heading: 64px desktop / 36px mobile, weight 800, letter-spacing -1px */}
            <h2 className="font-montserrat font-extrabold text-[36px] sm:text-[46px] md:text-[52px] lg:text-[56px] xl:text-[64px] tracking-[-1px] leading-[1.1]">
              <span className="text-[#0B3B8F]">More Than </span>
              <span className="text-[#F7820E]">Just Training.</span>
            </h2>
          </div>

          {/* RIGHT (40%), aligned to bottom of heading */}
          <div className="w-full lg:w-[40%] flex flex-col justify-end">
            <p className="font-poppins text-[16px] sm:text-[18px] font-medium leading-[1.6] text-[#3B4A66] max-w-[580px]">
              A holistic ecosystem ensuring every learner receives guidance, competence and opportunity
              to grow in the real world.
            </p>
            {/* 60px x 3px orange line below, margin-top 20px */}
            <div className="w-[60px] h-[3px] bg-[#F7820E] rounded-full mt-[20px]" aria-hidden="true" />
          </div>
        </div>

        {/* ================= 5 CARDS (grid, 5 columns, gap 16px, margin-top 40px) ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[16px] xl:gap-[18px] 2xl:gap-[20px] w-full items-stretch">
          {DIFFERENCE_CARDS.map((card, index) => {
            const IconComponent = card.icon;

            return (
              <div
                key={card.id}
                className="group relative bg-white rounded-[18px] pt-[28px] px-[16px] pb-[16px] border border-[#EEF1F6] shadow-[0_8px_24px_rgba(11,59,143,0.06)] hover:shadow-[0_16px_36px_rgba(11,59,143,0.12)] transition-all duration-300 ease-out hover:-translate-y-[6px] flex flex-col justify-between h-full"
                style={{
                  transitionDuration: "350ms",
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Content Section */}
                <div className="flex flex-col">
                  {/* TOP ROW: icon circle + title on the right */}
                  <div className="flex items-center gap-[12px] sm:gap-[16px] pl-[6px] sm:pl-[14px]">
                    <div className="w-[62px] h-[62px] sm:w-[76px] sm:h-[76px] rounded-full bg-[#FFF1E3] flex items-center justify-center shrink-0">
                      <IconComponent className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] text-[#F7820E] stroke-[2.2]" />
                    </div>
                    <h3 className="font-montserrat font-extrabold text-[18px] sm:text-[22px] text-[#0B3B8F] leading-[1.25]">
                      {card.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION: 17px, weight 400, line-height 1.6, #3B4A66, margin-top 28px, padding 0 14px */}
                  <p className="font-poppins text-[15px] sm:text-[17px] font-normal leading-[1.6] text-[#3B4A66] mt-[28px] px-[14px]">
                    {card.description}
                  </p>

                  {/* Orange underline: 60px x 3px #F7820E, margin 18px 14px 28px; grows to 90px on hover */}
                  <div
                    className="h-[3px] w-[60px] bg-[#F7820E] rounded-full mx-[14px] mt-[18px] mb-[28px] transition-all duration-300 ease-out group-hover:w-[90px]"
                    aria-hidden="true"
                  />
                </div>

                {/* IMAGE: pinned to bottom (margin-top auto), full card width (inside padding), height 250px, radius 12px, object-fit cover */}
                <div className="relative w-full h-[250px] rounded-[12px] overflow-hidden mt-auto bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Small orange accent: diagonal band (#F7820E -> transparent, opacity 0.8) */}
                  {card.accentPosition === "bottom-left" && (
                    <div
                      className="absolute bottom-0 left-0 w-[70px] h-[70px] pointer-events-none z-10 overflow-hidden"
                      aria-hidden="true"
                    >
                      <svg className="w-full h-full" viewBox="0 0 70 70" fill="none">
                        <polygon points="0,20 0,70 50,70" fill={`url(#orangeBL-${card.id})`} />
                        <defs>
                          <linearGradient id={`orangeBL-${card.id}`} x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#F7820E" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#F7820E" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  )}

                  {card.accentPosition === "top-left" && (
                    <div
                      className="absolute top-0 left-0 w-[70px] h-[70px] pointer-events-none z-10 overflow-hidden"
                      aria-hidden="true"
                    >
                      <svg className="w-full h-full" viewBox="0 0 70 70" fill="none">
                        <polygon points="0,0 50,0 0,50" fill={`url(#orangeTL-${card.id})`} />
                        <defs>
                          <linearGradient id={`orangeTL-${card.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#F7820E" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#F7820E" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;

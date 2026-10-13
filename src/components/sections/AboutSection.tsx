import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Users,
  Briefcase,
  TrendingUp,
  BookOpen,
  Settings,
} from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#F8FAFD] py-[80px] lg:py-[100px] border-b border-[#E3E8F0] overflow-hidden">
      {/* FULL WIDTH CONTAINER: No max-w-1440 restriction, matching Navbar and Hero full width */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* 3 Columns Layout: Left text (38%) | Center image (44% - wider & prominent) | Right stats card (18% - compact) */}
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:grid-cols-[0.95fr_1.15fr_0.72fr] xl:gap-8 2xl:gap-12">
          {/* ================= LEFT COLUMN (Text) - 38% ================= */}
          <div className="flex w-full flex-col justify-center">
            {/* 1. Eyebrow label: 48px wide x 3px orange line + text "ABOUT WEGROW" */}
            <div className="flex items-center gap-[20px] mb-4">
              <span className="w-[48px] h-[3px] bg-[#F7820E] rounded-full shrink-0" aria-hidden="true" />
              <span className="text-[16px] sm:text-[18px] font-semibold font-montserrat uppercase tracking-[1px] text-[#F7820E]">
                ABOUT WEGROW
              </span>
            </div>

            {/* 2. Heading (2 lines): 64px desktop / 38px mobile, weight 800, line-height 1.1 */}
            <h2 className="font-montserrat font-extrabold text-[34px] sm:text-[44px] lg:text-[46px] xl:text-[54px] 2xl:text-[62px] leading-[1.12] tracking-[-1px]">
              <span className="block text-[#0B3B8F]">Where Education</span>
              <span className="block">
                <span className="text-[#F7820E]">Meets </span>
                <span className="text-[#0B3B8F]">Industry</span>
                <span className="text-[#F7820E]">.</span>
              </span>
            </h2>

            {/* 3. Paragraph: 19px, weight 400, line-height 1.6, color #3B4A66, mt 24px */}
            <p className="font-poppins text-[16px] sm:text-[18px] font-normal leading-[1.6] text-[#3B4A66] max-w-[580px] mt-[24px]">
              WeGrow is built on a clear conviction — the biggest challenge students face is not a
              lack of talent, but the gap between academic knowledge and real-world industry
              requirements. We bridge this gap through practical training, mentorship, industry
              exposure and real-world project execution.
            </p>

            {/* 4. Button "Discover WeGrow →": orange bg, 18px weight 700, padding 20px 44px, shadow */}
            <div className="mt-[26px]">
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-[#F7820E] hover:bg-[#E06F00] text-white text-[17px] sm:text-[18px] font-bold font-montserrat px-[40px] sm:px-[46px] py-[18px] sm:py-[20px] rounded-[10px] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_20px_rgba(247,130,14,0.25)] text-center whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#F7820E] focus:ring-offset-2"
                id="discover-wegrow-btn"
              >
                <span>Discover WeGrow</span>
                <ArrowRight className="w-5 h-5 ml-2.5 stroke-[2.5]" aria-hidden="true" />
              </Link>
            </div>

            {/* 5. Feature row (4 items, margin-top 36px), separated by thin vertical dividers #E3E8F0 */}
            <div className="mt-[36px] pt-6 border-t border-[#E3E8F0] w-full">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 2xl:grid-cols-4 gap-4 lg:gap-3 2xl:gap-0 2xl:divide-x 2xl:divide-[#E3E8F0] w-full">
                {/* Item 1: Graduation cap (navy) on light blue circle #EEF2FA */}
                <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-3 lg:px-1 2xl:px-3">
                  <div className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-full bg-[#EEF2FA] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-[#0B3B8F] stroke-[2]" aria-hidden="true" />
                  </div>
                  <span className="text-[13px] sm:text-[14px] 2xl:text-[15px] font-semibold font-montserrat text-[#0B3B8F] leading-tight">
                    Practical
                    <br />
                    Learning
                  </span>
                </div>

                {/* Item 2: Users (orange) on light orange circle #FFF1E3 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-3 lg:px-1 2xl:px-3">
                  <div className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-full bg-[#FFF1E3] flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-[#F7820E] stroke-[2]" aria-hidden="true" />
                  </div>
                  <span className="text-[13px] sm:text-[14px] 2xl:text-[15px] font-semibold font-montserrat text-[#0B3B8F] leading-tight">
                    Industry
                    <br />
                    Mentorship
                  </span>
                </div>

                {/* Item 3: Briefcase (navy) on light blue circle #EEF2FA */}
                <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-3 lg:px-1 2xl:px-3">
                  <div className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-full bg-[#EEF2FA] flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6 text-[#0B3B8F] stroke-[2]" aria-hidden="true" />
                  </div>
                  <span className="text-[13px] sm:text-[14px] 2xl:text-[15px] font-semibold font-montserrat text-[#0B3B8F] leading-tight">
                    Real-World
                    <br />
                    Exposure
                  </span>
                </div>

                {/* Item 4: Trending-up (orange) on light orange circle #FFF1E3 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-3 lg:px-1 2xl:px-3">
                  <div className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-full bg-[#FFF1E3] flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-[#F7820E] stroke-[2]" aria-hidden="true" />
                  </div>
                  <span className="text-[13px] sm:text-[14px] 2xl:text-[15px] font-semibold font-montserrat text-[#0B3B8F] leading-tight">
                    Career
                    <br />
                    Opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= CENTER COLUMN (Image) - 44% (Expanded & Prominent) ================= */}
          <div className="flex w-full justify-center lg:col-start-2 lg:row-start-1 xl:col-start-2 xl:row-start-1">
            <div className="about-image-wrap">
              <div className="about-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/about-section.png"
                  alt="WeGrow Skill Campus Modern Academic & Practical Facility"
                />
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN (Stats Card) - 18% (Compact Box) ================= */}
          <div className="flex w-full justify-center lg:col-span-2 lg:mx-auto lg:max-w-2xl xl:col-span-1 xl:col-start-3 xl:row-start-1 xl:mx-0 xl:max-w-none xl:justify-end">
            <div className="w-full max-w-[320px] sm:max-w-[340px] lg:max-w-[260px] xl:max-w-[270px] 2xl:max-w-[290px] bg-white rounded-[18px] p-[20px] sm:p-[24px] lg:p-[18px] xl:p-[20px] 2xl:p-[24px] shadow-[0_10px_35px_rgba(11,59,143,0.08)] border border-[#EEF1F6]">
              {/* Stat 1: 📖 15+ Programs Designed */}
              <div className="flex items-center gap-[16px] xl:gap-[16px] 2xl:gap-[20px]">
                <div className="w-[54px] h-[54px] xl:w-[50px] xl:h-[50px] 2xl:w-[56px] 2xl:h-[56px] rounded-full bg-[#FFF1E3] flex items-center justify-center shrink-0">
                  <BookOpen className="w-[24px] h-[24px] xl:w-[22px] xl:h-[22px] 2xl:w-[25px] 2xl:h-[25px] text-[#F7820E] stroke-[2.2]" aria-hidden="true" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[28px] sm:text-[32px] xl:text-[28px] 2xl:text-[32px] font-extrabold font-montserrat text-[#0B3B8F] leading-none">
                    15+
                  </span>
                  <span className="text-[13px] sm:text-[14px] xl:text-[13px] 2xl:text-[14px] font-medium font-montserrat text-[#3B4A66] mt-1.5 leading-tight">
                    Programs
                    <br />
                    Designed
                  </span>
                </div>
              </div>

              {/* Divider 1 */}
              <div className="my-[16px] xl:my-[16px] 2xl:my-[20px] border-t border-[#E8ECF2]" aria-hidden="true" />

              {/* Stat 2: ⚙️ 100% Practical Learning */}
              <div className="flex items-center gap-[16px] xl:gap-[16px] 2xl:gap-[20px]">
                <div className="w-[54px] h-[54px] xl:w-[50px] xl:h-[50px] 2xl:w-[56px] 2xl:h-[56px] rounded-full bg-[#FFF1E3] flex items-center justify-center shrink-0">
                  <Settings className="w-[24px] h-[24px] xl:w-[22px] xl:h-[22px] 2xl:w-[25px] 2xl:h-[25px] text-[#F7820E] stroke-[2.2]" aria-hidden="true" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[28px] sm:text-[32px] xl:text-[28px] 2xl:text-[32px] font-extrabold font-montserrat text-[#0B3B8F] leading-none">
                    100%
                  </span>
                  <span className="text-[13px] sm:text-[14px] xl:text-[13px] 2xl:text-[14px] font-medium font-montserrat text-[#3B4A66] mt-1.5 leading-tight">
                    Practical
                    <br />
                    Learning
                  </span>
                </div>
              </div>

              {/* Divider 2 */}
              <div className="my-[16px] xl:my-[16px] 2xl:my-[20px] border-t border-[#E8ECF2]" aria-hidden="true" />

              {/* Stat 3: 📈 98% Placement Support */}
              <div className="flex items-center gap-[16px] xl:gap-[16px] 2xl:gap-[20px]">
                <div className="w-[54px] h-[54px] xl:w-[50px] xl:h-[50px] 2xl:w-[56px] 2xl:h-[56px] rounded-full bg-[#FFF1E3] flex items-center justify-center shrink-0">
                  <TrendingUp className="w-[24px] h-[24px] xl:w-[22px] xl:h-[22px] 2xl:w-[25px] 2xl:h-[25px] text-[#F7820E] stroke-[2.2]" aria-hidden="true" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[28px] sm:text-[32px] xl:text-[28px] 2xl:text-[32px] font-extrabold font-montserrat text-[#0B3B8F] leading-none">
                    98%
                  </span>
                  <span className="text-[13px] sm:text-[14px] xl:text-[13px] 2xl:text-[14px] font-medium font-montserrat text-[#3B4A66] mt-1.5 leading-tight">
                    Placement
                    <br />
                    Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FileText,
  BarChart3,
  Cpu,
  Compass,
  Layers,
  Award,
  Globe,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#F6F8FC] border-b border-[#E3E8F0] overflow-hidden m-0 p-0">
      {/* Subtle soft white glow on the left */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-[700px] h-[700px] bg-white/70 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/4"
        aria-hidden="true"
      />

      {/* ================= HERO MAIN TOP CANVAS ================= */}
      {/* Contains: Left content + Right full-bleed chevron image + Floating stats card */}
      <div className="relative w-full min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] xl:min-h-[800px] flex items-center">
        {/* LEFT COLUMN CONTENT: Centered on mobile (<lg), Left-aligned on desktop (lg+) */}
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 lg:py-16 relative z-10">
          <div className="w-full lg:w-[50%] xl:w-[48%] flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
            {/* Tagline */}
            <p className="text-[14px] sm:text-[16px] font-medium font-montserrat uppercase tracking-[2px] text-[#3B4A66] mb-4 text-center lg:text-left">
              SKILLS TODAY. OPPORTUNITIES TOMORROW.
            </p>

            {/* Main Headline (3 lines) */}
            <h1 className="font-montserrat font-extrabold text-[38px] sm:text-[50px] lg:text-[56px] xl:text-[68px] leading-[1.1] tracking-[-1px] text-center lg:text-left">
              <span className="block text-[#0B3B8F]">Building Skills.</span>
              <span className="block text-[#F7820E]">Creating Careers.</span>
              <span className="block text-[#0B3B8F]">Connecting Industry.</span>
            </h1>

            {/* Small orange underline bar: centered on mobile (mx-auto), left-aligned on desktop (lg:mx-0) */}
            <div
              className="w-[48px] h-[4px] bg-[#F7820E] rounded-full mt-4 mb-6 mx-auto lg:mx-0"
              aria-hidden="true"
            />

            {/* Description paragraph */}
            <p className="text-[17px] sm:text-[20px] font-normal leading-[1.7] text-[#3B4A66] max-w-[620px] mb-8 font-poppins text-center lg:text-left mx-auto lg:mx-0">
              WeGrow Skill Campus bridges the gap between education and industry through practical
              training, career guidance, real-world exposure and placement support.
            </p>

            {/* Two Action Buttons: centered on mobile, left-aligned on desktop */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-[24px] xl:gap-[32px] w-full sm:w-auto">
              {/* Primary CTA */}
              <Link
                href="/programs"
                className="inline-flex items-center justify-center bg-[#F7820E] hover:bg-[#E06F00] text-white text-[18px] font-bold font-montserrat px-[36px] sm:px-[44px] lg:px-[48px] py-[18px] sm:py-[20px] rounded-[10px] transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-[#F7820E]/20 text-center whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#F7820E] focus:ring-offset-2 w-full sm:w-auto"
                id="hero-primary-cta"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-5 h-5 ml-2.5 stroke-[2.5]" aria-hidden="true" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/industry"
                className="inline-flex items-center justify-center bg-transparent border-2 border-[#0B3B8F] text-[#0B3B8F] hover:bg-[#0B3B8F]/5 text-[18px] font-bold font-montserrat px-[36px] sm:px-[44px] lg:px-[48px] py-[18px] sm:py-[20px] rounded-[10px] transition-all duration-200 hover:-translate-y-0.5 text-center whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#0B3B8F] focus:ring-offset-2 w-full sm:w-auto"
                id="hero-secondary-cta"
              >
                <span>Partner With Us</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE: FULL-BLEED CHEVRON IMAGE & ORANGE SHAPES ================= */}
        {/* On desktop: position absolute top-0 bottom-0 right-0, width ~48% to 50% of viewport */}
        <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-[50vw] xl:w-[48vw] pointer-events-auto">
          {/* LAYER 1: 2 LAYERED ORANGE DECORATIVE CHEVRONS (BEHIND THE IMAGE) - z-index: 1 */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-[1] overflow-visible"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="chevronOuterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFC27A" />
                <stop offset="100%" stopColor="#F7820E" />
              </linearGradient>
            </defs>

            {/* Shape 2 (outer): linear-gradient(135deg, #FFC27A, #F7820E), opacity 0.55, band width ~80px, offset ~120px left */}
            <path
              d="M 120 0 L -120 460 L 160 1000"
              fill="none"
              stroke="url(#chevronOuterGrad)"
              strokeWidth="80"
              strokeLinejoin="round"
              strokeLinecap="round"
              opacity="0.55"
            />

            {/* Shape 1 (closest to image): #F7820E, opacity 0.9, band width ~60px, offset ~60px left */}
            <path
              d="M 180 0 L -60 460 L 220 1000"
              fill="none"
              stroke="#F7820E"
              strokeWidth="60"
              strokeLinejoin="round"
              strokeLinecap="round"
              opacity="0.9"
            />
          </svg>

          {/* LAYER 2: IMAGE CONTAINER WITH EXACT LEFT-POINTING CHEVRON CLIP-PATH - z-index: 2 */}
          {/* Full-bleed on right, no rounded corners, no rectangular border */}
          <div
            className="absolute inset-0 w-full h-full z-[2] overflow-hidden"
            style={{
              clipPath: "polygon(24% 0%, 100% 0%, 100% 100%, 28% 100%, 0% 46%)",
              WebkitClipPath: "polygon(24% 0%, 100% 0%, 100% 100%, 28% 100%, 0% 46%)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/skillcampus-hero.png"
              alt="WeGrow Skill Campus students collaborating in modern campus facility"
              className="w-full h-full object-cover object-center block"
            />
          </div>

          {/* LAYER 3: FLOATING STATS CARD: bottom: 50px, right: 40px, width ~740px - z-index: 3 */}
          <div className="absolute bottom-[40px] right-[40px] z-[3] w-[95%] max-w-[740px] bg-white rounded-[16px] px-6 sm:px-8 py-5 sm:py-6 shadow-[0_10px_30px_rgba(11,59,143,0.14)] border border-[#E3E8F0]">
            <div className="grid grid-cols-3 divide-x divide-[#E3E8F0] items-center">
              {/* Stat 1: 📖 100% — Practical Learning */}
              <div className="flex items-center gap-3.5 px-3 sm:px-5">
                <BookOpen className="w-[36px] h-[36px] text-[#0B3B8F] shrink-0" strokeWidth={2.2} aria-hidden="true" />
                <div className="flex flex-col text-left">
                  <span className="text-[26px] sm:text-[30px] font-extrabold font-montserrat text-[#0B3B8F] leading-tight">
                    100%
                  </span>
                  <span className="text-[12px] sm:text-[14px] font-medium font-montserrat text-[#0B3B8F] whitespace-nowrap">
                    Practical Learning
                  </span>
                </div>
              </div>

              {/* Stat 2: 📄 15+ — Programs Offered */}
              <div className="flex items-center gap-3.5 px-3 sm:px-5">
                <FileText className="w-[36px] h-[36px] text-[#0B3B8F] shrink-0" strokeWidth={2.2} aria-hidden="true" />
                <div className="flex flex-col text-left">
                  <span className="text-[26px] sm:text-[30px] font-extrabold font-montserrat text-[#0B3B8F] leading-tight">
                    15+
                  </span>
                  <span className="text-[12px] sm:text-[14px] font-medium font-montserrat text-[#0B3B8F] whitespace-nowrap">
                    Programs Offered
                  </span>
                </div>
              </div>

              {/* Stat 3: 📊 98% — Placement Support */}
              <div className="flex items-center gap-3.5 px-3 sm:px-5">
                <BarChart3 className="w-[36px] h-[36px] text-[#0B3B8F] shrink-0" strokeWidth={2.2} aria-hidden="true" />
                <div className="flex flex-col text-left">
                  <span className="text-[26px] sm:text-[30px] font-extrabold font-montserrat text-[#0B3B8F] leading-tight">
                    98%
                  </span>
                  <span className="text-[12px] sm:text-[14px] font-medium font-montserrat text-[#0B3B8F] whitespace-nowrap">
                    Placement Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Fallback for Image and Stats (when screen < lg) */}
      <div className="block lg:hidden w-full relative pb-8">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/skillcampus-hero.png"
            alt="WeGrow Skill Campus students collaborating"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="mx-4 mt-[-30px] relative z-10 bg-white rounded-[16px] p-5 shadow-[0_10px_30px_rgba(11,59,143,0.12)] border border-[#E3E8F0]">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E3E8F0] gap-4 sm:gap-0">
            <div className="flex items-center gap-3 px-2">
              <BookOpen className="w-8 h-8 text-[#0B3B8F] shrink-0" strokeWidth={2.2} />
              <div className="flex flex-col text-left">
                <span className="text-[24px] font-extrabold font-montserrat text-[#0B3B8F]">100%</span>
                <span className="text-[12px] font-medium text-[#0B3B8F]">Practical Learning</span>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 pt-3 sm:pt-0">
              <FileText className="w-8 h-8 text-[#0B3B8F] shrink-0" strokeWidth={2.2} />
              <div className="flex flex-col text-left">
                <span className="text-[24px] font-extrabold font-montserrat text-[#0B3B8F]">15+</span>
                <span className="text-[12px] font-medium text-[#0B3B8F]">Programs Offered</span>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 pt-3 sm:pt-0">
              <BarChart3 className="w-8 h-8 text-[#0B3B8F] shrink-0" strokeWidth={2.2} />
              <div className="flex flex-col text-left">
                <span className="text-[24px] font-extrabold font-montserrat text-[#0B3B8F]">98%</span>
                <span className="text-[12px] font-medium text-[#0B3B8F]">Placement Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM FEATURE ROW (5 items separated by thin vertical dividers) ================= */}
      {/* Cleanly positioned in its own row below the hero canvas */}
      <div className="w-full bg-white border-t border-[#E3E8F0] py-8 sm:py-10 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-[#E3E8F0] w-full">
          {/* Feature 1 */}
          <div className="flex items-center gap-3.5 lg:px-4 xl:px-6 2xl:px-8">
            <div className="w-11 h-11 rounded-lg bg-white shadow-[0_2px_10px_rgba(11,59,143,0.06)] border border-[#E3E8F0] flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5 text-[#0B3B8F] stroke-[2]" aria-hidden="true" />
            </div>
            <span className="text-[15px] font-semibold font-montserrat text-[#0B3B8F] leading-tight">
              Industry-Focused
              <br />
              Training
            </span>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-3.5 lg:px-4 xl:px-6 2xl:px-8">
            <div className="w-11 h-11 rounded-lg bg-white shadow-[0_2px_10px_rgba(11,59,143,0.06)] border border-[#E3E8F0] flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5 text-[#0B3B8F] stroke-[2]" aria-hidden="true" />
            </div>
            <span className="text-[15px] font-semibold font-montserrat text-[#0B3B8F] leading-tight">
              Career Guidance
              <br />&amp; Mentoring
            </span>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-3.5 lg:px-4 xl:px-6 2xl:px-8">
            <div className="w-11 h-11 rounded-lg bg-white shadow-[0_2px_10px_rgba(11,59,143,0.06)] border border-[#E3E8F0] flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5 text-[#0B3B8F] stroke-[2]" aria-hidden="true" />
            </div>
            <span className="text-[15px] font-semibold font-montserrat text-[#0B3B8F] leading-tight">
              Real Project
              <br />
              Exposure
            </span>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-3.5 lg:px-4 xl:px-6 2xl:px-8">
            <div className="w-11 h-11 rounded-lg bg-white shadow-[0_2px_10px_rgba(11,59,143,0.06)] border border-[#E3E8F0] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-[#0B3B8F] stroke-[2]" aria-hidden="true" />
            </div>
            <span className="text-[15px] font-semibold font-montserrat text-[#0B3B8F] leading-tight">
              Placement
              <br />
              Assistance
            </span>
          </div>

          {/* Feature 5 */}
          <div className="flex items-center gap-3.5 lg:px-4 xl:px-6 2xl:px-8 col-span-2 md:col-span-1">
            <div className="w-11 h-11 rounded-lg bg-white shadow-[0_2px_10px_rgba(11,59,143,0.06)] border border-[#E3E8F0] flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5 text-[#0B3B8F] stroke-[2]" aria-hidden="true" />
            </div>
            <span className="text-[15px] font-semibold font-montserrat text-[#0B3B8F] leading-tight">
              Global Exposure
              <br />&amp; Partnerships
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

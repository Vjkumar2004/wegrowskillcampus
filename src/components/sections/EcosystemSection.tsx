import React from "react";
import Link from "next/link";
import { GraduationCap, Building2, ArrowRight } from "lucide-react";

interface EcosystemCardData {
  id: string;
  number: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  image: string;
  panelBg: string;
  accentColor: string;
  cornerAccent: string;
  iconBg: string;
  iconColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ECOSYSTEM_CARDS: EcosystemCardData[] = [
  {
    id: "skill-campus",
    number: "01",
    title: "WeGrow Skill Campus",
    description: "Industry-focused technical education for students and working professionals.",
    linkText: "Explore Skill Campus",
    linkHref: "/skill-campus",
    image: "/ecosystem/skill-campus.jpg",
    panelBg: "linear-gradient(180deg, #FFF6EC 0%, #FFFFFF 100%)",
    accentColor: "#F7820E",
    cornerAccent: "#F7820E",
    iconBg: "#FFE8D1",
    iconColor: "#F7820E",
    icon: GraduationCap,
  },
  {
    id: "corporate-services",
    number: "02",
    title: "Industry & Corporate Services",
    description: "Customized training, consulting and talent solutions for businesses.",
    linkText: "Explore Corporate Services",
    linkHref: "/industry",
    image: "/ecosystem/corporate-services.jpg",
    panelBg: "linear-gradient(180deg, #FFF6EC 0%, #FFFFFF 100%)",
    accentColor: "#F7820E",
    cornerAccent: "#F7820E",
    iconBg: "#FFE8D1",
    iconColor: "#F7820E",
    icon: Building2,
  },
];

export const EcosystemSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#F8FAFD] py-[80px] lg:py-[100px] border-b border-[#E3E8F0] overflow-hidden" id="ecosystem">
      {/* FULL WIDTH CONTAINER: No max-w-1440 restriction, matching Navbar, Hero and About full width */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* ================= HEADER ROW (2 columns) ================= */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-12 w-full mb-[40px] xl:mb-[50px]">
          {/* LEFT (65%): Eyebrow + Heading */}
          <div className="w-full lg:w-[65%] flex flex-col justify-center">
            {/* Eyebrow: 48px x 3px orange line + "OUR ECOSYSTEM" (17px, weight 700, uppercase, letter-spacing 1px, #F7820E), gap 24px */}
            <div className="flex items-center gap-[24px] mb-4">
              <span className="w-[48px] h-[3px] bg-[#F7820E] rounded-full shrink-0" aria-hidden="true" />
              <span className="text-[17px] font-bold font-montserrat uppercase tracking-[1px] text-[#F7820E]">
                OUR ECOSYSTEM
              </span>
            </div>

            {/* Heading: 64px desktop / 36px mobile, weight 800, letter-spacing -1px */}
            <h2 className="font-montserrat font-extrabold text-[36px] sm:text-[46px] md:text-[52px] lg:text-[56px] xl:text-[64px] tracking-[-1px] leading-[1.1]">
              <span className="text-[#0B3B8F]">One Vision. </span>
              <span className="text-[#F7820E]">Two Focus Areas.</span>
            </h2>
          </div>

          {/* RIGHT (35%): Paragraph + 56px x 3px orange line */}
          <div className="w-full lg:w-[35%] flex flex-col justify-end">
            <p className="font-poppins text-[16px] sm:text-[18px] font-medium leading-[1.6] text-[#3B4A66] max-w-[580px]">
              Education and industry. A connected ecosystem for your growth. WeGrow empowers
              students, professionals and organizations with practical learning, real-world exposure
              and meaningful opportunities.
            </p>
            {/* 56px x 3px orange line, margin-top 20px */}
            <div className="w-[56px] h-[3px] bg-[#F7820E] rounded-full mt-[20px]" aria-hidden="true" />
          </div>
        </div>

        {/* ================= 2 CARDS (responsive grid) ================= */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8 2xl:gap-10 w-full">
          {ECOSYSTEM_CARDS.map((card, index) => {
            const IconComponent = card.icon;

            return (
              <div
                key={card.id}
                className="group relative rounded-[20px] overflow-hidden bg-white shadow-[0_10px_30px_rgba(11,59,143,0.08)] border border-[#EEF1F6] flex flex-col min-h-[530px] transition-all duration-400 ease-out hover:-translate-y-[6px]"
                style={{
                  transitionDuration: "400ms",
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* TOP: photo, height 55%, object-fit cover */}
                <div className="relative h-[280px] sm:h-[290px] w-full overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* BOTTOM: content panel that overlaps the image by 30px with a large rounded top-left corner (border-top-left-radius 60px) */}
                <div
                  className="relative -mt-[30px] rounded-tl-[60px] p-[28px] sm:p-[30px] z-10 flex flex-col justify-between flex-1"
                  style={{
                    background: card.panelBg,
                  }}
                >
                  {/* Big faded outline number at top-right: 80px, weight 300, transparent fill with 2px stroke at 15% opacity */}
                  <div className="absolute top-3 right-4 sm:right-6 pointer-events-none select-none" aria-hidden="true">
                    <svg className="w-[100px] h-[75px]" viewBox="0 0 100 75" fill="none">
                      <text
                        x="95"
                        y="66"
                        textAnchor="end"
                        fill="none"
                        stroke={card.accentColor}
                        strokeWidth="2"
                        strokeOpacity="0.18"
                        fontFamily="Montserrat"
                        fontWeight="300"
                        fontSize="74"
                      >
                        {card.number}
                      </text>
                    </svg>
                  </div>

                  {/* Top row inside panel: Icon circle on the left + Title on the right */}
                  <div>
                    <div className="flex items-center gap-5 pr-[80px]">
                      {/* Icon circle: 96px, soft tinted bg, icon 44px */}
                      <div
                        className="w-[84px] h-[84px] sm:w-[96px] sm:h-[96px] rounded-full flex items-center justify-center shrink-0 shadow-sm"
                        style={{ backgroundColor: card.iconBg }}
                      >
                        <div style={{ color: card.iconColor }}>
                          <IconComponent className="w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] stroke-[2]" />
                        </div>
                      </div>

                      {/* Title on the right of icon: 26px, weight 800, navy, 2 lines */}
                      <h3 className="font-montserrat font-extrabold text-[22px] sm:text-[26px] text-[#0B3B8F] leading-[1.2]">
                        {card.title}
                      </h3>
                    </div>

                    {/* Description: 16px, weight 400, line-height 1.6, #3B4A66, margin-top 24px */}
                    <p className="font-poppins text-[15px] sm:text-[16px] font-normal leading-[1.6] text-[#3B4A66] mt-[24px]">
                      {card.description}
                    </p>
                  </div>

                  {/* Link with arrow: 17px, weight 700, accent color, arrow moves right 4px on hover */}
                  <div className="mt-[28px] pt-4 relative z-20">
                    <Link
                      href={card.linkHref}
                      className="inline-flex items-center text-[16px] sm:text-[17px] font-bold font-montserrat transition-colors duration-200"
                      style={{ color: card.accentColor }}
                    >
                      <span>{card.linkText}</span>
                      <ArrowRight
                        className="w-5 h-5 ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>

                  {/* Bottom-right corner decoration: 2 overlapping diagonal triangles/bands fading from accent color (opacity 0.5) to transparent, ~160px */}
                  <div
                    className="absolute bottom-0 right-0 w-[160px] h-[160px] pointer-events-none overflow-hidden rounded-br-[20px]"
                    aria-hidden="true"
                  >
                    <svg className="w-full h-full" viewBox="0 0 160 160" fill="none">
                      {/* Band 1 */}
                      <polygon
                        points="25,160 85,160 160,85 160,25"
                        fill={`url(#bandGrad1-${card.id})`}
                      />
                      {/* Band 2 */}
                      <polygon
                        points="85,160 140,160 160,140 160,85"
                        fill={`url(#bandGrad2-${card.id})`}
                      />
                      <defs>
                        <linearGradient id={`bandGrad1-${card.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={card.cornerAccent} stopOpacity="0.5" />
                          <stop offset="100%" stopColor={card.cornerAccent} stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id={`bandGrad2-${card.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={card.cornerAccent} stopOpacity="0.4" />
                          <stop offset="100%" stopColor={card.cornerAccent} stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;

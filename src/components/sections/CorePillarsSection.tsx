import React from "react";
import {
  Compass,
  UserCheck,
  Award,
  Laptop,
  Briefcase,
  Globe,
} from "lucide-react";
import { CORE_PILLARS } from "@/constants/homeContent";
import Container from "@/components/common/Container";

export const CorePillarsSection: React.FC = () => {
  const renderIcon = (name: string) => {
    const iconProps = { className: "w-6 h-6 text-brand-blue", "aria-hidden": true };
    switch (name) {
      case "Compass":
        return <Compass {...iconProps} />;
      case "UserCheck":
        return <UserCheck {...iconProps} />;
      case "Award":
        return <Award {...iconProps} />;
      case "Laptop":
        return <Laptop {...iconProps} />;
      case "Briefcase":
        return <Briefcase {...iconProps} />;
      case "Globe":
        return <Globe {...iconProps} />;
      default:
        return <Award {...iconProps} />;
    }
  };

  return (
    <section className="bg-brand-bg py-20 border-b border-brand-border">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-blue-50 px-3 py-1 rounded border border-blue-200">
            Our Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-3">
            More Than Just Training
          </h2>
          <p className="text-base sm:text-lg text-brand-textSecondary mt-3">
            A 360-degree ecosystem built to nurture confidence, technical depth, and enterprise
            professionalism from day one.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white p-7 rounded-lg border border-brand-border shadow-subtle hover:border-brand-blue/40 transition-colors duration-150"
            >
              <div className="w-12 h-12 rounded bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                {renderIcon(pillar.icon)}
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">{pillar.title}</h3>
              <p className="text-sm text-brand-textSecondary leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CorePillarsSection;

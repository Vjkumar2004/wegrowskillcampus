import React from "react";
import Link from "next/link";
import { Globe, ArrowRight, ShieldCheck } from "lucide-react";
import Container from "@/components/common/Container";
import Badge from "@/components/common/Badge";

export const GlobalExposureSection: React.FC = () => {
  return (
    <section className="bg-white py-20 border-b border-brand-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="orange" className="mb-2">
              International Outlook
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
              Connected to the World of Work
            </h2>

            <p className="text-base sm:text-lg text-brand-textSecondary leading-relaxed">
              Modern careers are borderless. WeGrow Skill Campus prepares graduates with global
              best practices, cross-cultural collaboration aptitude, and adherence to international
              engineering and management standards, ensuring preparedness for multinational roles.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start space-x-3 text-sm text-brand-textPrimary">
                <ShieldCheck className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" aria-hidden="true" />
                <span>Curriculum aligned with international enterprise technology frameworks.</span>
              </div>
              <div className="flex items-start space-x-3 text-sm text-brand-textPrimary">
                <ShieldCheck className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" aria-hidden="true" />
                <span>Opportunities to explore global certification pathways and remote collaboration.</span>
              </div>
              <div className="flex items-start space-x-3 text-sm text-brand-textPrimary">
                <ShieldCheck className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" aria-hidden="true" />
                <span>Exposure to cross-border team practices and distributed workflow culture.</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/global-exposure"
                className="inline-flex items-center text-sm font-semibold text-brand-blue hover:text-brand-brightOrange transition-colors"
              >
                <span>Discover Global Exposure Pathways</span>
                <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Placeholder Cards (No invented partnerships) */}
          <div className="lg:col-span-5">
            <div className="bg-brand-bg border border-brand-border rounded-lg p-6 space-y-4">
              <div className="flex items-center space-x-3 border-b border-brand-border pb-3">
                <Globe className="w-6 h-6 text-brand-blue" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-bold text-brand-navy">International Benchmark Tracks</h3>
                  <p className="text-xs text-brand-textSecondary">Global Standard Readiness</p>
                </div>
              </div>

              {/* Placeholder partner cards */}
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border border-dashed border-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-brand-navy">
                      Global Tech Alignment Track
                    </span>
                    <span className="text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      Standardized
                    </span>
                  </div>
                  <p className="text-xs text-brand-textSecondary mt-1">
                    [Global curriculum alignment placeholder — verified upon accreditation]
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-dashed border-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-brand-navy">
                      International Exchange & Mentors
                    </span>
                    <span className="text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      In Development
                    </span>
                  </div>
                  <p className="text-xs text-brand-textSecondary mt-1">
                    [Global mentor network slots — expanding with institutional affiliates]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GlobalExposureSection;

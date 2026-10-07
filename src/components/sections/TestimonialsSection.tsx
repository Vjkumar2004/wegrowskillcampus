import React from "react";
import { Quote } from "lucide-react";
import { SAMPLE_TESTIMONIALS } from "@/constants/homeContent";
import Container from "@/components/common/Container";
import Badge from "@/components/common/Badge";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-brand-bg py-20 border-b border-brand-border">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="neutral" className="mb-2">
            Student Perspectives
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-2">
            Student Success Stories
          </h2>
          <p className="text-sm sm:text-base text-brand-textSecondary mt-2">
            Insights on the transformation journey from learners undergoing practical training.
          </p>
          <p className="text-xs text-slate-400 mt-1 italic">
            (Cards contain representative sample testimonials pending verified cohort releases)
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAMPLE_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white p-7 rounded-lg border border-brand-border shadow-card flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-brand-orange/40 mb-4" aria-hidden="true" />
                <p className="text-sm text-brand-textPrimary leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">{item.author}</h4>
                    <p className="text-xs text-brand-blue font-medium mt-0.5">{item.role}</p>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium">
                    {item.batchOrTrack}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;

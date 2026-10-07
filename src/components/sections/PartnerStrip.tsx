import React from "react";
import { Building2 } from "lucide-react";
import { PARTNER_LOGOS } from "@/constants/homeContent";
import Container from "@/components/common/Container";

export const PartnerStrip: React.FC = () => {
  return (
    <section className="bg-white py-12 border-b border-brand-border">
      <Container>
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            Trusted by Industry Partners
          </p>
          <p className="text-xs text-slate-400 mt-1">
            (Partner slots ready for active enterprise & recruitment affiliates)
          </p>
        </div>

        {/* Clean, modular partner logo slots */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center">
          {PARTNER_LOGOS.map((partner) => (
            <div
              key={partner.id}
              className="h-16 px-4 py-2 border border-dashed border-slate-200 rounded flex items-center justify-center text-center bg-slate-50/50 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center space-x-2 text-slate-400">
                <Building2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span className="text-xs font-medium truncate">
                  {partner.placeholderText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PartnerStrip;

import React from "react";
import { Terminal, GitBranch, Layers, ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export const IndustryExposureSection: React.FC = () => {
  return (
    <section className="bg-brand-navy text-white py-20 lg:py-24 border-b border-brand-border relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 rounded border border-white/20">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">
                Applied Industry Immersion
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Real Projects.
              <br />
              <span className="text-blue-300">Real Experience.</span>
              <br />
              <span className="text-brand-orange">Real Careers.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Students do not learn in isolation with trivial tutorials. At WeGrow Skill Campus,
              learners gain authentic hands-on exposure through client-grade briefs, production code
              reviews, real agile workflows, and collaborative problem-solving tailored to modern
              workplace environments.
            </p>

            <div className="pt-2">
              <Button
                href="/programs#live-projects"
                variant="primary"
                size="lg"
                id="know-live-projects-btn"
              >
                <span>Know Our Live Projects</span>
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Right Feature Panel */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8 space-y-6 backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white uppercase tracking-wider border-b border-white/10 pb-4">
                What Industry Immersion Looks Like
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center shrink-0 text-brand-orange">
                    <Terminal className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Production-Grade Codebases</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Writing maintainable, tested, and secure code following enterprise standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center shrink-0 text-blue-300">
                    <GitBranch className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Agile Sprint Dynamics</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Daily standups, backlog management, pull request reviews, and sprint retrospectives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center shrink-0 text-emerald-400">
                    <Layers className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Cross-Functional Delivery</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Collaborative execution combining product logic, system design, and executive presentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default IndustryExposureSection;

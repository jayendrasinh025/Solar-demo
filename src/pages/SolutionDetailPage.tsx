import React from 'react';
import { ArrowLeft, ArrowRight, Check, Calculator } from 'lucide-react';
import {
  DETAILED_SOLUTIONS,
  PORTFOLIO_PROJECTS,
  RouteId,
  SolutionDetail,
} from '../data/siteContent';
import { ResilientImage } from '../components/ResilientImage';

interface SolutionDetailPageProps {
  solutionKey: 'residential' | 'commercial' | 'industrial' | 'ground-mounted' | 'battery-hybrid';
  onNavigate: (route: RouteId) => void;
}

export const SolutionDetailPage: React.FC<SolutionDetailPageProps> = ({
  solutionKey,
  onNavigate,
}) => {
  const solution: SolutionDetail = DETAILED_SOLUTIONS[solutionKey];
  const allSolutions = Object.values(DETAILED_SOLUTIONS);
  const otherSolutions = allSolutions.filter((item) => item.id !== solution.id);

  // Filter relevant portfolio projects
  const relatedProjects = PORTFOLIO_PROJECTS.filter((p) => {
    if (solutionKey === 'residential') return p.category === 'Residential';
    if (solutionKey === 'commercial') return p.category === 'Commercial';
    if (solutionKey === 'industrial') return p.category === 'Industrial';
    if (solutionKey === 'ground-mounted') return p.category === 'Ground Mounted';
    return true;
  }).slice(0, 2);

  return (
    <div className="bg-[#F5F5F0] text-[#101C27]">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-end bg-[#101C27] text-[#F5F5F0] overflow-hidden">
        <div className="absolute inset-0">
          <ResilientImage
            src={solution.image}
            alt={solution.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101C27] via-[#101C27]/70 to-[#101C27]/35" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto w-full px-6 md:px-10 pt-32 pb-16 md:pb-24">
          <div
            key={solution.id}
            className="max-w-3xl space-y-5 animate-editorial-in"
          >
            <button
              type="button"
              onClick={() => onNavigate('solutions')}
              className="inline-flex items-center gap-2 text-xs font-mono-tabular uppercase tracking-widest text-[#C6F36B] hover:underline cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Solar Solutions · {solution.number}</span>
            </button>

            <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.08]">
              {solution.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#F5F5F0]/85 leading-relaxed max-w-2xl">
              {solution.subtitle}
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-3 px-7 py-4 bg-[#C6F36B] text-[#101C27] text-xs font-semibold uppercase tracking-wider hover:bg-[#d4f78b] transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Request {solution.shortTitle} Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('calculator')}
                className="inline-flex items-center gap-2.5 px-6 py-4 border border-white/30 text-[#F5F5F0] text-xs font-semibold uppercase tracking-wider hover:border-[#C6F36B] hover:text-[#C6F36B] transition-colors cursor-pointer whitespace-nowrap"
              >
                <Calculator className="w-4 h-4" />
                <span>Estimate Capacity & Savings</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ENGINEERING SPECIFICATIONS STRIP */}
      <section className="bg-white border-b border-[#101C27]/10">
        <div className="max-w-[1360px] mx-auto px-6 md:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solution.engineeringSpecs.map((spec) => (
            <div key={spec.label} className="space-y-1.5">
              <p className="text-xs font-mono-tabular uppercase tracking-wider text-[#5A6570]">
                {spec.label}
              </p>
              <p className="text-sm font-semibold text-[#101C27] leading-snug">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OVERVIEW & SUITABLE APPLICATIONS */}
      <section className="py-24 md:py-32 max-w-[1360px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs uppercase tracking-widest text-[#5A6570] font-mono-tabular">
              01 · System Architecture & Overview
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#101C27] leading-[1.15]">
              {solution.shortDescription}
            </h2>
            <p className="text-base text-[#334155] leading-relaxed">
              {solution.overview}
            </p>

            <div className="pt-6">
              <div className="aspect-[16/10] bg-[#101C27] overflow-hidden">
                <ResilientImage
                  src={solution.secondaryImage}
                  alt={`${solution.title} installation detail`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-[#101C27]/10 p-8 sm:p-10 space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-mono-tabular uppercase tracking-widest text-[#5A6570]">
                Ideal Property Profiles
              </p>
              <h3 className="font-display text-2xl font-semibold text-[#101C27]">
                Suitable Applications
              </h3>
              <p className="text-sm text-[#5A6570]">
                Our {solution.shortTitle.toLowerCase()} solutions are custom-configured for the following environments:
              </p>
            </div>

            <ul className="space-y-4 border-t border-[#101C27]/10 pt-6">
              {solution.applications.map((app) => (
                <li key={app} className="flex items-start gap-3 text-sm text-[#101C27]">
                  <span className="w-5 h-5 bg-[#C6F36B] text-[#101C27] inline-flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="leading-relaxed">{app}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-[#101C27]/10 space-y-4">
              <p className="text-xs text-[#5A6570] leading-relaxed">
                Every installation is preceded by an on-site structural and electrical assessment by Jangid Solar engineers.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#101C27] text-[#F5F5F0] text-xs font-semibold uppercase tracking-wider hover:bg-[#1e3144] transition-colors cursor-pointer"
              >
                <span>Book a Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 md:py-32 bg-[#101C27] text-[#F5F5F0]">
        <div className="max-w-[1360px] mx-auto px-6 md:px-10">
          <div className="max-w-2xl space-y-3 mb-16">
            <p className="text-xs uppercase tracking-widest text-[#C6F36B] font-mono-tabular">
              02 · Key Benefits
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Why Choose {solution.shortTitle} With Jangid Solar.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solution.benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className="p-8 sm:p-10 border border-white/15 bg-white/[0.02] space-y-3"
              >
                <p className="text-xs font-mono-tabular text-[#C6F36B]">
                  0{i + 1} / Advantage
                </p>
                <h3 className="font-display text-2xl font-semibold text-[#F5F5F0]">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#F5F5F0]/75 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANNING & EXECUTION STEPS */}
      <section className="py-24 md:py-32 max-w-[1360px] mx-auto px-6 md:px-10">
        <div className="max-w-2xl space-y-3 mb-16">
          <p className="text-xs uppercase tracking-widest text-[#5A6570] font-mono-tabular">
            03 · System Planning & Execution
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#101C27]">
            How We Engineer Your {solution.shortTitle} System.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solution.planningSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white border border-[#101C27]/10 p-8 space-y-4"
            >
              <span className="inline-block px-2.5 py-1 bg-[#C6F36B] text-[#101C27] font-mono-tabular text-xs font-semibold">
                Phase {step.step}
              </span>
              <h3 className="font-display text-2xl font-semibold text-[#101C27]">
                {step.title}
              </h3>
              <p className="text-sm text-[#5A6570] leading-relaxed">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-white border-t border-[#101C27]/10">
          <div className="max-w-[1360px] mx-auto px-6 md:px-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-xs font-mono-tabular uppercase tracking-widest text-[#5A6570] mb-2">
                  04 · Reference Work
                </p>
                <h2 className="font-display text-3xl font-semibold text-[#101C27]">
                  Representative {solution.shortTitle} Deployments
                </h2>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#101C27] hover:text-[#5A6570] cursor-pointer"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((proj) => (
                <article
                  key={proj.id}
                  className="border border-[#101C27]/10 bg-[#F5F5F0] overflow-hidden flex flex-col justify-between"
                >
                  <div className="aspect-[16/9] bg-[#101C27] overflow-hidden">
                    <ResilientImage
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular text-[#5A6570]">
                      <span>{proj.category}</span>
                      <span>·</span>
                      <span>{proj.location}</span>
                      <span>·</span>
                      <span className="text-[#101C27] font-medium">{proj.systemHighlight}</span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-[#101C27]">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-[#5A6570] leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* EXPLORE OTHER SOLUTIONS */}
      <section className="py-20 border-t border-[#101C27]/10 max-w-[1360px] mx-auto px-6 md:px-10">
        <h2 className="font-display text-2xl font-semibold text-[#101C27] mb-8">
          Explore Other Solar Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherSolutions.map((other) => (
            <button
              key={other.id}
              type="button"
              onClick={() => onNavigate(other.id)}
              className="text-left p-6 bg-white border border-[#101C27]/10 hover:border-[#101C27] transition-colors cursor-pointer flex flex-col justify-between space-y-4 group"
            >
              <div>
                <p className="text-xs font-mono-tabular text-[#5A6570]">{other.number}</p>
                <h3 className="font-display text-lg font-semibold text-[#101C27] mt-1 group-hover:underline">
                  {other.title}
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#101C27]">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

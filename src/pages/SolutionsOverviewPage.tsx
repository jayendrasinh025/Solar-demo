import React from 'react';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { DETAILED_SOLUTIONS, IMAGES, RouteId } from '../data/siteContent';
import { ResilientImage } from '../components/ResilientImage';

interface SolutionsOverviewPageProps {
  onNavigate: (route: RouteId) => void;
}

export const SolutionsOverviewPage: React.FC<SolutionsOverviewPageProps> = ({ onNavigate }) => {
  const solutions = Object.values(DETAILED_SOLUTIONS);

  return (
    <div className="bg-[#F5F5F0] text-[#101C27]">
      {/* HERO */}
      <section className="relative min-h-[68vh] flex items-end bg-[#101C27] text-[#F5F5F0] overflow-hidden">
        <div className="absolute inset-0">
          <ResilientImage
            src={IMAGES.commercialIndustrial}
            alt="Solar EPC solutions across residential, commercial, and industrial properties"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101C27] via-[#101C27]/70 to-[#101C27]/35" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto w-full px-6 md:px-10 pt-32 pb-16 md:pb-24">
          <div className="max-w-3xl space-y-5 animate-editorial-in">
            <p className="text-xs uppercase tracking-widest text-[#C6F36B] font-mono-tabular">
              Solar Solutions Portfolio
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.08]">
              Intelligent Solar Architecture for Every Property.
            </h1>
            <p className="text-base sm:text-lg text-[#F5F5F0]/85 leading-relaxed max-w-2xl">
              From private residential terraces and commercial office complexes to heavy manufacturing plants and utility-scale solar parks, Jangid Solar engineers complete EPC solutions tailored to your load profile.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK NAVIGATION BAR */}
      <section className="bg-white border-b border-[#101C27]/10">
        <div className="max-w-[1360px] mx-auto px-6 md:px-10 py-5 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#5A6570]">
            Select a Dedicated Solution:
          </span>
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold">
            {solutions.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => onNavigate(s.id)}
                className="text-[#101C27] hover:text-[#5A6570] transition-colors cursor-pointer flex items-center gap-1 whitespace-nowrap"
              >
                <span className="font-mono-tabular text-[#5A6570]">{s.number}.</span>
                <span>{s.shortTitle}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SOLUTIONS LIST */}
      <section className="py-20 md:py-28 max-w-[1360px] mx-auto px-6 md:px-10 space-y-24 md:space-y-32">
        {solutions.map((sol, index) => {
          const isEven = index % 2 === 0;
          return (
            <article
              key={sol.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pt-12 border-t border-[#101C27]/15 first:border-t-0 first:pt-0"
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-6 space-y-4 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="aspect-[16/11] bg-[#101C27] overflow-hidden">
                  <ResilientImage
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 bg-white p-5 border border-[#101C27]/10">
                  {sol.engineeringSpecs.slice(0, 2).map((spec) => (
                    <div key={spec.label} className="space-y-1">
                      <p className="text-[11px] font-mono-tabular uppercase text-[#5A6570]">
                        {spec.label}
                      </p>
                      <p className="text-xs font-medium text-[#101C27]">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Column */}
              <div
                className={`lg:col-span-6 space-y-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="space-y-3">
                  <p className="text-xs font-mono-tabular uppercase tracking-widest text-[#5A6570]">
                    Solution {sol.number} · Turnkey EPC
                  </p>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#101C27]">
                    {sol.title}
                  </h2>
                  <p className="text-base font-medium text-[#101C27]/85">
                    {sol.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#5A6570] leading-relaxed">
                  {sol.overview}
                </p>

                {/* Key Benefits */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-mono-tabular uppercase tracking-wider text-[#101C27] font-semibold">
                    Key Advantages
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {sol.benefits.map((b) => (
                      <div key={b.title} className="bg-white p-4 border border-[#101C27]/10 space-y-1">
                        <p className="text-sm font-semibold text-[#101C27]">{b.title}</p>
                        <p className="text-xs text-[#5A6570] leading-relaxed">{b.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Suitable Applications */}
                <div className="space-y-2 pt-2">
                  <h3 className="text-xs font-mono-tabular uppercase tracking-wider text-[#101C27] font-semibold">
                    Suitable Applications
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#334155]">
                    {sol.applications.map((app) => (
                      <li key={app} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#101C27] shrink-0 mt-0.5" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onNavigate(sol.id)}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#101C27] text-[#F5F5F0] text-xs font-semibold tracking-wide hover:bg-[#1e3144] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>Explore {sol.shortTitle} Specifications</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#101C27]/25 text-[#101C27] text-xs font-semibold hover:border-[#101C27] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>Enquire About {sol.shortTitle}</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#101C27] text-[#F5F5F0] py-24 border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="space-y-3 max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-[#C6F36B] font-mono-tabular">
              Need Engineering Guidance?
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
              Not Sure Which Solar Configuration Fits Your Property?
            </h2>
            <p className="text-sm sm:text-base text-[#F5F5F0]/75 leading-relaxed">
              Use our interactive Solar Savings Calculator or request a site assessment with our engineering team.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('calculator')}
              className="inline-flex items-center gap-3 px-7 py-4 bg-[#C6F36B] text-[#101C27] text-xs font-semibold uppercase tracking-wider hover:bg-[#d4f78b] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Launch Solar Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-3 px-7 py-4 border border-white/25 text-[#F5F5F0] text-xs font-semibold uppercase tracking-wider hover:border-[#C6F36B] hover:text-[#C6F36B] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Request Site Assessment</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

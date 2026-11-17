import React from 'react';
import { ArrowRight, ArrowUpRight, Calculator } from 'lucide-react';
import {
  COMPANY_INFO,
  IMAGES,
  INSTALLATION_PROCESS,
  PORTFOLIO_PROJECTS,
  RouteId,
  SOLAR_SOLUTIONS_HOME,
} from '../data/siteContent';
import { ResilientImage } from '../components/ResilientImage';
import { SunTimelineSection } from '../components/SunTimelineSection';

interface HomePageProps {
  onNavigate: (route: RouteId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 4);

  return (
    <div className="bg-[#F5F5F0] text-[#101C27]">
      {/* INTERACTIVE WEBGL SUN TIMELINE HERO */}
      <SunTimelineSection />

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[88vh] flex items-end bg-[#101C27] text-[#F5F5F0] overflow-hidden">
        <div className="absolute inset-0">
          <ResilientImage
            src={IMAGES.heroArchitecture}
            alt="Architectural solar installation at golden hour by Jangid Solar Energy Pvt. Ltd."
            className="w-full h-full object-cover object-center transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101C27] via-[#101C27]/65 to-[#101C27]/30" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto w-full px-6 md:px-10 pt-32 pb-16 md:pb-24">
          <div className="max-w-3xl space-y-6 animate-editorial-in">
            <p className="text-xs md:text-sm tracking-widest uppercase text-[#C6F36B] font-mono-tabular">
              Jangid Solar Energy Pvt. Ltd. · End-to-End Solar EPC
            </p>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-[64px] font-semibold tracking-tight leading-[1.06] text-[#F5F5F0]">
              Powering a Brighter Tomorrow.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#F5F5F0]/85 leading-relaxed max-w-2xl">
              Intelligent solar solutions for homes, businesses and industries. Make the transition to cleaner, smarter energy.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('solutions')}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#C6F36B] text-[#101C27] text-sm font-semibold hover:bg-[#d4f78b] transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 border border-[#F5F5F0]/35 text-[#F5F5F0] text-sm font-medium hover:border-[#C6F36B] hover:text-[#C6F36B] bg-[#101C27]/40 backdrop-blur-xs transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Get a Free Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — INTRODUCTION */}
      <section className="py-24 md:py-32 max-w-[1360px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-widest text-[#5A6570] font-mono-tabular">
                01 · Architectural & Industrial Solar EPC
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.12] text-[#101C27]">
                Energy That Moves You Forward.
              </h2>
            </div>

            <div className="space-y-5 text-[#334155] text-base leading-relaxed">
              <p>
                Headquartered in Vallabh Vidyanagar, Anand, Gujarat, <strong className="font-semibold text-[#101C27]">Jangid Solar Energy Pvt. Ltd.</strong> is a dedicated Solar EPC (Engineering, Procurement, and Construction) company transforming idle rooftops, commercial structures, and industrial land into dependable power generation assets.
              </p>
              <p>
                We approach every solar installation as permanent infrastructure—combining site-specific structural engineering, high-efficiency photovoltaic modules, and clean electrical execution so your property generates reliable energy for decades.
              </p>
            </div>

            <div className="pt-2 border-t border-[#101C27]/10 flex items-center justify-between">
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#101C27] hover:text-[#5A6570] transition-colors cursor-pointer group"
              >
                <span>Discover Our Story & Engineering Approach</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[520px]">
            <ResilientImage
              src={IMAGES.residentialRooftop}
              alt="Contemporary residence featuring an integrated rooftop and pergola solar array"
              className="w-full h-full object-cover"
            />
            <div className="bg-[#101C27] text-[#F5F5F0] p-6 sm:p-8 lg:absolute lg:bottom-6 lg:left-6 lg:max-w-md border border-white/10">
              <p className="text-xs text-[#C6F36B] font-mono-tabular uppercase tracking-wider mb-2">
                Turnkey Responsibility
              </p>
              <p className="text-sm text-[#F5F5F0]/85 leading-relaxed">
                From feasibility and 3D shadow modeling to DISCOM net-metering liaison and preventive maintenance, our in-house team manages every phase of execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — COMPANY HIGHLIGHTS (Verified Information Only) */}
      <section className="border-y border-[#101C27]/10 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#5A6570] font-mono-tabular mb-2">
                02 · Verified Capabilities & Presence
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#101C27]">
                Built on Engineering Discipline
              </h2>
            </div>
            <p className="text-sm text-[#5A6570] max-w-md">
              Operating from the industrial heartland of Vithal Udyognagar, Anand, serving residential, commercial, and industrial clients across Gujarat and India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6 border-t border-[#101C27]/10">
            <div className="space-y-2">
              <p className="text-xs font-mono-tabular text-[#5A6570] uppercase">EPC Scope</p>
              <p className="font-display text-2xl font-semibold text-[#101C27]">End-to-End Turnkey</p>
              <p className="text-sm text-[#5A6570] leading-relaxed">
                Complete in-house site survey, structural design, procurement, electrical erection, and utility commissioning.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-mono-tabular text-[#5A6570] uppercase">Project Spectrum</p>
              <p className="font-display text-2xl font-semibold text-[#101C27]">kW to Multi-MW Scale</p>
              <p className="text-sm text-[#5A6570] leading-relaxed">
                Proven execution across residential rooftops, commercial campuses, heavy industrial plants, and MW-scale ground-mounted solar parks.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-mono-tabular text-[#5A6570] uppercase">Headquarters</p>
              <p className="font-display text-2xl font-semibold text-[#101C27]">Anand, Gujarat</p>
              <p className="text-sm text-[#5A6570] leading-relaxed">
                Corporate office at Svayam Sapphire, Vallabh Vidyanagar, alongside our registered facility in G.I.D.C. Vithal Udyognagar.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-mono-tabular text-[#5A6570] uppercase">System Architectures</p>
              <p className="font-display text-2xl font-semibold text-[#101C27]">On-Grid, Hybrid & BESS</p>
              <p className="text-sm text-[#5A6570] leading-relaxed">
                Tailored net-metered, captive, open-access, and battery-backed hybrid solar configurations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SOLAR SOLUTIONS */}
      <section className="py-24 md:py-32 max-w-[1360px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-[#5A6570] font-mono-tabular">
              03 · Comprehensive Solar Solutions
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#101C27]">
              Engineered for Every Scale of Demand.
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('solutions')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#101C27] hover:text-[#5A6570] transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>View All Solutions Overview</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLAR_SOLUTIONS_HOME.map((solution) => (
            <article
              key={`${solution.number}-${solution.title}`}
              className="group bg-white border border-[#101C27]/10 flex flex-col justify-between transition-colors hover:border-[#101C27]/35"
            >
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-[#101C27]">
                  <ResilientImage
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-[#5A6570] font-mono-tabular">
                    <span>{solution.number}</span>
                    <span aria-hidden="true">·</span>
                    <span>{solution.category}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#101C27]">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-[#5A6570] leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-4 border-t border-[#101C27]/10">
                <button
                  type="button"
                  onClick={() => onNavigate(solution.id)}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#101C27] group-hover:text-[#101C27] cursor-pointer"
                >
                  <span>Explore {solution.title}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 5 — WHY SOLAR */}
      <section className="bg-[#101C27] text-[#F5F5F0] py-24 md:py-32">
        <div className="max-w-[1360px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs uppercase tracking-widest text-[#C6F36B] font-mono-tabular">
                04 · Why Transition to Solar
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.12]">
                Make Your Energy Work Smarter.
              </h2>
              <p className="text-base text-[#F5F5F0]/75 leading-relaxed">
                Every square meter of sunlit roof or open land receives abundant solar energy throughout the year. Converting that sunlight into on-site electricity restructures how your home or enterprise manages utility expenses.
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => onNavigate('calculator')}
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#C6F36B] text-[#101C27] text-xs font-semibold tracking-wide hover:bg-[#d4f78b] transition-colors cursor-pointer"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Calculate Your Potential Solar Savings</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 border border-white/15 bg-white/[0.02] space-y-3">
                <p className="text-xs font-mono-tabular text-[#C6F36B]">01 / Economy</p>
                <h3 className="font-display text-xl font-semibold text-[#F5F5F0]">
                  Reduced Electricity Expenses
                </h3>
                <p className="text-sm text-[#F5F5F0]/75 leading-relaxed">
                  Directly offset high-slab daytime grid consumption across residential appliances, commercial HVAC, and industrial machinery.
                </p>
              </div>

              <div className="p-8 border border-white/15 bg-white/[0.02] space-y-3">
                <p className="text-xs font-mono-tabular text-[#C6F36B]">02 / Predictability</p>
                <h3 className="font-display text-xl font-semibold text-[#F5F5F0]">
                  Long-Term Energy Planning
                </h3>
                <p className="text-sm text-[#F5F5F0]/75 leading-relaxed">
                  Insulate household budgets and industrial operating margins from recurring utility tariff escalations over a multi-decade system lifespan.
                </p>
              </div>

              <div className="p-8 border border-white/15 bg-white/[0.02] space-y-3">
                <p className="text-xs font-mono-tabular text-[#C6F36B]">03 / Responsibility</p>
                <h3 className="font-display text-xl font-semibold text-[#F5F5F0]">
                  Cleaner Energy Generation
                </h3>
                <p className="text-sm text-[#F5F5F0]/75 leading-relaxed">
                  Generate silent, emission-free electricity at the point of consumption while supporting corporate ESG and sustainability goals.
                </p>
              </div>

              <div className="p-8 border border-white/15 bg-white/[0.02] space-y-3">
                <p className="text-xs font-mono-tabular text-[#C6F36B]">04 / Resilience</p>
                <h3 className="font-display text-xl font-semibold text-[#F5F5F0]">
                  Greater Energy Independence
                </h3>
                <p className="text-sm text-[#F5F5F0]/75 leading-relaxed">
                  Reduce reliance on grid supply and diesel generators—especially when paired with hybrid inverters and modular battery storage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — PROJECT SHOWCASE */}
      <section className="py-24 md:py-32 max-w-[1360px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-[#5A6570] font-mono-tabular">
              05 · Selected Installations
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#101C27]">
              Proven Execution Across Sectors.
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#101C27] hover:text-[#5A6570] transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Explore Full Project Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {featuredProjects.map((project, idx) => {
            const isWide = idx === 0 || idx === 3;
            return (
              <article
                key={project.id}
                className={`${
                  isWide ? 'lg:col-span-7' : 'lg:col-span-5'
                } group bg-white border border-[#101C27]/10 flex flex-col justify-between overflow-hidden`}
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#101C27]">
                  <ResilientImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#5A6570] font-mono-tabular">
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.location}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#101C27] font-medium">{project.systemHighlight}</span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-[#101C27]">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#5A6570] leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#101C27]/10 flex items-center justify-between text-xs text-[#5A6570]">
                    <span className="font-mono-tabular">{project.scope}</span>
                    <button
                      type="button"
                      onClick={() => onNavigate('projects')}
                      className="font-semibold text-[#101C27] hover:underline cursor-pointer whitespace-nowrap ml-4"
                    >
                      Details →
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* SECTION 7 — OUR PROCESS */}
      <section className="py-24 md:py-32 bg-white border-y border-[#101C27]/10">
        <div className="max-w-[1360px] mx-auto px-6 md:px-10">
          <div className="max-w-2xl space-y-3 mb-16">
            <p className="text-xs uppercase tracking-widest text-[#5A6570] font-mono-tabular">
              06 · Our Methodology
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#101C27]">
              A Clear, Structured Installation Journey.
            </h2>
            <p className="text-base text-[#5A6570] leading-relaxed">
              Every solar deployment follows a six-stage engineering protocol designed for transparency, safety, and long-term generation reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {INSTALLATION_PROCESS.map((step) => (
              <div
                key={step.number}
                className="pt-6 border-t border-[#101C27]/15 space-y-3"
              >
                <span className="font-mono-tabular text-sm font-semibold text-[#101C27] bg-[#C6F36B] px-2.5 py-1 inline-block">
                  {step.number}
                </span>
                <h3 className="font-display text-2xl font-semibold text-[#101C27]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#5A6570] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — WHY JANGID SOLAR */}
      <section className="py-24 md:py-32 max-w-[1360px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs uppercase tracking-widest text-[#5A6570] font-mono-tabular">
              07 · Why Partner With Jangid Solar
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#101C27]">
              Engineering Precision Meets Responsive Support.
            </h2>
            <p className="text-base text-[#5A6570] leading-relaxed">
              Choosing a solar partner is a 25-year infrastructure decision. At {COMPANY_INFO.name}, we focus on structural soundness, clean electrical workmanship, and direct accountability.
            </p>

            <div className="space-y-6 pt-4 divide-y divide-[#101C27]/10">
              <div className="pt-4 first:pt-0">
                <h3 className="font-display text-lg font-semibold text-[#101C27]">
                  Site-Specific Structural & Shadow Engineering
                </h3>
                <p className="text-sm text-[#5A6570] mt-1 leading-relaxed">
                  We never use one-size-fits-all templates. Every roof and land parcel is evaluated for wind resistance, drainage, shading angles, and safe maintenance access.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="font-display text-lg font-semibold text-[#101C27]">
                  Transparent Component Selection
                </h3>
                <p className="text-sm text-[#5A6570] mt-1 leading-relaxed">
                  Clear specification of photovoltaic modules, inverters, DC/AC cables, surge protection devices, and hot-dip galvanized mounting structures before execution begins.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="font-display text-lg font-semibold text-[#101C27]">
                  Dedicated Regulatory & Post-Commissioning Care
                </h3>
                <p className="text-sm text-[#5A6570] mt-1 leading-relaxed">
                  Complete coordination for DISCOM net-metering, statutory electrical inspections, and ongoing performance monitoring from our Anand engineering center.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] bg-[#101C27] overflow-hidden">
              <ResilientImage
                src={IMAGES.groundMountedPark}
                alt="Ground-mounted solar array engineered by Jangid Solar Energy Pvt. Ltd."
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FINAL CTA (Section 9 Testimonials intentionally omitted until verified customer quotes are supplied) */}
      <section className="bg-[#101C27] text-[#F5F5F0] py-24 md:py-32 border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="space-y-4 max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-[#C6F36B] font-mono-tabular">
              Start Your Assessment
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1]">
              Your Solar Journey Starts Here.
            </h2>
            <p className="text-base text-[#F5F5F0]/75 leading-relaxed">
              Speak with our solar engineering team in Anand for an honest evaluation of your rooftop or land parcel, consumption profile, and system sizing options.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C6F36B] text-[#101C27] text-sm font-semibold hover:bg-[#d4f78b] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('calculator')}
              className="inline-flex items-center gap-3 px-7 py-4 border border-white/25 text-[#F5F5F0] text-sm font-medium hover:border-[#C6F36B] hover:text-[#C6F36B] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Estimate Savings First</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

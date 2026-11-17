import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  COMPANY_INFO,
  DETAILED_SOLUTIONS,
  IMAGES,
  RouteId,
} from '../data/siteContent';
import { ResilientImage } from '../components/ResilientImage';

interface AboutPageProps {
  onNavigate: (route: RouteId) => void;
}

const COMPANY_VALUES = [
  {
    number: '01',
    title: 'Quality',
    description:
      'Uncompromising selection of photovoltaic modules, inverters, galvanized mounting structures, and protective electrical switchgear built to endure decades of outdoor exposure.',
  },
  {
    number: '02',
    title: 'Innovation',
    description:
      'Adopting modern solar architectures—from elevated usable-terrace pergolas and bifacial TOPCon arrays to intelligent hybrid battery storage systems.',
  },
  {
    number: '03',
    title: 'Transparency',
    description:
      'Clear engineering proposals, honest generation estimates grounded in local solar irradiance data, and itemized component specifications without hidden clauses.',
  },
  {
    number: '04',
    title: 'Reliability',
    description:
      'Disciplined structural wind-load calculations, proper earthing, surge protection, and preventive maintenance so systems perform consistently year after year.',
  },
  {
    number: '05',
    title: 'Sustainability',
    description:
      'Helping households, commercial institutions, and heavy industries transition from fossil-fuel grid dependence to clean, locally generated solar electricity.',
  },
  {
    number: '06',
    title: 'Customer Commitment',
    description:
      'Direct, accessible support from initial energy bill review and DISCOM paperwork through post-commissioning monitoring and service.',
  },
];

const APPROACH_PILLARS = [
  {
    step: 'Stage 01',
    title: 'Consultation & Load Profiling',
    detail:
      'Every project begins with listening. We examine your monthly utility bills, tariff structure, sanctioned load, and operational hours to determine the right system architecture.',
  },
  {
    step: 'Stage 02',
    title: 'Site Assessment & Structural Planning',
    detail:
      'Our engineering team inspects roof condition, purlin spacing, soil characteristics, shading obstacles, and cable routing paths before a single panel is ordered.',
  },
  {
    step: 'Stage 03',
    title: 'Precision System Design',
    detail:
      'We prepare custom 3D placement layouts, single-line electrical diagrams, and mounting fabrication plans that maximize solar yield while preserving structural safety.',
  },
  {
    step: 'Stage 04',
    title: 'Turnkey Installation & Commissioning',
    detail:
      'Executed by trained technicians following strict electrical and workplace safety standards, followed by thorough testing and utility meter synchronization.',
  },
  {
    step: 'Stage 05',
    title: 'Lifecycle Monitoring & Support',
    detail:
      'We stand behind our installations with remote generation diagnostics, periodic inspection guidance, and responsive technical assistance.',
  },
];

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const expertiseList = Object.values(DETAILED_SOLUTIONS);

  return (
    <div className="bg-[#F5F5F0] text-[#101C27]">
      {/* SECTION 1 — ABOUT HERO */}
      <section className="relative min-h-[72vh] flex items-end bg-[#101C27] text-[#F5F5F0] overflow-hidden">
        <div className="absolute inset-0">
          <ResilientImage
            src={IMAGES.groundMountedPark}
            alt="Ground-mounted solar power plant at sunset by Jangid Solar Energy Pvt. Ltd."
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101C27] via-[#101C27]/70 to-[#101C27]/35" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto w-full px-6 md:px-10 pt-32 pb-16 md:pb-24">
          <div className="max-w-3xl space-y-5 animate-editorial-in">
            <p className="text-xs uppercase tracking-widest text-[#C6F36B] font-mono-tabular">
              About {COMPANY_INFO.name}
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.08]">
              Building a More Sustainable Tomorrow.
            </h1>
            <p className="text-lg sm:text-xl text-[#F5F5F0]/85 font-normal">
              Driven by innovation. Powered by the sun.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — OUR STORY */}
      <section className="py-24 md:py-32 max-w-[1360px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#5A6570] font-mono-tabular">
              01 · Who We Are
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#101C27] leading-[1.15]">
              Engineering Clean Energy Infrastructure Across India.
            </h2>
            <div className="pt-4 space-y-2 text-xs text-[#5A6570] font-mono-tabular border-t border-[#101C27]/10">
              <p>Corporate Base: Vallabh Vidyanagar, Anand, Gujarat</p>
              <p>Industrial Hub: G.I.D.C. Vithal Udyognagar, Anand</p>
              <p>Core Discipline: Turnkey Solar EPC & Energy Storage</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base text-[#334155] leading-relaxed">
            <p>
              <strong className="font-semibold text-[#101C27]">Jangid Solar Energy Pvt. Ltd.</strong> is a full-service Solar EPC (Engineering, Procurement, and Construction) company dedicated to designing, building, and maintaining high-performance solar power systems. Operating from our corporate office at Svayam Sapphire on Anand–Sojitra Road and our facility in G.I.D.C. Vithal Udyognagar, Anand, Gujarat, we work at the intersection of electrical engineering and practical renewable energy transition.
            </p>
            <p>
              Our core focus is converting unutilized rooftops, industrial sheds, commercial campuses, and open land parcels into productive, long-term clean power stations. Rather than treating solar panels as a commodity product, we approach every project as tailored electrical and structural infrastructure—engineered specifically around each client’s load profile, roof geometry, and utility tariff framework.
            </p>
            <p>
              We serve a diverse spectrum of energy consumers: homeowners seeking relief from rising domestic electricity tariffs, commercial establishments aiming to align daytime HVAC loads with clean solar power, and heavy manufacturing enterprises requiring megawatt-scale rooftop or ground-mounted captive generation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="aspect-[4/3] bg-[#101C27] overflow-hidden">
                <ResilientImage
                  src={IMAGES.commercialIndustrial}
                  alt="Industrial rooftop solar installation by Jangid Solar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] bg-[#101C27] overflow-hidden">
                <ResilientImage
                  src={IMAGES.residentialRooftop}
                  alt="Residential rooftop and pergola solar installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 & 4 — OUR MISSION & OUR VISION */}
      <section className="bg-[#101C27] text-[#F5F5F0] py-24 md:py-32">
        <div className="max-w-[1360px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Mission */}
          <div className="p-8 sm:p-12 border border-white/15 bg-white/[0.02] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-[#C6F36B] font-mono-tabular">
                02 · Our Mission
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F0]">
                Making Clean Energy More Accessible.
              </h2>
              <p className="text-base text-[#F5F5F0]/80 leading-relaxed">
                Our mission is to simplify the transition to solar power through transparent consultation, dependable EPC engineering, and seamless execution. We strive to remove technical complexity for homeowners, businesses, and industries—delivering safe, durable solar installations that generate measurable financial and environmental value.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 text-xs text-[#F5F5F0]/60 font-mono-tabular">
              Clear Engineering · Honest Sizing · Seamless Execution
            </div>
          </div>

          {/* Vision */}
          <div className="p-8 sm:p-12 border border-white/15 bg-white/[0.02] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-[#C6F36B] font-mono-tabular">
                03 · Our Vision
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F0]">
                A Future Powered by Renewable Energy.
              </h2>
              <p className="text-base text-[#F5F5F0]/80 leading-relaxed">
                We envision cities, industrial estates, and residential communities where every viable rooftop and land parcel contributes clean, decentralized electricity to the grid—reducing carbon intensity while empowering energy consumers with long-term cost stability and energy independence.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 text-xs text-[#F5F5F0]/60 font-mono-tabular">
              Decentralized Generation · Grid Resilience · Sustainable Growth
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — OUR VALUES */}
      <section className="py-24 md:py-32 max-w-[1360px] mx-auto px-6 md:px-10">
        <div className="max-w-2xl space-y-3 mb-16">
          <p className="text-xs uppercase tracking-widest text-[#5A6570] font-mono-tabular">
            04 · Core Principles
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#101C27]">
            The Values That Guide Our Work.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPANY_VALUES.map((val) => (
            <div
              key={val.number}
              className="bg-white border border-[#101C27]/10 p-8 space-y-4"
            >
              <span className="text-xs font-mono-tabular text-[#5A6570]">
                {val.number} / Principle
              </span>
              <h3 className="font-display text-2xl font-semibold text-[#101C27]">
                {val.title}
              </h3>
              <p className="text-sm text-[#5A6570] leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 — OUR EXPERTISE */}
      <section className="py-24 md:py-32 bg-white border-y border-[#101C27]/10">
        <div className="max-w-[1360px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs uppercase tracking-widest text-[#5A6570] font-mono-tabular">
                05 · Domain Expertise
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#101C27]">
                Specialized Across Five Solar Disciplines.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('solutions')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#101C27] hover:text-[#5A6570] cursor-pointer whitespace-nowrap"
            >
              <span>View Solutions Overview</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="divide-y divide-[#101C27]/10 border-t border-b border-[#101C27]/10">
            {expertiseList.map((item) => (
              <div
                key={item.id}
                className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                <div className="lg:col-span-1 font-mono-tabular text-sm text-[#5A6570]">
                  {item.number}
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-display text-2xl font-semibold text-[#101C27]">
                    {item.title}
                  </h3>
                </div>
                <div className="lg:col-span-5 text-sm text-[#5A6570] leading-relaxed">
                  {item.shortDescription}
                </div>
                <div className="lg:col-span-2 flex lg:justify-end">
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#101C27] hover:text-[#5A6570] cursor-pointer"
                  >
                    <span>Explore</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — OUR APPROACH */}
      <section className="py-24 md:py-32 max-w-[1360px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-5">
            <p className="text-xs uppercase tracking-widest text-[#5A6570] font-mono-tabular">
              06 · Our Approach
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#101C27]">
              How We Turn Sunlight Into Reliable Infrastructure.
            </h2>
            <p className="text-base text-[#5A6570] leading-relaxed">
              From the first consultation to long-term performance care, our process prioritizes engineering accuracy, clear communication, and clean on-site execution.
            </p>
            <div className="aspect-[4/3] bg-[#101C27] overflow-hidden mt-6">
              <ResilientImage
                src={IMAGES.batteryHybrid}
                alt="Clean electrical and battery storage installation by Jangid Solar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {APPROACH_PILLARS.map((item) => (
              <div
                key={item.step}
                className="p-8 bg-white border border-[#101C27]/10 space-y-2"
              >
                <p className="text-xs font-mono-tabular text-[#5A6570] uppercase">
                  {item.step}
                </p>
                <h3 className="font-display text-xl font-semibold text-[#101C27]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5A6570] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section className="bg-[#101C27] text-[#F5F5F0] py-24 md:py-32 border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="space-y-4 max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-[#C6F36B] font-mono-tabular">
              Partner With Jangid Solar
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1]">
              Let&apos;s Build a Cleaner Energy Future Together.
            </h2>
            <p className="text-base text-[#F5F5F0]/75 leading-relaxed">
              Connect with our team in Anand, Gujarat to discuss solar solutions for your residence, commercial establishment, or industrial facility.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C6F36B] text-[#101C27] text-sm font-semibold hover:bg-[#d4f78b] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

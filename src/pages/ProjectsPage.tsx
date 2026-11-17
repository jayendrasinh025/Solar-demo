import React, { useState } from 'react';
import { ArrowRight, MapPin, X } from 'lucide-react';
import {
  IMAGES,
  PORTFOLIO_PROJECTS,
  ProjectItem,
  RouteId,
} from '../data/siteContent';
import { ResilientImage } from '../components/ResilientImage';

interface ProjectsPageProps {
  onNavigate: (route: RouteId) => void;
}

type CategoryFilter = 'All' | 'Residential' | 'Commercial' | 'Industrial' | 'Ground Mounted';

const CATEGORIES: CategoryFilter[] = [
  'All',
  'Residential',
  'Commercial',
  'Industrial',
  'Ground Mounted',
];

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((project) => project.category === selectedCategory);

  return (
    <div className="bg-[#F5F5F0] text-[#101C27]">
      {/* HERO */}
      <section className="relative min-h-[62vh] flex items-end bg-[#101C27] text-[#F5F5F0] overflow-hidden">
        <div className="absolute inset-0">
          <ResilientImage
            src={IMAGES.commercialIndustrial}
            alt="Solar project installations by Jangid Solar Energy Pvt. Ltd."
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101C27] via-[#101C27]/70 to-[#101C27]/35" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto w-full px-6 md:px-10 pt-32 pb-16 md:pb-24">
          <div className="max-w-3xl space-y-5 animate-editorial-in">
            <p className="text-xs uppercase tracking-widest text-[#C6F36B] font-mono-tabular">
              EPC Execution Portfolio
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.08]">
              Engineered for Long-Term Generation.
            </h1>
            <p className="text-base sm:text-lg text-[#F5F5F0]/85 leading-relaxed max-w-2xl">
              Explore solar power installations across residential terraces, commercial buildings, industrial manufacturing units, and ground-mounted solar parks in Gujarat and India.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER BAR & PORTFOLIO GRID */}
      <section className="py-20 md:py-28 max-w-[1360px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-[#101C27]/15">
          {/* Interactive Segmented Filter Controls */}
          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-2 bg-white p-1.5 border border-[#101C27]/15"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-[#101C27] text-[#C6F36B]'
                      : 'text-[#5A6570] hover:text-[#101C27]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <p className="text-xs font-mono-tabular text-[#5A6570]">
            Showing {filteredProjects.length} {selectedCategory === 'All' ? 'Total' : selectedCategory}{' '}
            {filteredProjects.length === 1 ? 'Installation' : 'Installations'}
          </p>
        </div>

        {/* Project Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white border border-[#101C27]/10 flex flex-col justify-between overflow-hidden transition-colors hover:border-[#101C27]/40"
            >
              <div>
                <div className="aspect-[16/10] bg-[#101C27] overflow-hidden">
                  <ResilientImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-8 space-y-4">
                  {/* Unboxed clean metadata with typographic separators */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular text-[#5A6570]">
                    <span className="text-[#101C27] font-semibold">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{project.systemHighlight}</span>
                  </div>

                  <h2 className="font-display text-2xl font-semibold text-[#101C27]">
                    {project.title}
                  </h2>

                  <p className="text-sm text-[#5A6570] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-4 border-t border-[#101C27]/10 flex items-center justify-between gap-4">
                <span className="text-xs font-mono-tabular text-[#5A6570] truncate">
                  {project.scope}
                </span>

                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="text-xs font-semibold uppercase tracking-wider text-[#101C27] hover:underline shrink-0 cursor-pointer"
                >
                  Inspect Brief →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECT BRIEF MODAL */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 bg-[#101C27]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-[#F5F5F0] text-[#101C27] max-w-2xl w-full border border-[#101C27]/20 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[16/9] bg-[#101C27] relative">
              <ResilientImage
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                aria-label="Close project brief"
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-[#101C27] text-[#F5F5F0] flex items-center justify-center hover:bg-[#C6F36B] hover:text-[#101C27] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular text-[#5A6570]">
                <span className="text-[#101C27] font-semibold">{activeProject.category}</span>
                <span>·</span>
                <span>{activeProject.location}</span>
                <span>·</span>
                <span>{activeProject.systemHighlight}</span>
              </div>

              <h3 id="project-modal-title" className="font-display text-2xl sm:text-3xl font-semibold text-[#101C27]">
                {activeProject.title}
              </h3>

              <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                {activeProject.description}
              </p>

              <div className="p-4 bg-white border border-[#101C27]/10 space-y-1">
                <p className="text-[11px] font-mono-tabular uppercase text-[#5A6570]">
                  EPC Scope Executed
                </p>
                <p className="text-xs font-medium text-[#101C27]">{activeProject.scope}</p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setActiveProject(null);
                    onNavigate('contact');
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#101C27] text-[#F5F5F0] text-xs font-semibold uppercase tracking-wider hover:bg-[#1e3144] transition-colors cursor-pointer"
                >
                  <span>Request Similar Installation Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2 text-xs font-semibold text-[#5A6570] hover:text-[#101C27] cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-[#101C27] text-[#F5F5F0] py-24 border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="space-y-3 max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-[#C6F36B] font-mono-tabular">
              Plan Your Project
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
              Ready to Evaluate Your Rooftop or Industrial Land?
            </h2>
            <p className="text-base text-[#F5F5F0]/75 leading-relaxed">
              Our engineering team conducts detailed site surveys and prepares customized solar EPC proposals across Gujarat and India.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#C6F36B] text-[#101C27] text-xs font-semibold uppercase tracking-wider hover:bg-[#d4f78b] transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Request a Site Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

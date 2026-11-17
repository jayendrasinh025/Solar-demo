import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { RouteId } from '../data/siteContent';

interface NavbarProps {
  currentRoute: RouteId;
  onNavigate: (route: RouteId) => void;
}

const SOLUTION_SUBLINKS: { id: RouteId; label: string; desc: string }[] = [
  { id: 'solutions', label: 'All Solar Solutions', desc: 'Complete EPC capabilities overview' },
  { id: 'residential', label: 'Residential Solar', desc: 'Rooftop & pergola systems for homes' },
  { id: 'commercial', label: 'Commercial Solar', desc: 'Offices, hospitals, campuses & carports' },
  { id: 'industrial', label: 'Industrial Solar', desc: 'Manufacturing plants & PEB sheds' },
  { id: 'ground-mounted', label: 'Ground-Mounted Solar', desc: 'Captive & utility-scale solar parks' },
  { id: 'battery-hybrid', label: 'Battery & Hybrid Systems', desc: 'BESS backup & grid synchronization' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsExpanded, setMobileSolutionsExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isSolutionRoute = [
    'solutions',
    'residential',
    'commercial',
    'industrial',
    'ground-mounted',
    'battery-hybrid',
  ].includes(currentRoute);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (route: RouteId) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate(route);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#101C27]/95 backdrop-blur-md border-b border-white/10 text-[#F5F5F0]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="font-display text-xl md:text-2xl font-semibold tracking-tight text-[#F5F5F0] hover:text-[#C6F36B] transition-colors whitespace-nowrap shrink-0"
        >
          JANGID SOLAR
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
              currentRoute === 'home'
                ? 'text-[#C6F36B] border-[#C6F36B]'
                : 'text-[#F5F5F0]/80 border-transparent hover:text-[#F5F5F0]'
            }`}
          >
            Home
          </a>

          <a
            href="#/about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
            className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
              currentRoute === 'about'
                ? 'text-[#C6F36B] border-[#C6F36B]'
                : 'text-[#F5F5F0]/80 border-transparent hover:text-[#F5F5F0]'
            }`}
          >
            About
          </a>

          {/* Solutions Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              onClick={() => setDropdownOpen((prev) => !prev)}
              className={`flex items-center gap-1.5 py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 cursor-pointer ${
                isSolutionRoute
                  ? 'text-[#C6F36B] border-[#C6F36B]'
                  : 'text-[#F5F5F0]/80 border-transparent hover:text-[#F5F5F0]'
              }`}
            >
              <span>Solutions</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-150 ${dropdownOpen ? 'rotate-180 text-[#C6F36B]' : ''}`}
              />
            </button>

            {dropdownOpen && (
              <div
                role="menu"
                aria-label="Solar Solutions"
                className="absolute left-0 top-full pt-3 w-[340px] z-50"
              >
                <div className="bg-[#101C27] border border-white/15 shadow-2xl p-2 divide-y divide-white/10">
                  {SOLUTION_SUBLINKS.map((item) => {
                    const active = currentRoute === item.id;
                    return (
                      <a
                        key={item.id}
                        role="menuitem"
                        href={`#/${item.id === 'solutions' ? 'solutions' : `solutions/${item.id}`}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.id);
                        }}
                        className={`block px-4 py-3 transition-colors group ${
                          active ? 'bg-white/10' : 'hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-sm font-medium ${
                              active ? 'text-[#C6F36B]' : 'text-[#F5F5F0] group-hover:text-[#C6F36B]'
                            }`}
                          >
                            {item.label}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#F5F5F0]/40 group-hover:text-[#C6F36B] transition-colors" />
                        </div>
                        <p className="text-xs text-[#F5F5F0]/60 mt-0.5">{item.desc}</p>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <a
            href="#/projects"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('projects');
            }}
            className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
              currentRoute === 'projects'
                ? 'text-[#C6F36B] border-[#C6F36B]'
                : 'text-[#F5F5F0]/80 border-transparent hover:text-[#F5F5F0]'
            }`}
          >
            Projects
          </a>

          <a
            href="#/calculator"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('calculator');
            }}
            className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
              currentRoute === 'calculator'
                ? 'text-[#C6F36B] border-[#C6F36B]'
                : 'text-[#F5F5F0]/80 border-transparent hover:text-[#F5F5F0]'
            }`}
          >
            Calculator
          </a>

          <a
            href="#/contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
              currentRoute === 'contact'
                ? 'text-[#C6F36B] border-[#C6F36B]'
                : 'text-[#F5F5F0]/80 border-transparent hover:text-[#F5F5F0]'
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="#/contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wide bg-[#C6F36B] text-[#101C27] hover:bg-[#d4f78b] transition-colors whitespace-nowrap shrink-0"
          >
            Get a Quote
          </a>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#F5F5F0] hover:text-[#C6F36B] border border-white/15 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="lg:hidden bg-[#101C27] border-b border-white/15 px-6 py-6 space-y-4 max-h-[82vh] overflow-y-auto"
        >
          <div className="flex flex-col space-y-1">
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className={`py-3 text-base font-medium border-b border-white/10 ${
                currentRoute === 'home' ? 'text-[#C6F36B]' : 'text-[#F5F5F0]'
              }`}
            >
              Home
            </a>

            <a
              href="#/about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
              className={`py-3 text-base font-medium border-b border-white/10 ${
                currentRoute === 'about' ? 'text-[#C6F36B]' : 'text-[#F5F5F0]'
              }`}
            >
              About Us
            </a>

            {/* Mobile Solutions Accordion */}
            <div className="border-b border-white/10 py-2">
              <button
                type="button"
                aria-expanded={mobileSolutionsExpanded}
                onClick={() => setMobileSolutionsExpanded((prev) => !prev)}
                className="w-full flex items-center justify-between py-2 text-base font-medium text-[#F5F5F0] cursor-pointer"
              >
                <span className={isSolutionRoute ? 'text-[#C6F36B]' : ''}>Solar Solutions</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileSolutionsExpanded ? 'rotate-180 text-[#C6F36B]' : ''}`}
                />
              </button>

              {mobileSolutionsExpanded && (
                <div className="pl-4 py-2 space-y-2 border-l border-white/15 mt-1">
                  {SOLUTION_SUBLINKS.map((sub) => (
                    <a
                      key={sub.id}
                      href={`#/${sub.id === 'solutions' ? 'solutions' : `solutions/${sub.id}`}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(sub.id);
                      }}
                      className={`block py-2 text-sm ${
                        currentRoute === sub.id ? 'text-[#C6F36B] font-semibold' : 'text-[#F5F5F0]/80'
                      }`}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#/projects"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('projects');
              }}
              className={`py-3 text-base font-medium border-b border-white/10 ${
                currentRoute === 'projects' ? 'text-[#C6F36B]' : 'text-[#F5F5F0]'
              }`}
            >
              Projects
            </a>

            <a
              href="#/calculator"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('calculator');
              }}
              className={`py-3 text-base font-medium border-b border-white/10 ${
                currentRoute === 'calculator' ? 'text-[#C6F36B]' : 'text-[#F5F5F0]'
              }`}
            >
              Solar Savings Calculator
            </a>

            <a
              href="#/contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className={`py-3 text-base font-medium border-b border-white/10 ${
                currentRoute === 'contact' ? 'text-[#C6F36B]' : 'text-[#F5F5F0]'
              }`}
            >
              Contact
            </a>
          </div>

          <div className="pt-2">
            <a
              href="#/contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="w-full inline-flex items-center justify-center px-5 py-3.5 text-sm font-semibold bg-[#C6F36B] text-[#101C27]"
            >
              Get a Quote
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

import React from 'react';
import { ArrowUpRight, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO, RouteId } from '../data/siteContent';
import { buildWhatsAppEnquiryUrl } from '../utils/solarCalculator';

interface FooterProps {
  onNavigate: (route: RouteId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (e: React.MouseEvent, route: RouteId) => {
    e.preventDefault();
    onNavigate(route);
  };

  const whatsappHref = buildWhatsAppEnquiryUrl({
    message: 'Hello Jangid Solar Energy Pvt. Ltd., I would like to enquire about solar installation for my property.',
  });

  return (
    <footer className="bg-[#101C27] text-[#F5F5F0] border-t border-white/10">
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Company Introduction (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <a
                href="#/"
                onClick={(e) => handleLink(e, 'home')}
                className="font-display text-2xl font-semibold tracking-tight text-[#F5F5F0] hover:text-[#C6F36B] transition-colors"
              >
                JANGID SOLAR
              </a>
              <p className="text-xs text-[#F5F5F0]/50 mt-1 font-mono-tabular">
                Jangid Solar Energy Pvt. Ltd.
              </p>
            </div>

            <p className="text-sm text-[#F5F5F0]/75 leading-relaxed max-w-sm">
              Full-service Solar EPC (Engineering, Procurement, and Construction) company delivering tailored rooftop, industrial, ground-mounted, and hybrid solar energy systems across Gujarat and India.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#F5F5F0]/70">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#C6F36B]/40 text-[#C6F36B] hover:bg-[#C6F36B] hover:text-[#101C27] transition-colors font-medium whitespace-nowrap"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Direct</span>
              </a>
              <a
                href={COMPANY_INFO.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#F5F5F0]/70 hover:text-[#C6F36B] transition-colors whitespace-nowrap"
              >
                <span>jangidsolar.com</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-[#F5F5F0]/50">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#/"
                  onClick={(e) => handleLink(e, 'home')}
                  className="text-[#F5F5F0]/80 hover:text-[#C6F36B] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#/about"
                  onClick={(e) => handleLink(e, 'about')}
                  className="text-[#F5F5F0]/80 hover:text-[#C6F36B] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#/solutions"
                  onClick={(e) => handleLink(e, 'solutions')}
                  className="text-[#F5F5F0]/80 hover:text-[#C6F36B] transition-colors"
                >
                  Solutions Overview
                </a>
              </li>
              <li>
                <a
                  href="#/projects"
                  onClick={(e) => handleLink(e, 'projects')}
                  className="text-[#F5F5F0]/80 hover:text-[#C6F36B] transition-colors"
                >
                  Project Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#/calculator"
                  onClick={(e) => handleLink(e, 'calculator')}
                  className="text-[#F5F5F0]/80 hover:text-[#C6F36B] transition-colors"
                >
                  Solar Savings Calculator
                </a>
              </li>
              <li>
                <a
                  href="#/contact"
                  onClick={(e) => handleLink(e, 'contact')}
                  className="text-[#F5F5F0]/80 hover:text-[#C6F36B] transition-colors"
                >
                  Contact & Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Solar Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-[#F5F5F0]/50">
              Solar Solutions
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#/solutions/residential"
                  onClick={(e) => handleLink(e, 'residential')}
                  className="text-[#F5F5F0]/80 hover:text-[#C6F36B] transition-colors"
                >
                  Residential Rooftop Solar
                </a>
              </li>
              <li>
                <a
                  href="#/solutions/commercial"
                  onClick={(e) => handleLink(e, 'commercial')}
                  className="text-[#F5F5F0]/80 hover:text-[#C6F36B] transition-colors"
                >
                  Commercial Solar Systems
                </a>
              </li>
              <li>
                <a
                  href="#/solutions/industrial"
                  onClick={(e) => handleLink(e, 'industrial')}
                  className="text-[#F5F5F0]/80 hover:text-[#C6F36B] transition-colors"
                >
                  Industrial Solar EPC
                </a>
              </li>
              <li>
                <a
                  href="#/solutions/ground-mounted"
                  onClick={(e) => handleLink(e, 'ground-mounted')}
                  className="text-[#F5F5F0]/80 hover:text-[#C6F36B] transition-colors"
                >
                  Ground-Mounted Solar Plants
                </a>
              </li>
              <li>
                <a
                  href="#/solutions/battery-hybrid"
                  onClick={(e) => handleLink(e, 'battery-hybrid')}
                  className="text-[#F5F5F0]/80 hover:text-[#C6F36B] transition-colors"
                >
                  Battery Storage & Hybrid Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-[#F5F5F0]/50">
              Corporate Headquarters
            </h3>
            <div className="space-y-4 text-sm text-[#F5F5F0]/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C6F36B] shrink-0 mt-1" />
                <p className="leading-relaxed text-xs">
                  {COMPANY_INFO.corporateOffice.address}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C6F36B] shrink-0" />
                <div className="text-xs font-mono-tabular space-x-2">
                  <a href="tel:+919313804410" className="hover:text-[#C6F36B] transition-colors">
                    +91 93138 04410
                  </a>
                  <span>·</span>
                  <a href="tel:+919313804411" className="hover:text-[#C6F36B] transition-colors">
                    +91 93138 04411
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C6F36B] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-xs hover:text-[#C6F36B] transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Social & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#F5F5F0]/50">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name} All rights reserved. Vallabh Vidyanagar, Anand, Gujarat.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={COMPANY_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C6F36B] transition-colors"
            >
              Official Portal
            </a>
            <span>·</span>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C6F36B] transition-colors"
            >
              WhatsApp Consultation
            </a>
            <span>·</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hover:text-[#C6F36B] transition-colors"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

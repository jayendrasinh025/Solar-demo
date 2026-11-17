/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { ROUTE_META, RouteId } from './data/siteContent';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SolutionsOverviewPage } from './pages/SolutionsOverviewPage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CalculatorPage, CalculatorPrefillData } from './pages/CalculatorPage';
import { ContactPage } from './pages/ContactPage';

function parseRouteFromLocation(): RouteId {
  const hash = window.location.hash.replace(/^#/, '');
  const rawPath = (hash || window.location.pathname || '/').toLowerCase().replace(/\/+$/, '') || '/';

  switch (rawPath) {
    case '/':
    case '/home':
      return 'home';
    case '/about':
      return 'about';
    case '/solutions':
      return 'solutions';
    case '/solutions/residential':
    case '/residential':
      return 'residential';
    case '/solutions/commercial':
    case '/commercial':
      return 'commercial';
    case '/solutions/industrial':
    case '/industrial':
      return 'industrial';
    case '/solutions/ground-mounted':
    case '/ground-mounted':
      return 'ground-mounted';
    case '/solutions/battery-hybrid':
    case '/battery-hybrid':
      return 'battery-hybrid';
    case '/projects':
      return 'projects';
    case '/calculator':
      return 'calculator';
    case '/contact':
      return 'contact';
    default:
      return 'home';
  }
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<RouteId>(() => parseRouteFromLocation());
  const [calculatorPrefill, setCalculatorPrefill] = useState<CalculatorPrefillData | null>(null);

  const handleNavigate = useCallback((route: RouteId) => {
    const meta = ROUTE_META[route] || ROUTE_META.home;
    window.location.hash = meta.path;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const onHashOrPop = () => {
      const nextRoute = parseRouteFromLocation();
      setCurrentRoute(nextRoute);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };

    window.addEventListener('hashchange', onHashOrPop);
    window.addEventListener('popstate', onHashOrPop);
    return () => {
      window.removeEventListener('hashchange', onHashOrPop);
      window.removeEventListener('popstate', onHashOrPop);
    };
  }, []);

  // Update SEO Title & Meta Description dynamically per page
  useEffect(() => {
    const meta = ROUTE_META[currentRoute] || ROUTE_META.home;
    document.title = meta.title;

    const updateMetaTag = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) {
        el.setAttribute('content', content);
      }
    };

    updateMetaTag('meta[name="description"]', meta.description);
    updateMetaTag('meta[property="og:title"]', meta.title);
    updateMetaTag('meta[property="og:description"]', meta.description);
    updateMetaTag('meta[name="twitter:title"]', meta.title);
    updateMetaTag('meta[name="twitter:description"]', meta.description);
  }, [currentRoute]);

  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'solutions':
        return <SolutionsOverviewPage onNavigate={handleNavigate} />;
      case 'residential':
      case 'commercial':
      case 'industrial':
      case 'ground-mounted':
      case 'battery-hybrid':
        return (
          <SolutionDetailPage
            solutionKey={currentRoute}
            onNavigate={handleNavigate}
          />
        );
      case 'projects':
        return <ProjectsPage onNavigate={handleNavigate} />;
      case 'calculator':
        return (
          <CalculatorPage
            onNavigate={handleNavigate}
            onTransferToContact={(data) => setCalculatorPrefill(data)}
          />
        );
      case 'contact':
        return <ContactPage prefillData={calculatorPrefill} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F0] text-[#101C27]">
      <Navbar currentRoute={currentRoute} onNavigate={handleNavigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

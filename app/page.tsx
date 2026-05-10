'use client';

import { useCallback, useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import HeroSection from '@/components/sections/HeroSection';
import LogoSection from '@/components/sections/LogoSection';
import ColorsSection from '@/components/sections/ColorsSection';
import TypographySection from '@/components/sections/TypographySection';
import LogoUsageSection from '@/components/sections/LogoUsageSection';
import SizingSection from '@/components/sections/SizingSection';
import IconsSection from '@/components/sections/IconsSection';
import DownloadSection from '@/components/sections/DownloadSection';

const SECTION_IDS = ['hero', 'logo', 'colors', 'typography', 'logo-usage', 'sizing', 'icons', 'download'];

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-30% 0px -65% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleCollapse = useCallback((collapsed: boolean) => {
    setSidebarCollapsed(collapsed);
  }, []);

  // sidebar width: 64px collapsed, 220px expanded — plus 16px left margin + 8px gap
  const mainLeft = sidebarCollapsed ? 64 + 16 + 12 : 220 + 16 + 12;

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Sidebar activeSection={activeSection} onCollapse={handleCollapse} />

      <main
        className="pt-[56px] md:pt-4 transition-all duration-300"
        style={{ marginLeft: `${mainLeft}px` }}
      >
        <HeroSection />
        <LogoSection />
        <ColorsSection />
        <TypographySection />
        <LogoUsageSection />
        <SizingSection />
        <IconsSection />
        <DownloadSection />
      </main>
    </div>
  );
}

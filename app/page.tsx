'use client';

import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-30% 0px -65% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Sidebar activeSection={activeSection} />

      {/* Main content — offset for desktop sidebar */}
      <main
        className="md:ml-[228px] pt-[56px] md:pt-0"
        style={{ minHeight: '100vh' }}
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

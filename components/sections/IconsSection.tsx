'use client';

import dynamic from 'next/dynamic';
import SectionHeader from '@/components/ui/SectionHeader';
import { BRAND_ICONS, ICON_CATEGORIES } from '@/lib/icons';

// iconsax-react uses named exports — load dynamically to avoid SSR issues
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconCell = dynamic(() => import('@/components/ui/IconCell'), { ssr: false });

export default function IconsSection() {
  return (
    <section
      id="icons"
      className="px-14 py-14"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <SectionHeader eyebrow="06 — Assets" title="Icon System" />

      {/* Install snippet */}
      <div
        className="mb-8 p-4 font-mono text-xs"
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: '2px',
          color: 'var(--text)',
        }}
      >
        <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Install</p>
        <code>npm install iconsax-react</code>
      </div>

      {/* Usage example */}
      <div
        className="mb-10 p-4 font-mono text-xs leading-loose"
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: '2px',
          color: 'var(--text)',
          whiteSpace: 'pre',
        }}
      >
        <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Import Example</p>
        {`import { Eye, Shield, Map1 } from 'iconsax-react'\n\n// Linear (outline)\n<Eye size={24} variant="Linear" />\n\n// Bold (filled)\n<Eye size={24} variant="Bold" />`}
      </div>

      {/* Icons by category */}
      {ICON_CATEGORIES.map((category) => {
        const icons = BRAND_ICONS.filter((i) => i.category === category);
        return (
          <div key={category} className="mb-8">
            <p
              className="font-mono text-[10px] uppercase tracking-widest mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {icons.map((icon) => (
                <IconCell key={icon.name} name={icon.name} label={icon.label} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}

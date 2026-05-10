import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';

interface UsageCard {
  type: 'do' | 'dont';
  label: string;
  description: string;
  visual: React.ReactNode;
}

const CARDS: UsageCard[] = [
  {
    type: 'do',
    label: 'Use color on light',
    description: 'Place the full-color logo on white or light neutral backgrounds for maximum clarity and brand consistency.',
    visual: (
      <div className="flex items-center justify-center w-full h-28" style={{ background: '#FFFFFF', border: '1px solid #E4E4E0', borderRadius: '2px' }}>
        <Image src="/assets/logo/Logo_on_Light.svg" alt="Color logo on light" width={140} height={40} style={{ objectFit: 'contain' }} />
      </div>
    ),
  },
  {
    type: 'dont',
    label: 'Stretch or distort',
    description: "Never alter the logo's proportions. Stretching breaks the geometric integrity of the mark.",
    visual: (
      <div className="relative flex items-center justify-center w-full h-28" style={{ background: '#FFFFFF', border: '1px solid #E4E4E0', borderRadius: '2px' }}>
        <div style={{ transform: 'scaleX(1.55)', transformOrigin: 'center' }}>
          <Image src="/assets/logo/Logo_on_Light.svg" alt="Stretched logo" width={120} height={36} style={{ objectFit: 'contain' }} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(224,50,43,0.12)' }}>
          <span style={{ fontSize: '40px', color: '#E0322B', fontWeight: 900 }}>×</span>
        </div>
      </div>
    ),
  },
  {
    type: 'do',
    label: 'Use mono on dark',
    description: 'The mono variant maintains legibility on dark or complex backgrounds where the color logo would compete.',
    visual: (
      <div className="flex items-center justify-center w-full h-28" style={{ background: '#0C0C0C', borderRadius: '2px' }}>
        <Image src="/assets/logo/Mono_logo_on_dark.svg" alt="Mono logo on dark" width={140} height={40} style={{ objectFit: 'contain' }} />
      </div>
    ),
  },
  {
    type: 'dont',
    label: 'Recolor outside palette',
    description: 'Never apply colors from outside the brand palette to the logo. This damages brand recognition.',
    visual: (
      <div className="relative flex items-center justify-center w-full h-28" style={{ background: '#FFFFFF', border: '1px solid #E4E4E0', borderRadius: '2px' }}>
        <svg width="130" height="40" viewBox="0 0 260 80" fill="none">
          <rect x="0" y="10" width="60" height="60" rx="30" fill="#9333EA" />
          <rect x="20" y="20" width="40" height="40" rx="20" fill="#06B6D4" />
          <rect x="75" y="15" width="185" height="50" rx="4" fill="#FF6B00" opacity="0.6" />
          <text x="80" y="47" fontFamily="sans-serif" fontSize="22" fontWeight="900" fill="#FFFFFF">UKRAINE</text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(224,50,43,0.12)' }}>
          <span style={{ fontSize: '40px', color: '#E0322B', fontWeight: 900 }}>×</span>
        </div>
      </div>
    ),
  },
  {
    type: 'do',
    label: 'Maintain clear space',
    description: 'Keep a minimum clear space of ½ × icon height on all sides. This protects the logo from visual clutter.',
    visual: (
      <div className="flex items-center justify-center w-full h-28" style={{ background: '#FFFFFF', border: '1px solid #E4E4E0', borderRadius: '2px' }}>
        <div
          className="relative flex items-center justify-center p-4"
          style={{
            border: '1.5px dashed #3B6FD4',
            borderRadius: '2px',
          }}
        >
          <Image src="/assets/logo/Logo_on_Light.svg" alt="Logo with clear space" width={110} height={32} style={{ objectFit: 'contain' }} />
          <span
            className="absolute -bottom-5 left-0 right-0 text-center font-mono"
            style={{ fontSize: '8px', color: '#3B6FD4' }}
          >
            ½ × icon height on all sides
          </span>
        </div>
      </div>
    ),
  },
  {
    type: 'dont',
    label: 'Rotate the lockup',
    description: 'The logo must always appear horizontally. Rotation undermines the structured, operational aesthetic.',
    visual: (
      <div className="relative flex items-center justify-center w-full h-28" style={{ background: '#FFFFFF', border: '1px solid #E4E4E0', borderRadius: '2px' }}>
        <div style={{ transform: 'rotate(-15deg)' }}>
          <Image src="/assets/logo/Logo_on_Light.svg" alt="Rotated logo" width={120} height={36} style={{ objectFit: 'contain' }} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(224,50,43,0.12)' }}>
          <span style={{ fontSize: '40px', color: '#E0322B', fontWeight: 900 }}>×</span>
        </div>
      </div>
    ),
  },
];

export default function LogoUsageSection() {
  return (
    <section
      id="logo-usage"
      className="px-14 py-14"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <SectionHeader eyebrow="04 — Usage" title="Logo Usage" titleAccent="Do & Don't" />

      <div className="grid grid-cols-2 gap-4">
        {CARDS.map((card, i) => (
          <div
            key={i}
            style={{
              border: '1px solid var(--border)',
              borderRadius: '2px',
              background: 'var(--card)',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: card.type === 'do' ? '#2E8B5C' : '#E0322B',
                  flexShrink: 0,
                }}
              />
              <span
                className="font-mono text-[10px] uppercase tracking-widest"
                style={{ color: card.type === 'do' ? '#2E8B5C' : '#E0322B' }}
              >
                {card.type === 'do' ? 'Do' : "Don't"} — {card.label}
              </span>
            </div>

            {/* Visual */}
            <div className="p-5">
              {card.visual}
            </div>

            {/* Footer */}
            <div
              className="px-5 pb-5 font-body text-xs leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              {card.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

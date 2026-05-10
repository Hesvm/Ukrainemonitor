'use client';

import Image from 'next/image';
import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { logoVariants } from '@/lib/brand';

type BgMode = 'light' | 'dark' | 'gray';

const BG_VALUES: Record<BgMode, string> = {
  light: '#FFFFFF',
  dark:  '#0C0C0C',
  gray:  '#E4E4E0',
};

export default function LogoSection() {
  const [bgMode, setBgMode] = useState<BgMode>('light');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopySvg = async (id: string, file: string) => {
    try {
      const res = await fetch(file);
      const svg = await res.text();
      await navigator.clipboard.writeText(svg);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      /* clipboard access denied */
    }
  };

  const handleDownloadSvg = async (file: string, label: string) => {
    const res = await fetch(file);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = label.replace(/\s+/g, '_') + '.svg';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="logo"
      className="px-14 py-14"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <SectionHeader eyebrow="01 — Identity" title="Logo System" />

      {/* Background toggle */}
      <div className="flex gap-2 mb-8">
        {(['light', 'dark', 'gray'] as BgMode[]).map((mode) => (
          <button
            key={mode}
            onClick={() => setBgMode(mode)}
            className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 transition-colors"
            style={{
              border: bgMode === mode ? '1px solid #3B6FD4' : '1px solid var(--border)',
              color: bgMode === mode ? '#3B6FD4' : 'var(--text-muted)',
              background: bgMode === mode ? 'rgba(59,111,212,0.07)' : 'transparent',
              borderRadius: '2px',
            }}
          >
            {mode}
          </button>
        ))}
      </div>

      {/* Logo grid */}
      <div className="grid grid-cols-3 gap-4">
        {logoVariants.map((variant) => (
          <div
            key={variant.id}
            className="group flex flex-col"
          >
            <div
              className="relative flex items-center justify-center p-8"
              style={{
                background: BG_VALUES[bgMode],
                border: '1px solid var(--border)',
                borderRadius: '2px',
                minHeight: '140px',
              }}
            >
              <Image
                src={variant.file}
                alt={variant.label}
                width={160}
                height={60}
                style={{ objectFit: 'contain' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />

              {/* Action buttons */}
              <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleCopySvg(variant.id, variant.file)}
                  className="font-mono text-[9px] uppercase tracking-wide px-2 py-1"
                  style={{
                    background: 'rgba(0,0,0,0.7)',
                    color: '#FFFFFF',
                    borderRadius: '2px',
                  }}
                >
                  {copiedId === variant.id ? 'Copied!' : 'Copy'}
                </button>
                <button
                  onClick={() => handleDownloadSvg(variant.file, variant.label)}
                  className="font-mono text-[9px] uppercase tracking-wide px-2 py-1"
                  style={{
                    background: 'rgba(59,111,212,0.85)',
                    color: '#FFFFFF',
                    borderRadius: '2px',
                  }}
                >
                  ↓ SVG
                </button>
              </div>
            </div>
            <p
              className="font-mono text-[10px] uppercase tracking-widest mt-2 px-1"
              style={{ color: 'var(--text-muted)' }}
            >
              {variant.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

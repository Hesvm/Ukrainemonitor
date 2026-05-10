'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import CopyButton from '@/components/ui/CopyButton';
import { colors } from '@/lib/brand';

const NEUTRAL_SCALE = [
  { step: '0',   hex: '#FFFFFF', dark: '#0A0E14' },
  { step: '50',  hex: '#F5F7FA', dark: '#0F1520' },
  { step: '100', hex: '#E6EAF2', dark: '#161D2B' },
  { step: '200', hex: '#C9D1DE', dark: '#1E2836' },
  { step: '300', hex: '#9AA5B8', dark: '#2A3748' },
  { step: '400', hex: '#6B7689', dark: '#3C4F63' },
  { step: '500', hex: '#4A5467', dark: '#4A5467' },
  { step: '600', hex: '#323A48', dark: '#6B7689' },
  { step: '700', hex: '#1D2535', dark: '#9AA5B8' },
  { step: '800', hex: '#131926', dark: '#C9D1DE' },
  { step: '900', hex: '#080C14', dark: '#E6EAF2' },
] as const;

const SEMANTIC_COLORS = [
  { label: 'Critical',   hex: '#E5484D', bg: 'rgba(229,72,77,0.12)',  text: '#E5484D', filled: false },
  { label: 'Warning',    hex: '#FFB020', bg: 'rgba(255,176,32,0.12)', text: '#B97B00', filled: false },
  { label: 'Confirmed',  hex: '#3DD68C', bg: 'rgba(61,214,140,0.12)', text: '#1A8A57', filled: false },
  { label: 'Info',       hex: '#367AFD', bg: 'rgba(54,122,253,0.12)', text: '#1A5FD4', filled: false },
  { label: 'Priority',   hex: '#FFD500', bg: '#FFD500',               text: '#292D32', filled: true  },
  { label: 'Neutral',    hex: 'rgba(0,0,0,0.08)', bg: 'rgba(0,0,0,0.06)', text: 'var(--text-muted)', filled: false },
] as const;


export default function ColorsSection() {
  return (
    <section
      id="colors"
      className="px-14 py-14"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <SectionHeader eyebrow="02 — Identity" title="Color Palette" />

      {/* Primary swatches */}
      <div className="grid grid-cols-5 gap-4 mb-10">
        {Object.values(colors).map((color) => (
          <CopyButton
            key={color.hex}
            text={color.hex}
            className="flex flex-col text-left w-full"
          >
            <div
              style={{
                height: '80px',
                background: color.hex,
                border: '1px solid var(--border)',
                borderRadius: '2px',
              }}
            />
            <div className="pt-3 px-0.5">
              <p className="font-body text-sm font-medium mb-0.5" style={{ color: 'var(--text)' }}>
                {color.name}
              </p>
              <p className="font-mono text-xs mb-0.5" style={{ color: 'var(--text)' }}>
                {color.hex}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                {color.role}
              </p>
            </div>
          </CopyButton>
        ))}
      </div>

      {/* Semantic colors */}
      <div
        className="p-5 mb-10"
        style={{ border: '1px solid var(--border)', borderRadius: '2px', background: 'var(--card)' }}
      >
        <p className="font-mono text-[10px] uppercase tracking-widest mb-5" style={{ color: 'var(--text-muted)' }}>
          Semantic
        </p>
        <div className="flex flex-wrap gap-2">
          {SEMANTIC_COLORS.map((s) => (
            <CopyButton key={s.label} text={s.hex}>
              <div
                className="flex items-center gap-2 px-3 py-1.5"
                style={{
                  background: s.bg,
                  borderRadius: '99px',
                  border: s.filled ? 'none' : '1px solid transparent',
                }}
              >
                <div
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: s.filled ? s.text : s.hex,
                    flexShrink: 0,
                  }}
                />
                <span
                  className="font-mono text-[10px] uppercase tracking-widest font-medium"
                  style={{ color: s.text }}
                >
                  {s.label} · {s.label === 'Neutral' ? 'RGBA' : s.hex}
                </span>
              </div>
            </CopyButton>
          ))}
        </div>
      </div>

      {/* Neutral Scale */}
      <div className="mb-10">
        <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>
          Neutral Scale
        </p>
        <p className="font-mono text-[10px] mb-5" style={{ color: 'var(--text-muted)' }}>
          11-step cool-desaturated near-black chrome · used for all dashboard surfaces
        </p>
        <div className="grid grid-cols-11 gap-1.5">
          {NEUTRAL_SCALE.map((n) => (
              <CopyButton key={n.step} text={n.hex} className="flex flex-col w-full">
                <div
                  style={{
                    height: '96px',
                    background: n.hex,
                    border: '1px solid var(--border)',
                    borderRadius: '2px',
                    position: 'relative',
                  }}
                />
                <div className="pt-2">
                  <p className="font-mono text-[10px] font-medium" style={{ color: 'var(--text)' }}>{n.step}</p>
                  <p className="font-mono text-[9px]" style={{ color: 'var(--text-muted)' }}>{n.hex.replace('#', '')}</p>
                </div>
              </CopyButton>
          ))}
        </div>
      </div>

    </section>
  );
}

'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import CopyButton from '@/components/ui/CopyButton';
import { colors, statusColors } from '@/lib/brand';

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
              <p
                className="font-body text-sm font-medium mb-0.5"
                style={{ color: 'var(--text)' }}
              >
                {color.name}
              </p>
              <p
                className="font-mono text-xs mb-0.5"
                style={{ color: 'var(--text)' }}
              >
                {color.hex}
              </p>
              <p
                className="font-mono text-[10px] uppercase tracking-wide"
                style={{ color: 'var(--text-muted)' }}
              >
                {color.role}
              </p>
            </div>
          </CopyButton>
        ))}
      </div>

      {/* Status colors */}
      <div
        className="p-5"
        style={{
          border: '1px solid var(--border)',
          borderRadius: '2px',
          background: 'var(--card)',
        }}
      >
        <p
          className="font-mono text-[10px] uppercase tracking-widest mb-4"
          style={{ color: 'var(--text-muted)' }}
        >
          Status Colors — Operational Use Only
        </p>
        <div className="flex flex-wrap gap-5">
          {statusColors.map((s) => (
            <CopyButton key={s.hex} text={s.hex}>
              <div className="flex items-center gap-2">
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: s.hex,
                    flexShrink: 0,
                  }}
                />
                <span
                  className="font-mono text-xs"
                  style={{ color: 'var(--text)' }}
                >
                  {s.hex}
                </span>
                <span
                  className="font-mono text-[10px] uppercase tracking-wide"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {s.label}
                </span>
              </div>
            </CopyButton>
          ))}
        </div>
      </div>
    </section>
  );
}

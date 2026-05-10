'use client';

import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { typeScale } from '@/lib/brand';

function Tag({ children }: { children: string }) {
  return (
    <span
      className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5"
      style={{
        border: '1px solid var(--border)',
        borderRadius: '2px',
        color: 'var(--text-muted)',
      }}
    >
      {children}
    </span>
  );
}

export default function TypographySection() {
  const [displayText, setDisplayText] = useState('');
  const [sansText, setSansText] = useState('');
  const [monoText, setMonoText] = useState('');

  return (
    <section
      id="typography"
      className="px-14 py-14"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <SectionHeader eyebrow="03 — Identity" title="Typography" />

      {/* Type blocks card */}
      <div
        className="mb-8"
        style={{
          border: '1px solid var(--border)',
          borderRadius: '2px',
          background: 'var(--card)',
          overflow: 'hidden',
        }}
      >
        {/* Block 1 — Dystopian */}
        <div className="p-8" style={{ borderBottom: '1px solid var(--border)' }}>
          <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>
            Display / Headings
          </p>
          <p className="font-body text-base font-medium mb-2" style={{ color: 'var(--text)' }}>
            Dystopian Black
          </p>
          <div className="flex gap-2 mb-6">
            <Tag>Headlines</Tag>
            <Tag>Wordmark</Tag>
          </div>
          <div
            className="font-display uppercase leading-none mb-6"
            style={{ fontSize: '40px', color: 'var(--text)' }}
          >
            Overnight Strike<br />
            <span style={{ color: '#3B6FD4' }}>Pattern Shifts West</span>
          </div>
          <input
            type="text"
            value={displayText}
            onChange={(e) => setDisplayText(e.target.value.toUpperCase())}
            placeholder="TYPE A HEADLINE…"
            className="w-full font-display uppercase bg-transparent outline-none border-b"
            style={{
              fontSize: '32px',
              color: 'var(--text)',
              borderColor: 'var(--border)',
              paddingBottom: '8px',
            }}
          />
        </div>

        {/* Block 2 — DM Sans */}
        <div className="p-8" style={{ borderBottom: '1px solid var(--border)' }}>
          <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>
            Body / UI
          </p>
          <p className="font-body text-base font-medium mb-2" style={{ color: 'var(--text)' }}>
            DM Sans — Regular 400 · Medium 500
          </p>
          <div className="flex gap-2 mb-6">
            <Tag>Body</Tag>
            <Tag>Navigation</Tag>
            <Tag>Buttons</Tag>
          </div>
          <p
            className="font-body leading-relaxed mb-6 max-w-xl"
            style={{ fontSize: '15px', color: 'var(--text)' }}
          >
            Ukraine Monitor synthesizes open-source intelligence from verified ground sources,
            satellite imagery, and official channels to deliver accurate, timely conflict tracking.
            Every report is source-attributed and confidence-rated.
          </p>
          <textarea
            value={sansText}
            onChange={(e) => setSansText(e.target.value)}
            placeholder="Type body copy here…"
            rows={3}
            className="w-full font-body bg-transparent outline-none border-b resize-none"
            style={{
              fontSize: '15px',
              lineHeight: '1.65',
              color: 'var(--text)',
              borderColor: 'var(--border)',
            }}
          />
        </div>

        {/* Block 3 — DM Mono */}
        <div className="p-8">
          <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>
            Data / Mono
          </p>
          <p className="font-body text-base font-medium mb-2" style={{ color: 'var(--text)' }}>
            DM Mono — Regular 400 · Medium 500
          </p>
          <div className="flex gap-2 mb-6">
            <Tag>Timestamps</Tag>
            <Tag>IDs</Tag>
            <Tag>Coordinates</Tag>
          </div>
          <div
            className="font-mono leading-loose mb-6"
            style={{ fontSize: '13px', color: 'var(--text)' }}
          >
            LIVE • KYIV BUREAU • 12:04 EET<br />
            48.3794° N, 31.1656° E • OSINT • Confidence: HIGH<br />
            SOURCE: SOCIAL • 4 sources verified • REF #UA-2025-0219
          </div>
          <textarea
            value={monoText}
            onChange={(e) => setMonoText(e.target.value)}
            placeholder="Type metadata here…"
            rows={3}
            className="w-full font-mono bg-transparent outline-none border-b resize-none"
            style={{
              fontSize: '13px',
              lineHeight: '1.65',
              color: 'var(--text)',
              borderColor: 'var(--border)',
            }}
          />
        </div>
      </div>

      {/* Type scale table */}
      <div
        style={{
          border: '1px solid var(--border)',
          borderRadius: '2px',
          background: 'var(--card)',
          overflow: 'hidden',
        }}
      >
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              {['Level', 'Typeface', 'Size', 'Weight', 'Usage'].map((h) => (
                <th
                  key={h}
                  className="font-mono text-[10px] uppercase tracking-widest text-left px-4 py-3"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {typeScale.map((row, i) => (
              <tr
                key={row.level}
                style={{
                  borderBottom: i < typeScale.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <td className="px-4 py-3 font-body text-sm font-medium" style={{ color: 'var(--text)' }}>{row.level}</td>
                <td className="px-4 py-3 font-mono text-xs" style={{ color: 'var(--text)' }}>{row.typeface}</td>
                <td className="px-4 py-3 font-mono text-xs" style={{ color: 'var(--text)' }}>{row.size}</td>
                <td className="px-4 py-3 font-mono text-xs" style={{ color: 'var(--text)' }}>{row.weight}</td>
                <td className="px-4 py-3 font-body text-sm" style={{ color: 'var(--text-muted)' }}>{row.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

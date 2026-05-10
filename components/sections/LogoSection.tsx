'use client';
import { useState } from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import LogoModal from '@/components/ui/LogoModal';
import { LOGO_VARIANTS, LogoVariant } from '@/lib/brand';

type TypeFilter = 'all' | 'mark' | 'horizontal' | 'vertical';

const MATRIX: { type: LogoVariant['type']; label: string; ids: string[] }[] = [
  {
    type: 'mark',
    label: 'MARK',
    ids: ['mark-color', 'mark-color', 'mark-mono-black', 'mark-mono-white'],
  },
  {
    type: 'horizontal',
    label: 'HORIZONTAL',
    ids: ['logo-h-color-light', 'logo-h-color-dark', 'logo-h-mono-black', 'logo-h-mono-white'],
  },
  {
    type: 'vertical',
    label: 'VERTICAL',
    ids: ['logo-v-color-light', 'logo-v-color-dark', 'logo-v-mono-black', 'logo-v-mono-white'],
  },
];

const COL_HEADERS = ['COLOR — LIGHT', 'COLOR — DARK', 'MONO BLACK', 'MONO WHITE'];
const COL_BGS = ['#FFFFFF', '#0C0C0C', '#FFFFFF', '#0C0C0C'];

// Cell size constraints per type
const CELL_SIZES: Record<string, { minHeight: number; imgWidth: number; imgHeight: number }> = {
  mark:       { minHeight: 140, imgWidth: 80,  imgHeight: 80  },
  horizontal: { minHeight: 100, imgWidth: 220, imgHeight: 60  },
  vertical:   { minHeight: 160, imgWidth: 100, imgHeight: 130 },
};

const SEMANTIC_GROUPS = [
  {
    label: 'Digital — Small',
    rows: [
      { context: 'Browser Favicon',        variantId: 'mark-color' },
      { context: 'Browser Tab',            variantId: 'mark-color' },
      { context: 'App Icon (iOS/Android)', variantId: 'mark-color' },
      { context: 'PWA Icon',               variantId: 'mark-color' },
      { context: 'Social Profile Picture', variantId: 'mark-color' },
      { context: 'Avatar / Badge',         variantId: 'mark-color' },
    ],
  },
  {
    label: 'Digital — Standard',
    rows: [
      { context: 'Website Header (Light)', variantId: 'logo-h-color-light' },
      { context: 'Website Header (Dark)',  variantId: 'logo-h-color-dark'  },
      { context: 'Email Header',           variantId: 'logo-h-color-light' },
      { context: 'Email Footer',           variantId: 'logo-h-mono-black'  },
      { context: 'Dark Hero Section',      variantId: 'logo-h-color-dark'  },
      { context: 'Presentation (Light)',   variantId: 'logo-h-color-light' },
      { context: 'Presentation (Dark)',    variantId: 'logo-h-color-dark'  },
    ],
  },
  {
    label: 'Digital — Social / OG',
    rows: [
      { context: 'OG Image (1200×630)',    variantId: 'logo-v-color-dark'  },
      { context: 'Twitter Card',           variantId: 'logo-v-color-dark'  },
      { context: 'Social Card (Light)',    variantId: 'logo-v-color-light' },
    ],
  },
  {
    label: 'Print',
    rows: [
      { context: 'Print (Color)',          variantId: 'logo-h-color-light' },
      { context: 'Print (Mono)',           variantId: 'logo-h-mono-black'  },
      { context: 'Dark Print',             variantId: 'logo-h-mono-white'  },
      { context: 'Poster / Large Format',  variantId: 'logo-v-color-light' },
      { context: 'Merchandise',            variantId: 'logo-v-mono-black'  },
      { context: 'Embossing / Stamp',      variantId: 'mark-mono-black'    },
    ],
  },
];

export default function LogoSection() {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('all');
  const [modalVariant, setModalVariant] = useState<LogoVariant | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopySvg = async (id: string, file: string) => {
    try {
      const res = await fetch(file);
      const svg = await res.text();
      await navigator.clipboard.writeText(svg);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch { /* denied */ }
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

  const filteredRows = typeFilter === 'all'
    ? MATRIX
    : MATRIX.filter((r) => r.type === typeFilter);

  return (
    <section
      id="logo"
      className="px-14 py-14"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <SectionHeader eyebrow="01 — Identity" title="Logo System" />

      {/* Description */}
      <p
        className="font-body text-[14px] max-w-2xl mb-8"
        style={{ color: 'var(--text-muted)' }}
      >
        The Ukraine Monitor logo exists in three structural types and four color treatments.
        Use the matrix below to find the exact variant for your context.
      </p>

      {/* Type filter tabs */}
      <div className="flex gap-2 mb-6">
        {(['all', 'mark', 'horizontal', 'vertical'] as TypeFilter[]).map((f) => (
          <button
            key={f}
            onClick={() => setTypeFilter(f)}
            className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 transition-colors"
            style={{
              border: typeFilter === f ? '1px solid #3B6FD4' : '1px solid var(--border)',
              color: typeFilter === f ? '#3B6FD4' : 'var(--text-muted)',
              background: typeFilter === f ? 'rgba(59,111,212,0.07)' : 'transparent',
              borderRadius: '2px',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Logo matrix */}
      <div className="overflow-x-auto mb-10">
        {/* Column header row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '32px 1fr 1fr 1fr 1fr',
            gap: '6px',
            marginBottom: '4px',
            paddingLeft: '0',
          }}
        >
          {/* Empty corner */}
          <div />
          {COL_HEADERS.map((h) => (
            <div
              key={h}
              className="font-mono text-[9px] uppercase tracking-widest text-center pb-2"
              style={{ color: 'var(--text-muted)' }}
            >
              {h}
            </div>
          ))}
        </div>

        {/* Data rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {filteredRows.map((row) => {
            const sizes = CELL_SIZES[row.type];
            const anchorId = `logo-${row.type}`;
            return (
              <div
                key={row.type}
                id={anchorId}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '32px 1fr 1fr 1fr 1fr',
                  gap: '6px',
                  alignItems: 'stretch',
                }}
              >
                {/* Row label — rotated */}
                <div
                  className="flex items-center justify-center"
                  style={{ width: '32px' }}
                >
                  <span
                    className="font-mono text-[9px] uppercase tracking-widest"
                    style={{
                      color: 'var(--text-muted)',
                      writingMode: 'vertical-lr',
                      transform: 'rotate(180deg)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {row.label}
                  </span>
                </div>

                {/* 4 logo cells */}
                {row.ids.map((id, colIdx) => {
                  const variant = LOGO_VARIANTS.find((v) => v.id === id) ?? null;
                  const bg = COL_BGS[colIdx];
                  // For mark row col-dark (index 1), same file but dark bg — variant is mark-color
                  const cellKey = `${row.type}-${colIdx}`;
                  return (
                    <div
                      key={cellKey}
                      className="group flex flex-col"
                      style={{ cursor: 'pointer' }}
                      onClick={() => { if (variant) setModalVariant(variant); }}
                    >
                      <div
                        className="relative flex items-center justify-center p-4"
                        style={{
                          background: bg,
                          border: '1px solid var(--border)',
                          borderRadius: '2px',
                          minHeight: `${sizes.minHeight}px`,
                        }}
                      >
                        {variant ? (
                          <Image
                            src={variant.file}
                            alt={variant.label}
                            width={sizes.imgWidth}
                            height={sizes.imgHeight}
                            style={{ objectFit: 'contain', maxWidth: '100%' }}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const placeholder = target.nextElementSibling as HTMLElement | null;
                              if (placeholder) placeholder.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        {/* Fallback placeholder (hidden until onError) */}
                        <div
                          style={{
                            display: 'none',
                            position: 'absolute',
                            inset: 0,
                            border: '1px dashed var(--border)',
                            borderRadius: '2px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-muted)',
                            fontSize: '9px',
                            fontFamily: 'var(--font-mono, monospace)',
                            padding: '8px',
                            textAlign: 'center',
                            wordBreak: 'break-all',
                          }}
                        >
                          {variant?.file ?? id}
                        </div>

                        {/* Copy / Download buttons on hover */}
                        {variant && (
                          <div
                            className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={(e) => e.stopPropagation()}
                          >
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
                        )}
                      </div>

                      {/* Variant label below cell */}
                      <p
                        className="font-mono text-[9px] uppercase tracking-widest mt-1 text-center"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {variant?.label ?? id}
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Semantic Placement Guide */}
      <div
        id="logo-semantic"
        className="mb-8"
        style={{
          border: '1px solid var(--border)',
          borderRadius: '2px',
          background: 'var(--card)',
          overflow: 'hidden',
        }}
      >
        {/* Card header */}
        <div
          className="px-6 py-4"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <span
            className="font-mono text-[10px] uppercase tracking-widest"
            style={{ color: 'var(--text-muted)' }}
          >
            WHERE TO USE EACH VARIANT
          </span>
        </div>

        {/* Groups */}
        {SEMANTIC_GROUPS.map((group, gi) => (
          <div key={group.label}>
            {/* Group title */}
            <div
              className="px-6 py-2"
              style={{
                borderBottom: '1px solid var(--border)',
                background: 'var(--bg-hover, rgba(0,0,0,0.02))',
              }}
            >
              <span
                className="font-mono text-[9px] uppercase tracking-widest"
                style={{ color: 'var(--text-muted)' }}
              >
                {group.label}
              </span>
            </div>

            {/* Context rows */}
            {group.rows.map((row, ri) => {
              const variantLabel = LOGO_VARIANTS.find((v) => v.id === row.variantId)?.label ?? row.variantId;
              const isLast = ri === group.rows.length - 1 && gi === SEMANTIC_GROUPS.length - 1;
              return (
                <div
                  key={row.context}
                  className="px-6 py-2.5 flex justify-between items-center"
                  style={{
                    borderBottom: isLast ? 'none' : '1px solid var(--border)',
                  }}
                >
                  <span
                    className="font-body text-sm"
                    style={{ color: 'var(--text)' }}
                  >
                    {row.context}
                  </span>
                  <span
                    className="font-mono text-[10px] px-2 py-0.5 border"
                    style={{
                      borderRadius: '2px',
                      color: 'var(--text-muted)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    {variantLabel}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Minimum Size Rule Card */}
      <div
        style={{
          border: '1px solid var(--border)',
          borderRadius: '2px',
          background: 'var(--card)',
          overflow: 'hidden',
        }}
      >
        {/* Card header */}
        <div
          className="px-6 py-4"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <span
            className="font-mono text-[10px] uppercase tracking-widest"
            style={{ color: 'var(--text-muted)' }}
          >
            WHEN TO DROP THE WORDMARK
          </span>
        </div>

        {/* Size table */}
        <div className="px-6 py-4">
          <pre
            className="font-mono text-[12px]"
            style={{
              color: 'var(--text)',
              margin: 0,
              whiteSpace: 'pre',
              overflowX: 'auto',
            }}
          >{`Available width     →   Recommended variant
─────────────────────────────────────────────
≥ 160px             →   Horizontal lockup (preferred)
120px – 159px       →   Vertical lockup
32px – 119px        →   Mark only (no wordmark)
< 32px              →   Mark only, simplified (favicon.ico)`}</pre>
        </div>
      </div>

      {/* Modal */}
      <LogoModal variant={modalVariant} onClose={() => setModalVariant(null)} />
    </section>
  );
}

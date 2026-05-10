import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import { sizingSpecs } from '@/lib/brand';

const LOGO_WIDTHS: Record<string, number> = {
  'Desktop web':   80,
  'Mobile web':    60,
  'Favicon / App': 16,
  'Print':         40,
  'OG / Social':   80,
};

export default function SizingSection() {
  return (
    <section
      id="sizing"
      className="px-14 py-14"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <SectionHeader eyebrow="05 — Usage" title="Sizing & Spacing" />

      <div
        style={{
          border: '1px solid var(--border)',
          borderRadius: '2px',
          background: 'var(--card)',
          overflow: 'hidden',
        }}
      >
        <table className="w-full">
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              {['Context', 'Min Width', 'Use', 'Note', 'Preview'].map((h) => (
                <th
                  key={h}
                  className="font-mono text-[10px] uppercase tracking-widest text-left px-5 py-3"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sizingSpecs.map((row, i) => (
              <tr
                key={row.context}
                style={{ borderBottom: i < sizingSpecs.length - 1 ? '1px solid var(--border)' : 'none' }}
              >
                <td className="px-5 py-4 font-body text-sm font-medium" style={{ color: 'var(--text)' }}>
                  {row.context}
                </td>
                <td className="px-5 py-4 font-mono text-xs" style={{ color: 'var(--text)' }}>
                  {row.minWidth}
                </td>
                <td className="px-5 py-4 font-body text-sm" style={{ color: 'var(--text-muted)' }}>
                  {row.use}
                </td>
                <td className="px-5 py-4 font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                  {row.note || '—'}
                </td>
                <td className="px-5 py-4">
                  <div
                    className="flex items-center justify-center"
                    style={{
                      background: '#F7F7F5',
                      border: '1px solid var(--border)',
                      borderRadius: '2px',
                      padding: '6px 10px',
                      width: 'fit-content',
                    }}
                  >
                    <Image
                      src="/assets/logo/Logo_on_Light.svg"
                      alt={row.context}
                      width={LOGO_WIDTHS[row.context] ?? 60}
                      height={Math.max(12, Math.floor((LOGO_WIDTHS[row.context] ?? 60) * 0.3))}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

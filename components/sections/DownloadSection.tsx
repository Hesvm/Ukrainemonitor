'use client';

import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import CopyButton from '@/components/ui/CopyButton';
import { downloadBrandMD } from '@/lib/download';
import { cssTokens } from '@/lib/brand';

function DownloadCard({
  title,
  sub,
  description,
  action,
}: {
  title: string;
  sub: string;
  description: string;
  action: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col p-6"
      style={{
        border: '1px solid var(--border)',
        borderRadius: '2px',
        background: 'var(--card)',
      }}
    >
      <p
        className="font-mono text-[10px] uppercase tracking-widest mb-1"
        style={{ color: 'var(--text-muted)' }}
      >
        {sub}
      </p>
      <p className="font-body text-base font-medium mb-2" style={{ color: 'var(--text)' }}>
        {title}
      </p>
      <p className="font-body text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--text-muted)' }}>
        {description}
      </p>
      {action}
    </div>
  );
}

function Btn({
  onClick,
  children,
}: {
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="font-mono text-xs uppercase tracking-widest px-4 py-2.5 text-left transition-colors w-full"
      style={{
        border: '1px solid var(--border)',
        borderRadius: '2px',
        color: 'var(--text)',
        background: 'transparent',
      }}
    >
      {children}
    </button>
  );
}

export default function DownloadSection() {
  return (
    <section
      id="download"
      className="px-14 py-14"
    >
      <SectionHeader eyebrow="07 — Assets" title="Downloads" />

      <div className="grid grid-cols-2 gap-4">
        <DownloadCard
          title="Brand Guidelines"
          sub="Markdown Document"
          description="Complete brand reference in Markdown format — logos, colors, typography, usage rules, icon list, and CSS tokens."
          action={<Btn onClick={downloadBrandMD}>Download .MD</Btn>}
        />

        <DownloadCard
          title="Logo SVG Files"
          sub="11 Variants — Mark · Horizontal · Vertical"
          description="All 11 variants across Mark, Horizontal, and Vertical lockups. Click any logo in the matrix above to copy or download individual SVG files."
          action={
            <div
              className="font-mono text-[11px] leading-relaxed p-4"
              style={{
                border: '1px solid var(--border)',
                borderRadius: '2px',
                background: 'var(--bg)',
                color: 'var(--text-muted)',
              }}
            >
              {[
                'mark-color', 'mark-mono-black', 'mark-mono-white',
                'logo-h-color-light', 'logo-h-color-dark', 'logo-h-mono-black', 'logo-h-mono-white',
                'logo-v-color-light', 'logo-v-color-dark', 'logo-v-mono-black', 'logo-v-mono-white',
              ].map((id) => (
                <div key={id}>{id}</div>
              ))}
            </div>
          }
        />

        <DownloadCard
          title="Dystopian Font"
          sub="Display Typeface · 4 Weights"
          description="The primary display typeface used for all headlines and the wordmark. Download individual weights as OpenType files."
          action={
            <div className="flex flex-col gap-2">
              {[
                { label: 'Dystopian Black', file: 'Dystopian-Black.otf' },
                { label: 'Dystopian Bold', file: 'Dystopian-Bold.otf' },
                { label: 'Dystopian Regular', file: 'Dystopian-Regular.otf' },
                { label: 'Dystopian Light', file: 'Dystopian-Light.otf' },
              ].map(({ label, file }) => (
                <a
                  key={file}
                  href={`/assets/fonts/${file}`}
                  download={file}
                  className="font-mono text-xs uppercase tracking-widest px-4 py-2.5 text-left block transition-colors"
                  style={{
                    border: '1px solid var(--border)',
                    borderRadius: '2px',
                    color: 'var(--text)',
                    textDecoration: 'none',
                  }}
                >
                  ↓ {label}
                </a>
              ))}
            </div>
          }
        />

        <DownloadCard
          title="CSS Tokens"
          sub="Design Tokens"
          description="All brand color and font variables as CSS custom properties, ready to paste into any project."
          action={
            <CopyButton
              text={cssTokens}
              className="w-full font-mono text-xs uppercase tracking-widest px-4 py-2.5 text-left"
            >
              <span
                style={{
                  display: 'block',
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                  color: 'var(--text)',
                  padding: '10px 16px',
                }}
              >
                Copy CSS Tokens
              </span>
            </CopyButton>
          }
        />
      </div>
    </section>
  );
}

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
          sub="All 6 Variants"
          description="Full-color and mono logo variants for light and dark backgrounds, plus the standalone icon mark. Click any logo in the Logo System section to copy its SVG."
          action={
            <div
              className="flex items-center gap-3 p-3"
              style={{ border: '1px solid var(--border)', borderRadius: '2px', background: 'var(--bg)' }}
            >
              <Image
                src="/assets/logo/Logo_on_Light.svg"
                alt="Mark"
                width={80}
                height={24}
                className="block dark:hidden"
              />
              <Image
                src="/assets/logo/Logo_on_Dark.svg"
                alt="Mark"
                width={80}
                height={24}
                className="hidden dark:block"
              />
              <span className="font-mono text-[10px] uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                /public/assets/logo/
              </span>
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

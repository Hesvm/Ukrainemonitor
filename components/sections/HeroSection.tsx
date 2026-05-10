'use client';

import { downloadBrandMD } from '@/lib/download';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="px-14 py-16"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <p
        className="font-mono text-[10px] uppercase tracking-widest mb-8"
        style={{ color: 'var(--text-muted)' }}
      >
        Ukraine Monitor • Brand Identity System • 2025
      </p>

      <h1
        className="font-display uppercase leading-none mb-8"
        style={{ fontSize: '52px', color: 'var(--text)' }}
      >
        Brand<br />
        <span style={{ color: '#3B6FD4' }}>Guidelines</span>
      </h1>

      <p
        className="font-body text-base leading-relaxed mb-10 max-w-lg"
        style={{ color: 'var(--text-muted)' }}
      >
        Ukraine Monitor is a real-time conflict intelligence platform tracking developments
        across Ukraine. This document defines all visual standards for consistent, credible
        communication across all channels.
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={downloadBrandMD}
          className="font-mono text-xs uppercase tracking-widest px-5 py-3 transition-colors"
          style={{
            background: '#3B6FD4',
            color: '#FFFFFF',
            borderRadius: '2px',
            border: 'none',
          }}
        >
          Download Brand Kit
        </button>
        <button
          onClick={downloadBrandMD}
          className="font-mono text-xs uppercase tracking-widest px-5 py-3 transition-colors"
          style={{
            background: 'transparent',
            color: 'var(--text)',
            border: '1px solid var(--border)',
            borderRadius: '2px',
          }}
        >
          Download .MD
        </button>
      </div>
    </section>
  );
}

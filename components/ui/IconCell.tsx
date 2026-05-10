'use client';

import { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import * as Iconsax from 'iconsax-react';

interface Props {
  name: string;
  label: string;
}

export default function IconCell({ name, label }: Props) {
  const [hovered, setHovered] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Iconsax as any)[name];

  if (!IconComponent) return null;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center justify-center px-3 py-3 transition-colors"
      style={{
        minWidth: '110px',
        border: '1px solid var(--border)',
        borderRadius: '2px',
        background: hovered ? 'var(--bg-hover)' : 'var(--card)',
        cursor: 'default',
      }}
    >
      <div className="flex items-center gap-3 mb-2" style={{ color: 'var(--text)' }}>
        <IconComponent size={22} variant="Linear" color="currentColor" />
        <div style={{ width: '1px', height: '20px', background: 'var(--border)' }} />
        <IconComponent size={22} variant="Bold" color="currentColor" />
      </div>
      <p
        className="font-mono uppercase tracking-wide text-center"
        style={{ fontSize: '9px', color: 'var(--text-muted)' }}
      >
        {label}
      </p>
    </div>
  );
}

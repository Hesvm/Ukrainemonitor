'use client';

import { useState } from 'react';

interface Props {
  text: string;
  children: React.ReactNode;
  className?: string;
}

export default function CopyButton({ text, children, className = '' }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard access denied */
    }
  };

  return (
    <button onClick={handleCopy} className={`relative cursor-pointer ${className}`}>
      {children}
      {copied && (
        <span
          className="absolute inset-0 flex items-center justify-center font-mono text-xs tracking-widest text-white"
          style={{ background: 'rgba(0,0,0,0.6)', borderRadius: '2px' }}
        >
          COPIED
        </span>
      )}
    </button>
  );
}

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { LogoVariant } from '@/lib/brand'

interface Props {
  variant: LogoVariant | null
  onClose: () => void
}

export default function LogoModal({ variant, onClose }: Props) {
  const [copied, setCopied] = useState(false)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    if (!variant) return
    setImgError(false)
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [variant, onClose])

  if (!variant) return null

  const handleCopySvg = async () => {
    const res = await fetch(variant.file)
    const text = await res.text()
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const handleDownloadSvg = async () => {
    const res = await fetch(variant.file)
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = variant.file.split('/').pop() ?? 'logo.svg'
    a.click()
    URL.revokeObjectURL(url)
  }

  const previewBg = variant.bg === 'dark' ? '#0C0C0C' : '#FFFFFF'

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.65)',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: '2px',
          width: '100%',
          maxWidth: '560px',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Logo preview */}
        <div
          style={{
            background: previewBg,
            padding: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ position: 'relative', width: '320px', height: '160px' }}>
            {imgError ? (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  border: '1px dashed var(--border)',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono, monospace)',
                  textAlign: 'center',
                  padding: '8px',
                  wordBreak: 'break-all',
                }}
              >
                {variant.file}
              </div>
            ) : (
              <Image
                src={variant.file}
                alt={variant.label}
                fill
                style={{ objectFit: 'contain' }}
                onError={() => setImgError(true)}
              />
            )}
          </div>
        </div>

        {/* Info area */}
        <div style={{ padding: '24px' }}>
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--text-muted)',
              margin: '0 0 4px',
            }}
          >
            {variant.id}
          </p>

          {/* Title */}
          <h2
            style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: '22px',
              color: 'var(--text)',
              margin: '0 0 16px',
              fontWeight: 'normal',
            }}
          >
            {variant.label}
          </h2>

          {/* Recommended for */}
          <p
            style={{
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--text-muted)',
              margin: '0 0 6px',
            }}
          >
            Recommended For
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '16px' }}>
            {variant.useOn.map((use) => (
              <span
                key={use}
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '9px',
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                  padding: '2px 8px',
                  color: 'var(--text-muted)',
                }}
              >
                {use}
              </span>
            ))}
          </div>

          {/* Minimum size */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <p
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '9px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--text-muted)',
                margin: 0,
              }}
            >
              Minimum Size
            </p>
            <p
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '9px',
                color: 'var(--text-muted)',
                margin: 0,
              }}
            >
              {variant.minSize}
            </p>
          </div>

          {/* Notes */}
          {variant.notes && (
            <p
              style={{
                fontFamily: 'var(--font-body, sans-serif)',
                fontSize: '13px',
                fontStyle: 'italic',
                color: 'var(--text-muted)',
                margin: '0 0 16px',
              }}
            >
              {variant.notes}
            </p>
          )}

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={handleCopySvg}
              style={{
                flex: 1,
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                borderRadius: '2px',
                padding: '10px 0',
                background: 'transparent',
                border: '1px solid var(--border)',
                color: 'var(--text)',
                cursor: 'pointer',
              }}
            >
              {copied ? 'COPIED!' : 'COPY SVG'}
            </button>
            <button
              onClick={handleDownloadSvg}
              style={{
                flex: 1,
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                borderRadius: '2px',
                padding: '10px 0',
                background: '#3B6FD4',
                border: 'none',
                color: '#FFFFFF',
                cursor: 'pointer',
              }}
            >
              DOWNLOAD SVG
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

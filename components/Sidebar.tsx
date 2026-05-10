'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'hero',       label: 'Overview',      group: 'Identity'  },
  { id: 'logo',       label: 'Logo System',   group: 'Identity'  },
  { id: 'colors',     label: 'Color Palette', group: 'Identity'  },
  { id: 'typography', label: 'Typography',    group: 'Identity'  },
  { id: 'logo-usage', label: 'Logo Usage',    group: 'Usage'     },
  { id: 'sizing',     label: 'Sizing',        group: 'Usage'     },
  { id: 'icons',      label: 'Icon System',   group: 'Assets'    },
  { id: 'download',   label: 'Downloads',     group: 'Assets'    },
] as const;

const GROUPS = ['Identity', 'Usage', 'Assets'] as const;

export default function Sidebar({ activeSection }: { activeSection: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 z-40"
        style={{
          width: '228px',
          background: 'var(--card)',
          borderRight: '1px solid var(--border)',
        }}
      >
        {/* Logo */}
        <div className="px-5 pt-6 pb-5" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="flex items-center gap-2 mb-1">
            <Image
              src="/assets/logo/Logo_on_Light.svg"
              alt="Ukraine Monitor"
              width={120}
              height={32}
              className="block dark:hidden"
              priority
            />
            <Image
              src="/assets/logo/Logo_on_Dark.svg"
              alt="Ukraine Monitor"
              width={120}
              height={32}
              className="hidden dark:block"
              priority
            />
          </div>
          <p
            className="font-mono text-[10px] uppercase tracking-widest mt-2"
            style={{ color: 'var(--text-muted)' }}
          >
            Brand Guidelines V1.0
          </p>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {GROUPS.map((group) => (
            <div key={group} className="mb-4">
              <p
                className="font-mono text-[9px] uppercase tracking-widest px-2 mb-1"
                style={{ color: 'var(--text-muted)' }}
              >
                {group}
              </p>
              {NAV_ITEMS.filter(item => item.group === group).map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="w-full text-left px-2 py-1.5 text-sm font-body transition-colors"
                    style={{
                      borderLeft: isActive ? '2px solid #3B6FD4' : '2px solid transparent',
                      color: isActive ? '#3B6FD4' : 'var(--text)',
                      background: isActive ? 'rgba(59,111,212,0.07)' : 'transparent',
                      borderRadius: '2px',
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Dark mode toggle */}
        <div className="px-4 py-4" style={{ borderTop: '1px solid var(--border)' }}>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-full font-mono text-xs uppercase tracking-widest px-3 py-2 text-center transition-colors"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
                borderRadius: '2px',
              }}
            >
              {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
          )}
        </div>
      </aside>

      {/* Mobile top nav */}
      <header
        className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3"
        style={{
          background: 'var(--card)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <Image
          src="/assets/logo/Logo_on_Light.svg"
          alt="Ukraine Monitor"
          width={100}
          height={26}
          className="block dark:hidden"
          priority
        />
        <Image
          src="/assets/logo/Logo_on_Dark.svg"
          alt="Ukraine Monitor"
          width={100}
          height={26}
          className="hidden dark:block"
          priority
        />
        <nav className="flex items-center gap-1 overflow-x-auto max-w-xs">
          {NAV_ITEMS.filter(i => i.group === 'Identity').map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-mono text-[9px] uppercase tracking-wide whitespace-nowrap px-2 py-1"
              style={{ color: activeSection === item.id ? '#3B6FD4' : 'var(--text-muted)' }}
            >
              {item.label}
            </button>
          ))}
        </nav>
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="font-mono text-[9px] uppercase tracking-wide px-2 py-1 ml-2"
            style={{ border: '1px solid var(--border)', color: 'var(--text-muted)', borderRadius: '2px' }}
          >
            {theme === 'dark' ? '☀' : '◑'}
          </button>
        )}
      </header>
    </>
  );
}

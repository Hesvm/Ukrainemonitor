'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {
  Home2,
  Gallery,
  Colorfilter,
  TextBlock,
  TickSquare,
  Ruler,
  Category2,
  DocumentDownload,
  ArrowRight2,
  ArrowLeft2,
  Sun1,
  Moon,
} from 'iconsax-react';

const NAV_ITEMS = [
  { id: 'hero',       label: 'Overview',      group: 'Identity', Icon: Home2        },
  { id: 'logo',       label: 'Logo System',   group: 'Identity', Icon: Gallery      },
  { id: 'colors',     label: 'Color Palette', group: 'Identity', Icon: Colorfilter  },
  { id: 'typography', label: 'Typography',    group: 'Identity', Icon: TextBlock    },
  { id: 'logo-usage', label: 'Logo Usage',    group: 'Usage',    Icon: TickSquare   },
  { id: 'sizing',     label: 'Sizing',        group: 'Usage',    Icon: Ruler        },
  { id: 'icons',      label: 'Icon System',   group: 'Assets',   Icon: Category2    },
  { id: 'download',   label: 'Downloads',     group: 'Assets',   Icon: DocumentDownload },
] as const;

const GROUPS = ['Identity', 'Usage', 'Assets'] as const;

interface Props {
  activeSection: string;
  onCollapse?: (collapsed: boolean) => void;
}

export default function Sidebar({ activeSection, onCollapse }: Props) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const toggle = () => {
    const next = !collapsed;
    setCollapsed(next);
    onCollapse?.(next);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const W = collapsed ? 64 : 220;

  return (
    <>
      {/* Desktop floating sidebar */}
      <aside
        className="hidden md:flex flex-col fixed left-4 top-4 bottom-4 z-40 transition-all duration-300"
        style={{
          width: `${W}px`,
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          overflow: 'hidden',
        }}
      >
        {/* Logo row */}
        <div
          className="flex items-center gap-3 px-3 py-4 shrink-0"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          {/* Mark — always visible */}
          <div className="shrink-0" style={{ width: 32, height: 32 }}>
            <Image
              src="/assets/logo/Mark_color.svg"
              alt="Ukraine Monitor mark"
              width={32}
              height={32}
              className="block dark:hidden"
              priority
            />
            <Image
              src="/assets/logo/Mark_mono.svg"
              alt="Ukraine Monitor mark"
              width={32}
              height={32}
              className="hidden dark:block"
              priority
            />
          </div>

          {/* Wordmark — hidden when collapsed */}
          {!collapsed && (
            <div className="overflow-hidden transition-all duration-300">
              <p className="font-display text-sm uppercase leading-none" style={{ color: 'var(--text)', fontWeight: 900 }}>
                Ukraine<br />Monitor
              </p>
              <p
                className="font-mono text-[8px] uppercase tracking-widest mt-1"
                style={{ color: 'var(--text-muted)' }}
              >
                Brand V1.0
              </p>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-3 px-2">
          {GROUPS.map((group) => (
            <div key={group} className="mb-3">
              {!collapsed && (
                <p
                  className="font-mono text-[8px] uppercase tracking-widest px-2 mb-1"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {group}
                </p>
              )}
              {collapsed && <div className="my-1" style={{ height: '1px', background: 'var(--border)', margin: '8px 4px' }} />}

              {NAV_ITEMS.filter(item => item.group === group).map((item) => {
                const isActive = activeSection === item.id;
                const { Icon } = item;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    title={collapsed ? item.label : undefined}
                    className="w-full flex items-center gap-2.5 py-2 transition-colors"
                    style={{
                      paddingLeft: collapsed ? '0' : '8px',
                      paddingRight: collapsed ? '0' : '8px',
                      justifyContent: collapsed ? 'center' : 'flex-start',
                      borderLeft: 'none',
                      color: isActive ? '#3B6FD4' : 'var(--text-muted)',
                      background: isActive ? 'rgba(59,111,212,0.07)' : 'transparent',
                      borderRadius: '6px',
                    }}
                  >
                    <Icon
                      size={18}
                      variant={isActive ? 'Bold' : 'Linear'}
                      color="currentColor"
                    />
                    {!collapsed && (
                      <span className="font-body text-sm whitespace-nowrap" style={{ color: isActive ? '#3B6FD4' : 'var(--text)' }}>
                        {item.label}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Bottom controls */}
        <div
          className="shrink-0 px-2 py-3 flex flex-col gap-2"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
              className="flex items-center gap-2.5 py-2 w-full transition-colors"
              style={{
                paddingLeft: collapsed ? '0' : '8px',
                justifyContent: collapsed ? 'center' : 'flex-start',
                color: 'var(--text-muted)',
                borderRadius: '6px',
              }}
            >
              {theme === 'dark'
                ? <Sun1 size={18} variant="Linear" color="currentColor" />
                : <Moon size={18} variant="Linear" color="currentColor" />
              }
              {!collapsed && (
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                  {theme === 'dark' ? 'Light' : 'Dark'} Mode
                </span>
              )}
            </button>
          )}

          {/* Collapse toggle */}
          <button
            onClick={toggle}
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className="flex items-center gap-2.5 py-2 w-full transition-colors"
            style={{
              paddingLeft: collapsed ? '0' : '8px',
              justifyContent: collapsed ? 'center' : 'flex-start',
              color: 'var(--text-muted)',
              borderRadius: '6px',
            }}
          >
            {collapsed
              ? <ArrowRight2 size={18} variant="Linear" color="currentColor" />
              : <ArrowLeft2 size={18} variant="Linear" color="currentColor" />
            }
            {!collapsed && (
              <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                Collapse
              </span>
            )}
          </button>
        </div>
      </aside>

      {/* Mobile top nav — unchanged */}
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
        <nav className="flex items-center gap-1 overflow-x-auto">
          {NAV_ITEMS.map((item) => {
            const { Icon } = item;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="p-2"
                style={{ color: activeSection === item.id ? '#3B6FD4' : 'var(--text-muted)' }}
              >
                <Icon size={18} variant={activeSection === item.id ? 'Bold' : 'Linear'} color="currentColor" />
              </button>
            );
          })}
        </nav>
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 ml-1"
            style={{ color: 'var(--text-muted)' }}
          >
            {theme === 'dark'
              ? <Sun1 size={18} variant="Linear" color="currentColor" />
              : <Moon size={18} variant="Linear" color="currentColor" />
            }
          </button>
        )}
      </header>
    </>
  );
}

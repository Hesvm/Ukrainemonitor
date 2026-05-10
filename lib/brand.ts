export const colors = {
  blue:    { hex: '#3B6FD4', name: 'Ukraine Blue',  role: 'Primary' },
  yellow:  { hex: '#F5C200', name: 'Ukraine Yellow', role: 'Secondary' },
  charcoal:{ hex: '#292D32', name: 'Charcoal',       role: 'Dark neutral' },
  white:   { hex: '#FFFFFF', name: 'White',          role: 'Light surface' },
  ring:    { hex: '#C9CAD0', name: 'Ring Gray',      role: 'Borders, dashes' },
} as const;

export const statusColors = [
  { hex: '#E0322B', label: 'LIVE / ALERT' },
  { hex: '#2E8B5C', label: 'CONFIRMED' },
  { hex: '#F5C200', label: 'WARNING' },
  { hex: '#3B6FD4', label: 'INFO' },
] as const;

export const logoVariants = [
  { id: 'color-light', label: 'Color — Light',  file: '/assets/logo/Logo_on_Light.svg',      bg: '#FFFFFF', dark: false },
  { id: 'color-dark',  label: 'Color — Dark',   file: '/assets/logo/Logo_on_Dark.svg',       bg: '#0C0C0C', dark: true  },
  { id: 'mono-light',  label: 'Mono — Light',   file: '/assets/logo/Mono_logo_on_light.svg', bg: '#FFFFFF', dark: false },
  { id: 'mono-dark',   label: 'Mono — Dark',    file: '/assets/logo/Mono_logo_on_dark.svg',  bg: '#0C0C0C', dark: true  },
  { id: 'mark-color',  label: 'Mark — Color',   file: '/assets/logo/Mark_color.svg',         bg: '#FFFFFF', dark: false },
  { id: 'mark-mono',   label: 'Mark — Mono',    file: '/assets/logo/Mark_mono.svg',          bg: '#FFFFFF', dark: false },
] as const;

export const typeScale = [
  { level: 'Display',    typeface: 'Dystopian',  size: '42px', weight: '900', usage: 'Hero titles' },
  { level: 'H1',         typeface: 'Dystopian',  size: '32px', weight: '900', usage: 'Page headings' },
  { level: 'H2',         typeface: 'Dystopian',  size: '22px', weight: '900', usage: 'Section titles' },
  { level: 'H3',         typeface: 'Dystopian',  size: '16px', weight: '900', usage: 'Card headings' },
  { level: 'Body Large', typeface: 'DM Sans',    size: '17px', weight: '400', usage: 'Lead paragraphs' },
  { level: 'Body',       typeface: 'DM Sans',    size: '15px', weight: '400', usage: 'Body copy' },
  { level: 'Label',      typeface: 'DM Sans',    size: '13px', weight: '500', usage: 'Buttons, nav' },
  { level: 'Mono',       typeface: 'DM Mono',    size: '12px', weight: '400', usage: 'Tags, timestamps, hex' },
] as const;

export const sizingSpecs = [
  { context: 'Desktop web',    minWidth: '160px',  use: 'Full lockup preferred',        note: '' },
  { context: 'Mobile web',     minWidth: '120px',  use: 'Full lockup or mark only',     note: '' },
  { context: 'Favicon / App',  minWidth: '16px',   use: 'Mark only — no wordmark',      note: '' },
  { context: 'Print',          minWidth: '30mm',   use: 'Full lockup, vector only',     note: 'SVG / PDF' },
  { context: 'OG / Social',    minWidth: '400px',  use: 'Color on dark background',     note: '1200×630px' },
] as const;

export const cssTokens = `:root {
  --um-blue:    #3B6FD4;
  --um-yellow:  #F5C200;
  --um-charcoal:#292D32;
  --um-white:   #FFFFFF;
  --um-ring:    #C9CAD0;
  --um-live:    #E0322B;
  --um-ok:      #2E8B5C;
  --font-display: 'Dystopian', sans-serif;
  --font-body:    'DM Sans', sans-serif;
  --font-mono:    'DM Mono', monospace;
}`;

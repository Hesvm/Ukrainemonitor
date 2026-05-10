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

export type LogoType = 'mark' | 'horizontal' | 'vertical'
export type LogoColor = 'color' | 'mono-black' | 'mono-white'
export type LogoBg = 'light' | 'dark'

export interface LogoVariant {
  id: string
  type: LogoType
  color: LogoColor
  bg: LogoBg
  label: string
  file: string
  useOn: string[]
  minSize: string
  notes?: string
}

export const LOGO_VARIANTS: LogoVariant[] = [
  // MARK ONLY
  {
    id: 'mark-color',
    type: 'mark', color: 'color', bg: 'light',
    label: 'Mark — Color',
    file: '/assets/logo/Mark_Color.svg',
    useOn: ['favicon', 'app-icon', 'avatar', 'loading-spinner', 'social-profile-picture', 'browser-tab'],
    minSize: '24px',
    notes: 'Primary mark. Use when space is too small for full lockup (below 160px width).',
  },
  {
    id: 'mark-mono-black',
    type: 'mark', color: 'mono-black', bg: 'light',
    label: 'Mark — Mono Black',
    file: '/assets/logo/Mark_Mono_Black.svg',
    useOn: ['print-mono', 'emboss', 'stamp', 'watermark-light'],
    minSize: '24px',
    notes: 'Use for single-color print, embossing, or light background contexts requiring no color.',
  },
  {
    id: 'mark-mono-white',
    type: 'mark', color: 'mono-white', bg: 'dark',
    label: 'Mark — Mono White',
    file: '/assets/logo/Mark_Mono_White.svg',
    useOn: ['dark-background', 'watermark-dark', 'reversed'],
    minSize: '24px',
    notes: 'Use on dark backgrounds where color mark has insufficient contrast.',
  },
  // HORIZONTAL LOCKUP
  {
    id: 'logo-h-color-light',
    type: 'horizontal', color: 'color', bg: 'light',
    label: 'Horizontal — Color / Light',
    file: '/assets/logo/Logo_H_Color_Light.svg',
    useOn: ['website-header', 'email-header', 'presentation-cover', 'light-background'],
    minSize: '160px wide',
    notes: 'Primary lockup. Default choice for most digital contexts on light backgrounds.',
  },
  {
    id: 'logo-h-color-dark',
    type: 'horizontal', color: 'color', bg: 'dark',
    label: 'Horizontal — Color / Dark',
    file: '/assets/logo/Logo_H_Color_Dark.svg',
    useOn: ['dark-header', 'dark-hero', 'dark-email', 'dark-presentation'],
    minSize: '160px wide',
    notes: 'Primary lockup for dark surfaces. Color mark, white wordmark.',
  },
  {
    id: 'logo-h-mono-black',
    type: 'horizontal', color: 'mono-black', bg: 'light',
    label: 'Horizontal — Mono Black',
    file: '/assets/logo/Logo_H_Mono_Black.svg',
    useOn: ['print-mono', 'newspaper', 'legal-document', 'fax', 'single-color-print'],
    minSize: '160px wide',
    notes: 'Single-color print. Use when color reproduction is not available.',
  },
  {
    id: 'logo-h-mono-white',
    type: 'horizontal', color: 'mono-white', bg: 'dark',
    label: 'Horizontal — Mono White',
    file: '/assets/logo/Logo_H_Mono_White.svg',
    useOn: ['dark-print', 'dark-slide', 'reversed-mono'],
    minSize: '160px wide',
    notes: 'White-on-dark single color. For dark print or slide backgrounds.',
  },
  // VERTICAL LOCKUP
  {
    id: 'logo-v-color-light',
    type: 'vertical', color: 'color', bg: 'light',
    label: 'Vertical — Color / Light',
    file: '/assets/logo/Logo_V_Color_Light.svg',
    useOn: ['square-format', 'poster', 'thumbnail', 'app-store-banner', 'social-card'],
    minSize: '120px wide',
    notes: 'Use when the layout is square or tall. Mark centered above wordmark.',
  },
  {
    id: 'logo-v-color-dark',
    type: 'vertical', color: 'color', bg: 'dark',
    label: 'Vertical — Color / Dark',
    file: '/assets/logo/Logo_V_Color_Dark.svg',
    useOn: ['dark-poster', 'dark-thumbnail', 'og-image', 'dark-social-card'],
    minSize: '120px wide',
    notes: 'Dark background vertical lockup. Used in the OG image.',
  },
  {
    id: 'logo-v-mono-black',
    type: 'vertical', color: 'mono-black', bg: 'light',
    label: 'Vertical — Mono Black',
    file: '/assets/logo/Logo_V_Mono_Black.svg',
    useOn: ['print-square', 'merchandise', 'embroidery'],
    minSize: '120px wide',
  },
  {
    id: 'logo-v-mono-white',
    type: 'vertical', color: 'mono-white', bg: 'dark',
    label: 'Vertical — Mono White',
    file: '/assets/logo/Logo_V_Mono_White.svg',
    useOn: ['dark-print-square', 'dark-merchandise'],
    minSize: '120px wide',
  },
]

export const SEMANTIC_MAP: Record<string, string> = {
  'favicon':               'mark-color',
  'browser-tab':           'mark-color',
  'app-icon':              'mark-color',
  'apple-touch-icon':      'mark-color',
  'pwa-icon':              'mark-color',
  'social-profile-pic':    'mark-color',
  'avatar':                'mark-color',
  'website-header-light':  'logo-h-color-light',
  'website-header-dark':   'logo-h-color-dark',
  'email-header':          'logo-h-color-light',
  'email-footer':          'logo-h-mono-black',
  'presentation-light':    'logo-h-color-light',
  'presentation-dark':     'logo-h-color-dark',
  'og-image':              'logo-v-color-dark',
  'twitter-card':          'logo-v-color-dark',
  'social-card-light':     'logo-v-color-light',
  'print-color':           'logo-h-color-light',
  'print-mono':            'logo-h-mono-black',
  'dark-hero':             'logo-h-color-dark',
  'poster':                'logo-v-color-light',
  'dark-poster':           'logo-v-color-dark',
  'merchandise':           'logo-v-mono-black',
}

// Backward-compat alias (used by older components)
export const logoVariants = LOGO_VARIANTS

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

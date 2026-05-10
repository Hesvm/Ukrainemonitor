import { colors, statusColors, sizingSpecs, logoVariants, cssTokens } from './brand';
import { BRAND_ICONS } from './icons';

export function generateBrandMD(): string {
  const colorList = Object.values(colors)
    .map(c => `- **${c.name}**: \`${c.hex}\` — ${c.role}`)
    .join('\n');

  const statusList = statusColors
    .map(s => `- \`${s.hex}\` — ${s.label}`)
    .join('\n');

  const logoList = logoVariants
    .map(v => `- **${v.label}**: \`${v.file}\``)
    .join('\n');

  const sizingTable = [
    '| Context | Min Width | Use | Note |',
    '|---|---|---|---|',
    ...sizingSpecs.map(s => `| ${s.context} | ${s.minWidth} | ${s.use} | ${s.note} |`),
  ].join('\n');

  const iconsByCategory: Record<string, string[]> = {};
  for (const icon of BRAND_ICONS) {
    if (!iconsByCategory[icon.category]) iconsByCategory[icon.category] = [];
    iconsByCategory[icon.category].push(icon.label);
  }
  const iconList = Object.entries(iconsByCategory)
    .map(([cat, names]) => `**${cat}:** ${names.join(', ')}`)
    .join('\n');

  return `# Ukraine Monitor — Brand Guidelines

## Overview

Ukraine Monitor is a real-time conflict intelligence platform. These guidelines govern all visual communication.

---

## Logo System

${logoList}

### Usage Rules
- Always use the correct variant for the background (color on light, color/mono on dark)
- Never stretch, rotate, recolor outside brand palette, or modify the lockup
- Maintain clear space of ½ × icon height on all sides
- Minimum width: 120px (mobile), 160px (desktop)

---

## Colors

### Primary Palette
${colorList}

### Status Colors (Operational use only)
${statusList}

---

## Typography

- **Display / Headings**: Dystopian Black — uppercase only
- **Body / UI**: DM Sans Regular 400 · Medium 500
- **Data / Mono**: DM Mono Regular 400 · Medium 500

### Usage Rules
- Dystopian is ALWAYS uppercase — never lowercase
- DM Mono for all eyebrow labels, hex codes, metadata, timestamps
- DM Sans for all body copy, UI labels, navigation

---

## Logo Usage — Do & Don't

**DO:**
- Use color logo on light backgrounds
- Use mono logo on dark backgrounds
- Maintain clear space (½ × icon height on all sides)

**DON'T:**
- Stretch or distort the logo
- Recolor outside the brand palette
- Rotate the lockup

---

## Minimum Sizes

${sizingTable}

---

## Icon System

\`\`\`bash
npm install iconsax-react
\`\`\`

\`\`\`tsx
import { Eye, Shield, Map1 } from 'iconsax-react'

// Linear (outline)
<Eye size={24} variant="Linear" />

// Bold (filled)
<Eye size={24} variant="Bold" />
\`\`\`

### Brand Icons (24 total)
${iconList}

---

## CSS Tokens

\`\`\`css
${cssTokens}
\`\`\`
`;
}

export function downloadBrandMD(): void {
  const content = generateBrandMD();
  const blob = new Blob([content], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'ukraine-monitor-brand-guidelines.md';
  a.click();
  URL.revokeObjectURL(url);
}

# Design — Nelaka Withanage Portfolio

A locked design system for this app. Every page redesign reads this file before emitting code. Do not regenerate per page — extend or amend this file when the system needs to grow.

## Genre
editorial

## Macrostructure family
- Marketing / Homepage: `05 · Workbench` + `01 · Bento Grid` (asymmetric technical engine showcase, live systems architecture context, structured proof ledger)
- Content / Blog: `02 · Long Document` (quiet editorial reading room)

## Theme
- `--color-paper`: `oklch(96.5% 0.008 85)` (#f5f2ec)
- `--color-paper-2`: `oklch(93.5% 0.012 85)` (#eae5dc)
- `--color-paper-dark`: `oklch(18% 0.01 260)` (#141517)
- `--color-paper-dark-2`: `oklch(22% 0.012 260)` (#1c1e22)
- `--color-ink`: `oklch(22% 0.015 260)` (#1c1e21)
- `--color-ink-2`: `oklch(45% 0.015 260)` (#5c616b)
- `--color-ink-dark`: `oklch(95% 0.005 85)` (#f0ede6)
- `--color-ink-dark-2`: `oklch(70% 0.01 260)` (#9fa4af)
- `--color-rule`: `oklch(88% 0.01 85)` (#ded9ce)
- `--color-rule-dark`: `oklch(28% 0.01 260)` (#2a2e35)
- `--color-accent`: `oklch(42% 0.17 26)` (#991b1b - oxblood/deep crimson)
- `--color-accent-hover`: `oklch(48% 0.19 26)` (#b91c1c)
- `--color-focus`: `oklch(42% 0.17 26)`

## Typography
- Display: `Fraunces`, weight 400/600, style `normal` strictly (no italic headers)
- Body: `Inter`, weight 400/500
- Mono: `JetBrains Mono`, weight 400/500
- Display tracking: -0.03em
- Type scale:
  - `--text-display`: clamp(2.5rem, 5vw + 1rem, 5.5rem)
  - `--text-2xl`: 2rem
  - `--text-xl`: 1.5rem
  - `--text-lg`: 1.25rem
  - `--text-md`: 1rem
  - `--text-sm`: 0.875rem
  - `--text-xs`: 0.75rem

## Spacing
4-point named scale via tokens (`--space-3xs` through `--space-3xl`). Named tokens only, no arbitrary numbers.

## Motion
- Easings: `cubic-bezier(0.16, 1, 0.3, 1)` named `--ease-out`
- Reveal pattern: Single orchestrated fade-up on hero load. Zero universal scroll-triggered fades down the page.
- Reduced-motion fallback: opacity-only, <= 150ms.

## Microinteractions stance
- Silent success (no celebratory toasts for basic operations)
- Hover delay 800ms / focus delay 0ms for tooltips
- Button state transitions: transform and opacity only, no transition-all
- Focus rings: instant appearance, 2px solid `--color-focus`

## CTA voice
- Primary CTA: Solid oxblood surface or ink surface, crisp hairline border, text in high contrast, `hover:-translate-y-px`
- Secondary CTA: Clean hairline border, transparent paper background, subtle rule hover

## What pages MUST share
- The wordmark (`Nelaka.`)
- The accent color and its placement (<= 5% per viewport)
- The display + body + mono fonts
- Hairline rules (1px, neutral tinted), no heavy drop-shadows or blurred glowing blobs
- Zero gradient text clips (`background-clip: text` banned)
- Zero italic emphasis words in headlines

## What pages MAY differ on
- Section layout (Workbench ledger vs Long Document reading column)
- Content density and data grid arrangements

## Exports

### tokens.css
```css
:root {
  --color-paper: oklch(96.5% 0.008 85);
  --color-paper-2: oklch(93.5% 0.012 85);
  --color-paper-dark: oklch(18% 0.01 260);
  --color-paper-dark-2: oklch(22% 0.012 260);
  --color-ink: oklch(22% 0.015 260);
  --color-ink-2: oklch(45% 0.015 260);
  --color-ink-dark: oklch(95% 0.005 85);
  --color-ink-dark-2: oklch(70% 0.01 260);
  --color-rule: oklch(88% 0.01 85);
  --color-rule-dark: oklch(28% 0.01 260);
  --color-accent: oklch(42% 0.17 26);
  --color-accent-hover: oklch(48% 0.19 26);
  --color-focus: oklch(42% 0.17 26);

  --font-display: "Fraunces", serif;
  --font-body: "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  --space-3xs: 0.25rem;
  --space-2xs: 0.5rem;
  --space-xs: 0.75rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4.5rem;
  --space-3xl: 7rem;

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-short: 180ms;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 9999px;
}
```

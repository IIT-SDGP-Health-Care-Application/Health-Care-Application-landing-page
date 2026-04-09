# Design System Inspiration of Wise

## 1. Visual Theme & Atmosphere

Wise's website is a bold, confident fintech platform that communicates "money without borders" through massive typography and a distinctive blue accent. The design operates on a soft light-blue canvas with deep navy text (`var(--color-text-default)`) and a signature Primary Blue (`var(--color-primary)`) — a vibrant, electric blue that feels modern and digital, unlike the corporate blues of traditional banking.

The typography uses Wise Sans — a proprietary font used at extreme weight 900 (black) for display headings with a remarkably tight line-height of 0.85 and OpenType `"calt"` (contextual alternates). At 126px, the text is so dense it feels like a protest sign — bold, urgent, and impossible to ignore. Inter serves as the body font with weight 600 as the default for emphasis, creating a consistently confident voice.

What distinguishes Wise is its blue-on-white-on-navy material palette. Primary Blue (`var(--color-primary)`) appears on buttons with inverted light text (`var(--color-text-inverted)`), creating a modern fintech CTA that feels energetic. Hover states use `scale(1.05)` expansion rather than color changes — buttons physically grow on interaction. The border-radius system uses 9999px for buttons (pill), 30px–40px for cards, and the shadow system is minimal — just `rgba(16,22,41,0.12) 0px 0px 0px 1px` ring shadows.

**Key Characteristics:**

* Wise Sans at weight 900, 0.85 line-height — billboard-scale bold headlines
* Primary Blue (`var(--color-primary)`) accent with inverted light text (`var(--color-text-inverted)`) — modern fintech energy
* Inter body at weight 600 as default — confident, not light
* Deep navy (`var(--color-text-default)`) primary
* Scale(1.05) hover animations — buttons physically grow
* OpenType `"calt"` on all text
* Pill buttons (9999px) and large rounded cards (30px–40px)
* Semantic color system with comprehensive state management

---

## 2. Color Palette & Roles

### Primary Brand

* **Deep Navy** (`var(--color-text-default)`): Primary text, background for dark sections
* **Primary Blue** (`var(--color-primary)`): Primary CTA button, brand accent
* **Secondary Blue** (`var(--color-secondary)`): Deep accent, secondary actions
* **Light Surface** (`var(--color-b-surface)`): Soft surface, badge backgrounds
* **Accent Light** (`var(--color-b-accent)`): Hover accent

### Semantic

* **Positive** (`var(--color-primary)`): Success
* **Danger** (`#d03238`): Error/destructive
* **Warning** (`#ffd11a`): Warnings
* **Info Tint** (`rgba(81,137,224,0.10)`): Accent background tint
* **Warm Accent** (`#ffc091`): Warm highlight

### Neutral

* **Dark Muted** (`var(--color-secondary)`): Secondary text, borders
* **Muted** (`var(--color-accent-medium)`): Tertiary text
* **Subtle Surface** (`var(--color-surface-light)`): Light surface

---

## 3. Typography Rules

### Font Families

* **Display**: `Wise Sans`, fallback: `Inter` — OpenType `"calt"` on all text
* **Body / UI**: `Inter`, fallbacks: `Helvetica, Arial`

### Hierarchy

| Role            | Font      | Size            | Weight  | Line Height        | Letter Spacing       | Notes    |
| --------------- | --------- | --------------- | ------- | ------------------ | -------------------- | -------- |
| Display Mega    | Wise Sans | 126px (7.88rem) | 900     | 0.85 (ultra-tight) | normal               | `"calt"` |
| Display Hero    | Wise Sans | 96px (6.00rem)  | 900     | 0.85               | normal               | `"calt"` |
| Section Heading | Wise Sans | 64px (4.00rem)  | 900     | 0.85               | normal               | `"calt"` |
| Sub-heading     | Wise Sans | 40px (2.50rem)  | 900     | 0.85               | normal               | `"calt"` |
| Alt Heading     | Inter     | 78px (4.88rem)  | 600     | 1.10 (tight)       | -2.34px              | `"calt"` |
| Card Title      | Inter     | 26px (1.62rem)  | 600     | 1.23 (tight)       | -0.39px              | `"calt"` |
| Feature Title   | Inter     | 22px (1.38rem)  | 600     | 1.25 (tight)       | -0.396px             | `"calt"` |
| Body            | Inter     | 18px (1.13rem)  | 400     | 1.44               | 0.18px               | `"calt"` |
| Body Semibold   | Inter     | 18px (1.13rem)  | 600     | 1.44               | -0.108px             | `"calt"` |
| Button          | Inter     | 18px–22px       | 600     | 1.00–1.44          | -0.108px             | `"calt"` |
| Caption         | Inter     | 14px (0.88rem)  | 400–600 | 1.50–1.86          | -0.084px to -0.108px | `"calt"` |
| Small           | Inter     | 12px (0.75rem)  | 400–600 | 1.00–2.17          | -0.084px to -0.108px | `"calt"` |

### Principles

* **Weight 900 as identity**: Wise Sans Black (900) is used exclusively for display — the heaviest weight in any analyzed system. It creates text that feels stamped, pressed, physical.
* **0.85 line-height**: The tightest display line-height analyzed. Letters overlap vertically, creating dense, billboard-like text blocks.
* **"calt" everywhere**: Contextual alternates enabled on ALL text — both Wise Sans and Inter.
* **Weight 600 as body default**: Inter Semibold is the standard reading weight — confident, not light.

---

## 4. Component Stylings

### Buttons

**Primary Blue Pill**

* Background: `var(--color-primary)`
* Text: `var(--color-text-inverted)`
* Padding: 5px 16px
* Radius: 9999px
* Hover: scale(1.05)
* Active: scale(0.95)
* Focus: inset ring + outline

**Secondary Subtle Pill**

* Background: `rgba(16,22,41,0.08)`
* Text: `var(--color-text-default)`
* Padding: 8px 12px 8px 16px
* Radius: 9999px
* Same scale hover/active behavior

### Cards & Containers

* Radius: 16px (small), 30px (medium), 40px (large cards/tables)
* Border: `1px solid rgba(16,22,41,0.12)` or `1px solid var(--color-primary)`
* Shadow: `rgba(16,22,41,0.12) 0px 0px 0px 1px`

### Navigation

* Blue-tinted navigation hover: `rgba(198,221,247,0.4)`
* Clean header with wordmark
* Pill CTAs right-aligned

---

## 5. Layout Principles

### Spacing System

* Base unit: 8px
* Scale: 1px, 2px, 3px, 4px, 5px, 8px, 10px, 11px, 12px, 16px, 18px, 19px, 20px, 22px, 24px

### Border Radius Scale

* Minimal (2px): Links, inputs
* Standard (10px): Comboboxes, inputs
* Card (16px): Small cards, buttons, radio
* Medium (20px): Links, medium cards
* Large (30px): Feature cards
* Section (40px): Tables, large cards
* Mega (1000px): Presentation elements
* Pill (9999px): All buttons, images
* Circle (50%): Icons, badges

---

## 6. Depth & Elevation

| Level           | Treatment                                          | Use          |
| --------------- | -------------------------------------------------- | ------------ |
| Flat (Level 0)  | No shadow                                          | Default      |
| Ring (Level 1)  | `rgba(16,22,41,0.12) 0px 0px 0px 1px`              | Card borders |
| Inset (Level 2) | `var(--color-accent-medium) 0px 0px 0px 1px inset` | Input focus  |

**Shadow Philosophy**: Minimal shadows — ring shadows only. Depth comes from the bold primary accent against the neutral canvas.

---

## 7. Do's and Don'ts

### Do

* Use Wise Sans weight 900 for display
* Apply line-height 0.85 on Wise Sans display
* Use Primary Blue (`var(--color-primary)`) for primary CTAs with inverted light text
* Apply scale(1.05) hover and scale(0.95) active on buttons
* Enable "calt" on all text
* Use Inter weight 600 as the body default

### Don't

* Don't use light font weights for Wise Sans — only 900
* Don't relax the 0.85 line-height on display
* Don't use the Primary Blue as background for large surfaces — it's for buttons and accents
* Don't skip the scale animation on buttons
* Don't use traditional shadows — ring shadows only

---

## 8. Responsive Behavior

### Breakpoints

| Name    | Width      | Key Changes   |
| ------- | ---------- | ------------- |
| Mobile  | <576px     | Single column |
| Tablet  | 576–992px  | 2-column      |
| Desktop | 992–1440px | Full layout   |
| Large   | >1440px    | Expanded      |

---

## 9. Agent Prompt Guide

### Quick Color Reference

* Text: `var(--color-text-default)`
* Background: `var(--color-background-light)`
* Accent: `var(--color-primary)`
* Button text: `var(--color-text-inverted)`
* Secondary: `var(--color-accent-medium)`

### Example Component Prompts

* "Create hero: light background. Headline at 96px Wise Sans weight 900, line-height 0.85, 'calt' enabled, var(--color-text-default) text. Blue pill CTA (var(--color-primary), 9999px radius, 5px 16px padding, var(--color-text-inverted) text). Hover: scale(1.05)."
* "Build a card: 30px radius, 1px solid rgba(16,22,41,0.12). Title at 22px Inter weight 600, body at 18px weight 400."

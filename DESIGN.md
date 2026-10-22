---
name: "Dhinesh Developer Portfolio Design System"
description: "Design tokens, typography ladder, component behaviors, and anti-vibe-coded rules."
colors:
  canvas: "#f8fafc"
  canvasAlt: "#f0f6fe"
  surface: "#ffffff"
  surfaceMuted: "#f1f5f9"
  text: "#09172c"
  mutedText: "#475569"
  subtleText: "#64748b"
  border: "#e2e8f0"
  borderEmphasis: "#cbd5e1"
  borderAccent: "#93c5fd"
  primary: "#0066ff"
  primaryHover: "#0052cc"
  primaryActive: "#004099"
  onPrimary: "#ffffff"
  accentCyan: "#00c2ff"
  focus: "#0066ff"
  focusRing: "rgba(0, 102, 255, 0.25)"
  success: "#10b981"
  warning: "#f59e0b"
  danger: "#ef4444"
typography:
  display:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    scale: "clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight: "800"
    lineHeight: "1.05"
    tracking: "-0.03em"
  heading1:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    scale: "clamp(1.875rem, 3.5vw, 2.75rem)"
    fontWeight: "800"
    lineHeight: "1.15"
    tracking: "-0.025em"
  heading2:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    scale: "clamp(1.35rem, 2.5vw, 1.75rem)"
    fontWeight: "700"
    lineHeight: "1.25"
    tracking: "-0.02em"
  body:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.65"
  mono:
    fontFamily: "var(--font-geist-mono), monospace"
    fontSize: "0.8125rem"
    fontWeight: "600"
    letterSpacing: "0.08em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  sectionPy: "3rem sm:3.5rem lg:4rem"
  contentGap: "2rem sm:2.5rem"
---

## Overview

- **Visual Thesis:** Clean, high-signal engineering portfolio that lets real shipped products (Google Play Store app, live web systems, architecture details) lead through crisp typography, disciplined layout rhythm, and authentic developer telemetry.
- **Surface Mode:** PERSUADE + EXPERIENCE.
- **Design Priorities:**
  1. Instant clarity: who Dhinesh is, his core competencies (Full-Stack Web & Flutter Mobile), and verified production work.
  2. Proof of work: project cards that emphasize genuine architecture, technology tags, and live deployment links.
  3. Seamless navigation: clean accessibility, predictable keyboard focus, and zero dead space.
- **Distinctive Signature:** Technical precision with deep navy text, subtle engineering grid lines, Geist Mono labels, and high-contrast electric azure highlights.

## Colors & Hierarchy

- **Canvas (`#f8fafc` / `#f0f6fe`):** Clean, refreshing backdrop that feels technical without being sterile.
- **Surfaces (`#ffffff`):** Crisp white cards with 1px border (`#e2e8f0` or `#dce8f8`) to organize information.
- **Text (`#09172c`):** Deep navy with maximum contrast for effortless readability.
- **Accent Azure (`#0066ff` / `#0070f3`):** Reserved for primary interactive elements, active links, and key highlights.

## Interaction & Motion

- **Focus:** Every interactive element has an explicit `:focus-visible` ring (`outline: 2px solid #0066ff; outline-offset: 2px`).
- **Transitions:** Specific properties (`transition-colors`, `transition-transform`, `transition-shadow`) are declared instead of blanket `transition: all`.
- **Hover:** No aggressive layout shifting or jittery scaling on small tags. Subtle elevation or border color shifts only.
- **Motion Reduction:** All animations strictly respect `prefers-reduced-motion: reduce`.

## Anti-Patterns Avoided (Anti-Vibe-Coded Guardrails)

- ❌ NO generic 800px blurry cyan/purple glow orbs pasted randomly behind every section.
- ❌ NO meaningless numbered section labels (`01`, `02`, `03`) that mimic AI templates without communicating purpose.
- ❌ NO fake code snippet toys with dummy strings (`dev = { stack: ['React'] }`).
- ❌ NO nested cards inside cards with double borders and multiple conflicting drop-shadows.
- ❌ NO ambiguous card click targets (outer card clickable + inner links clickable).
- ❌ NO `transition: all` causing layout reflows or subpixel text blurring.
- ❌ NO interactive controls lacking keyboard `:focus-visible` indicators.

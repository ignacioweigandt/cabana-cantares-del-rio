# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 project for "Cabaña Cantares del Río" featuring advanced GSAP animations with ScrollTrigger and SplitText plugins. The project uses TypeScript, Tailwind CSS, and follows the App Router architecture with a focus on immersive scroll-driven experiences.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Architecture

The application is structured around section-based components with sophisticated scroll animations:

```
src/
├── app/
│   ├── page.tsx        # Main page orchestrating all sections
│   ├── layout.tsx      # Root layout with metadata
│   └── globals.css     # Global styles and CSS custom properties
├── components/         # Specialized animation components
│   ├── Hero.tsx                    # Landing hero section
│   ├── ProgressiveTextSection.tsx  # Scroll-locked text sequences
│   ├── ImageGallery.tsx           # Scroll-locked image carousel
│   ├── CabinDescriptionSection.tsx # Content section
│   ├── AmenitiesSection.tsx       # Features section  
│   ├── AnimatedText.tsx           # SplitText character reveals
│   ├── TypewriterText.tsx         # Typewriter loop effects
│   ├── ScrollSection.tsx          # Generic scroll-triggered wrapper
│   └── ScrollReveal.tsx           # Scroll reveal utilities
└── lib/
    └── gsap.ts         # GSAP configuration and animation utilities
```

## GSAP Integration & Animation System

### Core Animation Utilities (lib/gsap.ts)
The project includes sophisticated animation functions:

**Basic Animations:**
- `initGSAP()` - Initialize with defaults and window resize handling
- `fadeInUp()` - Standard fade in with upward motion
- `staggerFadeIn()` - Staggered animations for multiple elements  
- `splitTextReveal()` - Character-by-character text reveals

**Advanced Scroll Animations:**
- `scrollLockedTextSequence()` - Pin sections and scrub through text reveals
- `scrollLockedImageCarousel()` - Scroll-controlled image sequences with responsive behavior
- `curtainReveal()` - Custom curtain effect animations
- `typewriterLoop()` - Infinite typewriter text effect

### Animation Architecture Patterns

**Scroll-Locked Sections:** Use pinning with scrubbing for controlled narrative experiences
```tsx
// Pins at "bottom bottom" and scrubs through animation timeline
ScrollTrigger: {
  trigger: container,
  start: "bottom bottom",
  end: "+=100%", 
  scrub: 1,
  pin: true
}
```

**Responsive Animation Logic:** Mobile vs desktop behavior built into animation functions
- Mobile: Sequential image reveals with center positioning
- Desktop: Multi-image carousels with horizontal movement

## Design System & Styling

### Custom Color Palette (Tailwind Config)
```css
colors: {
  'cabana': {
    'background': '#e5dccd',  # Main background
    'secondary': '#8e7765',   # Secondary elements  
    'accent': '#4b8ce1',      # CTA/accent color
    'light': '#b5a99a',       # Light variant
    'dark': '#7a6d5f',        # Dark variant
    'title': '#7d3a24'        # Title color
  }
}
```

### Typography System
Custom font families loaded via Google Fonts:
- `josefin` - Josefin Sans (primary sans-serif)
- `neuton` - Neuton (serif) 
- `nunito` - Nunito (secondary sans-serif)
- `playfair` - Playfair Display (display serif)

## Component Usage Patterns

### Scroll-Triggered Sections
```tsx
<ScrollSection animation="slideUp" className="...">
  <Content />
</ScrollSection>
```

### Text Reveals
```tsx
<AnimatedText delay={0.5} className="text-4xl">
  Text to animate
</AnimatedText>
```

### Complex Scroll Sequences
The `ProgressiveTextSection` and `ImageGallery` components demonstrate advanced scroll-locked animations where the user's scroll input controls animation timeline progression.

## Technical Implementation Notes

- All animation components use `'use client'` directive
- GSAP initialization happens in main page component via `useEffect`
- ScrollTrigger refresh handled automatically on window resize
- Animation timelines include proper cleanup and responsive handling
- Images organized in `/public/images/` with WebP format optimization
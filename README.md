# Tent Mart — Landing Page

A modern, responsive landing page built with React + TypeScript, Tailwind CSS, and shadcn UI. This project is a portfolio side project that demonstrates converting a Pinterest design into production-ready code, with emphasis on component-driven architecture, accessibility, responsive layouts, and clean styling.

Inspired design: <https://pin.it/39p1817qV>

---

## Table of Contents

- [Tent Mart — Landing Page](#tent-mart--landing-page)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Live Preview](#live-preview)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [File Structure (important files)](#file-structure-important-files)
  - [Running Locally](#running-locally)
  - [Developer Notes](#developer-notes)
  - [Contributing](#contributing)
  - [Next steps / Improvements](#next-steps--improvements)
  - [Attribution](#attribution)
  - [License](#license)

---

## About

Tent Mart is a landing page built for demo/portfolio use. The goal of this project is to show how to turn pixel-perfect designs (in this case from Pinterest) into a clean, maintainable, responsive user interface using modern tooling. It includes product sections, a hero area, brand carousel, newsletter, and footer — all crafted with components and design system primitives to scale.

This project was created as a short series of experiments to demonstrate:

- Translating visual designs into accessible and responsive UI.
- Building reusable components with shadcn UI primitives and Tailwind CSS.
- Proper React architecture for real-world landing pages (forwarded refs, layout components, animations).

---

## Live Preview

(If you are running locally: start the dev server and open the provided URL.)

---

## Features

- Responsive layout: Mobile-first with sensible breakpoints for tablet, desktop.
- React 19 + TypeScript: Modern typing and React features.
- Vite: Fast dev server and optimized builds.
- Tailwind CSS v4: Utility-first styling with configuration and custom themes.
- shadcn UI: Accessible component primitives and consistent system.
- Smooth in-page navigation: Implemented with scrollIntoView and CSS scroll-margin offsets.
- Hero navigation changes: Navigation transitions from transparent/white to solid background after the hero using IntersectionObserver.
- Brand carousel: CSS-only infinite scrolling animation using translate3d, will-change & performance considerations.
- Reusable SectionWrapper: Forwarding refs for scroll anchoring; keeps layout, spacing, and consistent behavior.
- Good code practices: Componentized UI, `forwardRef`, `useCallback`, `useMemo` for stable handlers and props.

---

## Tech Stack

- React 19 (TypeScript)
- Vite
- Tailwind CSS v4
- shadcn/ui (for UI primitives and components)
- class-variance-authority (CVA) for styling variants
- tailwind-merge, clsx for class merging

---

## File Structure (important files)

```md
src/
  App.tsx  # Main app: sets up refs, smooth-scrolling, and site layout
  main.tsx
  index.css  # Tailwind setup, theme variables, keyframes & utilities
  components/
    ui/  # Reusable UI atoms (Button, Card, Tabs, Sheet, etc.) created by shadcn
      button.tsx
      card.tsx
      tabs.tsx
      sheet.tsx
      navigation.tsx  # Responsive nav — transparent on hero and solid after hero using `isHero`
    sections/  # Page sections
      HeroSection.tsx  # Hero + CTA, accepts `onScrollToSection` prop
      AboutSection.tsx
      FeatureSection.tsx
      ProductSection.tsx  # Tabs for product categories + grid layout
      BrandSection.tsx  # Brand carousel animation with `loopData` and will-change transform
      NewsLetterSection.tsx
      FooterSection.tsx  # Footer with links that call `onScrollToSection`
    reusables/
      SectionWrapper.tsx  # ForwardRef wrapper used by all sections (adds `scroll-mt-20`) 
  lib/
    utils.ts  # `cn` class name helper (clsx + twMerge)
assets/  # Images, icons
components.json  # shadcn configuration
vite.config.ts
package.json
```

---

## Running Locally

Prerequisites: Node.js (>= 18 recommended), npm, pnpm or yarn.

1. Install dependencies

```powershell
npm install
```

2. Start development server

```powershell
npm run dev
# open the URL printed in the terminal (e.g. http://localhost:5173/ or 5174)
```

3. Run final build

```powershell
npm run build
```

---

## Developer Notes

- Section Anchor Offsets: Sections use `scroll-mt-20` to prevent the fixed nav from covering the section. If you change the navigation height, update this value in `SectionWrapper.tsx`.
- Smooth Scroll Handler: `App.tsx` exposes a centralized `handleSmoothScroll` function that sections and navigation use. This keeps behavior consistent.
- Nav transparency: `Navigation` accepts `isHero` prop; we track hero visibility with IntersectionObserver inside `App.tsx`.
- Refs & forwardRef: All sections forward refs to their root DOM node via `SectionWrapper` so the `App` can call `scrollIntoView` directly.
- Brand Carousel: Uses two copies of the brand list, `translate3d(-50%)` and a CSS-only animation configured in `index.css` to reduce seam glitching.
- Images: Imported as modules (e.g. `import Logo from "@/assets/images/Logo.png"`) for proper bundling with Vite.
- Accessibility: Keep `aria-hidden` on duplicated brand images to prevent repeated announcements. Use `Sheet` and native elements for menus.

---

## Contributing

- Create a branch for your feature/fix.
- Use clear, atomic commits and open a PR describing the change.
- Keep format and lint consistent (we use ESLint config in the project). If you add new Tailwind utilities or CSS classes, document them in `index.css`.
- Note: Tests are not set up yet; please add unit or component tests for future PRs.

---

## Next steps / Improvements

- Add IntersectionObserver-based active link highlight for navigation.
- Add unit and component tests (Vitest/Jest + React Testing Library).
- Add image optimization / placeholder strategies for product images.
- Add keyboard navigation accessibility improvements to nav and drawers.

---

## Attribution

- This project is an exercise in translating a Pinterest design into code. Original inspiration: <https://pin.it/39p1817qV>

---

## License

MIT - feel free to copy or adapt this example for your own learning or portfolio.

---

If you want me to add any more specifics — such as a step-by-step 'how this was built' section, unit tests, or an issue tracker template — say the word. I can also create an .env.example and a small CONTRIBUTING.md if useful.

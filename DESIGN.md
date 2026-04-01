# Design System Strategy: The Tactical Cartographer

## 1. Overview & Creative North Star
This design system is built to transform a standard educational platform into a high-precision technical instrument. Our Creative North Star is **"The Tactical Cartographer."** 

We are moving away from the "generic dashboard" look. Instead, we are leaning into an editorial, high-tech aesthetic that mirrors a mission control center or a professional GIS terminal. To achieve this, the design system utilizes **intentional asymmetry**—such as placing technical metadata in oversized margins—and **overlapping layers** where code blocks bleed over container edges. We break the "template" feel by treating every page as a canvas for data visualization rather than a series of stacked boxes.

---

## 2. Colors & Surface Architecture

The palette is rooted in deep obsidian tones, punctuated by high-chroma emerald accents that signify "system active" states.

### Surface Hierarchy & Nesting
Forget the flat grid. We treat the UI as a series of physical layers.
- **Base Layer:** `surface` (#131313) is our infinite void.
- **Sectioning:** Use `surface_container_low` for large content blocks. 
- **Nesting:** To highlight a specific concept within a section, nest a `surface_container_highest` card within a `surface_container_low` area. This creates a "lift" without requiring a single pixel of border.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define section boundaries. We define space through background color shifts. A transition from `surface_container_lowest` to `surface_container` provides a sophisticated, "expensive" boundary that sharp lines cannot replicate.

### The "Glass & Gradient" Rule
To add visual "soul," primary actions and hero elements should utilize:
- **Glassmorphism:** Use `surface_variant` at 60% opacity with a `20px` backdrop-blur for floating widgets (like the timer).
- **Signature Textures:** Apply a linear gradient from `primary` (#68dbae) to `primary_container` (#26a37a) for main CTAs. This creates a luminescent, "on-screen" glow typical of high-end hardware interfaces.

---

## 3. Typography

The typographic system balances the raw precision of technical documentation with the readability of a premium editorial.

- **Display & Headlines (Space Grotesk):** These are our "System Status" indicators. Use `display-lg` for hero sections to establish authority. The wide apertures of Space Grotesk feel technical yet modern.
- **Body & Titles (Inter):** For the heavy lifting of educational content, Inter provides maximum legibility. Use `body-md` for course descriptions.
- **Technical Labels:** All metadata (timestamps, coordinate systems, database keys) must use `label-md` in Space Grotesk, set in **All Caps** with a 5% letter-spacing increase to mimic terminal outputs.

---

## 4. Elevation & Depth

We achieve hierarchy through **Tonal Layering** rather than traditional drop shadows.

- **The Layering Principle:** Depth is "stacked." A code block (`surface_container_highest`) sits on a module background (`surface_container_low`), which sits on the main page (`surface`). This creates a logical, nested hierarchy.
- **Ambient Shadows:** For floating elements like tooltips, use a shadow with a `32px` blur, `0px` offset, and `on_surface` color at 6% opacity. This mimics the soft glow of a screen in a dark room.
- **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline_variant` token at **15% opacity**. This creates a "barely-there" guide that maintains the high-tech, minimalist aesthetic.
- **Sharpness:** Adhere strictly to the `sm` (2px) and `md` (4px) rounding scale. Avoid `lg` or `xl` except for specific UI "pills" like selection chips.

---

## 5. Components

### Primary Buttons
- **Style:** Flat `primary` background with a `0 0 15px` outer glow using the `primary` token color at 30% opacity.
- **Typography:** `label-md` (Space Grotesk, Bold).
- **Interaction:** On hover, the glow intensity increases; on click, the background shifts to `on_primary_container`.

### Code Blocks & Terminal Widgets
- **Style:** `surface_container_highest` background. 
- **Accent:** A 2px left-accent border using the `primary` token.
- **Syntax:** Use high-contrast tokens (`tertiary` for strings, `primary` for functions).

### Cards
- **Forbid Dividers:** Do not use lines to separate header from body. Use a `1.5` (0.3rem) vertical gap or a subtle shift from `surface_container_high` to `surface_container_low`.
- **Layout:** Use asymmetrical padding (e.g., more padding on the left than the right) to give it a custom, non-bootstrap feel.

### Sticky Progress Bar (The Geospatial Tracker)
- **Style:** A thin (4px) fixed element at the top of the viewport.
- **Color:** `surface_container_highest` as the track; `primary` as the indicator.
- **Effect:** Add a "pulse" animation to the leading edge of the progress bar using a `primary_fixed` glow.

### Input Fields
- **Style:** "Ghost" style. No background fill, only a bottom border using `outline_variant` at 40%.
- **Active State:** Bottom border transitions to 100% `primary` with a subtle glow.

---

## 6. Do's and Don'ts

### Do:
- **DO** use the `Spacing Scale` religiously. High-end design is defined by the intentional use of "nothing" (white space).
- **DO** overlap elements. Let a map graphic or a code block break out of its container by -20px to create visual depth.
- **DO** use `surface_bright` for very small tooltips to ensure they pop against the deep background.

### Don't:
- **DON'T** use pure white (#FFFFFF). Always use `on_surface` (#e5e2e1) to reduce eye strain in the dark-themed environment.
- **DON'T** use standard "drop shadows." If it doesn't look like light emitting from a screen, it doesn't belong in this system.
- **DON'T** use generic icons. Choose "Stroked" icons with a 1px weight to match the technical, thin-line aesthetic of the borders.

---

## 7. Spacing & Rhythm
- **The Core Unit:** All spacing must be a multiple of the `0.2rem` (Token 1) base.
- **Section Breathing:** Use `24` (5.5rem) for vertical padding between major course modules to allow the "Tactical Cartographer" aesthetic to feel expansive and unhurried.
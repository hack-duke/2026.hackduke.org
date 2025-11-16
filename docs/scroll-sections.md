# Alternating Scroll Sections

This project implements an alternating vertical/horizontal scroll experience using two components:

- `VerticalSection` — standard full-viewport vertical sections
- `HorizontalScrollSection` — pinned “horizontal sweep” sections driven by vertical scroll input

The pattern lets users scroll normally while the page switches to a horizontal track for specific sections, then returns to vertical scrolling.

## Quick Start

1) Import the components in your page:

```jsx
import VerticalSection from './components/VerticalSection';
import HorizontalScrollSection from './components/HorizontalScrollSection';
```

2) Provide panels for horizontal sections and compose:

```jsx
const panels = [
  { id: 1, color: '#1abc9c', title: 'Discover', description: 'Begin your journey', emoji: '🚀' },
  { id: 2, color: '#3498db', title: 'Explore',  description: 'Dive deep',          emoji: '🌊' },
  { id: 3, color: '#9b59b6', title: 'Create',   description: 'Build',              emoji: '✨' },
  { id: 4, color: '#e67e22', title: 'Innovate', description: 'Push limits',        emoji: '💡' },
];

export default function Page() {
  return (
    <>
      <VerticalSection backgroundColor="#0f0f1e">
        <h1>Intro</h1>
        <p>Scroll down to see horizontal motion.</p>
      </VerticalSection>

      <HorizontalScrollSection panels={panels} />

      <VerticalSection backgroundColor="#1a1a2e">
        <h2>More content</h2>
      </VerticalSection>
    </>
  );
}
```

## Components

### VerticalSection

- File: `src/components/VerticalSection.jsx`
- CSS: `src/components/VerticalSection.css`

Props:
- `backgroundColor: string` — section background (e.g., `#0f0f1e`)
- `textColor?: string` — text color (default: `white`)
- `className?: string` — additional classes
- `children: ReactNode` — content inside the section

Usage:
```jsx
<VerticalSection backgroundColor="#0f0f1e" textColor="#fff">
  <h2>Built for Innovation</h2>
  <p>Modern, responsive, and fast.</p>
  <button className="cta-button">Get Started</button>
  {/* Any content works here */}
  {/* Container handles spacing/responsiveness for you */}
  {/* See styles in VerticalSection.css */}
</VerticalSection>
```

### HorizontalScrollSection

- File: `src/components/HorizontalScrollSection.jsx`
- CSS: `src/components/HorizontalScrollSection.css`

Props:
- `panels?: Array<{ id: string|number, color: string, title: string, description: string, emoji?: string }>`
- `children?: ReactNode` — Optional custom content; use this instead of `panels` when you want to pass a prebuilt horizontal layout that exceeds 100vw.

Behavior overview:
- Creates a tall container to “host” the scroll span needed for the horizontal sweep.
- Internally “pins” the track while active (a lightweight stickbox: sticky -> fixed -> absolute).
- Converts vertical scroll progress into a horizontal `translateX` on the track.
- Automatically recalculates sizes on mount, resize, and after initial paint/load.

Notes:
- With `panels`, track width = `panels.length * 100vw`.
- With custom `children`, the component measures `scrollWidth` directly, so any width greater than 100vw will scroll correctly.
- Required container height = `(trackWidth - viewportWidth) + viewportHeight` so the pinned phase lasts exactly the horizontal distance.
- On small screens (≤ 640px), CSS falls back to native horizontal scrolling for better usability. You can change this in CSS.

Example (panels):
```jsx
const panels = [
  { id: 1, color: '#1abc9c', title: 'A', description: '...' },
  { id: 2, color: '#3498db', title: 'B', description: '...' },
  { id: 3, color: '#9b59b6', title: 'C', description: '...' },
];

<HorizontalScrollSection panels={panels} />
```

Example (custom children):
```jsx
<HorizontalScrollSection>
  <div style={{ width: '400vw', display: 'flex' }}>
    <section style={{ width: '100vw', height: '100vh', background: '#111' }} />
    <section style={{ width: '100vw', height: '100vh', background: '#222' }} />
    <section style={{ width: '100vw', height: '100vh', background: '#333' }} />
    <section style={{ width: '100vw', height: '100vh', background: '#444' }} />
  </div>
  {/* Any layout is fine; the component measures scrollWidth automatically */}
  {/* Tip: add a ResizeObserver inside if the child content grows dynamically */}
  {/* (A ResizeObserver is already added at the component level.) */}
  
</HorizontalScrollSection>
```

## Styling and Structure

Key elements (see `src/components/HorizontalScrollSection.css`):
- `.horizontal-scroll-container` — outer host; must be `position: relative` and not clip the sticky flow.
- `.horizontal-scroll-sticky` — pinned wrapper; sticky by default, switches to fixed while active.
- `.horizontal-scroll-content` — flex row that translates horizontally.
- `.horizontal-panel` — each panel; width `100vw`, height `100vh`.

If you change panel sizes, update styles and be aware the math assumes `panelWidth = 100vw`.

## Mobile behavior

By default, at `max-width: 640px` we enable native horizontal scroll:

- `.horizontal-scroll-sticky { overflow-x: auto; scroll-snap-type: x mandatory; }`
- To keep the “pinned sweep” on mobile too, remove or adjust that media query in `HorizontalScrollSection.css`.

## Gotchas and Troubleshooting

- Sticky not pinning:
  - Ensure `.horizontal-scroll-container` is taller than the sticky wrapper (the component computes this automatically).
  - Ancestor CSS with `transform` or `overflow: hidden` can break sticky; avoid applying those to containers wrapping the horizontal section.

- Large blank gap after the section:
  - Happens when container height doesn’t match the true horizontal distance. The component now measures `scrollWidth` and sets the correct height.

- Nothing moves / stutters on load:
  - If `scrollWidth` is 0 on first layout, measurements re-run after paint and on `load`. Verify panels actually render before measurement.

- Too fast/slow movement:
  - Movement is tied 1:1 to vertical scroll progress. To exaggerate or dampen, scale the computed `translateX` in `HorizontalScrollSection.jsx`.

## File Pointers

- Horizontal: `src/components/HorizontalScrollSection.jsx:10`, `src/components/HorizontalScrollSection.css:1`
- Vertical: `src/components/VerticalSection.jsx:1`, `src/components/VerticalSection.css:1`

## 2025-02-14 - Redundant Component Instantiation & Accessibility Navigation
**Learning:** Discovered that `CustomCursor` was instantiated in both `app/layout.tsx` AND individual pages. This causes duplicate event listeners and DOM elements, leading to potential performance issues and visual glitches. Global components like cursors or overlay effects should strictly reside in `layout.tsx` (or a single root provider) to ensure singleton behavior.
**Action:** Always verify `layout.tsx` contents before adding "global-like" components to pages. When implementing global features, audit the entire tree for redundancy.

**Learning:** Adding a "Skip to Content" link requires careful DOM structuring. The target `id="main-content"` must be on a focusable container (`tabIndex={-1}`) that wraps the *actual* content but excludes the navigation.
**Action:** When designing layouts, consider a semantic `<main>` structure that naturally separates Navigation (`<nav>`, `<header>`) from Content (`<article>`, `<div>`), making "Skip to Content" implementation trivial.

## 2024-05-22 - Global Components Placement
**Learning:** Found critical accessibility component (SkipLink) missing and visual component (CustomCursor) redundantly rendered in every page instead of `layout.tsx`. This causes performance issues and inconsistent state.
**Action:** Always verify `layout.tsx` for global UI elements and remove them from individual pages to ensure a single source of truth and persistent state.

## 2024-05-22 - Semantic HTML for Skip Links
**Learning:** Placing the main content ID on the `<main>` tag while it wraps the `<Header>` navigation renders the "Skip to Content" link ineffective.
**Action:** Ensure `<Header>` (navigation) is placed *outside* and *before* the `<main id="main-content">` element so the skip link jumps *past* the navigation.

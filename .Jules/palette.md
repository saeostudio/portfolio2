## 2025-02-23 - Skip Link Implementation
**Learning:** React portals or global layout components are crucial for accessibility features like "Skip to Content" links to ensure they are always the first focusable element. Also, duplicated global components (like CustomCursor) in page files can cause unexpected behavior and code bloat.
**Action:** Always check `layout.tsx` for global UI elements before adding them to individual pages. Ensure the main content area of every page is programmatically focusable (`tabIndex={-1}`) to support skip links.

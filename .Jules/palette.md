## 2025-02-18 - Missing Skip Link & Duplicate Cursors
**Learning:** Custom UI elements like cursors can be inadvertently duplicated across pages if not managed centrally in `layout.tsx`, causing performance and visual issues. Also, visually driven sites often miss critical accessibility features like "Skip to Content", which are essential for keyboard users to bypass navigation.
**Action:** Always verify `layout.tsx` for global UI components before adding them to pages, and ensure a "Skip to Content" link is present in the root layout with a corresponding `id="main-content"` on all pages.

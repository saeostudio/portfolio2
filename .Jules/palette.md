## 2025-02-18 - Missing Skip Link & Duplicate Cursors
**Learning:** Found that the "Skip to Content" link was missing, which is a critical accessibility requirement. Also, global UI elements like `CustomCursor` were being duplicated in both `layout.tsx` and individual pages, causing potential conflicts and performance issues.
**Action:** Always verify that global accessibility features like "Skip Link" are implemented in `layout.tsx` and that `id="main-content"` is present on all pages. Ensure global components are only rendered once in the root layout.

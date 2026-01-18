## 2026-10-17 - [Skip Link Implementation]
**Learning:** Adding a global "Skip to Content" link requires coordination between `layout.tsx` (for the link) and every `page.tsx` (for the `id="main-content"` target).
**Action:** When creating new pages, always add `id="main-content"` to the `<main>` tag.

## 2026-10-17 - [React Component Definition]
**Learning:** Defining React components (like `GridItem`) inside another component causes them to remount on every render, leading to performance issues and linting errors.
**Action:** Always define helper components outside the main export or in a separate file.

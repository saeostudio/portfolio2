## 2025-02-12 - Skip Link & Structure
**Learning:** Next.js pages often duplicate global components (Header, Cursor) leading to accessibility structure issues (Nav inside Main).
**Action:** Refactor global components to `layout.tsx` and ensure `main` has a clear ID for skip links.

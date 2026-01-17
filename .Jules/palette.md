## 2025-02-18 - Header Architecture & Skip Links
**Learning:** The `Header` component is rendered inside each page's `main` rather than in the root layout. This requires manual placement of `id="main-content"` on each page's content container to effectively skip the navigation.
**Action:** Check page structure early when implementing global accessibility features. Consider refactoring Header to Layout if redesigning.

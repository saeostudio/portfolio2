## 2024-05-22 - Skip to Content and Linting Stability
**Learning:** Accessibility features like "Skip to Content" links are crucial for keyboard navigation but must be implemented with proper z-index management (higher than decorative elements like grain/cursor) to ensuring visibility. Also, defining React components inside render functions causes state reset issues and linter errors, which destabilizes the app.
**Action:** Always verify "Skip to Content" implementation and ensure component stability by defining helper components outside of the main component function or in separate files.

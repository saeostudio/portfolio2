## 2025-02-18 - Skip Link Implementation
**Learning:** Even visually rich portfolios need basic accessibility structures. The "grain" texture and custom cursor overlays (z-index 50) can obscure standard interactive elements if z-indexes aren't managed carefully.
**Action:** Always verify `z-index` stacking contexts when implementing accessibility overlays like Skip Links. Ensure `id="main-content"` is present on all page templates, not just the homepage.

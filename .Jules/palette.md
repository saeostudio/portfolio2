## 2024-05-22 - Accessibility First Steps
**Learning:** Even stylish, minimal portfolios need basic accessibility. The absence of a "Skip to Content" link is a major barrier for keyboard users, especially with fixed navigation headers. Also, redundant client-side components (like CustomCursor) can cause performance issues if not managed centrally in layout.
**Action:** Always verify keyboard navigation and focus management, even on "visual" sites. Centralize global UI effects in the root layout to avoid duplication and potential bugs.

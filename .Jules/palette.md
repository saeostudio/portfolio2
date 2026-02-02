## 2025-05-19 - Missing Skip Link
**Learning:** High-visual-impact sites often miss basic a11y navigation. Adding a Skip Link is a high-value, low-effort win.
**Critical:** Ensure the Skip Link target (`#main-content`) is placed *after* the navigation elements. If the Header is inside `<main>`, the target must be on the container following the Header, not on `<main>` itself, otherwise the user lands right back in the navigation flow.
**Action:** Always check `layout.tsx` for a Skip Link and verify the target ID placement relative to the navigation.

## 2025-02-18 - Skip Link Implementation
**Learning:** Adding a "Skip to Content" link requires ensuring the target container (e.g., `<main id="main-content">`) is programmatically focusable using `tabIndex={-1}` and `focus:outline-none`. Without this, the browser scrolls but focus remains on the link or body, confusing screen reader users.
**Action:** Always verify that internal anchor targets have `tabIndex={-1}` and appropriate focus styles.

## 2024-05-22 - Skip to Content Implementation
**Learning:** Adding a "Skip to Content" link is critical for keyboard accessibility, allowing users to bypass repetitive navigation. It requires a target element with `id` and `tabIndex={-1}` to ensure focus moves correctly and stays there.
**Action:** Always verify that the target element is programmatically focusable (`tabIndex={-1}`) so that the skip link actually moves focus to the content area, and add `focus:outline-none` if the container itself shouldn't show a focus ring.

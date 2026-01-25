## 2025-02-12 - Accessibility Focus Management
**Learning:** Next.js hash navigation/skip links require `tabIndex={-1}` on the target container to correctly move browser focus, otherwise focus stays on the link or document body.
**Action:** Always add `tabIndex={-1}` and `className="focus:outline-none"` to skip link targets.

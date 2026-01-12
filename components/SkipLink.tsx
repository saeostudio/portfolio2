import React from 'react';

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed top-4 left-4 z-[200] -translate-y-[150%] rounded-sm bg-white px-4 py-2 font-syne font-bold text-black transition-transform focus:translate-y-0 focus:outline-none focus:ring-4 focus:ring-blue-500"
    >
      Skip to content
    </a>
  );
}

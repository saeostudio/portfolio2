import React from 'react';

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed top-4 left-4 z-[200] px-6 py-3 bg-white text-black font-syne font-bold uppercase tracking-widest text-xs transition-transform duration-300 -translate-y-[200%] focus:translate-y-0 shadow-lg rounded-sm"
    >
      Skip to content
    </a>
  );
}

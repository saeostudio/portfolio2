import React from 'react';

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed top-4 left-4 z-[9999] -translate-y-[200%] bg-white text-black px-6 py-3 font-syne font-bold uppercase tracking-widest text-sm transition-transform duration-300 focus:translate-y-0 focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-xl rounded-sm"
    >
      Skip to content
    </a>
  );
}

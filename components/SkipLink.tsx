import React from 'react';

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed top-0 left-0 z-[200] block w-full bg-white p-3 text-center text-black font-bold uppercase tracking-widest transition-transform duration-300 -translate-y-[200%] focus:translate-y-0"
    >
      Skip to content
    </a>
  );
}

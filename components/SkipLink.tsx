import React from 'react';

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed top-4 left-4 z-[200] -translate-y-[200%] bg-white text-black px-4 py-2 font-bold uppercase transition-transform focus:translate-y-0 focus:outline-none"
    >
      Skip to content
    </a>
  );
}

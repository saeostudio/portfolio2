import React from 'react';

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed top-4 left-4 z-[200] -translate-y-[150%] bg-white text-black px-6 py-3 font-bold transition-transform focus:translate-y-0 focus:outline-none"
    >
      Skip to Content
    </a>
  );
}

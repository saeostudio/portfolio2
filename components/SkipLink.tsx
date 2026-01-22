import React from 'react';

const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="fixed top-4 left-4 z-[200] -translate-y-[200%] bg-white px-4 py-2 text-black font-syne font-bold uppercase tracking-widest transition-transform focus:translate-y-0"
    >
      Skip to content
    </a>
  );
};

export default SkipLink;

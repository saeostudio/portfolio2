import React from 'react';

const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="fixed top-4 left-4 z-[200] px-4 py-2 bg-white text-black font-bold uppercase text-sm tracking-widest transition-transform duration-200 -translate-y-[200%] focus:translate-y-0"
    >
      Skip to content
    </a>
  );
};

export default SkipLink;

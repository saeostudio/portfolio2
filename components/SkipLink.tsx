import React from 'react';

const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="fixed top-4 left-4 z-[1000] -translate-y-[200%] focus:translate-y-0 bg-white text-black px-6 py-3 font-bold uppercase tracking-widest transition-transform duration-300 shadow-xl"
    >
      Skip to Content
    </a>
  );
};

export default SkipLink;

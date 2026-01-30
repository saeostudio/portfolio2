'use client';

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed top-4 left-4 z-[200] bg-white text-black px-4 py-2 font-bold uppercase tracking-widest transform -translate-y-[200%] focus:translate-y-0 transition-transform duration-300 focus:outline-none"
    >
      Skip to content
    </a>
  );
}

import Link from 'next/link';

export default function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="fixed top-4 left-4 z-[200] px-4 py-2 bg-white text-black font-syne font-bold uppercase tracking-widest text-sm transition-transform duration-200 -translate-y-[200%] focus:translate-y-0 focus:outline-none"
    >
      Skip to content
    </Link>
  );
}

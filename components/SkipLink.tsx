import Link from 'next/link';

export default function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="fixed top-4 left-4 z-[200] bg-white text-black px-4 py-2 font-syne uppercase text-sm tracking-widest transition-transform duration-200 -translate-y-[200%] focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white"
    >
      Skip to content
    </Link>
  );
}

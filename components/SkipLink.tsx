import Link from 'next/link';

export default function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="fixed top-4 left-4 z-[200] -translate-y-[200%] focus:translate-y-0 transition-transform duration-300 bg-white text-black px-6 py-3 font-syne font-bold uppercase tracking-widest text-sm shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
    >
      Skip to content
    </Link>
  );
}

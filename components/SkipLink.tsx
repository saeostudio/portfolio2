import Link from 'next/link';

export default function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="fixed top-0 left-0 z-[200] block w-full bg-black text-white p-4 text-center transform -translate-y-[200%] focus:translate-y-0 transition-transform duration-300 font-syne uppercase tracking-widest outline-none border-b border-white/20"
    >
      Skip to content
    </Link>
  );
}

import Link from 'next/link';

export default function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="fixed top-4 left-4 z-[200] px-4 py-2 bg-white text-black font-syne uppercase text-sm tracking-widest -translate-y-[200%] focus:translate-y-0 transition-transform duration-300"
    >
      Skip to content
    </Link>
  );
}

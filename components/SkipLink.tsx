import Link from 'next/link';

export default function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="fixed top-4 left-4 z-[200] -translate-y-[150%] bg-white text-black px-4 py-2 font-bold transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Skip to content
    </Link>
  );
}

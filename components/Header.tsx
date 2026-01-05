import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-40 p-6 mix-blend-difference text-white">
      <nav className="flex justify-between items-center text-lg uppercase tracking-wider font-bold">
        <Link href="/" className="hover:underline">
          Stefan Land
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:underline">Work</Link>
          <Link href="/noorderpoort" className="hover:underline">Noorderpoort</Link>
          <Link href="/about" className="hover:underline">About Me</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

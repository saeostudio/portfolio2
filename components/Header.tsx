import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className="fixed top-8 left-8 z-[100] mix-blend-difference">
         <Link href="/">
             {/* Using a placeholder text logo if image is not available or desired to be text based on new style */}
             {/* The user's code had an image, but text might be safer if we don't have the logo file.
                 Let's stick to text for now as "LOGO" or similar until user provides one,
                 or better yet, just the name as a logo if no image.
                 User code: <img src=".../your-logo.png" ... filter: invert(1) ... >
                 I'll use a text representation that looks like a logo for now.
             */}
             <span className="font-syne font-extrabold text-2xl tracking-tighter text-white">STEFAN LAND</span>
         </Link>
      </div>

      <nav className="fixed top-8 right-8 flex z-40 mix-blend-difference text-[10px] uppercase tracking-[0.2em] space-x-8 text-white">
        <Link href="mailto:info@stefanland.nl" className="hover:line-through">Email</Link>
        <Link href="/about" className="hover:line-through">Info</Link>
        <Link href="/noorderpoort" className="hover:line-through">Noorderpoort</Link>
        {/* Added Noorderpoort here for access since it's a requested page */}
      </nav>
    </>
  );
}

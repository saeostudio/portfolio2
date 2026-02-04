import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const SUBJECTS = [
  'Studio',
  'Documentary',
  'Portraiture',
  'Darkroom',
  'Experimental'
];

export default function Noorderpoort() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="min-h-screen p-8 md:p-16 focus:outline-none">
        <div className="min-h-[60vh] flex flex-col justify-center items-center mt-20">
        <h1 className="text-[8vw] font-extrabold uppercase leading-[0.85] tracking-tighter text-white mb-20 text-center">
            NOORDER<br/>POORT
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
            {SUBJECTS.map((subject) => (
                <Link
                    key={subject}
                    href={`/noorderpoort/${subject}`}
                    className="border border-white/20 p-12 text-center text-xl font-syne uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                >
                    {subject}
                </Link>
            ))}
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}

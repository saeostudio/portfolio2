import Header from '@/components/Header';
import CustomCursor from '@/components/CustomCursor';
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
    <main className="min-h-screen">
      <CustomCursor />
      <Header />

      <div className="pt-32 px-4 md:px-12 flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-4xl md:text-6xl font-bold uppercase mb-16 tracking-tighter text-center">
            Noorderpoort
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
            {SUBJECTS.map((subject) => (
                <Link
                    key={subject}
                    href={`/noorderpoort/${subject}`}
                    className="border-2 border-black p-8 text-center text-xl uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300"
                >
                    {subject}
                </Link>
            ))}
        </div>
      </div>
    </main>
  );
}

import Header from '@/components/Header';
import Link from 'next/link';

// Placeholder for subject gallery.
// In a real app, this might read from a "Noorderpoort" folder in photos,
// or just use placeholders as requested.

export default async function SubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params;
  const decodedSubject = decodeURIComponent(subject);

  return (
    <main className="min-h-screen">
      <Header />

      <div id="main-content" className="pt-32 px-4 md:px-12">
        <div className="flex items-baseline gap-4 mb-12">
            <Link href="/noorderpoort" className="text-xl hover:underline">← Back</Link>
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">{decodedSubject}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Grid */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 uppercase tracking-widest">Work {i}</span>
                </div>
            ))}
        </div>
      </div>
    </main>
  );
}

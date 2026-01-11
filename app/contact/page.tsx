import Header from '@/components/Header';
import CustomCursor from '@/components/CustomCursor';

export default function Contact() {
  return (
    <main className="min-h-screen">
      <CustomCursor />
      <Header />

      <div
        id="main-content"
        tabIndex={-1}
        className="pt-32 px-4 md:px-12 flex flex-col justify-center min-h-[80vh] outline-none"
      >
        <h1 className="text-4xl md:text-6xl font-bold uppercase mb-12 tracking-tighter">Contact</h1>

        <div className="space-y-6 text-2xl uppercase tracking-widest">
            <p>
                <a href="mailto:info@stefanland.nl" className="hover:underline">info@stefanland.nl</a>
            </p>
            <p>
                <a href="https://instagram.com/stefanland" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Instagram
                </a>
            </p>
            <p>
                +31 6 1234 5678
            </p>
        </div>
      </div>
    </main>
  );
}

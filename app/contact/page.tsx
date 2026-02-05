import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen p-8 md:p-16 outline-none">
      <div className="min-h-[70vh] flex flex-col justify-center">
        <h1 className="text-[10vw] font-extrabold uppercase leading-[0.85] tracking-tighter text-white mb-20">
            GET IN<br/><span className="pl-[10vw]">TOUCH</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-syne text-2xl uppercase tracking-widest text-white">
            <div className="space-y-4">
                <p className="opacity-50 text-sm tracking-[0.2em] font-sans mb-4">Email</p>
                <a href="mailto:info@stefanland.nl" className="block hover:line-through decoration-white">info@stefanland.nl</a>
            </div>
            <div className="space-y-4">
                 <p className="opacity-50 text-sm tracking-[0.2em] font-sans mb-4">Social</p>
                <a href="https://instagram.com/stefanland" target="_blank" rel="noopener noreferrer" className="block hover:line-through decoration-white">
                    Instagram
                </a>
            </div>
            <div className="space-y-4">
                 <p className="opacity-50 text-sm tracking-[0.2em] font-sans mb-4">Phone</p>
                <p>+31 6 1234 5678</p>
            </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

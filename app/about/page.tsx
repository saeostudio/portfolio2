import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <main id="main-content" className="min-h-screen p-8 md:p-16">
      <Header />

      <div className="mt-40 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
            <div className="aspect-[3/4] relative bg-neutral-900 grayscale">
                 <Image
                    src="https://picsum.photos/600/800"
                    alt="Stefan Land"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
        <div className="md:col-span-7 flex flex-col justify-center">
            <h1 className="text-[6vw] font-extrabold uppercase leading-none tracking-tighter text-white mb-12">ABOUT<br/>ME</h1>
            <div className="text-xl md:text-2xl font-light leading-relaxed space-y-8 text-white/80">
                <p>
                    I am Stefan Land, a photographer based in The Netherlands. My work explores the raw and the refined, blending documentary styles with fashion and portraiture.
                </p>
                <p>
                    I study at Noorderpoort and am constantly experimenting with analogue and digital mediums to capture the world around me.
                </p>
            </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

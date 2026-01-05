import Header from '@/components/Header';
import CustomCursor from '@/components/CustomCursor';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen">
      <CustomCursor />
      <Header />

      <div className="pt-32 px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
            <Image
                src="https://picsum.photos/600/800" // Placeholder for Stefan's photo
                alt="Stefan Land"
                width={600}
                height={800}
                className="w-full h-auto"
            />
        </div>
        <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold uppercase mb-8 tracking-tighter">About Me</h1>
            <p className="text-xl leading-relaxed mb-6">
                I am Stefan Land, a photographer based in The Netherlands. My work explores the raw and the refined, blending documentary styles with fashion and portraiture.
            </p>
            <p className="text-xl leading-relaxed">
                I study at Noorderpoort and am constantly experimenting with analogue and digital mediums to capture the world around me.
            </p>
        </div>
      </div>
    </main>
  );
}

import { getCategory, getCategories } from '@/lib/gallery';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const data = await getCategory(decodeURIComponent(category));

  if (!data) {
    return notFound();
  }

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen p-8 md:p-16 focus:outline-none">
      <CustomCursor />
      <Header />

      <div className="mt-40 mb-20">
        <h1 className="text-[8vw] md:text-[6vw] font-extrabold uppercase leading-none tracking-tighter text-white">
            {data.name}
        </h1>
      </div>

      <div className="space-y-32">
        {data.projects.map((project) => (
            <div key={project.name}>
                <h2 className="text-xl md:text-2xl font-syne uppercase tracking-widest mb-8 border-b border-white/20 pb-2 inline-block text-white">
                    {project.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.images.map((img) => (
                        <div key={img.src} className="relative w-full mb-8">
                             {/* Keep the images clean, full width in their column */}
                            <Image
                                src={img.src}
                                alt={img.name}
                                width={800}
                                height={1000}
                                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    ))}
                </div>
            </div>
        ))}
      </div>

      {data.projects.length === 0 && (
        <p className="text-white/50">No photos found in this category.</p>
      )}

      <Footer />
    </main>
  );
}

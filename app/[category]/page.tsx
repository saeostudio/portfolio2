import { getCategory, getCategories } from '@/lib/gallery';
import Header from '@/components/Header';
import CustomCursor from '@/components/CustomCursor';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    category: category.name,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const data = await getCategory(decodeURIComponent(category));

  if (!data) {
    return notFound();
  }

  return (
    <main className="min-h-screen pb-12">
      <CustomCursor />
      <Header />

      <div
        id="main-content"
        tabIndex={-1}
        className="pt-24 px-4 md:px-12 outline-none"
      >
        <h1 className="text-4xl md:text-6xl font-bold uppercase mb-12 tracking-tighter">{data.name}</h1>

        <div className="space-y-24">
            {data.projects.map((project) => (
                <div key={project.name}>
                    <h2 className="text-2xl uppercase tracking-widest mb-6 border-b border-black pb-2 inline-block">
                        {project.name}
                    </h2>
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                        {project.images.map((img) => (
                            <div key={img.src} className="relative w-full">
                                <Image
                                    src={img.src}
                                    alt={img.name}
                                    width={800}
                                    height={1000}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>

        {data.projects.length === 0 && (
            <p>No photos found in this category.</p>
        )}
      </div>
    </main>
  );
}

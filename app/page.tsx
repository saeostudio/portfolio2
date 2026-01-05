import Link from 'next/link';
import Image from 'next/image';
import { getCategories } from '@/lib/gallery';
import MasonryGrid from '@/components/MasonryGrid';
import Header from '@/components/Header';
import CustomCursor from '@/components/CustomCursor';

export default async function Home() {
  const categories = await getCategories();

  // Define sort order if needed, otherwise alphabetical or default fs order
  const sortOrder = [
    'Commissioned',
    'Personal Projects',
    'Travel',
    'Fashion',
    'Portrait',
    'Analogue',
    'Miscellaneous'
  ];

  const sortedCategories = categories.sort((a, b) => {
    return sortOrder.indexOf(a.name) - sortOrder.indexOf(b.name);
  });

  return (
    <main className="min-h-screen pb-12">
      <CustomCursor />
      <Header />

      <MasonryGrid>
        {sortedCategories.map((category) => (
          <Link
            key={category.name}
            href={`/${category.name}`}
            className="block group relative"
          >
            <div className="relative overflow-hidden mb-2">
              {category.coverImage ? (
                <Image
                  src={category.coverImage}
                  alt={category.name}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
            </div>
            <div className="border-t border-black pt-2">
                <h2 className="text-xl uppercase tracking-widest">{category.name}</h2>
            </div>
          </Link>
        ))}
      </MasonryGrid>
    </main>
  );
}

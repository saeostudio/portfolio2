import Link from 'next/link';
import Image from 'next/image';
import { getCategories, Category } from '@/lib/gallery';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function Home() {
  const categories = await getCategories();

  // Helper to find a specific category by name
  const findCategory = (name: string) => categories.find(c => c.name.toLowerCase() === name.toLowerCase());

  // Define the grid slots based on the provided design
  // Slot 1: Commissioned (Large, Wide)
  // Slot 2: Personal Projects / Uncommissioned (Small, Vertical)
  // Slot 3: Fashion (Square)
  // Slot 4: Portrait (Portrait ratio)
  // Slot 5: Travel (Ultra Wide)
  // Slot 6: Analogue (Square)

  const commissioned = findCategory('commissioned');
  const personal = findCategory('personal projects');
  const fashion = findCategory('fashion');
  const portrait = findCategory('portrait');
  const travel = findCategory('travel');
  const analogue = findCategory('analogue');
  const misc = findCategory('miscellaneous');

  const GridItem = ({ category, slotClass, aspectClass, titleStyle = "text-2xl" }: { category?: Category, slotClass: string, aspectClass: string, titleStyle?: string }) => {
    if (!category) return null;
    return (
      <div className={slotClass}>
        <Link href={`/${category.name}`} className="block group">
          <div className={`${aspectClass} bg-neutral-900 overflow-hidden mb-4 relative`}>
             {/* Portal item effect: grayscale to color on hover */}
             {category.coverImage ? (
                <Image
                  src={category.coverImage}
                  alt={category.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
             ) : (
                 <div className="w-full h-full flex items-center justify-center text-gray-700">No Image</div>
             )}
          </div>
          <div className={`font-syne uppercase ${titleStyle}`}>{category.name}</div>
        </Link>
      </div>
    );
  };

  return (
    <main className="min-h-screen p-8 md:p-16">
      <Header />

      <header className="h-[60vh] flex flex-col justify-center mb-20">
        <h1 className="text-[8vw] md:text-[10vw] font-extrabold leading-[0.85] tracking-tighter uppercase text-white">
            VISUAL<br/><span className="pl-[10vw]">INDEX</span>
        </h1>
      </header>

      <div className="grid grid-cols-12 gap-8 md:gap-y-32">

        {/* Slot 1: Commissioned */}
        <GridItem
            category={commissioned}
            slotClass="col-span-12 md:col-span-7"
            aspectClass="aspect-video"
            titleStyle="text-2xl italic"
        />

        {/* Slot 2: Personal Projects */}
        <GridItem
            category={personal}
            slotClass="col-span-12 md:col-start-9 md:col-span-4 mt-12"
            aspectClass="aspect-[3/4]"
            titleStyle="text-xl"
        />

        {/* Slot 3: Fashion */}
        <GridItem
            category={fashion}
            slotClass="col-span-12 md:col-start-2 md:col-span-6"
            aspectClass="aspect-square"
            titleStyle="text-2xl"
        />

        {/* Slot 4: Portrait */}
        <GridItem
            category={portrait}
            slotClass="col-span-12 md:col-start-9 md:col-span-3"
            aspectClass="aspect-[2/3]"
            titleStyle="text-xl"
        />

        {/* Slot 5: Travel */}
        <GridItem
            category={travel}
            slotClass="col-span-12 md:col-span-8"
            aspectClass="aspect-[21/9]"
            titleStyle="text-2xl italic"
        />

        {/* Slot 6: Analogue */}
        <GridItem
            category={analogue}
            slotClass="col-span-12 md:col-start-3 md:col-span-4 mb-40"
            aspectClass="aspect-square"
            titleStyle="text-xl"
        />

        {/* Fallback for Miscellaneous or others if they exist but weren't in the strict layout */}
        {misc && (
             <GridItem
             category={misc}
             slotClass="col-span-12 md:col-start-8 md:col-span-4"
             aspectClass="aspect-square"
             titleStyle="text-xl"
         />
        )}

      </div>

      <Footer />
    </main>
  );
}

import fs from 'fs';
import path from 'path';

export type ImageInfo = {
  src: string;
  name: string;
};

export type Project = {
  name: string;
  images: ImageInfo[];
};

export type Category = {
  name: string;
  projects: Project[];
  coverImage: string | null;
};

const PHOTOS_DIR = path.join(process.cwd(), 'public', 'photos');

// Helper to check if file is an image
const isImage = (fileName: string) => {
  return /\.(jpg|jpeg|png|webp|gif)$/i.test(fileName);
};

export async function getCategories(): Promise<Category[]> {
  if (!fs.existsSync(PHOTOS_DIR)) {
    return [];
  }

  const categoryNames = fs.readdirSync(PHOTOS_DIR).filter((file) => {
    return fs.statSync(path.join(PHOTOS_DIR, file)).isDirectory();
  });

  const categories = categoryNames.map((categoryName) => {
    const categoryPath = path.join(PHOTOS_DIR, categoryName);
    const items = fs.readdirSync(categoryPath);

    // We expect items to be mostly project directories, but maybe some loose images (legacy/simple support)
    // Structure: Category -> Project -> Images

    const projects: Project[] = [];
    let allImagesInCategory: string[] = [];

    items.forEach((item) => {
      const itemPath = path.join(categoryPath, item);
      if (fs.statSync(itemPath).isDirectory()) {
        // It's a project
        const projectImages = fs.readdirSync(itemPath).filter(isImage).map(img => `/photos/${categoryName}/${item}/${img}`);
        if (projectImages.length > 0) {
            projects.push({
                name: item,
                images: projectImages.map(src => ({ src, name: path.basename(src) }))
            });
            allImagesInCategory = allImagesInCategory.concat(projectImages);
        }
      } else if (isImage(item)) {
        // Loose image in category folder, treat as "General" project or similar, or ignore if we enforce structure
        // Let's add them to a "General" project if present
        // checking if "General" exists in projects?
        // For simplicity, let's assume loose images are allowed but might not be grouped with a caption unless we make a "General" group.
        // User asked for "captions for groups", so folders are the groups.
      }
    });

    // Find a cover image: first image of first project, or any image found
    let coverImage = null;
    if (projects.length > 0 && projects[0].images.length > 0) {
        coverImage = projects[0].images[0].src;
    }

    return {
      name: categoryName,
      projects,
      coverImage
    };
  });

  return categories;
}

export async function getCategory(categoryName: string): Promise<Category | null> {
    const categories = await getCategories();
    return categories.find(c => c.name.toLowerCase() === categoryName.toLowerCase()) || null;
}

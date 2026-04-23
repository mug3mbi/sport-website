// Mock Product Data Generator
const generateProducts = () => {
  const brasImages = Array.from({ length: 26 }, (_, i) => {
    const id = i + 1;
    // Special case for bra-1 which has no extension in the directory listing
    return id === 1 ? '/bras/bra-1' : `/bras/bra-${id}.jpg`;
  });

  const tightsImages = Array.from({ length: 28 }, (_, i) => {
    const id = i + 1;
    // tight-1 and tight-4 have no extensions
    if (id === 1 || id === 4) return `/compression-tights/tight-${id}`;
    return `/compression-tights/tight-${id}.jpg`;
  });

  const trainingTopsImages = Array.from({ length: 24 }, (_, i) => {
    const id = i + 1;
    // top-1 has no extension
    return id === 1 ? '/training-tops/top-1' : `/training-tops/top-${id}.jpg`;
  });

  const generateCategoryItems = (baseId, category, images, priceRange) => {
    // Mapping plural categories to singular for cleaner names
    const singularCategory = category === 'Training Tops' ? 'Training Top' : 
                             category === 'Compression Tights' ? 'Compression Tight' : 
                             category === 'Sports Bras' ? 'Sports Bra' : 
                             category.replace(/s$/, '');

    return images.map((imageSrc, i) => {
      return {
        id: `${baseId}-${i + 1}`,
        name: `Apex ${singularCategory} ${i + 1}`,
        category: category,
        price: Number((Math.random() * (priceRange[1] - priceRange[0]) + priceRange[0]).toFixed(2)),
        image: imageSrc,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'Navy', 'Slate', 'Carbon', 'Midnight']
      };
    });
  };

  const trainingTops = generateCategoryItems('T', 'Training Tops', trainingTopsImages, [25, 55]);
  const compressionTights = generateCategoryItems('C', 'Compression Tights', tightsImages, [35, 75]);
  const sportsBras = generateCategoryItems('B', 'Sports Bras', brasImages, [30, 65]);

  // Keep a small sample of jerseys if needed, or focus on the requested categories
  const jerseys = Array.from({ length: 12 }, (_, i) => ({
    id: `J-${i + 1}`,
    name: `Pro Team Jersey ${i + 1}`,
    category: 'Jerseys',
    price: Number((Math.random() * (40) + 60).toFixed(2)),
    image: `/jerseys - Select.html`, // Note: This looks like a mistake in the file structure but I'll use it as a placeholder or remove it
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Home', 'Away', 'Third']
  })).filter(j => j.image.endsWith('.jpg') || j.image.endsWith('.png')); // Filter out the .html file if it's not an image

  return [...trainingTops, ...compressionTights, ...sportsBras];
};

export const productsList = generateProducts();

export const categories = [
  'Training Tops',
  'Compression Tights',
  'Sports Bras'
];

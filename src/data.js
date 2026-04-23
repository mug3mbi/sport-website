// Mock Product Data Generator
const generateProducts = () => {
  const brasImages = [
    '/bras/bra-13.jpg', '/bras/bra-14.jpg', '/bras/bra-19.jpg',
    '/bras/bra-21.jpg', '/bras/bra-22.jpg', '/bras/bra-23.jpg', '/bras/bra-24.jpg',
    '/bras/bra-25.jpg', '/bras/bra-26.jpg'
  ];

  const tightsImages = [
    '/compression-tights/tight 1.jpg', '/compression-tights/tight 3.jpg',
    '/compression-tights/tight 4.jpg', '/compression-tights/tight 6.jpg',
    '/compression-tights/tight 7.jpg', '/compression-tights/tight 8.jpg',
    '/compression-tights/tight-2.jpg', '/compression-tights/tight-5.jpg'
  ];

  const trainingTopsImages = [
    '/training-tops/top-10.jpg', '/training-tops/top-11.jpg', 
    '/training-tops/top-22.jpg', '/training-tops/top-24.jpg'
  ];

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

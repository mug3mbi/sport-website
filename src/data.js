// Mock Product Data Generator
const generateMockProducts = () => {
  const generateCategoryItems = (baseId, category, count, priceRange) => {
    return Array.from({ length: count }, (_, i) => ({
      id: `${baseId}-${i + 1}`,
      name: `Apex ${category} ${i + 1}`,
      category: category,
      price: Number((Math.random() * (priceRange[1] - priceRange[0]) + priceRange[0]).toFixed(2)),
      image: `https://ui-avatars.com/api/?name=${category.replace(' ', '+')}&background=random&size=400`,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'White', 'Red']
    }));
  };

  const trainingTops = generateCategoryItems('T', 'Training Tops', 300, [25, 60]);
  const compressionTights = generateCategoryItems('C', 'Compression Tights', 450, [35, 80]);
  const sportsBras = generateCategoryItems('B', 'Sports Bras', 700, [30, 70]);
  const jerseys = generateCategoryItems('J', 'Jerseys', 600, [50, 120]);

  return [...trainingTops, ...compressionTights, ...sportsBras, ...jerseys];
};

export const productsList = generateMockProducts();

export const categories = [
  'Training Tops',
  'Compression Tights',
  'Sports Bras',
  'Jerseys'
];

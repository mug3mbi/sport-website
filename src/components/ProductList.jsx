import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import SkeletonCard from './SkeletonCard';

const ProductList = ({ products, itemsPerPage = 12 }) => {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Reset pagination when products change (e.g., category filter or sort)
  useEffect(() => {
    setLoading(true);
    setPage(1);
    
    // Simulate network delay for 3G
    const timer = setTimeout(() => {
      setDisplayedProducts(products.slice(0, itemsPerPage));
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [products, itemsPerPage]);

  const loadMore = () => {
    setLoading(true);
    const nextPage = page + 1;
    
    // Simulate network delay for 3G
    setTimeout(() => {
      const newProducts = products.slice(0, nextPage * itemsPerPage);
      setDisplayedProducts(newProducts);
      setPage(nextPage);
      setLoading(false);
    }, 600);
  };

  const hasMore = displayedProducts.length < products.length;

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {loading && (
          Array.from({ length: Math.min(itemsPerPage, products.length - displayedProducts.length) || itemsPerPage }).map((_, index) => (
            <SkeletonCard key={`skeleton-${index}`} />
          ))
        )}
      </div>

      {!loading && displayedProducts.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your filters or search criteria.</p>
        </div>
      )}

      {hasMore && !loading && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={loadMore}
            className="px-8 py-3 bg-white border-2 border-gray-900 text-gray-900 font-semibold rounded-md hover:bg-gray-900 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            Load More Products
          </button>
        </div>
      )}
      
      <div className="mt-4 text-center text-sm text-gray-500">
        Showing {displayedProducts.length} of {products.length} products
      </div>
    </div>
  );
};

export default ProductList;

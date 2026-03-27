import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { productsList, categories } from '../data';
import { Filter, SlidersHorizontal, X } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('recommended');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'All');
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
    setIsMobileFiltersOpen(false);
  };

  const filteredProducts = useMemo(() => {
    let result = productsList;

    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-gray-100">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight mb-2">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
          </h1>
          <p className="text-gray-500 text-sm">
            {filteredProducts.length} Results
          </p>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center space-x-4">
          <button 
            className="md:hidden flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium"
            onClick={() => setIsMobileFiltersOpen(true)}
          >
            <Filter size={16} className="mr-2" /> Filters
          </button>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500 hidden sm:inline">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border-gray-300 rounded-md text-sm py-2 pl-3 pr-8 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="recommended">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center tracking-wide uppercase text-sm">
              <SlidersHorizontal size={16} className="mr-2" /> Categories
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleCategoryChange('All')}
                  className={`text-sm hover:text-primary-600 transition-colors ${
                    selectedCategory === 'All' ? 'text-primary-600 font-bold' : 'text-gray-600'
                  }`}
                >
                  All Products
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => handleCategoryChange(cat)}
                    className={`text-sm hover:text-primary-600 transition-colors ${
                      selectedCategory === cat ? 'text-primary-600 font-bold' : 'text-gray-600'
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <ProductList products={filteredProducts} itemsPerPage={12} />
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div 
            className="fixed inset-0 bg-black/50" 
            onClick={() => setIsMobileFiltersOpen(false)}
          ></div>
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white transition-transform transform p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Filters</h2>
              <button 
                onClick={() => setIsMobileFiltersOpen(false)}
                className="text-gray-500 hover:text-gray-900 p-2"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-4 tracking-wide uppercase text-sm">Categories</h3>
                <ul className="space-y-4">
                  <li>
                    <button
                      onClick={() => handleCategoryChange('All')}
                      className={`block text-left w-full text-base ${
                        selectedCategory === 'All' ? 'text-primary-600 font-bold' : 'text-gray-600'
                      }`}
                    >
                      All Products
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryChange(cat)}
                        className={`block text-left w-full text-base ${
                          selectedCategory === cat ? 'text-primary-600 font-bold' : 'text-gray-600'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;

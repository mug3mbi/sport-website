import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Heart, ChevronLeft, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import { productsList } from '../data';
import { useCart } from '../store/CartContext';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch delay
    setLoading(true);
    const timer = setTimeout(() => {
      const foundItem = productsList.find((p) => p.id === id);
      setProduct(foundItem || null);
      if (foundItem) {
        setSelectedSize(foundItem.sizes[0]);
        setSelectedColor(foundItem.colors[0]);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return;
    addToCart(product, selectedSize, selectedColor);
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 animate-pulse">
        <div className="h-6 bg-gray-200 w-32 rounded mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-square bg-gray-200 rounded-lg"></div>
          <div className="space-y-6">
            <div className="h-10 bg-gray-200 w-3/4 rounded"></div>
            <div className="h-8 bg-gray-200 w-1/4 rounded"></div>
            <div className="h-24 bg-gray-200 w-full rounded mt-8"></div>
            <div className="h-14 bg-gray-200 w-full rounded mt-8"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-500 mb-8">The product you are looking for does not exist or has been removed.</p>
        <button 
          onClick={() => navigate('/shop')}
          className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-primary-600 transition-colors"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <button 
        onClick={() => navigate(-1)}
        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors"
      >
        <ChevronLeft size={16} className="mr-1" /> Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative aspect-square md:aspect-[4/5] bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover mix-blend-multiply"
          />
          <button 
            onClick={() => toggleWishlist(product)}
            className={`absolute top-4 right-4 p-3 rounded-full bg-white shadow-md transition-colors ${
              isInWishlist(product.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
            }`}
          >
            <Heart fill={isInWishlist(product.id) ? "currentColor" : "none"} size={22} />
          </button>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-2">
            <Link to={`/shop?category=${product.category.replace(' ', '+')}`} className="text-sm font-bold text-primary-600 uppercase tracking-widest hover:text-primary-700 transition-colors">
              {product.category}
            </Link>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
            {product.name}
          </h1>
          <p className="text-2xl font-bold text-gray-900 mb-6">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Engineered for performance and absolute comfort. This premium {product.name.toLowerCase()} features sweat-wicking properties, 4-way stretch fabric, and an athletic fit designed to perfectly match your intensity.
          </p>

          <div className="space-y-6">
            {/* Color Selection */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-900">Color</span>
                <span className="text-sm text-gray-500">{selectedColor}</span>
              </div>
              <div className="flex space-x-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-md text-sm font-medium border ${
                      selectedColor === color 
                        ? 'border-gray-900 bg-gray-900 text-white' 
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    } transition-colors`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-900">Size</span>
                <button className="text-sm text-gray-500 underline hover:text-gray-900">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-md text-sm font-bold border flex items-center justify-center ${
                      selectedSize === size 
                        ? 'border-gray-900 bg-gray-900 text-white shadow-md' 
                        : 'border-gray-300 text-gray-900 hover:border-gray-900'
                    } transition-all`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 pb-8 border-b border-gray-100">
              <button
                onClick={handleAddToCart}
                className="w-full bg-primary-600 text-white font-bold text-lg py-4 rounded-md shadow-lg shadow-primary-500/30 hover:bg-primary-500 transform transition-all active:scale-[0.98]"
              >
                Add to Cart
              </button>
            </div>

            {/* Info Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center text-sm text-gray-600">
                <Truck className="text-primary-600 mr-3" size={20} />
                <span>Free standard shipping</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <RefreshCw className="text-primary-600 mr-3" size={20} />
                <span>Free 30-day returns</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <ShieldCheck className="text-primary-600 mr-3" size={20} />
                <span>Lifetime warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

import React, { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../store/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { toggleWishlist, isInWishlist } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-auto bg-gray-100 pb-[125%] overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'scale-105' : 'scale-100'
            } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </Link>
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full bg-white shadow-sm transition-all duration-200 ${
            isInWishlist(product.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
          } ${isHovered || isInWishlist(product.id) ? 'opacity-100' : 'opacity-0 sm:opacity-0 md:opacity-0 lg:opacity-0'}`}
          aria-label="Add to Wishlist"
        >
          <Heart fill={isInWishlist(product.id) ? 'currentColor' : 'none'} size={20} />
        </button>
      </div>
      
      <div className="p-4">
        <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide font-medium">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-base sm:text-lg font-bold text-gray-900">${product.price.toFixed(2)}</p>
          <Link
            to={`/product/${product.id}`}
            className="p-2 bg-gray-900 text-white rounded-md hover:bg-primary-600 transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]"
            aria-label="View Product"
          >
            <ShoppingBag size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

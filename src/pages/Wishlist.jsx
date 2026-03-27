import React from 'react';
import { useCart } from '../store/CartContext';
import ProductCard from '../components/ProductCard';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlist } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="flex items-center mb-8 pb-6 border-b border-gray-100">
        <Heart className="text-red-500 mr-3" size={28} />
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">
            Your Wishlist
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            {wishlist.length} Saved {wishlist.length === 1 ? 'Item' : 'Items'}
          </p>
        </div>
      </div>

      {wishlist.length === 0 ? (
        <div className="text-center py-24 bg-gray-50 rounded-xl border border-gray-100">
          <Heart size={64} className="mx-auto text-gray-300 mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Wishlist is Empty</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Save your favorite items here while you browse. They'll be waiting for you when you're ready to buy.
          </p>
          <Link
            to="/shop"
            className="inline-flex justify-center px-8 py-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-primary-600 transition-colors"
          >
            Explore Collection
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {wishlist.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

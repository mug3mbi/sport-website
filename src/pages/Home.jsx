import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ShieldCheck, Truck } from 'lucide-react';
import { productsList, categories } from '../data';
import ProductCard from '../components/ProductCard';

const Home = () => {
  // Get 4 random products for featured section
  const featuredProducts = [...productsList].sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/compression-tights/tight-10.jpg"
            alt="Athlete working out"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6">
              ENGINEERED FOR <span className="text-primary-500">PEAK</span> PERFORMANCE.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              Discover premium sports attire designed to push your limits. Lightweight, breathable, and built for the modern athlete.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-bold rounded-md text-gray-900 bg-primary-500 hover:bg-primary-400 transition-colors"
              >
                Shop Collection
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/shop?category=Training+Tops"
                className="inline-flex justify-center items-center px-8 py-3.5 border border-white text-base font-bold rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
              >
                View Tops
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <Zap className="text-primary-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-gray-900">Ultra Lightweight</h3>
                <p className="text-sm text-gray-500">Unrestricted movement</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ShieldCheck className="text-primary-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-gray-900">Premium Quality</h3>
                <p className="text-sm text-gray-500">Durable and sweat-wicking</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Truck className="text-primary-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="font-bold text-gray-900">Free Shipping</h3>
                <p className="text-sm text-gray-500">On all orders over $75</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/shop?category=${category.replace(' ', '+')}`}
                className="group relative h-64 sm:h-80 rounded-lg overflow-hidden flex flex-col justify-end p-6"
              >
                <div className="absolute inset-0">
                  <img
                    src={
                      category === 'Training Tops' ? '/training-tops/top-2.jpg' :
                      category === 'Compression Tights' ? '/compression-tights/tight-2.jpg' :
                      category === 'Sports Bras' ? '/bras/bra-2.jpg' :
                      '/training-tops/top-2.jpg'
                    }
                    alt={category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <h3 className="relative text-xl font-bold text-white mb-1">{category}</h3>
                <p className="relative text-primary-400 font-semibold group-hover:text-white transition-colors flex items-center text-sm">
                  Shop Now <ArrowRight className="ml-1" size={16} />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-4">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight">Trending Now</h2>
            <Link to="/shop" className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

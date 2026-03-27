import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X, User } from 'lucide-react';
import { useCart } from '../store/CartContext';

const Navbar = ({ setIsCartOpen, setIsAuthOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount, wishlist } = useCart();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-black text-primary-600 tracking-tighter" onClick={closeMobileMenu}>
              APEX<span className="text-gray-900">SPORT</span>
            </Link>
          </div>

          {/* Desktop Links Section */}
          <div className="hidden md:ml-6 md:flex md:space-x-8">
            <Link to="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary-500 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary-500 text-sm font-medium transition-colors">
              Shop All
            </Link>
          </div>

          {/* Icons Section */}
          <div className="flex items-center space-x-4 md:space-x-6">
             <button
              onClick={() => setIsAuthOpen(true)}
              className="text-gray-600 hover:text-gray-900 transition-colors hidden sm:block p-2"
              aria-label="User Account"
            >
              <User size={24} />
            </button>
            <Link to="/wishlist" className="text-gray-600 hover:text-gray-900 transition-colors relative p-2" onClick={closeMobileMenu}>
              <Heart size={24} />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full select-none pointer-events-none">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="text-gray-600 hover:text-gray-900 transition-colors relative p-2"
              aria-label="Cart"
            >
              <ShoppingBag size={24} />
              {getCartCount() > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-primary-600 rounded-full select-none pointer-events-none">
                  {getCartCount()}
                </span>
              )}
            </button>
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden ml-2">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} border-t border-gray-100 bg-white`}>
        <div className="pt-2 pb-4 space-y-1">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="block pl-3 pr-4 py-3 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 hover:border-primary-500 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/shop"
            onClick={closeMobileMenu}
            className="block pl-3 pr-4 py-3 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 hover:border-primary-500 transition-colors"
          >
            Shop All
          </Link>
          <button
            onClick={() => {
              setIsAuthOpen(true);
              closeMobileMenu();
            }}
            className="w-full text-left block pl-3 pr-4 py-3 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 hover:border-primary-500 transition-colors"
          >
            Login / Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

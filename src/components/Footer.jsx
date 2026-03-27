import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-black text-white tracking-tighter mb-4 inline-block">
              APEX<span className="text-primary-500">SPORT</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm">
              We provide the highest quality sports attire specifically curated for athletes built for absolute performance.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-200">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/shop" className="hover:text-primary-500 transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=Training+Tops" className="hover:text-primary-500 transition-colors">Training Tops</Link></li>
              <li><Link to="/shop?category=Sports+Bras" className="hover:text-primary-500 transition-colors">Sports Bras</Link></li>
              <li><Link to="/shop?category=Jerseys" className="hover:text-primary-500 transition-colors">Jerseys</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-200">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ApexSport. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

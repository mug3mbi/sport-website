import React, { useState, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import AuthModal from './components/AuthModal';

// Lazy loaded pages for 3G performance
const Home = React.lazy(() => import('./pages/Home'));
const Shop = React.lazy(() => import('./pages/Shop'));
const Product = React.lazy(() => import('./pages/Product'));
const Wishlist = React.lazy(() => import('./pages/Wishlist'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Global fallback skeleton for route transitions
const PageLoader = () => (
  <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh]">
    <div className="w-12 h-12 border-4 border-gray-200 border-t-primary-600 rounded-full animate-spin"></div>
    <p className="mt-4 text-gray-500 font-medium">Loading...</p>
  </div>
);

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 2000,
          style: {
            background: '#111827',
            color: '#fff',
            fontWeight: '600',
            fontSize: '14px',
            borderRadius: '8px',
          },
        }}
      />
      
      <Navbar 
        setIsCartOpen={setIsCartOpen} 
        setIsAuthOpen={setIsAuthOpen} 
      />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
      
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
      />

      <main className="flex-1 flex flex-col w-full">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;

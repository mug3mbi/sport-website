import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <ShieldAlert size={80} className="text-gray-300 mb-6" />
      <h1 className="text-6xl font-black text-gray-900 mb-4 tracking-tighter">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Page Not Found</h2>
      <p className="text-gray-500 max-w-md mx-auto mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-primary-600 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;

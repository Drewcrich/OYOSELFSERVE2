import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Calendar } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Building2 size={32} style={{ color: '#22c55e' }} className="mr-3" />
            <span className="text-2xl font-bold text-gray-800">OwnYourOwnStorage</span>
          </Link>
          
          <nav className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-xl text-gray-700 hover:text-green-500 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/book-tour" 
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-xl font-semibold transition-colors duration-200 flex items-center"
            >
              <Calendar size={24} className="mr-2" />
              Book Tour
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Calendar, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <Building2 size={28} style={{ color: '#22c55e' }} className="mr-2" />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">RentYourOwnStorage</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-lg text-gray-700 hover:text-green-500 font-medium transition-colors duration-200"
            >
              Home
            </Link>

            <Link 
              to="/pricing" 
              className="text-lg text-gray-700 hover:text-green-500 font-medium transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link 
              to="/book-tour" 
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center"
            >
              <Calendar size={20} className="mr-2" />
              Book Tour
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-white shadow-lg border-t border-gray-200 z-40">
            <nav className="flex flex-col px-4 py-4">
              <Link 
                to="/" 
                className="text-lg text-gray-700 hover:text-green-500 font-medium transition-colors duration-200 py-3 border-b border-gray-100"
                onClick={closeMenu}
              >
                Home
              </Link>

              <Link 
                to="/pricing" 
                className="text-lg text-gray-700 hover:text-green-500 font-medium transition-colors duration-200 py-3 border-b border-gray-100"
                onClick={closeMenu}
              >
                Pricing
              </Link>
              <Link 
                to="/book-tour" 
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center mt-3"
                onClick={closeMenu}
              >
                <Calendar size={20} className="mr-2" />
                Book Tour
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Calendar, Menu, X } from 'lucide-react';

const HeaderIndustrial = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-900 border-b-4 border-yellow-400 sticky top-0 z-50 shadow-2xl">
      {/* Industrial Metal Texture Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/industrial_metal_texture.png')`,
          backgroundSize: 'cover'
        }}
      />
      
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <div className="bg-orange-600 p-2 border-2 border-yellow-400 shadow-lg mr-3">
              <Building2 size={32} className="text-white" />
            </div>
            <span className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-wider">
              RentYourOwnStorage
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-lg text-gray-300 hover:text-yellow-400 font-bold uppercase tracking-wide transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-400"
            >
              Home
            </Link>

            <Link 
              to="/pricing" 
              className="text-lg text-gray-300 hover:text-yellow-400 font-bold uppercase tracking-wide transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-400"
            >
              Pricing
            </Link>
            <Link 
              to="/contact-us" 
              className="text-lg text-gray-300 hover:text-yellow-400 font-bold uppercase tracking-wide transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-400"
            >
              Contact Us
            </Link>
            <Link 
              to="/book-tour" 
              className="bg-orange-600 hover:bg-orange-700 border-4 border-yellow-400 text-white px-6 py-3 text-lg font-black uppercase tracking-wider transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center"
            >
              <Calendar size={20} className="mr-2" />
              Book Tour
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-3 bg-gray-800 border-2 border-gray-600 hover:bg-gray-700 transition-colors duration-200 z-50 shadow-lg"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-yellow-400" />
            ) : (
              <Menu size={24} className="text-yellow-400" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-gray-900 border-4 border-yellow-400 shadow-2xl z-40">
            {/* Mobile Menu Background */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url('/container_corrugated_texture.png')`,
                backgroundSize: '100px auto',
                backgroundRepeat: 'repeat'
              }}
            />
            
            <nav className="flex flex-col px-6 py-6 relative z-10">
              <Link 
                to="/" 
                className="text-lg text-gray-300 hover:text-yellow-400 font-bold uppercase tracking-wide transition-colors duration-200 py-4 border-b-2 border-gray-700"
                onClick={closeMenu}
              >
                Home
              </Link>

              <Link 
                to="/pricing" 
                className="text-lg text-gray-300 hover:text-yellow-400 font-bold uppercase tracking-wide transition-colors duration-200 py-4 border-b-2 border-gray-700"
                onClick={closeMenu}
              >
                Pricing
              </Link>
              <Link 
                to="/contact-us" 
                className="text-lg text-gray-300 hover:text-yellow-400 font-bold uppercase tracking-wide transition-colors duration-200 py-4 border-b-2 border-gray-700"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
              <Link 
                to="/book-tour" 
                className="bg-orange-600 hover:bg-orange-700 border-4 border-yellow-400 text-white px-8 py-4 text-lg font-black uppercase tracking-wider transition-all duration-200 shadow-xl flex items-center justify-center mt-4"
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

export default HeaderIndustrial;


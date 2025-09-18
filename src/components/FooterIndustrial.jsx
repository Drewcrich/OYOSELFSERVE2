import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, MapPin } from 'lucide-react';

const FooterIndustrial = () => {
  return (
    <footer className="bg-gray-900 border-t-4 border-yellow-400 text-white py-12 relative">
      {/* Industrial Metal Texture Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/industrial_metal_texture.png')`,
          backgroundSize: 'cover'
        }}
      />
      
      {/* Rivet Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/industrial_rivet_pattern.png')`,
          backgroundSize: '200px auto',
          backgroundRepeat: 'repeat'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-orange-600 p-3 border-4 border-yellow-400 shadow-xl mr-4">
                <Building2 size={32} className="text-white" />
              </div>
              <span className="text-2xl font-black uppercase tracking-wider">RentYourOwnStorage</span>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              <span className="text-yellow-400 font-bold uppercase">Heavy-Duty Steel Container Storage</span> in Urbana, IL. 
              Perfect for students, businesses, and moving solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300 bg-gray-800 border-2 border-gray-600 p-3">
                <MapPin size={20} className="mr-3 text-orange-500" />
                <span className="font-bold">1502 Airport Road, Urbana, IL 61802</span>
              </div>
              <div className="flex items-center text-gray-300 bg-gray-800 border-2 border-gray-600 p-3">
                <Mail size={20} className="mr-3 text-orange-500" />
                <span className="font-bold">Text or Call: 3055092759</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="bg-yellow-500 text-black px-4 py-2 mb-6 inline-block border-2 border-black">
              <h3 className="text-xl font-black uppercase tracking-wide">Quick Links</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors text-lg font-bold uppercase tracking-wide border-b-2 border-transparent hover:border-yellow-400 pb-1">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-yellow-400 transition-colors text-lg font-bold uppercase tracking-wide border-b-2 border-transparent hover:border-yellow-400 pb-1">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/book-tour" className="text-gray-300 hover:text-yellow-400 transition-colors text-lg font-bold uppercase tracking-wide border-b-2 border-transparent hover:border-yellow-400 pb-1">
                  Book Tour
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links & Business Hours */}
          <div>
            <div className="bg-orange-600 text-white px-4 py-2 mb-6 inline-block border-2 border-yellow-400">
              <h3 className="text-xl font-black uppercase tracking-wide">Legal & Hours</h3>
            </div>
            <ul className="space-y-3 mb-8">
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-yellow-400 transition-colors font-bold uppercase tracking-wide">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-300 hover:text-yellow-400 transition-colors font-bold uppercase tracking-wide">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-gray-300 hover:text-yellow-400 transition-colors font-bold uppercase tracking-wide">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-300 hover:text-yellow-400 transition-colors font-bold uppercase tracking-wide">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-gray-300 hover:text-yellow-400 transition-colors font-bold uppercase tracking-wide">
                  Refund Policy
                </Link>
              </li>
            </ul>
            
            <div className="bg-gray-800 border-4 border-gray-600 p-4">
              <h4 className="text-lg font-black mb-3 text-yellow-400 uppercase">Business Hours</h4>
              <p className="text-gray-300 font-bold">
                <span className="text-green-400">Container Access:</span> 24/7<br />
                <span className="text-orange-400">Support:</span> Mon-Fri 9AM-6PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="bg-gray-800 border-2 border-gray-600 px-6 py-3 mb-4 md:mb-0">
              <p className="text-gray-300 font-bold uppercase tracking-wide">
                © 2025 RentYourOwnStorage. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 text-sm flex-wrap">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-yellow-400 transition-colors font-bold uppercase">
                Privacy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-yellow-400 transition-colors font-bold uppercase">
                Terms
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-yellow-400 transition-colors font-bold uppercase">
                Accessibility
              </Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-yellow-400 transition-colors font-bold uppercase">
                Cookies
              </Link>
              <Link to="/refund-policy" className="text-gray-400 hover:text-yellow-400 transition-colors font-bold uppercase">
                Refunds
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterIndustrial;


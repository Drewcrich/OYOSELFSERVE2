import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Building2 size={28} className="text-green-500 mr-2" />
              <span className="text-xl font-bold">RentYourOwnStorage</span>
            </div>
            <p className="text-gray-300 mb-4">
              Affordable self-service storage containers in Urbana, IL. 
              Perfect for students, businesses, and moving solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-2 text-green-500" />
                <span>1502 Airport Road, Urbana, IL 61802</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2 text-green-500" />
                <span>Text or Call: 3055092759</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-green-500 transition-colors">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-green-500 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/book-tour" className="text-gray-300 hover:text-green-500 transition-colors">
                  Book Tour
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-green-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-300 hover:text-green-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-gray-300 hover:text-green-500 transition-colors">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-300 hover:text-green-500 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-gray-300 hover:text-green-500 transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-md font-semibold mb-2">Business Hours</h4>
              <p className="text-gray-300 text-sm">
                <strong>Container Access:</strong> 24/7<br />
                <strong>Support:</strong> Mon-Fri 9AM-6PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 RentYourOwnStorage. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm flex-wrap">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-green-500 transition-colors">
                Privacy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-green-500 transition-colors">
                Terms
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-green-500 transition-colors">
                Accessibility
              </Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-green-500 transition-colors">
                Cookies
              </Link>
              <Link to="/refund-policy" className="text-gray-400 hover:text-green-500 transition-colors">
                Refunds
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


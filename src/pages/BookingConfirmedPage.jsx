import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Calendar, Phone, MapPin, Clock } from 'lucide-react';

const BookingConfirmedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Google Ads conversion tracking can be added here
    // gtag('event', 'conversion', {'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL'});
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Industrial Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/industrial_metal_texture.png')`
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-green-600 border-4 border-green-400 p-6 rounded-full mb-8 shadow-2xl">
            <CheckCircle size={64} className="text-white" />
          </div>
          
          <div className="bg-yellow-500 border-4 border-black px-8 py-4 inline-block mb-6 shadow-xl">
            <h1 className="text-4xl font-black text-black uppercase tracking-wider">
              🎉 BOOKING CONFIRMED! 🎉
            </h1>
          </div>
          
          <div className="bg-orange-600 border-4 border-orange-400 px-6 py-3 inline-block shadow-xl">
            <p className="text-xl font-black text-white uppercase tracking-wide">
              Your Container Tour is Scheduled!
            </p>
          </div>
        </div>

        {/* Confirmation Details */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 border-4 border-gray-600 p-8 shadow-2xl mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* What Happens Next */}
              <div>
                <div className="bg-orange-600 border-2 border-orange-400 px-4 py-2 mb-6 inline-block">
                  <h2 className="text-2xl font-black text-white uppercase">What Happens Next</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-500 border-2 border-yellow-400 w-12 h-12 flex items-center justify-center font-black text-black text-xl">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-orange-400 mb-2">CONFIRMATION CALL</h3>
                      <p className="text-gray-300 font-bold">We'll call you within 1 hour to confirm your tour time and answer any questions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-500 border-2 border-yellow-400 w-12 h-12 flex items-center justify-center font-black text-black text-xl">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-orange-400 mb-2">CONTAINER TOUR</h3>
                      <p className="text-gray-300 font-bold">See our 320 sq ft containers, check security, and pick your perfect storage solution.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-500 border-2 border-yellow-400 w-12 h-12 flex items-center justify-center font-black text-black text-xl">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-orange-400 mb-2">SAME-DAY MOVE-IN</h3>
                      <p className="text-gray-300 font-bold">If you like what you see, move in today! No waiting, no hassle.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <div className="bg-orange-600 border-2 border-orange-400 px-4 py-2 mb-6 inline-block">
                  <h2 className="text-2xl font-black text-white uppercase">Contact Information</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gray-900 border-2 border-gray-700 p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Phone size={24} className="text-orange-400" />
                      <div>
                        <h3 className="text-xl font-black text-orange-400">TEXT OR CALL</h3>
                        <a href="tel:3055092759" className="text-xl font-black text-white hover:text-yellow-400 transition-colors">
                          3055092759
                        </a>
                      </div>
                    </div>
                    <p className="text-gray-300 font-bold">Questions? Text or Call anytime!</p>
                  </div>
                  
                  <div className="bg-gray-900 border-2 border-gray-700 p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <MapPin size={24} className="text-orange-400" />
                      <div>
                        <h3 className="text-xl font-black text-orange-400">LOCATION</h3>
                        <p className="text-white font-bold">Urbana, IL</p>
                      </div>
                    </div>
                    <p className="text-gray-300 font-bold">Easy access, secure facility</p>
                  </div>
                  
                  <div className="bg-gray-900 border-2 border-gray-700 p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Clock size={24} className="text-orange-400" />
                      <div>
                        <h3 className="text-xl font-black text-orange-400">TOUR HOURS</h3>
                        <p className="text-white font-bold">7 Days a Week</p>
                      </div>
                    </div>
                    <p className="text-gray-300 font-bold">Flexible scheduling available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Special Offer */}
          <div className="bg-yellow-500 border-4 border-black p-8 shadow-2xl text-center mb-8">
            <h2 className="text-3xl font-black text-black uppercase tracking-wider mb-4">
              ⚠️ TOUR DAY SPECIAL ⚠️
            </h2>
            <p className="text-xl font-black text-black mb-4">
              BOOK YOUR CONTAINER TODAY AND GET:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-black font-black">
              <div className="bg-orange-600 border-2 border-black p-4">
                <p className="text-lg">✅ NO SECURITY DEPOSIT</p>
              </div>
              <div className="bg-orange-600 border-2 border-black p-4">
                <p className="text-lg">✅ FIRST MONTH $75</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="text-center space-y-4">
            <button
              onClick={() => navigate('/')}
              className="bg-orange-600 hover:bg-orange-700 border-4 border-orange-400 text-white px-8 py-4 text-xl font-black uppercase tracking-wide shadow-xl transition-all duration-200 hover:scale-105 mr-4"
            >
              ← Back to Homepage
            </button>
            
            <button
              onClick={() => navigate('/pricing')}
              className="bg-green-600 hover:bg-green-700 border-4 border-green-400 text-white px-8 py-4 text-xl font-black uppercase tracking-wide shadow-xl transition-all duration-200 hover:scale-105"
            >
              View Pricing Details →
            </button>
          </div>

          {/* Trust Signals */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-800 border-2 border-gray-600 p-6">
              <div className="bg-green-600 border-2 border-green-400 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-black text-green-400 mb-2 uppercase">FULLY INSURED</h3>
              <p className="text-gray-300 font-bold">Your belongings are protected</p>
            </div>
            
            <div className="bg-gray-800 border-2 border-gray-600 p-6">
              <div className="bg-blue-600 border-2 border-blue-400 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-black text-blue-400 mb-2 uppercase">FAMILY OWNED</h3>
              <p className="text-gray-300 font-bold">Local Urbana business since years</p>
            </div>
            
            <div className="bg-gray-800 border-2 border-gray-600 p-6">
              <div className="bg-orange-600 border-2 border-orange-400 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-black text-orange-400 mb-2 uppercase">24/7 SUPPORT</h3>
              <p className="text-gray-300 font-bold">Always here when you need us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmedPage;


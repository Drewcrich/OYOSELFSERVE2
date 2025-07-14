import React from 'react';

const GoogleAdsLandingPage = () => {
  const scrollToPricing = () => {
    const pricingElement = document.getElementById('pricing-section');
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookTour = () => {
    // Open JotForm in same tab for better mobile experience
    window.location.href = 'https://form.jotform.com/242899275006057';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Critical Above-the-Fold Content - Optimized for Speed */}
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Prominent No Credit Check Banner - Mobile Optimized */}
          <div className="bg-green-500 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg mb-4 md:mb-6 inline-block shadow-lg">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-xl md:text-2xl">✅</span>
              <span className="font-bold text-base md:text-lg">NO CREDIT CHECK REQUIRED!</span>
            </div>
            <p className="text-xs md:text-sm mt-1">Choose prepaid and start storing today</p>
          </div>

          {/* Main Headline - Mobile Responsive */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
            Student Storage in Urbana
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 md:mb-6">
            320 sq ft containers • 24/7 Access • Near University of Illinois
          </p>

          {/* Quick Benefits - Mobile Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="bg-white p-3 md:p-4 rounded-lg shadow-md">
              <div className="text-2xl md:text-3xl mb-1 md:mb-2">🚗</div>
              <h3 className="font-semibold text-sm md:text-base">Drive-Up Access</h3>
              <p className="text-xs md:text-sm text-gray-600">No carrying boxes far</p>
            </div>
            <div className="bg-white p-3 md:p-4 rounded-lg shadow-md">
              <div className="text-2xl md:text-3xl mb-1 md:mb-2">📱</div>
              <h3 className="font-semibold text-sm md:text-base">Text Access Code</h3>
              <p className="text-xs md:text-sm text-gray-600">No office visits needed</p>
            </div>
            <div className="bg-white p-3 md:p-4 rounded-lg shadow-md">
              <div className="text-2xl md:text-3xl mb-1 md:mb-2">⏰</div>
              <h3 className="font-semibold text-sm md:text-base">24/7 Access</h3>
              <p className="text-xs md:text-sm text-gray-600">Store anytime you want</p>
            </div>
          </div>

          {/* CTA Button - Mobile Optimized */}
          <button
            onClick={scrollToPricing}
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-lg md:text-xl shadow-lg transition-colors duration-200 mb-6 md:mb-8 w-full sm:w-auto touch-manipulation"
          >
            See Pricing & Book Now
          </button>
        </div>
      </div>

      {/* Pricing Section - Main Focus - Mobile Optimized */}
      <div id="pricing-section" className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Choose Your Storage Plan
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Same 320 sq ft container • Different payment options
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Monthly Plan - Mobile Optimized */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 md:p-6 shadow-lg">
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Monthly Plan</h3>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-3 md:mb-4">
                  $95<span className="text-base md:text-lg">/month</span>
                </div>
                
                {/* Credit Check Required Notice - Mobile */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-blue-600">📋</span>
                    <span className="font-semibold text-blue-800 text-sm md:text-base">Credit Check Required</span>
                  </div>
                  <p className="text-xs md:text-sm text-blue-700 mt-1">1-2 business days for approval</p>
                </div>

                <ul className="text-left space-y-2 mb-4 md:mb-6 text-sm md:text-base">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 320 sq ft storage</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 access</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Drive-up convenience</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> $95 security deposit</li>
                </ul>

                <button
                  onClick={handleBookTour}
                  className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 px-4 md:px-6 rounded-lg transition-colors duration-200 touch-manipulation"
                >
                  Book Tour - Monthly Plan
                </button>
              </div>
            </div>

            {/* Prepaid Plan - Highlighted - Mobile Optimized */}
            <div className="bg-gradient-to-b from-green-50 to-green-100 border-2 border-green-400 rounded-lg p-4 md:p-6 shadow-lg relative">
              {/* Popular Badge - Mobile Responsive */}
              <div className="absolute -top-2 md:-top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>

              <div className="text-center pt-2 md:pt-0">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Prepaid Plan</h3>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-1">
                  $450<span className="text-base md:text-lg">/6 months</span>
                </div>
                <p className="text-sm text-green-700 mb-3 md:mb-4">Save $120 vs monthly!</p>
                
                {/* No Credit Check Highlight - Mobile */}
                <div className="bg-green-500 text-white rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-xl md:text-2xl">✅</span>
                    <span className="font-bold text-sm md:text-base">NO CREDIT CHECK!</span>
                  </div>
                  <p className="text-xs md:text-sm mt-1">Start storing immediately</p>
                </div>

                <ul className="text-left space-y-2 mb-4 md:mb-6 text-sm md:text-base">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 320 sq ft storage</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 access</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Drive-up convenience</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> $95 security deposit</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> <strong>Same day access</strong></li>
                </ul>

                <button
                  onClick={handleBookTour}
                  className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-bold py-3 px-4 md:px-6 rounded-lg transition-colors duration-200 touch-manipulation"
                >
                  Book Tour - Prepaid Plan
                </button>
              </div>
            </div>
          </div>

          {/* Process Steps - Mobile Stack */}
          <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">How It Works</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-lg md:text-2xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-semibold mb-2 text-sm md:text-base">Book Tour</h4>
                <p className="text-xs md:text-sm text-gray-600">Fill out quick form</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-lg md:text-2xl font-bold text-blue-600">2</span>
                </div>
                <h4 className="font-semibold mb-2 text-sm md:text-base">Get Access Code</h4>
                <p className="text-xs md:text-sm text-gray-600">Text within 30 minutes</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-lg md:text-2xl font-bold text-blue-600">3</span>
                </div>
                <h4 className="font-semibold mb-2 text-sm md:text-base">Visit Container</h4>
                <p className="text-xs md:text-sm text-gray-600">24/7 self-guided tour</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-lg md:text-2xl font-bold text-blue-600">4</span>
                </div>
                <h4 className="font-semibold mb-2 text-sm md:text-base">Start Storing</h4>
                <p className="text-xs md:text-sm text-gray-600">Same day (prepaid) or after approval</p>
              </div>
            </div>
          </div>

          {/* Final CTA - Mobile Optimized */}
          <div className="text-center mt-8 md:mt-12">
            <div className="bg-gray-50 rounded-lg p-4 md:p-6 max-w-2xl mx-auto">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Book a tour now and get your access code within 30 minutes!
              </p>
              <button
                onClick={handleBookTour}
                className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-bold py-3 px-6 md:px-8 rounded-lg text-base md:text-lg transition-colors duration-200 w-full sm:w-auto touch-manipulation"
              >
                Book Your Tour Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info - Mobile Optimized */}
      <div className="bg-gray-900 text-white py-6 md:py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Questions? We're Here to Help!</h3>
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-center md:items-center md:space-x-8 text-sm md:text-base">
            <div className="flex items-center justify-center">
              <span className="mr-2">📞</span>
              <a href="tel:5228143354" className="hover:text-blue-300">(522) 814-3354</a>
            </div>
            <div className="flex items-center justify-center">
              <span className="mr-2">📍</span>
              <span>1502 Airport Road, Urbana, IL</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="mr-2">🕒</span>
              <span>24/7 Container Access</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAdsLandingPage;


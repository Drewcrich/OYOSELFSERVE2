import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleMap from '../components/GoogleMap';
import PhotoSlideshow from '../components/PhotoSlideshow';

const HomePage = () => {
  const navigate = useNavigate();

  // Simplified photo selection - just one key slideshow
  const facilityPhotos = [
    {
      src: '/Screenshot2025-06-17100127.png',
      alt: 'Storage Facility',
      caption: 'Our secure storage facility in Urbana'
    },
    {
      src: '/Screenshot2025-06-17100212.png',
      alt: 'Easy Access',
      caption: 'Drive right up to your container'
    },
    {
      src: '/Screenshot2025-07-05132432.png',
      alt: 'Container Interior',
      caption: 'Spacious 320 sq ft interior'
    }
  ];

  return (
    <div className="homepage">
      {/* Simplified Hero Section */}
      <div className="hero-section bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-gray-800 mb-6">
              Storage Made Simple
            </h1>
            <p className="text-2xl text-gray-600 mb-4">
              Rent a storage container in Urbana, IL
            </p>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              No office visits. No paperwork. Book online, get your container details by text, 
              and start storing the same day.
            </p>
            
            <div className="bg-green-500 text-white py-6 px-10 rounded-lg inline-block mb-10">
              <p className="text-3xl font-bold">Book in 1 Minute, Store Today</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button 
                onClick={() => navigate('/book-tour')}
                className="bg-green-500 hover:bg-green-600 text-white px-10 py-6 rounded-lg text-2xl font-semibold transition-colors duration-200"
              >
                📋 Book Tour Now
              </button>
              <button 
                onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-6 rounded-lg text-2xl font-semibold transition-colors duration-200"
              >
                💰 See Pricing
              </button>
            </div>
          </div>

          {/* Single Photo Slideshow */}
          <div className="max-w-4xl mx-auto mb-12">
            <PhotoSlideshow 
              photos={facilityPhotos} 
              autoPlay={true} 
              interval={5000}
              className="h-96"
            />
          </div>
        </div>
      </div>

      {/* Simplified Process Section */}
      <div className="process-section py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              How It Works
            </h2>
            <p className="text-2xl text-gray-600">
              Simple steps to get your storage container
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-green-50 rounded-lg">
              <div className="text-6xl mb-6">📋</div>
              <h3 className="text-2xl font-semibold mb-4">1. Book Online</h3>
              <p className="text-xl text-gray-600">Fill out a quick form with your name, phone, and email</p>
              <p className="text-green-600 font-semibold mt-4 text-lg">Takes 1 minute</p>
            </div>
            
            <div className="text-center p-8 bg-blue-50 rounded-lg">
              <div className="text-6xl mb-6">📱</div>
              <h3 className="text-2xl font-semibold mb-4">2. Get Text Message</h3>
              <p className="text-xl text-gray-600">We text you the container location and access code</p>
              <p className="text-blue-600 font-semibold mt-4 text-lg">Within 30 minutes</p>
            </div>
            
            <div className="text-center p-8 bg-purple-50 rounded-lg">
              <div className="text-6xl mb-6">👀</div>
              <h3 className="text-2xl font-semibold mb-4">3. Visit Container</h3>
              <p className="text-xl text-gray-600">Drive to the container and take a look inside</p>
              <p className="text-purple-600 font-semibold mt-4 text-lg">Anytime, 24/7</p>
            </div>
            
            <div className="text-center p-8 bg-orange-50 rounded-lg">
              <div className="text-6xl mb-6">✅</div>
              <h3 className="text-2xl font-semibold mb-4">4. Start Storing</h3>
              <p className="text-xl text-gray-600">If you like it, complete rental online and start using it</p>
              <p className="text-orange-600 font-semibold mt-4 text-lg">Same day</p>
            </div>
          </div>
          
          <div className="text-center mt-12 p-6 bg-green-100 rounded-lg max-w-2xl mx-auto">
            <p className="text-2xl font-semibold text-green-800">Total Time: About 10 minutes</p>
            <p className="text-xl text-green-700 mt-2">No office visits • Available 24/7</p>
          </div>
        </div>
      </div>

      {/* Simplified Pricing Section */}
      <div id="pricing" className="pricing-section py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Simple Pricing</h2>
            <p className="text-2xl text-gray-600 mb-6">
              All containers are the same size: 40ft × 8ft × 10ft (320 square feet)
            </p>
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-6 inline-block">
              <p className="text-2xl font-semibold text-yellow-800">
                💰 Save money by paying ahead: $75/month with 6-month plan
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Month-to-Month Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center">
              <h3 className="text-3xl font-bold mb-6">Month-to-Month</h3>
              <div className="text-5xl font-bold text-gray-800 mb-4">$115<span className="text-2xl">/month</span></div>
              <p className="text-xl text-gray-600 mb-8">Pay each month</p>
              
              <ul className="text-left space-y-3 mb-8 text-lg">
                <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span>320 sq ft secure container</li>
                <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span>24/7 access</li>
                <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span>Drive-up access</li>
                <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span>No long-term commitment</li>
              </ul>
              
              <button 
                onClick={() => navigate('/book-tour')}
                className="w-full bg-gray-500 hover:bg-gray-600 text-white py-4 px-6 rounded-lg text-xl font-semibold transition-colors duration-200"
              >
                Choose This Plan
              </button>
            </div>

            {/* 3-Month Plan */}
            <div className="bg-white border-2 border-blue-500 rounded-lg p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full text-lg font-semibold">
                Most Popular
              </div>
              <h3 className="text-3xl font-bold mb-6">3-Month Plan</h3>
              <div className="text-5xl font-bold text-gray-800 mb-2">$105<span className="text-2xl">/month</span></div>
              <div className="text-lg text-gray-500 line-through mb-4">Was $115/month</div>
              <p className="text-xl text-gray-600 mb-8">Save $10 per month</p>
              
              <ul className="text-left space-y-3 mb-8 text-lg">
                <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span>320 sq ft secure container</li>
                <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span>24/7 access</li>
                <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span>Drive-up access</li>
                <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span>$30 total savings</li>
              </ul>
              
              <button 
                onClick={() => navigate('/book-tour')}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-lg text-xl font-semibold transition-colors duration-200"
              >
                Choose This Plan
              </button>
            </div>

            {/* 6-Month Plan */}
            <div className="bg-white border-2 border-green-500 rounded-lg p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-full text-lg font-semibold">
                Best Value
              </div>
              <h3 className="text-3xl font-bold mb-6">6-Month Plan</h3>
              <div className="text-5xl font-bold text-gray-800 mb-2">$75<span className="text-2xl">/month</span></div>
              <div className="text-lg text-gray-500 line-through mb-4">Was $115/month</div>
              <p className="text-xl text-gray-600 mb-8">Save $40 per month</p>
              
              <ul className="text-left space-y-3 mb-8 text-lg">
                <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span>320 sq ft secure container</li>
                <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span>24/7 access</li>
                <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span>Drive-up access</li>
                <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span>$240 total savings</li>
              </ul>
              
              <button 
                onClick={() => navigate('/book-tour')}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg text-xl font-semibold transition-colors duration-200"
              >
                Choose This Plan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified FAQ Section */}
      <div className="faq-section py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Common Questions</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">What happens after I book?</h3>
              <p className="text-xl text-gray-700">You'll get an email confirmation right away, then a text message within 30 minutes with your container location and access code.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">How big is the container?</h3>
              <p className="text-xl text-gray-700">All containers are 40 feet long, 8 feet wide, and 10 feet tall. That's 320 square feet - enough for a 3-4 bedroom home.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Is it secure?</h3>
              <p className="text-xl text-gray-700">Yes! Heavy-duty steel construction with secure locks. Only you have the access code.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Can I access it anytime?</h3>
              <p className="text-xl text-gray-700">Yes, 24 hours a day, 7 days a week. Drive right up to your container whenever you need something.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">What if I don't like it?</h3>
              <p className="text-xl text-gray-700">No problem! The tour is free. You only pay if you decide to rent after seeing the container.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section with Map */}
      <div className="contact-section py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Visit Us</h2>
            <p className="text-2xl text-gray-600">1502 Airport Road, Urbana IL 61802</p>
            <p className="text-xl text-gray-600 mt-4">Email: Drewcrichardson1999@gmail.com</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <GoogleMap />
          </div>
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="cta-section py-20 bg-green-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-2xl mb-10">Book your free tour now - it only takes 1 minute</p>
          <button 
            onClick={() => navigate('/book-tour')}
            className="bg-white text-green-500 hover:bg-gray-100 px-12 py-6 rounded-lg text-2xl font-semibold transition-colors duration-200"
          >
            📋 Book Your Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;


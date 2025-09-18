import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PhotoSlideshow from '../components/PhotoSlideshow';
import GoogleMap from '../components/GoogleMap';
import CustomerReviews from '../components/CustomerReviews';

const HomePage = () => {
  const navigate = useNavigate();

  // Updated facility photos slideshow
  const facilityPhotos = [
    {
      src: '/goodentrencephoto.png',
      alt: 'Facility Entrance',
      caption: 'Easy access to our secure storage facility'
    },
    {
      src: '/entrancefardistance.png',
      alt: 'Facility Overview',
      caption: 'Our storage facility from a distance'
    },
    {
      src: '/Screenshot2025-07-05132743.png',
      alt: 'Container Interior View',
      caption: 'Spacious 320 sq ft container interior'
    },
    {
      src: '/Screenshot2025-07-05132758.png',
      alt: 'Container Storage Space',
      caption: 'Clean, secure storage space'
    },
    {
      src: '/Screenshot2025-07-05132336.png',
      alt: 'Container Access',
      caption: 'Easy container access and loading'
    },

    {
      src: '/Screenshot2025-06-17100319.png',
      alt: 'Container Exterior',
      caption: 'Durable steel construction'
    },
    {
      src: '/Screenshot2025-06-17100306.png',
      alt: 'Container Setup',
      caption: 'Well-organized container layout'
    },
    {
      src: '/Screenshot2025-06-17100253.png',
      alt: 'Storage Area',
      caption: 'Secure storage environment'
    },
    {
      src: '/Screenshot2025-07-05132720.png',
      alt: 'Container Interior',
      caption: 'Complete weather protection'
    },
    {
      src: '/Screenshot2025-06-17100212.png',
      alt: 'Drive-up Access',
      caption: 'Drive right up to your container'
    }
  ];

  return (
    <div className="homepage bg-gray-900 text-white">
      {/* Industrial Hero Section */}
      <div className="hero-section relative bg-gradient-to-br from-gray-800 via-gray-900 to-black py-20 overflow-hidden">
        {/* Industrial Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            {/* Industrial-style header with stencil font effect */}
            <div className="mb-8">
              <div className="inline-block bg-yellow-500 text-black px-6 py-2 transform -rotate-1 mb-4">
                <p className="text-lg font-bold tracking-wider">SHIPPING CONTAINER STORAGE</p>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
              <span className="text-yellow-400">CHEAP</span> STORAGE<br/>
              <span className="text-orange-400">CONTAINERS</span><br/>
              <span className="text-sm md:text-2xl font-normal text-gray-300">URBANA, ILLINOIS</span>
            </h1>
            
            {/* Industrial pricing banner */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 border-4 border-yellow-400 rounded-none py-4 px-8 inline-block mb-6 transform rotate-1 shadow-2xl">
              <p className="text-2xl md:text-3xl font-black text-white tracking-wider">
                $75/MONTH • NO CREDIT CHECK
              </p>
            </div>
            
            {/* Industrial urgency banner */}
            <div className="bg-red-700 border-2 border-yellow-400 py-3 px-6 inline-block mb-6 transform -rotate-1">
              <p className="text-lg font-bold text-yellow-400 tracking-wide">
                ⚠️ ONLY 8 CONTAINERS LEFT AT THIS PRICE ⚠️
              </p>
            </div>
            
            {/* Industrial trust badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-gray-800 border-2 border-gray-600 px-4 py-2 transform rotate-1">
                <p className="text-sm font-bold text-yellow-400">🔒 FULLY INSURED</p>
              </div>
              <div className="bg-gray-800 border-2 border-gray-600 px-4 py-2 transform -rotate-1">
                <p className="text-sm font-bold text-yellow-400">📹 24/7 SECURITY</p>
              </div>
              <div className="bg-gray-800 border-2 border-gray-600 px-4 py-2 transform rotate-1">
                <p className="text-sm font-bold text-yellow-400">🏢 LOCAL SINCE 1995</p>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              <span className="text-yellow-400 font-bold">HEAVY-DUTY STEEL CONTAINERS</span> for University of Illinois students, businesses, and moving. 
              <span className="text-orange-400 font-bold"> NO OFFICE VISITS. NO PAPERWORK.</span> Book online and start storing today.
            </p>

            {/* Industrial call-to-action banner */}
            <div className="bg-yellow-500 text-black py-4 px-8 inline-block mb-10 transform rotate-1 shadow-2xl">
              <p className="text-2xl md:text-3xl font-black tracking-wider">BOOK IN 1 MINUTE • STORE TODAY</p>
            </div>
            
            {/* Industrial CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button 
                onClick={() => navigate('/book-tour')}
                className="bg-orange-600 hover:bg-orange-700 border-4 border-yellow-400 text-white px-12 py-6 text-2xl font-black tracking-wider transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                🚀 GET MY CONTAINER NOW
              </button>
              <button 
                onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gray-700 hover:bg-gray-600 border-4 border-gray-500 text-yellow-400 px-12 py-6 text-2xl font-black tracking-wider transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                💰 VIEW PRICING
              </button>
            </div>
          </div>

          {/* Industrial Photo Slideshow */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="bg-gray-800 border-4 border-gray-600 p-4">
              <PhotoSlideshow 
                photos={facilityPhotos} 
                autoPlay={true} 
                interval={6000}
                className="h-96"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Industrial How It Works Section */}
      <div className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-500 text-black px-6 py-2 mb-4">
              <h2 className="text-2xl font-black tracking-wider">HOW IT WORKS</h2>
            </div>
            <p className="text-xl text-gray-300">Simple steps to get your steel container</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center bg-gray-900 border-2 border-gray-600 p-6">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">BOOK ONLINE</h3>
              <p className="text-gray-300 mb-2">Fill out quick form</p>
              <p className="text-orange-400 font-bold">Takes 1 minute</p>
            </div>

            <div className="text-center bg-gray-900 border-2 border-gray-600 p-6">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">GET TEXT</h3>
              <p className="text-gray-300 mb-2">Container location & access code</p>
              <p className="text-orange-400 font-bold">Within 30 minutes</p>
            </div>

            <div className="text-center bg-gray-900 border-2 border-gray-600 p-6">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">INSPECT</h3>
              <p className="text-gray-300 mb-2">Drive up and check it out</p>
              <p className="text-orange-400 font-bold">Anytime, 24/7</p>
            </div>

            <div className="text-center bg-gray-900 border-2 border-gray-600 p-6">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">START STORING</h3>
              <p className="text-gray-300 mb-2">Complete rental & use it</p>
              <p className="text-orange-400 font-bold">Same day</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-yellow-500 text-black py-3 px-8 inline-block">
              <p className="text-xl font-black">TOTAL TIME: 10 MINUTES • NO OFFICE VISITS • 24/7 ACCESS</p>
            </div>
          </div>
        </div>
      </div>



      {/* Industrial Services Section */}
      <div className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-500 text-black px-6 py-2 mb-4">
              <h2 className="text-2xl font-black tracking-wider">CONTAINER STORAGE SOLUTIONS</h2>
            </div>
            <p className="text-xl text-gray-300">Serving University of Illinois students, businesses, and families in Urbana</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-900 border-2 border-gray-600 p-8">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">STUDENT STORAGE</h3>
              <p className="text-gray-300 mb-4">Perfect for University of Illinois students! Store dorm furniture, textbooks, and belongings during summer break or semester abroad.</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Summer storage for dorm items</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Semester break solutions</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Near UIUC campus</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Affordable student rates</li>
              </ul>
            </div>

            <div className="bg-gray-900 border-2 border-gray-600 p-8">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">BUSINESS INVENTORY</h3>
              <p className="text-gray-300 mb-4">Secure business inventory storage in Urbana. Perfect for excess stock, seasonal items, equipment, and documents.</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Inventory overflow storage</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Equipment and supplies</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Document archiving</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> 24/7 business access</li>
              </ul>
            </div>

            <div className="bg-gray-900 border-2 border-gray-600 p-8">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">MOVING STORAGE</h3>
              <p className="text-gray-300 mb-4">Temporary storage during your move to or from Urbana. Store belongings between homes or during renovations.</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Temporary moving storage</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Home renovation storage</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Flexible rental periods</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Drive-up convenience</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl text-gray-300 mb-6">Need <span className="text-yellow-400 font-bold">heavy-duty steel containers</span> in Urbana? We have the perfect solution!</p>
            <button 
              onClick={() => navigate('/book-tour')}
              className="bg-orange-600 hover:bg-orange-700 border-4 border-yellow-400 text-white px-10 py-4 text-xl font-black tracking-wider transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              FIND YOUR CONTAINER SOLUTION
            </button>
          </div>
        </div>
      </div>



      {/* Industrial Pricing Section */}
      <div id="pricing" className="py-20 bg-gradient-to-br from-gray-800 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-600 text-white px-6 py-2 mb-4">
              <h2 className="text-2xl font-black tracking-wider">CONTAINER PRICING</h2>
            </div>
            <p className="text-xl text-gray-300 mb-4">All containers are the same size: <span className="text-yellow-400 font-bold">40ft × 8ft × 10ft (320 square feet)</span></p>
            <p className="text-lg text-gray-300">Complete weather protection for your belongings</p>
            
            <div className="bg-red-700 border-4 border-yellow-400 py-4 px-8 inline-block mt-6 transform rotate-1">
              <p className="text-xl font-black text-yellow-400">🎉 GRAND OPENING SPECIAL: $95/month or save with 6-month prepay at $75/month</p>
            </div>
            <p className="text-gray-400 mt-4">6-month minimum lease • Limited time launch pricing</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard Plan - Industrial Style */}
            <div className="bg-gray-900 border-4 border-blue-500 p-8 relative">
              <div className="absolute -top-4 left-4 bg-blue-500 text-white px-4 py-1">
                <span className="font-bold">MOST POPULAR</span>
              </div>
              
              <h3 className="text-3xl font-black text-white mb-2">6-MONTH STANDARD</h3>
              <div className="text-5xl font-black text-blue-400 mb-4">$95<span className="text-2xl text-gray-400">/month</span></div>
              <p className="text-lg text-gray-300 mb-4">Pay monthly within 6-month lease</p>
              <p className="text-xl text-gray-300 mb-6">Total: <span className="text-blue-400 font-bold">$570 for 6 months</span></p>
              
              <div className="bg-blue-900 border-2 border-blue-600 p-4 mb-6">
                <p className="text-blue-300 font-bold">📋 CREDIT CHECK REQUIRED</p>
                <p className="text-gray-300 text-sm">Monthly payment plans require credit approval</p>
              </div>

              <ul className="text-gray-300 space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> 320 sq ft secure container</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Complete weather protection</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> 24/7 access</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Drive-up access</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> 6-month minimum commitment</li>
              </ul>

              <button 
                onClick={() => navigate('/book-tour')}
                className="w-full bg-blue-600 hover:bg-blue-700 border-2 border-blue-400 text-white py-4 text-xl font-black tracking-wider transition-all duration-200"
              >
                CHOOSE THIS PLAN
              </button>
            </div>

            {/* Saver Plan - Industrial Style */}
            <div className="bg-gray-900 border-4 border-green-500 p-8 relative">
              <div className="absolute -top-4 left-4 bg-green-500 text-white px-4 py-1">
                <span className="font-bold">BEST VALUE</span>
              </div>
              
              <h3 className="text-3xl font-black text-white mb-2">6-MONTH SAVER</h3>
              <div className="text-5xl font-black text-green-400 mb-2">$75<span className="text-2xl text-gray-400">/month</span></div>
              <p className="text-lg text-gray-400 line-through mb-2">Was $95/month</p>
              <p className="text-lg text-gray-300 mb-4">Pay 6 months upfront and save</p>
              <p className="text-xl text-gray-300 mb-6">Total: <span className="text-green-400 font-bold">$450 (Save $120!)</span></p>
              
              <div className="bg-green-900 border-2 border-green-600 p-4 mb-6">
                <p className="text-green-300 font-bold">✅ NO CREDIT CHECK REQUIRED!</p>
                <p className="text-gray-300 text-sm">Start storing immediately with prepayment</p>
              </div>

              <ul className="text-gray-300 space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> 320 sq ft secure container</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Complete weather protection</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> 24/7 access</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Drive-up access</li>
                <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> $120 total savings</li>
              </ul>

              <button 
                onClick={() => navigate('/book-tour')}
                className="w-full bg-green-600 hover:bg-green-700 border-2 border-green-400 text-white py-4 text-xl font-black tracking-wider transition-all duration-200"
              >
                CHOOSE THIS PLAN
              </button>
            </div>
          </div>

          {/* Security Deposit - Industrial Style */}
          <div className="max-w-4xl mx-auto mt-12 bg-gray-800 border-2 border-gray-600 p-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">SECURITY DEPOSIT INFORMATION</h3>
            <p className="text-gray-300 leading-relaxed">
              We require a security deposit equal to one month's rent. For example: if you choose the $95/month plan, your security deposit is $95. 
              If you choose the $75/month plan, your security deposit is $75. The good news is that your security deposit is 
              <span className="text-green-400 font-bold"> fully refunded</span> when your lease ends, as long as the container is returned in good condition.
            </p>
          </div>
        </div>
      </div>

      {/* Industrial FAQ Section */}
      <div className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-500 text-black px-6 py-2 mb-4">
              <h2 className="text-2xl font-black tracking-wider">COMMON QUESTIONS</h2>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gray-900 border-2 border-gray-600 p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">What happens after I book?</h3>
              <p className="text-gray-300">You'll get an email confirmation right away, then a text message within 30 minutes with your container location and access code.</p>
            </div>

            <div className="bg-gray-900 border-2 border-gray-600 p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">How big is the container?</h3>
              <p className="text-gray-300">All containers are 40 feet long, 8 feet wide, and 10 feet tall. That's 320 square feet - enough for a 3-4 bedroom home.</p>
            </div>

            <div className="bg-gray-900 border-2 border-gray-600 p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Is it secure?</h3>
              <p className="text-gray-300">Yes! Heavy-duty steel construction with secure locks. Only you have the access code.</p>
            </div>

            <div className="bg-gray-900 border-2 border-gray-600 p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Can I access it anytime?</h3>
              <p className="text-gray-300">Yes, 24 hours a day, 7 days a week. Drive right up to your container whenever you need something.</p>
            </div>

            <div className="bg-gray-900 border-2 border-gray-600 p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Do you require credit checks?</h3>
              <p className="text-gray-300">
                <span className="text-green-400 font-bold">Prepay for 6 months: No credit check required!</span> Start storing immediately.<br/><br/>
                Monthly payment plans require a credit check for approval. We recommend prepaying to skip the credit check and start storing right away.
              </p>
            </div>

            <div className="bg-gray-900 border-2 border-gray-600 p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">What if I don't like it?</h3>
              <p className="text-gray-300">No problem! The tour is free. You only pay if you decide to rent after seeing the container.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Industrial Contact Section */}
      <div className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-600 text-white px-6 py-2 mb-4">
              <h2 className="text-2xl font-black tracking-wider">VISIT US</h2>
            </div>
            <p className="text-2xl text-yellow-400 font-bold">1502 Airport Road, Urbana IL 61802</p>
            <p className="text-xl text-gray-300 mt-2">Text or Call: 3055092759</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Our Facility Entrance</h3>
              <p className="text-gray-300 mb-4">Easy to find location on Airport Road</p>
              <img 
                src="/goodentrencephoto.png" 
                alt="Facility Entrance" 
                className="w-full h-64 object-cover border-4 border-gray-600"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Find Us on the Map</h3>
              <div className="border-4 border-gray-600">
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industrial Final CTA */}
      <div className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              READY TO GET STARTED?
            </h2>
            <p className="text-2xl text-yellow-200 mb-8">Book your free tour now - it only takes 1 minute</p>
            
            <button 
              onClick={() => navigate('/book-tour')}
              className="bg-yellow-500 hover:bg-yellow-400 border-4 border-white text-black px-16 py-6 text-3xl font-black tracking-wider transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              📋 BOOK YOUR TOUR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
              </div>
            </div>
            <p className="text-2xl text-gray-600 mb-4">
              Student Storage, Business Inventory & Moving Solutions in Urbana, IL
            </p>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Cheap storage containers perfect for University of Illinois students, businesses, and moving. 
              No office visits. No paperwork. Book online, get your container details by text, 
              and start storing the same day.
            </p>
            
            <div className="bg-green-500 text-white py-6 px-10 rounded-lg inline-block mb-10">
              <p className="text-3xl font-bold">Book in 1 Minute, Store Today</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button 
                onClick={() => navigate('/book-tour')}
                className="bg-green-500 hover:bg-green-600 text-white px-10 py-6 rounded-lg text-2xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                🚀 Get My Container in 1 Minute
              </button>
              <button 
                onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-6 rounded-lg text-2xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                💰 See All Pricing Options
              </button>
            </div>
          </div>

          {/* Single Photo Slideshow - Optimized for Speed */}
          <div className="max-w-4xl mx-auto mb-12">
            <PhotoSlideshow 
              photos={facilityPhotos} 
              autoPlay={true} 
              interval={6000}
              className="h-96"
              loading="lazy"
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

      {/* Trust and Credibility Section */}
      <div className="trust-section py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Trusted by Our Community</h2>
          </div>
          
          {/* White Card Container */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {/* Happy Customers */}
                <div>
                  <div className="text-5xl font-bold text-green-500 mb-3">5000+</div>
                  <h4 className="text-xl font-medium text-gray-600">Happy Customers</h4>
                </div>
                
                {/* Years in Business */}
                <div>
                  <div className="text-5xl font-bold text-green-500 mb-3">30+</div>
                  <h4 className="text-xl font-medium text-gray-600">Years in Business</h4>
                </div>
                
                {/* 24/7 Access */}
                <div>
                  <div className="text-5xl font-bold text-green-500 mb-3">24/7</div>
                  <h4 className="text-xl font-medium text-gray-600">Access Available</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO-Optimized Use Cases Section */}
      <div className="use-cases-section py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Perfect Storage Solutions for Every Need</h2>
            <p className="text-xl text-gray-600">Serving University of Illinois students, businesses, and families in Urbana</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Student Storage */}
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="text-5xl mb-6">🎓</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Student Storage Urbana</h3>
              <p className="text-gray-700 mb-6">
                Perfect for University of Illinois students! Store dorm furniture, textbooks, and belongings 
                during summer break or semester abroad. Close to campus with easy access.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>✓ Summer storage for dorm items</li>
                <li>✓ Semester break solutions</li>
                <li>✓ Near University of Illinois campus</li>
                <li>✓ Affordable student rates</li>
              </ul>
            </div>

            {/* Business Storage */}
            <div className="bg-green-50 rounded-lg p-8 text-center">
              <div className="text-5xl mb-6">🏢</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Business Inventory Storage</h3>
              <p className="text-gray-700 mb-6">
                Secure business inventory storage in Urbana. Perfect for excess stock, seasonal items, 
                equipment, and documents. 24/7 access means you can restock anytime.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>✓ Inventory overflow storage</li>
                <li>✓ Equipment and supplies</li>
                <li>✓ Document archiving</li>
                <li>✓ 24/7 business access</li>
              </ul>
            </div>

            {/* Moving Storage */}
            <div className="bg-orange-50 rounded-lg p-8 text-center">
              <div className="text-5xl mb-6">📦</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Moving Storage Solutions</h3>
              <p className="text-gray-700 mb-6">
                Temporary storage during your move to or from Urbana. Store belongings between 
                homes, during renovations, or while house hunting. Flexible rental terms.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>✓ Temporary moving storage</li>
                <li>✓ Home renovation storage</li>
                <li>✓ Flexible rental periods</li>
                <li>✓ Drive-up convenience</li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-xl text-gray-600 mb-6">
              Need cheap storage containers in Urbana? We have the perfect solution!
            </p>
            <button 
              onClick={() => navigate('/book-tour')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors duration-200"
            >
              Find Your Storage Solution
            </button>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <CustomerReviews />

      {/* Simplified Pricing Section */}
      <div id="pricing" className="pricing-section py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Grand Opening Pricing</h2>
            <p className="text-2xl text-gray-600 mb-6">
              All containers are the same size: 40ft × 8ft × 10ft (320 square feet)
            </p>
            <p className="text-2xl text-gray-600 mb-6">
              Complete weather protection for your belongings
            </p>
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-6 inline-block">
              <p className="text-2xl font-semibold text-yellow-800">
                🎉 Grand Opening Special: $95/month or save with 6-month prepay at $75/month
              </p>
            </div>
            <p className="text-lg text-gray-600 mt-4">
              6-month minimum lease • Limited time launch pricing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 6-Month Standard Plan */}
            <div className="bg-white border-2 border-blue-500 rounded-lg p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full text-lg font-semibold">
                Most Popular
              </div>
              <h3 className="text-3xl font-bold mb-6">6-Month Standard</h3>
              <div className="text-5xl font-bold text-gray-800 mb-4">$95<span className="text-2xl">/month</span></div>
              <p className="text-xl text-gray-600 mb-4">Pay monthly within 6-month lease</p>
              <p className="text-lg text-gray-500 mb-4">Total: $570 for 6 months</p>
              
              {/* Credit Check Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-lg text-blue-800 font-semibold">📋 Credit Check Required</p>
                <p className="text-sm text-blue-700 mt-1">Monthly payment plans require credit approval</p>
              </div>
              
              <ul className="text-left space-y-3 mb-8 text-lg">
                <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span>320 sq ft secure container</li>
                <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span>Complete weather protection</li>
                <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span>24/7 access</li>
                <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span>Drive-up access</li>
                <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span>6-month minimum commitment</li>
              </ul>
              
              <button 
                onClick={() => navigate('/book-tour')}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-lg text-xl font-semibold transition-colors duration-200"
              >
                Choose This Plan
              </button>
            </div>

            {/* 6-Month Saver Plan */}
            <div className="bg-white border-2 border-green-500 rounded-lg p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-full text-lg font-semibold">
                Best Value
              </div>
              <h3 className="text-3xl font-bold mb-6">6-Month Saver</h3>
              <div className="text-5xl font-bold text-gray-800 mb-2">$75<span className="text-2xl">/month</span></div>
              <div className="text-lg text-gray-500 line-through mb-4">Was $95/month</div>
              <p className="text-xl text-gray-600 mb-4">Pay 6 months upfront and save</p>
              <p className="text-lg text-green-600 font-semibold mb-4">Total: $450 (Save $120!)</p>
              
              {/* No Credit Check Highlight */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-lg text-green-800 font-semibold">✅ No Credit Check Required!</p>
                <p className="text-sm text-green-700 mt-1">Start storing immediately with prepayment</p>
              </div>
              
              <ul className="text-left space-y-3 mb-8 text-lg">
                <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span>320 sq ft secure container</li>
                <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span>Complete weather protection</li>
                <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span>24/7 access</li>
                <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span>Drive-up access</li>
                <li className="flex items-center"><span className="text-green-500 mr-3 text-xl">✓</span>$120 total savings</li>
              </ul>
              
              <button 
                onClick={() => navigate('/book-tour')}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg text-xl font-semibold transition-colors duration-200"
              >
                Choose This Plan
              </button>
            </div>

          </div>

          {/* Security Deposit Information */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Security Deposit Information</h3>
              <p className="text-lg text-gray-700">
                We require a security deposit equal to one month's rent. For example: if you choose the $95/month plan, 
                your security deposit is $95. If you choose the $75/month plan, your security deposit is $75. 
                The good news is that your security deposit is fully refunded when your lease ends, as long as the 
                container is returned in good condition.
              </p>
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
              <h3 className="text-2xl font-semibold mb-4">Do you require credit checks?</h3>
              <p className="text-xl text-gray-700">
                <span className="font-semibold text-green-600">Prepay for 6 months: No credit check required!</span> Start storing immediately. 
                <br /><br />
                Monthly payment plans require a credit check for approval. We recommend prepaying to skip the credit check and start storing right away.
              </p>
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
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Entrance Photo */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 text-center">Our Facility Entrance</h3>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/goodentrencephoto.png" 
                    alt="Own Your Own Storage facility entrance at 1502 Airport Road, Urbana IL" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-gray-600 text-center">Easy to find location on Airport Road</p>
              </div>
              
              {/* Google Map */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 text-center">Find Us on the Map</h3>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <GoogleMap />
                </div>
              </div>
            </div>
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


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PhotoSlideshow from '../components/PhotoSlideshow';
import GoogleMap from '../components/GoogleMap';
import CustomerReviewsIndustrial from '../components/CustomerReviewsIndustrial';

const HomePageIndustrial = () => {
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
      src: '/Screenshot2025-07-01121004.png',
      alt: 'Container Size Comparison',
      caption: '40-foot containers - spacious storage solution'
    },
    {
      src: '/Screenshot2025-06-17100319.png',
      alt: 'Container Interior View',
      caption: 'Clean, spacious container interior'
    },
    {
      src: '/Screenshot2025-06-17100238.png',
      alt: 'Container Entrance',
      caption: 'Easy access with wide double doors'
    },
    {
      src: '/Screenshot2025-06-17100223.png',
      alt: 'Container Storage Space',
      caption: 'Well-lit, secure storage environment'
    },
    {
      src: '/Screenshot2025-06-17100148.png',
      alt: 'Container Interior Access',
      caption: 'Spacious interior with ground-level access'
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
      src: '/Screenshot2025-06-17100212.png',
      alt: 'Drive-up Access',
      caption: 'Drive right up to your container'
    }
  ];

  return (
    <div className="homepage bg-gray-900 text-white font-sans">
      {/* Industrial Hero Section */}
      <div className="hero-section relative overflow-hidden">
        {/* Industrial Background with Metal Texture */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 35, 50, 0.85), rgba(26, 35, 50, 0.85)), url('/industrial_metal_texture.png')`
          }}
        />
        
        {/* Container Corrugated Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/container_corrugated_texture.png')`,
            backgroundSize: '200px auto',
            backgroundRepeat: 'repeat'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="text-center mb-12">
            {/* Industrial Warning Banner */}
            <div className="mb-8">
              <div className="inline-block bg-yellow-500 text-black px-8 py-3 transform -rotate-1 mb-4 border-4 border-black shadow-2xl">
                <p className="text-xl font-black tracking-widest uppercase">⚠️ SHIPPING CONTAINER STORAGE ⚠️</p>
              </div>
            </div>
            
            {/* Industrial Stencil-Style Header */}
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight leading-none uppercase">
              <span className="text-yellow-400 drop-shadow-lg">CHEAP</span><br/>
              <span className="text-orange-500 drop-shadow-lg">STORAGE</span><br/>
              <span className="text-white drop-shadow-lg">CONTAINERS</span><br/>
              <span className="text-lg md:text-3xl font-bold text-gray-300 tracking-wider">URBANA, ILLINOIS - NO CREDIT CHECK OPTION</span>
            </h1>
            
            {/* Pricing Teaser with Industrial Styling */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 border-4 border-yellow-400 py-6 px-10 inline-block mb-8 transform rotate-1 shadow-2xl">
              <p className="text-3xl md:text-4xl font-black text-white tracking-wider uppercase">
                Starting at $75/month - No Credit Check Option Available
              </p>
            </div>
            
            {/* Industrial Urgency Banner */}
            <div className="bg-red-700 border-4 border-yellow-400 py-4 px-8 inline-block mb-8 transform -rotate-1 shadow-xl">
              <p className="text-xl font-black text-yellow-400 tracking-wide uppercase">
                ⚡ Only 8 containers left at Grand Opening pricing!
              </p>
            </div>
            
            {/* Industrial Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="bg-gray-800 border-4 border-gray-600 px-6 py-3 transform rotate-1 shadow-lg">
                <p className="text-lg font-black text-yellow-400 uppercase">🔒 Fully Insured & Bonded</p>
              </div>
              <div className="bg-gray-800 border-4 border-gray-600 px-6 py-3 transform -rotate-1 shadow-lg">
                <p className="text-lg font-black text-yellow-400 uppercase">📹 24/7 Security Cameras</p>
              </div>
              <div className="bg-gray-800 border-4 border-gray-600 px-6 py-3 transform rotate-1 shadow-lg">
                <p className="text-lg font-black text-yellow-400 uppercase">🏢 Locally Owned Since 1995</p>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-5xl mx-auto leading-relaxed">
              <span className="text-yellow-400 font-bold uppercase">Heavy-Duty Steel Shipping Containers</span> for University of Illinois students, businesses, and moving. 
              <span className="text-orange-400 font-bold uppercase"> No Office Visits. No Paperwork.</span> Book online, get container details by text, start storing same day.
            </p>
            
            {/* Industrial CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
              <button 
                onClick={() => navigate('/book-tour')}
                className="bg-orange-600 hover:bg-orange-700 border-4 border-yellow-400 text-white px-16 py-8 text-2xl font-black tracking-wider transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:scale-105 uppercase"
              >
                🚀 Get My Container in 1 Minute
              </button>
              <button 
                onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gray-700 hover:bg-gray-600 border-4 border-gray-500 text-yellow-400 px-16 py-8 text-2xl font-black tracking-wider transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:scale-105 uppercase"
              >
                💰 See All Pricing Options
              </button>
            </div>
          </div>

          {/* Industrial Photo Slideshow */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="bg-gray-800 border-4 border-gray-600 p-6 shadow-2xl">
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
      <div className="py-20 bg-gray-800 relative">
        {/* Rivet Pattern Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/industrial_rivet_pattern.png')`,
            backgroundSize: '300px auto',
            backgroundRepeat: 'repeat'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-500 text-black px-8 py-3 mb-6 border-4 border-black shadow-xl">
              <h2 className="text-3xl font-black tracking-wider uppercase">How It Works</h2>
            </div>
            <p className="text-2xl text-gray-300 uppercase tracking-wide">Simple steps to get your steel container</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="text-center bg-gray-900 border-4 border-gray-600 p-8 shadow-xl">
              <div className="bg-orange-600 text-white w-20 h-20 flex items-center justify-center text-3xl font-black mx-auto mb-6 border-4 border-yellow-400 shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-black text-yellow-400 mb-4 uppercase">Book Online</h3>
              <p className="text-gray-300 mb-3 text-lg">Fill out quick form</p>
              <p className="text-orange-400 font-black text-xl uppercase">Takes 1 minute</p>
            </div>

            <div className="text-center bg-gray-900 border-4 border-gray-600 p-8 shadow-xl">
              <div className="bg-orange-600 text-white w-20 h-20 flex items-center justify-center text-3xl font-black mx-auto mb-6 border-4 border-yellow-400 shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-black text-yellow-400 mb-4 uppercase">Get Text</h3>
              <p className="text-gray-300 mb-3 text-lg">Container location & access code</p>
              <p className="text-orange-400 font-black text-xl uppercase">Within 30 minutes</p>
            </div>

            <div className="text-center bg-gray-900 border-4 border-gray-600 p-8 shadow-xl">
              <div className="bg-orange-600 text-white w-20 h-20 flex items-center justify-center text-3xl font-black mx-auto mb-6 border-4 border-yellow-400 shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-black text-yellow-400 mb-4 uppercase">Inspect</h3>
              <p className="text-gray-300 mb-3 text-lg">Drive up and check it out</p>
              <p className="text-orange-400 font-black text-xl uppercase">Anytime, 24/7</p>
            </div>

            <div className="text-center bg-gray-900 border-4 border-gray-600 p-8 shadow-xl">
              <div className="bg-orange-600 text-white w-20 h-20 flex items-center justify-center text-3xl font-black mx-auto mb-6 border-4 border-yellow-400 shadow-lg">
                4
              </div>
              <h3 className="text-2xl font-black text-yellow-400 mb-4 uppercase">Start Storing</h3>
              <p className="text-gray-300 mb-3 text-lg">Complete rental & use it</p>
              <p className="text-orange-400 font-black text-xl uppercase">Same day</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-yellow-500 text-black py-4 px-12 inline-block border-4 border-black shadow-xl">
              <p className="text-2xl font-black uppercase tracking-wide">Total Time: 10 Minutes • No Office Visits • 24/7 Access</p>
            </div>
          </div>
        </div>
      </div>



      {/* Industrial Services Section */}
      <div className="py-20 bg-gray-800 relative">
        {/* Corrugated Background */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url('/container_corrugated_texture.png')`,
            backgroundSize: '150px auto',
            backgroundRepeat: 'repeat'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-500 text-black px-8 py-3 mb-6 border-4 border-black shadow-xl">
              <h2 className="text-3xl font-black tracking-wider uppercase">Container Storage Solutions</h2>
            </div>
            <p className="text-2xl text-gray-300 uppercase tracking-wide">Serving University of Illinois students, businesses, and families in Urbana</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-gray-900 border-4 border-gray-600 p-10 shadow-xl">
              <div className="text-5xl mb-6">🎓</div>
              <h3 className="text-3xl font-black text-yellow-400 mb-6 uppercase">Student Storage</h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">Perfect for University of Illinois students! Store dorm furniture, textbooks, and belongings during summer break or semester abroad.</p>
              <ul className="text-gray-300 space-y-3 text-lg">
                <li className="flex items-center"><span className="text-green-400 mr-3 text-xl">✓</span> Summer storage for dorm items</li>
                <li className="flex items-center"><span className="text-green-400 mr-3 text-xl">✓</span> Semester break solutions</li>
                <li className="flex items-center"><span className="text-green-400 mr-3 text-xl">✓</span> Near UIUC campus</li>
                <li className="flex items-center"><span className="text-green-400 mr-3 text-xl">✓</span> Affordable student rates</li>
              </ul>
            </div>

            <div className="bg-gray-900 border-4 border-gray-600 p-10 shadow-xl">
              <div className="text-5xl mb-6">🏢</div>
              <h3 className="text-3xl font-black text-yellow-400 mb-6 uppercase">Business Inventory</h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">Secure business inventory storage in Urbana. Perfect for excess stock, seasonal items, equipment, and documents.</p>
              <ul className="text-gray-300 space-y-3 text-lg">
                <li className="flex items-center"><span className="text-green-400 mr-3 text-xl">✓</span> Inventory overflow storage</li>
                <li className="flex items-center"><span className="text-green-400 mr-3 text-xl">✓</span> Equipment and supplies</li>
                <li className="flex items-center"><span className="text-green-400 mr-3 text-xl">✓</span> Document archiving</li>
                <li className="flex items-center"><span className="text-green-400 mr-3 text-xl">✓</span> 24/7 business access</li>
              </ul>
            </div>

            <div className="bg-gray-900 border-4 border-gray-600 p-10 shadow-xl">
              <div className="text-5xl mb-6">📦</div>
              <h3 className="text-3xl font-black text-yellow-400 mb-6 uppercase">Moving Storage</h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">Temporary storage during your move to or from Urbana. Store belongings between homes or during renovations.</p>
              <ul className="text-gray-300 space-y-3 text-lg">
                <li className="flex items-center"><span className="text-green-400 mr-3 text-xl">✓</span> Temporary moving storage</li>
                <li className="flex items-center"><span className="text-green-400 mr-3 text-xl">✓</span> Home renovation storage</li>
                <li className="flex items-center"><span className="text-green-400 mr-3 text-xl">✓</span> Flexible rental periods</li>
                <li className="flex items-center"><span className="text-green-400 mr-3 text-xl">✓</span> Drive-up convenience</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-2xl text-gray-300 mb-8">Need <span className="text-yellow-400 font-black uppercase">heavy-duty steel containers</span> in Urbana? We have the perfect solution!</p>
            <button 
              onClick={() => navigate('/book-tour')}
              className="bg-orange-600 hover:bg-orange-700 border-4 border-yellow-400 text-white px-12 py-6 text-2xl font-black tracking-wider transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:scale-105 uppercase"
            >
              Find Your Container Solution
            </button>
          </div>
        </div>
      </div>

      {/* Customer Reviews with Industrial Theme */}
      <div className="py-20 bg-gray-900 relative">
        {/* Rivet Pattern Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/industrial_rivet_pattern.png')`,
            backgroundSize: '250px auto',
            backgroundRepeat: 'repeat'
          }}
        />
      </div>

      {/* Industrial Pricing Section */}
      <div id="pricing" className="py-20 bg-gradient-to-br from-gray-800 to-black relative">
        {/* Metal Texture Background */}
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url('/industrial_metal_texture.png')`,
            backgroundSize: 'cover'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-600 text-white px-8 py-3 mb-6 border-4 border-yellow-400 shadow-xl">
              <h2 className="text-3xl font-black tracking-wider uppercase">Container Pricing</h2>
            </div>
            <p className="text-2xl text-gray-300 mb-6 uppercase tracking-wide">All containers are the same size: <span className="text-yellow-400 font-black">40ft × 8ft × 10ft (320 square feet)</span></p>
            <p className="text-xl text-gray-300 mb-8 uppercase">Complete weather protection for your belongings</p>
            
            <div className="bg-red-700 border-4 border-yellow-400 py-6 px-12 inline-block mt-8 transform rotate-1 shadow-2xl">
              <p className="text-2xl font-black text-yellow-400 uppercase tracking-wide">🎉 Grand Opening Special: $95/month or save with 6-month prepay at $75/month</p>
            </div>
            <p className="text-gray-400 mt-6 text-lg uppercase tracking-wide">6-month minimum lease • Limited time launch pricing</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Standard Plan - Industrial Style */}
            <div className="bg-gray-900 border-4 border-blue-500 p-10 relative shadow-2xl">
              <div className="absolute -top-6 left-6 bg-blue-500 text-white px-6 py-2 border-2 border-white shadow-lg">
                <span className="font-black text-lg uppercase">Most Popular</span>
              </div>
              
              <h3 className="text-4xl font-black text-white mb-4 uppercase">6-Month Standard</h3>
              <div className="text-6xl font-black text-blue-400 mb-6">$95<span className="text-3xl text-gray-400">/month</span></div>
              <p className="text-xl text-gray-300 mb-4 uppercase">Pay monthly within 6-month lease</p>
              <p className="text-2xl text-gray-300 mb-8">Total: <span className="text-blue-400 font-black">$570 for 6 months</span></p>
              
              <div className="bg-blue-900 border-4 border-blue-600 p-6 mb-8 shadow-lg">
                <p className="text-blue-300 font-black text-xl uppercase">📋 Credit Check Required</p>
                <p className="text-gray-300 text-lg mt-2">Monthly payment plans require credit approval</p>
              </div>

              <ul className="text-gray-300 space-y-4 mb-10 text-lg">
                <li className="flex items-center"><span className="text-green-400 mr-4 text-2xl">✓</span>320 sq ft secure container</li>
                <li className="flex items-center"><span className="text-green-400 mr-4 text-2xl">✓</span>Complete weather protection</li>
                <li className="flex items-center"><span className="text-green-400 mr-4 text-2xl">✓</span>24/7 access</li>
                <li className="flex items-center"><span className="text-green-400 mr-4 text-2xl">✓</span>Drive-up access</li>
                <li className="flex items-center"><span className="text-green-400 mr-4 text-2xl">✓</span>6-month minimum commitment</li>
              </ul>

              <button 
                onClick={() => navigate('/book-tour')}
                className="w-full bg-blue-600 hover:bg-blue-700 border-4 border-blue-400 text-white py-6 text-2xl font-black tracking-wider transition-all duration-200 shadow-xl uppercase"
              >
                Choose This Plan
              </button>
            </div>

            {/* Saver Plan - Industrial Style */}
            <div className="bg-gray-900 border-4 border-green-500 p-10 relative shadow-2xl">
              <div className="absolute -top-6 left-6 bg-green-500 text-white px-6 py-2 border-2 border-white shadow-lg">
                <span className="font-black text-lg uppercase">Best Value</span>
              </div>
              
              <h3 className="text-4xl font-black text-white mb-4 uppercase">6-Month Saver</h3>
              <div className="text-6xl font-black text-green-400 mb-3">$75<span className="text-3xl text-gray-400">/month</span></div>
              <p className="text-xl text-gray-400 line-through mb-4">Was $95/month</p>
              <p className="text-xl text-gray-300 mb-4 uppercase">Pay 6 months upfront and save</p>
              <p className="text-2xl text-gray-300 mb-8">Total: <span className="text-green-400 font-black">$450 (Save $120!)</span></p>
              
              <div className="bg-green-900 border-4 border-green-600 p-6 mb-8 shadow-lg">
                <p className="text-green-300 font-black text-xl uppercase">✅ No Credit Check Required!</p>
                <p className="text-gray-300 text-lg mt-2">Start storing immediately with prepayment</p>
              </div>

              <ul className="text-gray-300 space-y-4 mb-10 text-lg">
                <li className="flex items-center"><span className="text-green-400 mr-4 text-2xl">✓</span>320 sq ft secure container</li>
                <li className="flex items-center"><span className="text-green-400 mr-4 text-2xl">✓</span>Complete weather protection</li>
                <li className="flex items-center"><span className="text-green-400 mr-4 text-2xl">✓</span>24/7 access</li>
                <li className="flex items-center"><span className="text-green-400 mr-4 text-2xl">✓</span>Drive-up access</li>
                <li className="flex items-center"><span className="text-green-400 mr-4 text-2xl">✓</span>$120 total savings</li>
              </ul>

              <button 
                onClick={() => navigate('/book-tour')}
                className="w-full bg-green-600 hover:bg-green-700 border-4 border-green-400 text-white py-6 text-2xl font-black tracking-wider transition-all duration-200 shadow-xl uppercase"
              >
                Choose This Plan
              </button>
            </div>
          </div>

          {/* Security Deposit - Industrial Style */}
          <div className="max-w-5xl mx-auto mt-16 bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <h3 className="text-3xl font-black text-yellow-400 mb-6 uppercase">Security Deposit Information</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              We require a security deposit equal to one month's rent. For example: if you choose the $95/month plan, your security deposit is $95. 
              If you choose the $75/month plan, your security deposit is $75. The good news is that your security deposit is 
              <span className="text-green-400 font-black"> fully refunded</span> when your lease ends, as long as the container is returned in good condition.
            </p>
          </div>
        </div>
      </div>

      {/* Industrial FAQ Section */}
      <div className="py-20 bg-gray-800 relative">
        {/* Corrugated Background */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url('/container_corrugated_texture.png')`,
            backgroundSize: '200px auto',
            backgroundRepeat: 'repeat'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-500 text-black px-8 py-3 mb-6 border-4 border-black shadow-xl">
              <h2 className="text-3xl font-black tracking-wider uppercase">Common Questions</h2>
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-gray-900 border-4 border-gray-600 p-8 shadow-xl">
              <h3 className="text-2xl font-black text-yellow-400 mb-4 uppercase">What happens after I book?</h3>
              <p className="text-gray-300 text-lg">You'll get an email confirmation right away, then a text message within 30 minutes with your container location and access code.</p>
            </div>

            <div className="bg-gray-900 border-4 border-gray-600 p-8 shadow-xl">
              <h3 className="text-2xl font-black text-yellow-400 mb-4 uppercase">How big is the container?</h3>
              <p className="text-gray-300 text-lg">All containers are 40 feet long, 8 feet wide, and 10 feet tall. That's 320 square feet - enough for a 3-4 bedroom home.</p>
            </div>

            <div className="bg-gray-900 border-4 border-gray-600 p-8 shadow-xl">
              <h3 className="text-2xl font-black text-yellow-400 mb-4 uppercase">Is it secure?</h3>
              <p className="text-gray-300 text-lg">Yes! Heavy-duty steel construction with secure locks. Only you have the access code.</p>
            </div>

            <div className="bg-gray-900 border-4 border-gray-600 p-8 shadow-xl">
              <h3 className="text-2xl font-black text-yellow-400 mb-4 uppercase">Can I access it anytime?</h3>
              <p className="text-gray-300 text-lg">Yes, 24 hours a day, 7 days a week. Drive right up to your container whenever you need something.</p>
            </div>

            <div className="bg-gray-900 border-4 border-gray-600 p-8 shadow-xl">
              <h3 className="text-2xl font-black text-yellow-400 mb-4 uppercase">Do you require credit checks?</h3>
              <p className="text-gray-300 text-lg">
                <span className="text-green-400 font-black uppercase">Prepay for 6 months: No credit check required!</span> Start storing immediately.<br/><br/>
                Monthly payment plans require a credit check for approval. We recommend prepaying to skip the credit check and start storing right away.
              </p>
            </div>

            <div className="bg-gray-900 border-4 border-gray-600 p-8 shadow-xl">
              <h3 className="text-2xl font-black text-yellow-400 mb-4 uppercase">What if I don't like it?</h3>
              <p className="text-gray-300 text-lg">No problem! The tour is free. You only pay if you decide to rent after seeing the container.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Industrial Contact Section */}
      <div className="py-20 bg-gradient-to-br from-gray-900 to-black relative">
        {/* Metal Texture Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/industrial_metal_texture.png')`,
            backgroundSize: 'cover'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-600 text-white px-8 py-3 mb-6 border-4 border-yellow-400 shadow-xl">
              <h2 className="text-3xl font-black tracking-wider uppercase">Visit Us</h2>
            </div>
            <p className="text-3xl text-yellow-400 font-black uppercase">1502 Airport Road, Urbana IL 61802</p>
            <p className="text-2xl text-gray-300 mt-4">Text or Call: 3055092759</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <div>
              <h3 className="text-3xl font-black text-yellow-400 mb-8 uppercase">Our Facility Entrance</h3>
              <p className="text-gray-300 mb-6 text-lg">Easy to find location on Airport Road</p>
              <img 
                src="/goodentrencephoto.png" 
                alt="Facility Entrance" 
                className="w-full h-64 object-cover border-4 border-gray-600 shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-black text-yellow-400 mb-8 uppercase">Find Us on the Map</h3>
              <div className="border-4 border-gray-600 shadow-xl">
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industrial Final CTA */}
      <div className="py-20 bg-gradient-to-r from-orange-600 to-red-600 relative">
        {/* Rivet Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/industrial_rivet_pattern.png')`,
            backgroundSize: '200px auto',
            backgroundRepeat: 'repeat'
          }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight uppercase">
              Ready to Get Started?
            </h2>
            <p className="text-3xl text-yellow-200 mb-12 uppercase tracking-wide">Book your free tour now - it only takes 1 minute</p>
            
            <button 
              onClick={() => navigate('/book-tour')}
              className="bg-yellow-500 hover:bg-yellow-400 border-4 border-white text-black px-20 py-8 text-4xl font-black tracking-wider transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:scale-105 uppercase"
            >
              📋 Book Your Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageIndustrial;


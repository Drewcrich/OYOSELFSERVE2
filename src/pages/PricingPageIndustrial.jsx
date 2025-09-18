import React from 'react';
import { useNavigate } from 'react-router-dom';

const PricingPageIndustrial = () => {
  const navigate = useNavigate();

  return (
    <div className="pricing-page bg-gray-900 text-white min-h-screen relative">
      {/* Industrial Metal Texture Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/industrial_metal_texture.png')`,
          backgroundSize: 'cover'
        }}
      />
      
      {/* Container Corrugated Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url('/container_corrugated_texture.png')`,
          backgroundSize: '150px auto',
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Industrial Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-600 text-white px-8 py-3 mb-6 border-4 border-yellow-400 shadow-xl">
            <h1 className="text-4xl font-black tracking-wider uppercase">
              💰 Container Pricing
            </h1>
          </div>
          <p className="text-2xl text-gray-300 uppercase tracking-wide">
            Simple, transparent pricing • No hidden fees • 6-month minimum lease
          </p>
        </div>

        {/* Container Size Info - Industrial Style */}
        <div className="mb-16">
          <div className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block bg-yellow-500 text-black px-6 py-2 border-2 border-black">
                <h2 className="text-3xl font-black uppercase tracking-wide">All Containers Are the Same Size</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div className="text-center bg-gray-900 border-4 border-orange-500 p-6 shadow-xl">
                <span className="text-5xl font-black text-orange-500 block mb-2">40ft</span>
                <span className="text-xl font-bold text-gray-300 uppercase">Length</span>
              </div>
              <div className="text-center bg-gray-900 border-4 border-orange-500 p-6 shadow-xl">
                <span className="text-5xl font-black text-orange-500 block mb-2">8ft</span>
                <span className="text-xl font-bold text-gray-300 uppercase">Width</span>
              </div>
              <div className="text-center bg-gray-900 border-4 border-orange-500 p-6 shadow-xl">
                <span className="text-5xl font-black text-orange-500 block mb-2">10ft</span>
                <span className="text-xl font-bold text-gray-300 uppercase">Height</span>
              </div>
              <div className="text-center bg-gray-900 border-4 border-yellow-400 p-6 shadow-xl">
                <span className="text-5xl font-black text-yellow-400 block mb-2">320</span>
                <span className="text-xl font-bold text-gray-300 uppercase">Square Feet</span>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-2xl text-gray-300 font-bold">
                Enough space for a 3-4 bedroom home with <span className="text-yellow-400 uppercase">complete weather protection</span>
              </p>
            </div>
          </div>
        </div>

        {/* Grand Opening Banner - Industrial Style */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-red-700 to-orange-600 border-4 border-yellow-400 p-8 shadow-2xl max-w-5xl mx-auto transform rotate-1">
            <div className="text-center">
              <h2 className="text-4xl font-black text-yellow-400 mb-4 uppercase tracking-wide">🎉 Grand Opening Pricing</h2>
              <p className="text-2xl text-white font-bold uppercase tracking-wide">
                Limited time launch pricing • 6-month minimum lease
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Plans - Industrial Style */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
          {/* Standard Plan */}
          <div className="bg-gray-800 border-4 border-blue-500 p-10 relative shadow-2xl">
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

          {/* Saver Plan */}
          <div className="bg-gray-800 border-4 border-green-500 p-10 relative shadow-2xl">
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
        <div className="max-w-5xl mx-auto mb-16 bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
          <div className="text-center mb-6">
            <div className="inline-block bg-yellow-500 text-black px-6 py-2 border-2 border-black">
              <h3 className="text-3xl font-black uppercase tracking-wide">Security Deposit Information</h3>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg text-center">
            We require a security deposit equal to one month's rent. For example: if you choose the $95/month plan, your security deposit is $95. 
            If you choose the $75/month plan, your security deposit is $75. The good news is that your security deposit is 
            <span className="text-green-400 font-black"> fully refunded</span> when your lease ends, as long as the container is returned in good condition.
          </p>
        </div>

        {/* FAQ Section - Industrial Style */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-600 text-white px-8 py-3 border-4 border-yellow-400 shadow-xl">
              <h3 className="text-3xl font-black tracking-wider uppercase">Pricing Questions</h3>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800 border-4 border-gray-600 p-8 shadow-xl">
              <h4 className="text-2xl font-black text-yellow-400 mb-4 uppercase">Are there any hidden fees?</h4>
              <p className="text-gray-300 text-lg">No hidden fees! The monthly rate plus security deposit is all you pay. No setup fees, no administrative fees, no surprise charges.</p>
            </div>

            <div className="bg-gray-800 border-4 border-gray-600 p-8 shadow-xl">
              <h4 className="text-2xl font-black text-yellow-400 mb-4 uppercase">Can I pay monthly?</h4>
              <p className="text-gray-300 text-lg">Yes! The 6-Month Standard plan allows you to pay monthly at $95/month. The 6-Month Saver plan requires upfront payment but saves you $120.</p>
            </div>

            <div className="bg-gray-800 border-4 border-gray-600 p-8 shadow-xl">
              <h4 className="text-2xl font-black text-yellow-400 mb-4 uppercase">What payment methods do you accept?</h4>
              <p className="text-gray-300 text-lg">We accept all major credit cards and ACH bank transfers through our secure online payment portal.</p>
            </div>

            <div className="bg-gray-800 border-4 border-gray-600 p-8 shadow-xl">
              <h4 className="text-2xl font-black text-yellow-400 mb-4 uppercase">Can I extend my lease?</h4>
              <p className="text-gray-300 text-lg">Absolutely! After your initial 6-month commitment, you can continue month-to-month or sign another term agreement.</p>
            </div>
          </div>
        </div>

        {/* Final CTA - Industrial Style */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 border-4 border-yellow-400 p-10 inline-block shadow-2xl transform -rotate-1">
            <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-wide">Ready to Get Started?</h3>
            <p className="text-2xl text-yellow-200 mb-8 uppercase">Book your free tour today and see your container before you commit</p>
            <button 
              onClick={() => navigate('/book-tour')}
              className="bg-yellow-500 hover:bg-yellow-400 border-4 border-white text-black px-12 py-6 text-3xl font-black tracking-wider transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:scale-105 uppercase"
            >
              📋 Book Your Free Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPageIndustrial;


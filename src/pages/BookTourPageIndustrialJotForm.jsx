import React from 'react';

const BookTourPageIndustrialJotForm = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
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

      {/* Industrial Header */}
      <div className="bg-gradient-to-r from-gray-800 to-black border-b-4 border-yellow-400 py-16 relative z-10">
        {/* Rivet Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/industrial_rivet_pattern.png')`,
            backgroundSize: '200px auto',
            backgroundRepeat: 'repeat'
          }}
        />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-yellow-500 text-black px-8 py-3 mb-6 border-4 border-black shadow-xl transform -rotate-1">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider">
              📦 Book Your Container Tour
            </h1>
          </div>
          <p className="text-2xl text-gray-300 font-bold uppercase tracking-wide">
            Quick form • Instant confirmation • Get container access code
          </p>
        </div>
      </div>

      {/* Industrial Process Steps */}
      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-gray-800 border-4 border-gray-600 p-8 shadow-2xl">
            <div className="w-20 h-20 bg-orange-600 border-4 border-yellow-400 text-white flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-xl">
              1
            </div>
            <h3 className="text-2xl font-black text-yellow-400 mb-4 uppercase">Fill Form</h3>
            <p className="text-gray-300 text-lg font-bold">1-minute container booking</p>
          </div>
          
          <div className="text-center bg-gray-800 border-4 border-gray-600 p-8 shadow-2xl">
            <div className="w-20 h-20 bg-orange-600 border-4 border-yellow-400 text-white flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-xl">
              2
            </div>
            <h3 className="text-2xl font-black text-yellow-400 mb-4 uppercase">Get Access Code</h3>
            <p className="text-gray-300 text-lg font-bold">Text with container location & code</p>
          </div>
          
          <div className="text-center bg-gray-800 border-4 border-gray-600 p-8 shadow-2xl">
            <div className="w-20 h-20 bg-orange-600 border-4 border-yellow-400 text-white flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-xl">
              3
            </div>
            <h3 className="text-2xl font-black text-yellow-400 mb-4 uppercase">Inspect Container</h3>
            <p className="text-gray-300 text-lg font-bold">Drive up & check it out</p>
          </div>
        </div>

        {/* Industrial Form Section with JotForm */}
        <div className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl mb-12">
          <div className="text-center mb-8">
            <div className="inline-block bg-orange-600 text-white px-6 py-3 border-4 border-yellow-400 shadow-xl">
              <h2 className="text-3xl font-black uppercase tracking-wide">
                📋 Container Tour Booking
              </h2>
            </div>
          </div>
          
          {/* Industrial Info Banner */}
          <div className="bg-yellow-500 text-black p-6 mb-8 border-4 border-black shadow-xl transform rotate-1">
            <div className="space-y-2 text-lg font-black text-center">
              <div className="flex items-center justify-center">
                <span className="text-green-600 mr-2 text-2xl">✅</span>
                <span className="uppercase">Instant email confirmation</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-blue-600 mr-2 text-2xl">📱</span>
                <span className="uppercase">Container details sent via text within 30 minutes</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-red-600 mr-2 text-2xl">🔄</span>
                <span className="uppercase">Automatic redirect to booking confirmation</span>
              </div>
            </div>
          </div>

          {/* JotForm Embed with Industrial Styling */}
          <div className="w-full bg-gray-900 border-4 border-gray-700 p-4 shadow-2xl">
            <iframe
              title="Container Tour Booking Form"
              onLoad={() => {
                console.log('JotForm iframe loaded successfully');
              }}
              allowTransparency="true"
              allow="geolocation; microphone; camera; fullscreen"
              src="https://form.jotform.com/251895754464067?redirect=https://8080-i8rv3yhtvk3x8fwr04iix-3e0318a4.manusvm.computer/booking-confirmed"
              frameBorder="0"
              style={{
                width: '100%',
                height: '1350px',
                minHeight: '100vh',
                maxHeight: 'none',
                border: 'none',
                borderRadius: '8px',
                display: 'block',
                backgroundColor: 'transparent'
              }}
              className="md:h-[1350px] h-screen min-h-screen"
              scrolling="no"
            />
          </div>
        </div>

        {/* Industrial What Happens Next Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-800 border-4 border-green-500 p-6 shadow-2xl text-center">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-xl font-black text-green-400 mb-3 uppercase">Instant Confirmation</h3>
            <p className="text-gray-300 font-bold mb-3">Confirmation sent to your email immediately after booking</p>
            <span className="bg-green-600 text-white px-3 py-1 text-sm font-black uppercase">Instant</span>
          </div>
          
          <div className="bg-gray-800 border-4 border-blue-500 p-6 shadow-2xl text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-black text-blue-400 mb-3 uppercase">Container Details</h3>
            <p className="text-gray-300 font-bold mb-3">Text with exact container location, number, and lock combination</p>
            <span className="bg-blue-600 text-white px-3 py-1 text-sm font-black uppercase">Within 30 minutes</span>
          </div>
          
          <div className="bg-gray-800 border-4 border-purple-500 p-6 shadow-2xl text-center">
            <div className="text-4xl mb-4">🔑</div>
            <h3 className="text-xl font-black text-purple-400 mb-3 uppercase">Self-Guided Tour</h3>
            <p className="text-gray-300 font-bold mb-3">Visit and inspect your container at your convenience</p>
            <span className="bg-purple-600 text-white px-3 py-1 text-sm font-black uppercase">Your Schedule</span>
          </div>
          
          <div className="bg-gray-800 border-4 border-yellow-500 p-6 shadow-2xl text-center">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-black text-yellow-400 mb-3 uppercase">Easy Rental</h3>
            <p className="text-gray-300 font-bold mb-3">Complete rental process online if you love it</p>
            <span className="bg-yellow-600 text-white px-3 py-1 text-sm font-black uppercase">Same Day</span>
          </div>
        </div>

        {/* Industrial Comparison Section */}
        <div className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl mb-12">
          <div className="text-center mb-12">
            <div className="inline-block bg-red-700 text-white px-6 py-3 border-4 border-yellow-400 shadow-xl transform -rotate-1">
              <h2 className="text-3xl font-black uppercase tracking-wide">Why Choose Self-Service Container Storage?</h2>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Traditional Process - Industrial Style */}
            <div className="bg-red-900 border-4 border-red-600 p-8 shadow-2xl">
              <h3 className="text-2xl font-black mb-8 text-red-400 uppercase text-center">Traditional Storage Rental</h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Visit Office", desc: "Drive to facility during business hours", time: "30+ minutes travel time" },
                  { step: "2", title: "Wait in Line", desc: "Wait for staff availability", time: "10-20 minutes waiting" },
                  { step: "3", title: "Paperwork", desc: "Fill out forms, provide ID, credit check", time: "15-30 minutes paperwork" },
                  { step: "4", title: "Tour with Staff", desc: "Guided tour during business hours only", time: "10-15 minutes tour" },
                  { step: "5", title: "Payment Setup", desc: "More paperwork, payment processing", time: "10-15 minutes setup" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-red-600 border-2 border-red-400 text-white flex items-center justify-center text-lg font-black flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-black text-white text-lg uppercase">{item.title}</h4>
                      <p className="text-red-200 font-bold">{item.desc}</p>
                      <p className="text-red-400 font-black text-sm">⏱️ {item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-red-800 border-4 border-red-600 shadow-xl">
                <p className="font-black text-red-200 text-xl uppercase text-center">Total Time: 75-120 minutes</p>
                <p className="text-red-300 font-bold text-center">Plus travel time and scheduling constraints</p>
              </div>
            </div>

            {/* Our Process - Industrial Style */}
            <div className="bg-green-900 border-4 border-green-600 p-8 shadow-2xl">
              <h3 className="text-2xl font-black mb-8 text-green-400 uppercase text-center">Our Container Self-Service</h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Book Online", desc: "1-minute booking form from anywhere", time: "1 minute" },
                  { step: "2", title: "Get Details", desc: "Receive container info via text", time: "Within 30 minutes" },
                  { step: "3", title: "Self-Guided Tour", desc: "Tour at your convenience, 24/7", time: "5-10 minutes" },
                  { step: "4", title: "Rent Online", desc: "Electronic lease and payment setup", time: "5-8 minutes" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-600 border-2 border-green-400 text-white flex items-center justify-center text-lg font-black flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-black text-white text-lg uppercase">{item.title}</h4>
                      <p className="text-green-200 font-bold">{item.desc}</p>
                      <p className="text-green-400 font-black text-sm">⏱️ {item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-green-800 border-4 border-green-600 shadow-xl">
                <p className="font-black text-green-200 text-xl uppercase text-center">Total Time: 11-19 minutes</p>
                <p className="text-green-300 font-bold text-center">No travel required, available 24/7</p>
              </div>
            </div>
          </div>

          {/* Industrial Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-8 bg-blue-900 border-4 border-blue-600 shadow-2xl">
              <div className="text-5xl font-black text-blue-400 mb-4">80%</div>
              <p className="font-black text-white text-xl uppercase">Less Time Required</p>
            </div>
            <div className="text-center p-8 bg-green-900 border-4 border-green-600 shadow-2xl">
              <div className="text-5xl font-black text-green-400 mb-4">24/7</div>
              <p className="font-black text-white text-xl uppercase">Available Anytime</p>
            </div>
            <div className="text-center p-8 bg-purple-900 border-4 border-purple-600 shadow-2xl">
              <div className="text-5xl font-black text-purple-400 mb-4">0</div>
              <p className="font-black text-white text-xl uppercase">Office Visits Needed</p>
            </div>
          </div>
        </div>

        {/* Industrial Trust Signals */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 border-4 border-green-500 p-6 text-center shadow-xl">
            <div className="text-4xl mb-4">🔒</div>
            <h4 className="text-xl font-black text-green-400 mb-2 uppercase">Secure & Insured</h4>
            <p className="text-gray-300 font-bold">Fully bonded storage facility</p>
          </div>
          
          <div className="bg-gray-800 border-4 border-blue-500 p-6 text-center shadow-xl">
            <div className="text-4xl mb-4">📹</div>
            <h4 className="text-xl font-black text-blue-400 mb-2 uppercase">24/7 Monitoring</h4>
            <p className="text-gray-300 font-bold">Security cameras & lighting</p>
          </div>
          
          <div className="bg-gray-800 border-4 border-yellow-500 p-6 text-center shadow-xl">
            <div className="text-4xl mb-4">🏢</div>
            <h4 className="text-xl font-black text-yellow-400 mb-2 uppercase">Local Business</h4>
            <p className="text-gray-300 font-bold">Serving Urbana since 1995</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTourPageIndustrialJotForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookTourPageIndustrial = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    storageNeeds: '',
    hearAboutUs: '',
    additionalInfo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/confirmation');
  };

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

        {/* Industrial Form Section */}
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
            <p className="text-xl font-black text-center uppercase tracking-wide">
              ⚡ Get your container access code within 30 minutes!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div className="bg-gray-900 border-4 border-gray-700 p-6 shadow-xl">
              <h3 className="text-2xl font-black text-yellow-400 mb-6 uppercase">Contact Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-bold text-gray-300 mb-2 uppercase">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 bg-gray-700 border-4 border-gray-600 text-white text-lg font-bold focus:border-orange-500 focus:outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-bold text-gray-300 mb-2 uppercase">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 bg-gray-700 border-4 border-gray-600 text-white text-lg font-bold focus:border-orange-500 focus:outline-none"
                    placeholder="For container access code text"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-lg font-bold text-gray-300 mb-2 uppercase">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 bg-gray-700 border-4 border-gray-600 text-white text-lg font-bold focus:border-orange-500 focus:outline-none"
                  placeholder="For booking confirmation"
                />
              </div>
            </div>

            {/* Tour Preferences Section */}
            <div className="bg-gray-900 border-4 border-gray-700 p-6 shadow-xl">
              <h3 className="text-2xl font-black text-yellow-400 mb-6 uppercase">Tour Preferences</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-bold text-gray-300 mb-2 uppercase">Preferred Date</label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-700 border-4 border-gray-600 text-white text-lg font-bold focus:border-orange-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-bold text-gray-300 mb-2 uppercase">Preferred Time</label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-700 border-4 border-gray-600 text-white text-lg font-bold focus:border-orange-500 focus:outline-none"
                  >
                    <option value="">Select time (24/7 access available)</option>
                    <option value="morning">Morning (8AM-12PM)</option>
                    <option value="afternoon">Afternoon (12PM-5PM)</option>
                    <option value="evening">Evening (5PM-8PM)</option>
                    <option value="anytime">Anytime - I'll go when convenient</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Storage Needs Section */}
            <div className="bg-gray-900 border-4 border-gray-700 p-6 shadow-xl">
              <h3 className="text-2xl font-black text-yellow-400 mb-6 uppercase">Storage Details</h3>
              
              <div className="mb-6">
                <label className="block text-lg font-bold text-gray-300 mb-2 uppercase">What will you store?</label>
                <select
                  name="storageNeeds"
                  value={formData.storageNeeds}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-700 border-4 border-gray-600 text-white text-lg font-bold focus:border-orange-500 focus:outline-none"
                >
                  <option value="">Select storage type</option>
                  <option value="student">Student items (dorm furniture, textbooks)</option>
                  <option value="business">Business inventory & equipment</option>
                  <option value="moving">Moving/temporary storage</option>
                  <option value="household">Household items & furniture</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-lg font-bold text-gray-300 mb-2 uppercase">How did you hear about us?</label>
                <select
                  name="hearAboutUs"
                  value={formData.hearAboutUs}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-700 border-4 border-gray-600 text-white text-lg font-bold focus:border-orange-500 focus:outline-none"
                >
                  <option value="">Select source</option>
                  <option value="google">Google search</option>
                  <option value="google-ads">Google ads</option>
                  <option value="facebook">Facebook</option>
                  <option value="referral">Friend/family referral</option>
                  <option value="drive-by">Drove by facility</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-lg font-bold text-gray-300 mb-2 uppercase">Additional Information</label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full p-4 bg-gray-700 border-4 border-gray-600 text-white text-lg font-bold focus:border-orange-500 focus:outline-none resize-none"
                  placeholder="Any questions or special requirements?"
                />
              </div>
            </div>

            {/* Industrial Submit Section */}
            <div className="text-center">
              <div className="bg-red-700 border-4 border-yellow-400 p-6 mb-8 transform -rotate-1 shadow-2xl">
                <p className="text-2xl font-black text-yellow-400 uppercase tracking-wide">
                  🚀 Ready to get your container access code?
                </p>
              </div>
              
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 border-4 border-yellow-400 text-white px-16 py-8 text-3xl font-black tracking-wider transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:scale-105 uppercase"
              >
                📋 Book My Container Tour
              </button>
              
              <p className="text-gray-400 mt-6 text-lg font-bold">
                You'll receive a text with container location and access code within 30 minutes
              </p>
            </div>
          </form>
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

export default BookTourPageIndustrial;


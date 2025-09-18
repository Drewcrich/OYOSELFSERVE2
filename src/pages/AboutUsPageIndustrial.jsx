import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Shield, Clock, MapPin, Mail, Star, Award } from 'lucide-react';

const AboutUsPageIndustrial = () => {
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

      <div className="container mx-auto px-4 max-w-6xl py-20 relative z-10">
        
        {/* Industrial Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-600 text-white px-8 py-4 mb-6 border-4 border-yellow-400 shadow-xl">
            <div className="flex items-center justify-center">
              <Users size={48} className="text-yellow-400 mr-4" />
              <h1 className="text-4xl font-black uppercase tracking-wider">About Our Container Business</h1>
            </div>
          </div>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-bold uppercase tracking-wide">
            The authentic story behind Urbana's only shipping container storage facility
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          
          {/* Our Story - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <Heart size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">Our Container Story</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6 font-bold">
                  Our family business has been serving the Urbana community for years. When we saw students and families getting overcharged for tiny storage units, we knew there had to be a better way.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6 font-bold">
                  We started using authentic shipping containers - the same heavy-duty steel boxes that protect cargo across oceans. It just makes sense: why pay more for less when you can get real container storage at honest prices?
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6 font-bold">
                  As a local family business, we believe in giving our community real value and straightforward service.
                </p>
                <div className="bg-yellow-500 text-black p-4 border-4 border-black shadow-xl transform rotate-1">
                  <p className="font-black text-lg uppercase text-center">
                    ⚡ Real containers, real savings, real simple!
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-900 border-4 border-gray-700 p-6 shadow-xl">
                <h3 className="text-2xl font-black text-orange-400 mb-4 uppercase">Why Shipping Containers?</h3>
                <ul className="space-y-3 text-gray-300 text-lg">
                  <li className="flex items-center"><span className="text-green-400 mr-4 text-2xl">✓</span><strong>Weather-proof steel construction</strong></li>
                  <li className="flex items-center"><span className="text-green-400 mr-4 text-2xl">✓</span><strong>Drive-up access - no elevators</strong></li>
                  <li className="flex items-center"><span className="text-green-400 mr-4 text-2xl">✓</span><strong>320 sq ft of secure space</strong></li>
                  <li className="flex items-center"><span className="text-green-400 mr-4 text-2xl">✓</span><strong>Lower overhead = lower prices</strong></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Mission & Values - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="text-center mb-10">
              <div className="inline-block bg-red-700 text-white px-6 py-3 border-4 border-yellow-400 shadow-xl transform -rotate-1">
                <h2 className="text-3xl font-black uppercase tracking-wide">Our Industrial Mission</h2>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900 border-4 border-blue-500 p-8 text-center shadow-xl">
                <div className="bg-blue-600 border-4 border-blue-400 w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Shield size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-blue-400 mb-4 uppercase">Security First</h3>
                <p className="text-gray-300 text-lg font-bold">Heavy-duty steel containers with 24/7 monitoring and lighting</p>
              </div>
              
              <div className="bg-gray-900 border-4 border-green-500 p-8 text-center shadow-xl">
                <div className="bg-green-600 border-4 border-green-400 w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Clock size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-green-400 mb-4 uppercase">24/7 Access</h3>
                <p className="text-gray-300 text-lg font-bold">Your container, your schedule - access anytime day or night</p>
              </div>
              
              <div className="bg-gray-900 border-4 border-yellow-500 p-8 text-center shadow-xl">
                <div className="bg-yellow-600 border-4 border-yellow-400 w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Award size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-yellow-400 mb-4 uppercase">Family Business</h3>
                <p className="text-gray-300 text-lg font-bold">Local family business serving students and community members</p>
              </div>
            </div>
          </section>

          {/* Why Choose Us - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="text-center mb-10">
              <div className="inline-block bg-orange-600 text-white px-6 py-3 border-4 border-yellow-400 shadow-xl">
                <h2 className="text-3xl font-black uppercase tracking-wide">Why Choose Container Storage?</h2>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-gray-900 border-4 border-gray-700 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-orange-400 mb-6 uppercase">Student-Friendly Features</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">📚</span>
                    <div>
                      <strong className="text-white">No Credit Check Option:</strong> $75/month prepaid plan
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">🚗</span>
                    <div>
                      <strong className="text-white">Drive-Up Access:</strong> Load directly from your car
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">💰</span>
                    <div>
                      <strong className="text-white">Transparent Pricing:</strong> No hidden fees or surprises
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">📱</span>
                    <div>
                      <strong className="text-white">Self-Service Tours:</strong> Get access code via text
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-900 border-4 border-gray-700 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-orange-400 mb-6 uppercase">Business Solutions</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">📦</span>
                    <div>
                      <strong className="text-white">Inventory Storage:</strong> 320 sq ft for equipment & supplies
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">🔒</span>
                    <div>
                      <strong className="text-white">Secure & Insured:</strong> Fully bonded facility
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">🏢</span>
                    <div>
                      <strong className="text-white">Commercial Access:</strong> Easy loading for business needs
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">📋</span>
                    <div>
                      <strong className="text-white">Flexible Terms:</strong> Month-to-month after initial lease
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Location & Contact - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="text-center mb-10">
              <div className="inline-block bg-green-600 text-white px-6 py-3 border-4 border-yellow-400 shadow-xl transform rotate-1">
                <h2 className="text-3xl font-black uppercase tracking-wide">Find Our Container Yard</h2>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-gray-900 border-4 border-gray-700 p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-600 border-4 border-yellow-400 p-3 mr-4 shadow-xl">
                    <MapPin size={24} className="text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-black text-orange-400 uppercase">Location</h3>
                </div>
                <p className="text-gray-300 text-lg font-bold mb-4">
                  <strong className="text-white">1502 Airport Road</strong><br />
                  Urbana, IL 61802
                </p>
                <p className="text-gray-300 text-lg font-bold">
                  Just minutes from University of Illinois campus and easily accessible from I-74.
                </p>
              </div>
              
              <div className="bg-gray-900 border-4 border-gray-700 p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-600 border-4 border-yellow-400 p-3 mr-4 shadow-xl">
                    <Mail size={24} className="text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-black text-orange-400 uppercase">Contact</h3>
                </div>
                <p className="text-gray-300 text-lg font-bold mb-4">
                  <strong className="text-white">Email:</strong> 3055092759
                </p>
                <p className="text-gray-300 text-lg font-bold mb-6">
                  <strong className="text-white">Hours:</strong> 24/7 container access<br />
                  <strong className="text-white">Support:</strong> Mon-Fri 9AM-6PM
                </p>
                
                <Link 
                  to="/book-tour"
                  className="inline-block bg-orange-600 hover:bg-orange-700 border-4 border-yellow-400 text-white px-8 py-4 text-xl font-black tracking-wider transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105 uppercase"
                >
                  📦 Book Container Tour
                </Link>
              </div>
            </div>
          </section>

          {/* Industrial Trust Badges */}
          <section className="text-center">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gray-800 border-4 border-green-500 p-6 shadow-xl">
                <div className="text-4xl mb-4">🔒</div>
                <h4 className="text-xl font-black text-green-400 mb-2 uppercase">Fully Insured</h4>
                <p className="text-gray-300 font-bold">Bonded storage facility</p>
              </div>
              
              <div className="bg-gray-800 border-4 border-blue-500 p-6 shadow-xl">
                <div className="text-4xl mb-4">📹</div>
                <h4 className="text-xl font-black text-blue-400 mb-2 uppercase">24/7 Security</h4>
                <p className="text-gray-300 font-bold">Cameras & lighting</p>
              </div>
              
              <div className="bg-gray-800 border-4 border-yellow-500 p-6 shadow-xl">
                <div className="text-4xl mb-4">🏆</div>
                <h4 className="text-xl font-black text-yellow-400 mb-2 uppercase">Family Owned</h4>
                <p className="text-gray-300 font-bold">Local Urbana business</p>
              </div>
              
              <div className="bg-gray-800 border-4 border-red-500 p-6 shadow-xl">
                <div className="text-4xl mb-4">⭐</div>
                <h4 className="text-xl font-black text-red-400 mb-2 uppercase">Local Owned</h4>
                <p className="text-gray-300 font-bold">Urbana family business</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPageIndustrial;


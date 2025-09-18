import React from 'react';
import { Cookie, Settings, Shield, Eye, Monitor, Lock, Trash2, AlertTriangle } from 'lucide-react';

const CookiePolicyPageIndustrial = () => {
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
              <Cookie size={48} className="text-yellow-400 mr-4" />
              <h1 className="text-4xl font-black uppercase tracking-wider">Cookie Policy</h1>
            </div>
          </div>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-bold uppercase tracking-wide">
            How we use cookies on our container storage website
          </p>
          <div className="bg-yellow-500 text-black px-6 py-2 mt-4 inline-block border-4 border-black shadow-xl transform rotate-1">
            <p className="font-black uppercase">Last Updated: July 10, 2025</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          
          {/* What Are Cookies - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <Cookie size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">What Are Cookies?</h2>
            </div>
            
            <div className="bg-blue-900 border-4 border-blue-600 p-8 shadow-xl">
              <h3 className="text-2xl font-black text-blue-400 mb-6 uppercase text-center">🍪 Cookie Basics</h3>
              <p className="text-gray-300 text-lg font-bold mb-6">
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p className="text-gray-300 text-lg font-bold">
                Think of cookies like a name tag that helps our website remember you when you return. 
                They help us provide a better experience for booking container storage tours and managing your account.
              </p>
            </div>
          </section>

          {/* Types of Cookies - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <Settings size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">Types of Cookies We Use</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 border-4 border-green-500 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-green-400 mb-6 uppercase">Essential Cookies</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">🔧</span>
                    <div>
                      <strong className="text-white">Website Function:</strong> Make our booking system work properly
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">🔒</span>
                    <div>
                      <strong className="text-white">Security:</strong> Protect against fraud and maintain secure sessions
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">📋</span>
                    <div>
                      <strong className="text-white">Form Data:</strong> Remember your booking information during the process
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">⚙️</span>
                    <div>
                      <strong className="text-white">Preferences:</strong> Remember your language and accessibility settings
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-900 border-4 border-blue-500 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-blue-400 mb-6 uppercase">Analytics Cookies</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">📊</span>
                    <div>
                      <strong className="text-white">Usage Data:</strong> Understand how visitors use our website
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">📈</span>
                    <div>
                      <strong className="text-white">Performance:</strong> Identify and fix website issues
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">🎯</span>
                    <div>
                      <strong className="text-white">Improvements:</strong> Make our booking process better
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">📱</span>
                    <div>
                      <strong className="text-white">Device Info:</strong> Optimize for different devices and browsers
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Cookies - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <Monitor size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">How We Use Cookies</h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-900 border-4 border-yellow-500 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-yellow-400 mb-6 uppercase">Container Storage Services</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">📅</span>
                    <div>
                      <strong className="text-white">Booking Process:</strong> Remember your tour preferences and contact information
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">🔐</span>
                    <div>
                      <strong className="text-white">Access Codes:</strong> Securely manage your container access information
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">💳</span>
                    <div>
                      <strong className="text-white">Payment Processing:</strong> Secure handling of rental payments
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">📞</span>
                    <div>
                      <strong className="text-white">Communication:</strong> Remember your contact preferences
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 border-4 border-green-500 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-green-400 mb-6 uppercase">Website Improvement</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">🔍</span>
                    <div>
                      <strong className="text-white">Popular Pages:</strong> See which information is most helpful to visitors
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">⏱️</span>
                    <div>
                      <strong className="text-white">Load Times:</strong> Monitor and improve website speed
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">🐛</span>
                    <div>
                      <strong className="text-white">Error Detection:</strong> Identify and fix technical issues
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">📊</span>
                    <div>
                      <strong className="text-white">Usage Patterns:</strong> Understand how to make booking easier
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <AlertTriangle size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">Third-Party Services</h2>
            </div>
            
            <div className="bg-yellow-900 border-4 border-yellow-600 p-8 shadow-xl">
              <h3 className="text-2xl font-black text-yellow-400 mb-6 uppercase text-center">⚠️ External Services We Use</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-black text-orange-400 mb-4 uppercase">Services That May Set Cookies:</h4>
                  <ul className="space-y-3 text-gray-300 text-lg">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-4 text-2xl">📋</span>
                      <div><strong>JotForm:</strong> Our booking form provider</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-4 text-2xl">📊</span>
                      <div><strong>Google Analytics:</strong> Website usage statistics</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-4 text-2xl">💳</span>
                      <div><strong>Payment Processors:</strong> Secure payment handling</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-4 text-2xl">📧</span>
                      <div><strong>Email Services:</strong> Booking confirmations and updates</div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-black text-orange-400 mb-4 uppercase">What This Means:</h4>
                  <ul className="space-y-3 text-gray-300 text-lg">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-4 text-2xl">✓</span>
                      <div><strong>Better Service:</strong> These tools help us serve you better</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-4 text-2xl">✓</span>
                      <div><strong>Secure Processing:</strong> Safe handling of your information</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-4 text-2xl">ℹ️</span>
                      <div><strong>Their Policies:</strong> Each service has its own privacy policy</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-4 text-2xl">ℹ️</span>
                      <div><strong>Your Control:</strong> You can manage these in your browser</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Managing Cookies - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <Settings size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">Managing Your Cookies</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 border-4 border-blue-500 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-blue-400 mb-6 uppercase">Browser Controls</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">🔧</span>
                    <div>
                      <strong className="text-white">Settings Menu:</strong> Access cookie controls in your browser settings
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">🚫</span>
                    <div>
                      <strong className="text-white">Block Cookies:</strong> Prevent all or specific types of cookies
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">🗑️</span>
                    <div>
                      <strong className="text-white">Delete Cookies:</strong> Remove existing cookies from your device
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">🔔</span>
                    <div>
                      <strong className="text-white">Notifications:</strong> Get alerts when cookies are set
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-900 border-4 border-red-600 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-red-400 mb-6 uppercase">⚠️ Important Notes</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-4 text-2xl">❗</span>
                    <div>
                      <strong className="text-white">Booking Issues:</strong> Blocking cookies may prevent tour booking
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-4 text-2xl">❗</span>
                    <div>
                      <strong className="text-white">Lost Preferences:</strong> Settings may not be remembered
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-4 text-2xl">❗</span>
                    <div>
                      <strong className="text-white">Form Problems:</strong> Contact forms may not work properly
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-4 text-2xl">💡</span>
                    <div>
                      <strong className="text-white">Alternative:</strong> Contact us directly if you have issues
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Information - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="text-center">
              <div className="inline-block bg-orange-600 text-white px-6 py-3 border-4 border-yellow-400 shadow-xl transform -rotate-1">
                <h2 className="text-3xl font-black uppercase tracking-wide">Cookie Questions?</h2>
              </div>
              
              <div className="mt-8 bg-gray-900 border-4 border-gray-700 p-8 shadow-xl">
                <p className="text-gray-300 text-xl font-bold mb-6">
                  Contact our family business with any questions about cookies or privacy.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-center justify-center text-gray-300 text-lg font-bold">
                    <Cookie size={24} className="mr-4 text-orange-400" />
                    <span>3055092759</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-300 text-lg font-bold">
                    <Shield size={24} className="mr-4 text-orange-400" />
                    <span>1502 Airport Road, Urbana, IL 61802</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPageIndustrial;


import React from 'react';
import { Eye, Heart, Mail, MapPin, Users, Shield, Monitor, Phone } from 'lucide-react';

const AccessibilityPageIndustrial = () => {
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
              <Eye size={48} className="text-yellow-400 mr-4" />
              <h1 className="text-4xl font-black uppercase tracking-wider">Accessibility Statement</h1>
            </div>
          </div>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-bold uppercase tracking-wide">
            Container storage accessible to everyone
          </p>
          <div className="bg-yellow-500 text-black px-6 py-2 mt-4 inline-block border-4 border-black shadow-xl transform rotate-1">
            <p className="font-black uppercase">Last Updated: July 10, 2025</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          
          {/* Commitment Statement - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <Heart size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">Our Commitment</h2>
            </div>
            
            <div className="bg-green-900 border-4 border-green-600 p-8 shadow-xl">
              <h3 className="text-2xl font-black text-green-400 mb-6 uppercase text-center">♿ Accessible Container Storage for All</h3>
              <p className="text-gray-300 text-lg font-bold mb-6">
                RentYourOwnStorage is committed to ensuring digital accessibility for people with disabilities. 
                We are continually improving the user experience for everyone and applying the relevant 
                accessibility standards to ensure we provide equal access to all of our users.
              </p>
              <p className="text-gray-300 text-lg font-bold">
                As a local family business, we believe everyone deserves access to affordable, secure container storage, 
                regardless of their abilities or disabilities.
              </p>
            </div>
          </section>

          {/* Accessibility Features - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <Monitor size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">Website Accessibility Features</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 border-4 border-blue-500 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-blue-400 mb-6 uppercase">Current Features</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">⌨️</span>
                    <div>
                      <strong className="text-white">Keyboard Navigation:</strong> Full site navigation using keyboard only
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">🔍</span>
                    <div>
                      <strong className="text-white">Screen Reader Support:</strong> Compatible with JAWS, NVDA, and VoiceOver
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">🎨</span>
                    <div>
                      <strong className="text-white">High Contrast:</strong> Industrial design with strong color contrast
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">📱</span>
                    <div>
                      <strong className="text-white">Mobile Responsive:</strong> Works on all devices and screen sizes
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">🔤</span>
                    <div>
                      <strong className="text-white">Alt Text:</strong> Descriptive text for all images and icons
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-900 border-4 border-green-500 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-green-400 mb-6 uppercase">Text & Navigation</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">📏</span>
                    <div>
                      <strong className="text-white">Scalable Text:</strong> Text can be enlarged up to 200% without loss of functionality
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">🎯</span>
                    <div>
                      <strong className="text-white">Focus Indicators:</strong> Clear visual focus for keyboard navigation
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">📋</span>
                    <div>
                      <strong className="text-white">Form Labels:</strong> All form fields have descriptive labels
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">🔗</span>
                    <div>
                      <strong className="text-white">Descriptive Links:</strong> Link text clearly describes destination
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">⏱️</span>
                    <div>
                      <strong className="text-white">No Time Limits:</strong> No automatic timeouts on forms or content
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Physical Accessibility - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <Users size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">Physical Facility Accessibility</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 border-4 border-blue-500 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-blue-400 mb-6 uppercase">Container Access</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">🚗</span>
                    <div>
                      <strong className="text-white">Drive-Up Access:</strong> Load directly from your vehicle - no stairs or elevators
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">🛣️</span>
                    <div>
                      <strong className="text-white">Paved Surfaces:</strong> Smooth, level pathways to all containers
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">♿</span>
                    <div>
                      <strong className="text-white">Wide Aisles:</strong> Ample space for wheelchairs and mobility devices
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">💡</span>
                    <div>
                      <strong className="text-white">Well-Lit Facility:</strong> 24/7 lighting for safe navigation
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-900 border-4 border-yellow-500 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-yellow-400 mb-6 uppercase">Container Features</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-4 text-2xl">🚪</span>
                    <div>
                      <strong className="text-white">Ground Level:</strong> Container doors open at ground level - no steps
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-4 text-2xl">📏</span>
                    <div>
                      <strong className="text-white">Wide Openings:</strong> 8-foot wide door openings for easy access
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-4 text-2xl">🔧</span>
                    <div>
                      <strong className="text-white">Easy Operation:</strong> Standard container door handles - no special tools needed
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-4 text-2xl">📦</span>
                    <div>
                      <strong className="text-white">Spacious Interior:</strong> 320 sq ft with 8-foot ceiling height
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Standards Compliance - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <Shield size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">Standards & Compliance</h2>
            </div>
            
            <div className="bg-blue-900 border-4 border-blue-600 p-8 shadow-xl">
              <h3 className="text-2xl font-black text-blue-400 mb-6 uppercase text-center">🏛️ Accessibility Standards We Follow</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-600 border-4 border-blue-400 w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Shield size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-black text-blue-400 mb-3 uppercase">WCAG 2.1</h4>
                  <p className="text-gray-300 font-bold">Web Content Accessibility Guidelines Level AA compliance</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-600 border-4 border-green-400 w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Users size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-black text-green-400 mb-3 uppercase">ADA</h4>
                  <p className="text-gray-300 font-bold">Americans with Disabilities Act compliance for physical facility</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-yellow-600 border-4 border-yellow-400 w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Monitor size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-black text-yellow-400 mb-3 uppercase">Section 508</h4>
                  <p className="text-gray-300 font-bold">Federal accessibility standards for digital content</p>
                </div>
              </div>
            </div>
          </section>

          {/* Feedback & Support - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <Phone size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">Accessibility Support</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 border-4 border-green-500 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-green-400 mb-6 uppercase">Need Help?</h3>
                <p className="text-gray-300 text-lg font-bold mb-6">
                  If you encounter any accessibility barriers on our website or at our facility, 
                  please contact us immediately. We are committed to resolving any issues quickly.
                </p>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">📧</span>
                    <div>
                      <strong className="text-white">Text or Call:</strong> 3055092759
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">📍</span>
                    <div>
                      <strong className="text-white">Visit:</strong> 1502 Airport Road, Urbana, IL 61802
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">⏰</span>
                    <div>
                      <strong className="text-white">Response Time:</strong> We will respond within 24 hours
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-900 border-4 border-yellow-500 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-yellow-400 mb-6 uppercase">Ongoing Improvements</h3>
                <p className="text-gray-300 text-lg font-bold mb-6">
                  We are continuously working to improve accessibility across our website and facility.
                </p>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-4 text-2xl">🔄</span>
                    <div>
                      <strong className="text-white">Regular Audits:</strong> Monthly accessibility testing and improvements
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-4 text-2xl">👥</span>
                    <div>
                      <strong className="text-white">User Feedback:</strong> We actively seek input from users with disabilities
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-4 text-2xl">📚</span>
                    <div>
                      <strong className="text-white">Staff Training:</strong> Ongoing accessibility awareness training
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
                <h2 className="text-3xl font-black uppercase tracking-wide">Accessibility Questions?</h2>
              </div>
              
              <div className="mt-8 bg-gray-900 border-4 border-gray-700 p-8 shadow-xl">
                <p className="text-gray-300 text-xl font-bold mb-6">
                  Contact our family business about accessibility features or to request accommodations.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-center justify-center text-gray-300 text-lg font-bold">
                    <Phone size={24} className="mr-4 text-orange-400" />
                    <span>Text or Call: 3055092759</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-300 text-lg font-bold">
                    <MapPin size={24} className="mr-4 text-orange-400" />
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

export default AccessibilityPageIndustrial;


import React from 'react';
import { Shield, Mail, MapPin, Lock, Eye, FileText, AlertTriangle } from 'lucide-react';

const PrivacyPolicyPageIndustrial = () => {
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
              <Shield size={48} className="text-yellow-400 mr-4" />
              <h1 className="text-4xl font-black uppercase tracking-wider">Privacy Policy</h1>
            </div>
          </div>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-bold uppercase tracking-wide">
            Your privacy is protected with industrial-strength security
          </p>
          <div className="bg-yellow-500 text-black px-6 py-2 mt-4 inline-block border-4 border-black shadow-xl transform rotate-1">
            <p className="font-black uppercase">Last Updated: July 14, 2025</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          
          {/* Company Information - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <FileText size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">1. Company Information</h2>
            </div>
            
            <div className="bg-gray-900 border-4 border-gray-700 p-8 shadow-xl">
              <p className="text-2xl font-black text-orange-400 mb-6 uppercase">RentYourOwnStorage - Container Storage Facility</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center text-gray-300 text-lg font-bold">
                  <MapPin size={24} className="mr-4 text-orange-400" />
                  <span>1502 Airport Road, Urbana, IL 61802</span>
                </div>
                <div className="flex items-center text-gray-300 text-lg font-bold">
                  <Mail size={24} className="mr-4 text-orange-400" />
                  <span>3055092759</span>
                </div>
              </div>
            </div>
          </section>

          {/* Information We Collect - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <Eye size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">2. Information We Collect</h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-900 border-4 border-blue-500 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-blue-400 mb-6 uppercase">Personal Information You Provide</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">📝</span>
                    <div>
                      <strong className="text-white">Contact Information:</strong> Name, email address, phone number
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">📅</span>
                    <div>
                      <strong className="text-white">Booking Information:</strong> Preferred tour dates and times
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">📋</span>
                    <div>
                      <strong className="text-white">Rental Information:</strong> Lease agreements, payment information, emergency contacts
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">💬</span>
                    <div>
                      <strong className="text-white">Communication Records:</strong> Text messages, emails, and phone call records
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 border-4 border-green-500 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-green-400 mb-6 uppercase">Automatically Collected Information</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">🌐</span>
                    <div>
                      <strong className="text-white">Website Usage:</strong> Pages visited, time spent, browser type
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">📱</span>
                    <div>
                      <strong className="text-white">Device Information:</strong> IP address, device type, operating system
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">🍪</span>
                    <div>
                      <strong className="text-white">Cookies:</strong> Website preferences and session information
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <Lock size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">3. How We Use Your Information</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 border-4 border-gray-700 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-orange-400 mb-6 uppercase">Container Services</h3>
                <ul className="space-y-3 text-gray-300 text-lg">
                  <li className="flex items-center"><span className="text-green-400 mr-4 text-2xl">✓</span><strong>Process container bookings and tours</strong></li>
                  <li className="flex items-center"><span className="text-green-400 mr-4 text-2xl">✓</span><strong>Send access codes and location details</strong></li>
                  <li className="flex items-center"><span className="text-green-400 mr-4 text-2xl">✓</span><strong>Manage rental agreements</strong></li>
                  <li className="flex items-center"><span className="text-green-400 mr-4 text-2xl">✓</span><strong>Process payments and billing</strong></li>
                </ul>
              </div>
              
              <div className="bg-gray-900 border-4 border-gray-700 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-orange-400 mb-6 uppercase">Communication</h3>
                <ul className="space-y-3 text-gray-300 text-lg">
                  <li className="flex items-center"><span className="text-blue-400 mr-4 text-2xl">✓</span><strong>Send booking confirmations</strong></li>
                  <li className="flex items-center"><span className="text-blue-400 mr-4 text-2xl">✓</span><strong>Provide customer support</strong></li>
                  <li className="flex items-center"><span className="text-blue-400 mr-4 text-2xl">✓</span><strong>Send important updates</strong></li>
                  <li className="flex items-center"><span className="text-blue-400 mr-4 text-2xl">✓</span><strong>Respond to inquiries</strong></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Information Sharing - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <AlertTriangle size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">4. Information Sharing</h2>
            </div>
            
            <div className="bg-red-900 border-4 border-red-600 p-8 shadow-xl">
              <h3 className="text-2xl font-black text-red-400 mb-6 uppercase text-center">⚠️ We Do NOT Sell Your Information ⚠️</h3>
              <p className="text-gray-300 text-lg font-bold text-center mb-6">
                As a local family business, we respect your privacy and never sell, rent, or trade your personal information.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-black text-yellow-400 mb-4 uppercase">We May Share Information With:</h4>
                  <ul className="space-y-3 text-gray-300 text-lg">
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-4 text-2xl">🏦</span>
                      <div><strong>Payment Processors:</strong> To process rental payments securely</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-4 text-2xl">⚖️</span>
                      <div><strong>Legal Requirements:</strong> When required by law or court order</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-4 text-2xl">🛡️</span>
                      <div><strong>Safety Purposes:</strong> To protect our facility and customers</div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-black text-yellow-400 mb-4 uppercase">We NEVER Share With:</h4>
                  <ul className="space-y-3 text-gray-300 text-lg">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 text-2xl">❌</span>
                      <div><strong>Marketing Companies</strong></div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 text-2xl">❌</span>
                      <div><strong>Data Brokers</strong></div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 text-2xl">❌</span>
                      <div><strong>Third-Party Advertisers</strong></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Data Security - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <Shield size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">5. Data Security</h2>
            </div>
            
            <div className="bg-green-900 border-4 border-green-600 p-8 shadow-xl">
              <h3 className="text-2xl font-black text-green-400 mb-6 uppercase text-center">🔒 Industrial-Strength Security Measures</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-green-600 border-4 border-green-400 w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Lock size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-black text-green-400 mb-3 uppercase">Encryption</h4>
                  <p className="text-gray-300 font-bold">All data transmitted using SSL encryption</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 border-4 border-blue-400 w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Shield size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-black text-blue-400 mb-3 uppercase">Secure Storage</h4>
                  <p className="text-gray-300 font-bold">Protected servers with access controls</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-yellow-600 border-4 border-yellow-400 w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Eye size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-black text-yellow-400 mb-3 uppercase">Monitoring</h4>
                  <p className="text-gray-300 font-bold">Regular security audits and monitoring</p>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <FileText size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">6. Your Rights</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 border-4 border-gray-700 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-orange-400 mb-6 uppercase">You Have the Right To:</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">👁️</span>
                    <div><strong>Access:</strong> Request copies of your personal information</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">✏️</span>
                    <div><strong>Correct:</strong> Update or correct inaccurate information</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-4 text-2xl">🗑️</span>
                    <div><strong>Delete:</strong> Request deletion of your information</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-4 text-2xl">📤</span>
                    <div><strong>Portability:</strong> Receive your data in a portable format</div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-900 border-4 border-gray-700 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-orange-400 mb-6 uppercase">Contact Us About Your Rights</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300 text-lg font-bold">
                    <Mail size={24} className="mr-4 text-orange-400" />
                    <span>3055092759</span>
                  </div>
                  <p className="text-gray-300 text-lg font-bold">
                    We will respond to your request within 30 days.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="text-center">
              <div className="inline-block bg-orange-600 text-white px-6 py-3 border-4 border-yellow-400 shadow-xl transform -rotate-1">
                <h2 className="text-3xl font-black uppercase tracking-wide">Questions About This Policy?</h2>
              </div>
              
              <div className="mt-8 bg-gray-900 border-4 border-gray-700 p-8 shadow-xl">
                <p className="text-gray-300 text-xl font-bold mb-6">
                  Contact our family business directly with any privacy questions or concerns.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-center justify-center text-gray-300 text-lg font-bold">
                    <Mail size={24} className="mr-4 text-orange-400" />
                    <span>3055092759</span>
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

export default PrivacyPolicyPageIndustrial;


import React from 'react';
import { FileText, AlertTriangle, Shield, DollarSign, Lock, Truck, Clock, Users } from 'lucide-react';

const TermsOfServicePageIndustrial = () => {
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
              <FileText size={48} className="text-yellow-400 mr-4" />
              <h1 className="text-4xl font-black uppercase tracking-wider">Terms of Service</h1>
            </div>
          </div>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-bold uppercase tracking-wide">
            Container storage rental terms and conditions
          </p>
          <div className="bg-yellow-500 text-black px-6 py-2 mt-4 inline-block border-4 border-black shadow-xl transform rotate-1">
            <p className="font-black uppercase">Last Updated: July 14, 2025</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          
          {/* Acceptance of Terms - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <Shield size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">1. Acceptance of Terms</h2>
            </div>
            
            <div className="bg-red-900 border-4 border-red-600 p-8 shadow-xl">
              <h3 className="text-2xl font-black text-red-400 mb-6 uppercase text-center">⚠️ Legal Agreement ⚠️</h3>
              <p className="text-gray-300 text-lg font-bold mb-6">
                By accessing our website, booking a container tour, or renting a storage container from RentYourOwnStorage, 
                you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree 
                to these terms, please do not use our services.
              </p>
              <p className="text-gray-300 text-lg font-bold">
                These terms constitute a legally binding agreement between you and RentYourOwnStorage, 
                a family business located at 1502 Airport Road, Urbana, IL 61802.
              </p>
            </div>
          </section>

          {/* Services Description - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <Truck size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">2. Container Storage Services</h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-900 border-4 border-blue-500 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-blue-400 mb-6 uppercase">What We Provide</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">📦</span>
                    <div>
                      <strong className="text-white">Shipping Containers:</strong> 40ft x 8ft x 10ft (320 sq ft) authentic steel containers
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">🕐</span>
                    <div>
                      <strong className="text-white">24/7 Access:</strong> Your container, your schedule - access anytime
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">🚗</span>
                    <div>
                      <strong className="text-white">Drive-Up Access:</strong> Load directly from your vehicle
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">📱</span>
                    <div>
                      <strong className="text-white">Self-Service:</strong> Online booking, tours, and rental process
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-4 text-2xl">🔒</span>
                    <div>
                      <strong className="text-white">Security:</strong> 24/7 monitoring, lighting, and secure facility
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Rental Terms - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <DollarSign size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">3. Rental Terms & Pricing</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 border-4 border-green-500 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-green-400 mb-6 uppercase">Pricing Plans</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">💳</span>
                    <div>
                      <strong className="text-white">6-Month Standard:</strong> $95/month with credit check
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">💰</span>
                    <div>
                      <strong className="text-white">6-Month Saver:</strong> $75/month prepaid, no credit check
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">🛡️</span>
                    <div>
                      <strong className="text-white">Security Deposit:</strong> $95 fully refundable
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">📋</span>
                    <div>
                      <strong className="text-white">Minimum Term:</strong> 6-month initial lease
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-900 border-4 border-yellow-500 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-yellow-400 mb-6 uppercase">Payment Terms</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-4 text-2xl">📅</span>
                    <div>
                      <strong className="text-white">Due Date:</strong> Rent due on the same date each month
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-4 text-2xl">⏰</span>
                    <div>
                      <strong className="text-white">Late Fees:</strong> $25 after 5-day grace period
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-4 text-2xl">🔒</span>
                    <div>
                      <strong className="text-white">Non-Payment:</strong> Access suspended after 15 days
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-4 text-2xl">💳</span>
                    <div>
                      <strong className="text-white">Methods:</strong> Credit card, debit card, or bank transfer
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Responsibilities - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <Users size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">4. Your Responsibilities</h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-900 border-4 border-blue-500 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-blue-400 mb-6 uppercase">What You Must Do</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">✓</span>
                    <div><strong>Provide accurate information</strong> during booking and rental process</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">✓</span>
                    <div><strong>Pay rent and fees</strong> on time according to your lease agreement</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">✓</span>
                    <div><strong>Keep your container secure</strong> and lock it when not in use</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">✓</span>
                    <div><strong>Notify us immediately</strong> of any damage or security issues</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">✓</span>
                    <div><strong>Follow facility rules</strong> and respect other customers</div>
                  </li>
                </ul>
              </div>

              <div className="bg-red-900 border-4 border-red-600 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-red-400 mb-6 uppercase">⚠️ Prohibited Items ⚠️</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-gray-300 text-lg">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 text-2xl">❌</span>
                      <div><strong>Hazardous materials</strong> (chemicals, explosives, flammables)</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 text-2xl">❌</span>
                      <div><strong>Illegal items</strong> (drugs, stolen goods, weapons)</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 text-2xl">❌</span>
                      <div><strong>Perishable food</strong> or items that attract pests</div>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-gray-300 text-lg">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 text-2xl">❌</span>
                      <div><strong>Living animals</strong> or plants</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 text-2xl">❌</span>
                      <div><strong>Vehicles</strong> (cars, motorcycles, boats)</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 text-2xl">❌</span>
                      <div><strong>Items with strong odors</strong></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Liability and Insurance - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <Shield size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">5. Liability & Insurance</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 border-4 border-green-500 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-green-400 mb-6 uppercase">Our Coverage</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">🏢</span>
                    <div>
                      <strong className="text-white">Facility Insurance:</strong> We maintain comprehensive facility coverage
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">🔒</span>
                    <div>
                      <strong className="text-white">Security Measures:</strong> 24/7 monitoring and lighting
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">🛡️</span>
                    <div>
                      <strong className="text-white">Bonded Business:</strong> Fully licensed and bonded operation
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-yellow-900 border-4 border-yellow-600 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-yellow-400 mb-6 uppercase">Your Responsibility</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-4 text-2xl">📋</span>
                    <div>
                      <strong className="text-white">Personal Insurance:</strong> You are responsible for insuring your belongings
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-4 text-2xl">⚠️</span>
                    <div>
                      <strong className="text-white">Risk Assumption:</strong> Storage is at your own risk
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-4 text-2xl">💰</span>
                    <div>
                      <strong className="text-white">Damage Liability:</strong> You're liable for damage to the container
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Termination - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <AlertTriangle size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">6. Lease Termination</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 border-4 border-blue-500 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-blue-400 mb-6 uppercase">How to End Your Lease</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">📧</span>
                    <div>
                      <strong className="text-white">30-Day Notice:</strong> Email written notice to terminate
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">🧹</span>
                    <div>
                      <strong className="text-white">Clean Out:</strong> Remove all belongings by end date
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">🔑</span>
                    <div>
                      <strong className="text-white">Return Access:</strong> Provide final access for inspection
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">💰</span>
                    <div>
                      <strong className="text-white">Final Payment:</strong> Pay any outstanding balance
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-900 border-4 border-red-600 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-red-400 mb-6 uppercase">We May Terminate For:</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-4 text-2xl">💳</span>
                    <div>
                      <strong className="text-white">Non-Payment:</strong> Failure to pay rent or fees
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-4 text-2xl">⚖️</span>
                    <div>
                      <strong className="text-white">Lease Violation:</strong> Breaking terms of agreement
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-4 text-2xl">🚫</span>
                    <div>
                      <strong className="text-white">Prohibited Items:</strong> Storing forbidden materials
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-4 text-2xl">⚠️</span>
                    <div>
                      <strong className="text-white">Safety Issues:</strong> Creating hazards or disturbances
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
                <h2 className="text-3xl font-black uppercase tracking-wide">Questions About These Terms?</h2>
              </div>
              
              <div className="mt-8 bg-gray-900 border-4 border-gray-700 p-8 shadow-xl">
                <p className="text-gray-300 text-xl font-bold mb-6">
                  Contact our family business directly with any questions about these terms.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-center justify-center text-gray-300 text-lg font-bold">
                    <FileText size={24} className="mr-4 text-orange-400" />
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

export default TermsOfServicePageIndustrial;

